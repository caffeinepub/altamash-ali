import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Order {
    id: bigint;
    service: string;
    package: string;
    customerWhatsApp?: string;
    timestamp: bigint;
    quantity: string;
    price: string;
    profileUrl: string;
}
export interface backendInterface {
    getOrder(orderId: bigint): Promise<Order>;
    listOrders(): Promise<Array<Order>>;
    placeOrder(service: string, package: string, quantity: string, profileUrl: string, price: string, customerWhatsApp: string | null): Promise<bigint>;
}
