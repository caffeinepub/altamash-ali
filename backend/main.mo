import Nat "mo:core/Nat";
import Int "mo:core/Int";
import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Time "mo:core/Time";

actor {
  type Order = {
    id : Nat;
    service : Text;
    package : Text;
    quantity : Text;
    profileUrl : Text;
    price : Text;
    customerWhatsApp : ?Text;
    timestamp : Int;
  };

  let orders = Map.empty<Nat, Order>();
  var lastOrderId = 0;

  public shared ({ caller }) func placeOrder(service : Text, package : Text, quantity : Text, profileUrl : Text, price : Text, customerWhatsApp : ?Text) : async Nat {
    lastOrderId += 1;
    let orderId = lastOrderId;

    let order : Order = {
      id = orderId;
      service;
      package;
      quantity;
      profileUrl;
      price;
      customerWhatsApp;
      timestamp = Time.now();
    };

    orders.add(orderId, order);
    orderId;
  };

  public query ({ caller }) func getOrder(orderId : Nat) : async Order {
    switch (orders.get(orderId)) {
      case (null) { Runtime.trap("Order not found") };
      case (?order) { order };
    };
  };

  public query ({ caller }) func listOrders() : async [Order] {
    orders.values().toArray();
  };
};
