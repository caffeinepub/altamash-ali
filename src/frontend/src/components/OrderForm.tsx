import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CheckCircle,
  ExternalLink,
  Loader2,
  RotateCcw,
  ShoppingCart,
} from "lucide-react";
import { useEffect } from "react";
import { pricingData } from "../data/pricingData";
import { useOrderForm } from "../hooks/useOrderForm";
import { usePlaceOrder } from "../hooks/useQueries";

export default function OrderForm() {
  const form = useOrderForm();
  const placeOrderMutation = usePlaceOrder();

  // Listen for service selection from pricing cards
  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      form.handleServiceChange(customEvent.detail);
    };
    window.addEventListener("selectService", handler);
    return () => window.removeEventListener("selectService", handler);
  }, [form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.isValid) return;

    const service = pricingData.find((s) => s.id === form.serviceId);
    const serviceName = service?.name ?? form.serviceId;

    try {
      const orderId = await placeOrderMutation.mutateAsync({
        service: serviceName,
        packageName: form.packageLabel,
        quantity: form.packageLabel,
        profileUrl: form.profileUrl,
        price: `₹${form.price}`,
        customerWhatsApp: form.customerWhatsApp || undefined,
      });

      form.markSubmitted(orderId);

      // Open WhatsApp
      window.open(form.getWhatsAppUrl(), "_blank");
    } catch (err) {
      console.error("Order placement failed:", err);
    }
  };

  if (form.isSubmitted) {
    return (
      <section id="order" className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-card gold-border rounded-2xl p-8 text-center card-glow">
            <div className="w-20 h-20 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-gold" />
            </div>
            <h2 className="font-heading text-3xl font-bold text-foreground mb-2">
              Order Placed! 🎉
            </h2>
            <p className="text-muted-foreground mb-2">
              Your order has been recorded successfully.
            </p>
            {form.orderId !== null && (
              <p className="text-sm text-gold mb-6">
                Order ID: #{form.orderId.toString()}
              </p>
            )}
            <div className="bg-surface rounded-xl p-4 mb-6 text-left space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Service:</span>
                <span className="text-foreground font-medium">
                  {pricingData.find((s) => s.id === form.serviceId)?.name}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Package:</span>
                <span className="text-foreground font-medium">
                  {form.packageLabel}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount:</span>
                <span className="text-gold font-bold">
                  ₹{form.price.toLocaleString("en-IN")}
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              WhatsApp has been opened with your order details. Please complete
              the payment and send the screenshot to confirm your order.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={form.getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-whatsapp hover:opacity-90 transition-opacity"
              >
                <ExternalLink className="w-4 h-4" />
                Open WhatsApp
              </a>
              <Button
                variant="outline"
                onClick={form.reset}
                className="flex-1 border-border hover:border-gold/40 hover:text-gold"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                New Order
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="order" className="py-20 bg-background">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
            <ShoppingCart className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium">
              Place Your Order
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Order <span className="gold-text">Your Package</span>
          </h2>
          <p className="text-muted-foreground">
            Fill in the details below and we'll process your order via WhatsApp.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card gold-border rounded-2xl p-6 md:p-8 card-glow space-y-6"
        >
          {/* Service Selection */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">
              Select Service *
            </Label>
            <Select
              value={form.serviceId}
              onValueChange={form.handleServiceChange}
            >
              <SelectTrigger className="bg-surface border-border text-foreground h-12">
                <SelectValue placeholder="Choose a service..." />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {pricingData.map((service) => (
                  <SelectItem
                    key={service.id}
                    value={service.id}
                    className="text-foreground hover:bg-accent"
                  >
                    {service.icon} {service.name}
                    {service.badge && (
                      <span className="ml-2 text-xs text-gold">
                        ({service.badge})
                      </span>
                    )}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Package Selection */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">
              Select Package *
            </Label>
            <Select
              value={form.packageLabel}
              onValueChange={form.handlePackageChange}
              disabled={!form.serviceId}
            >
              <SelectTrigger className="bg-surface border-border text-foreground h-12">
                <SelectValue
                  placeholder={
                    form.serviceId
                      ? "Choose a package..."
                      : "Select a service first"
                  }
                />
              </SelectTrigger>
              <SelectContent className="bg-card border-border">
                {form.availablePackages.map((pkg) => (
                  <SelectItem
                    key={pkg.label}
                    value={pkg.label}
                    className="text-foreground hover:bg-accent"
                  >
                    <span>{pkg.label}</span>
                    <span className="ml-2 text-gold font-bold">
                      ₹{pkg.price.toLocaleString("en-IN")}
                    </span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Profile/Video URL */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">
              Profile / Video URL *
            </Label>
            <Input
              type="url"
              placeholder="https://www.instagram.com/yourprofile or https://youtu.be/..."
              value={form.profileUrl}
              onChange={(e) => form.setProfileUrl(e.target.value)}
              className="bg-surface border-border text-foreground placeholder:text-muted-foreground h-12"
              required
            />
            <p className="text-xs text-muted-foreground">
              Paste your Instagram profile link or YouTube video/channel link
            </p>
          </div>

          {/* WhatsApp Number (optional) */}
          <div className="space-y-2">
            <Label className="text-foreground font-medium">
              Your WhatsApp Number (Optional)
            </Label>
            <Input
              type="tel"
              placeholder="+91 XXXXX XXXXX"
              value={form.customerWhatsApp}
              onChange={(e) => form.setCustomerWhatsApp(e.target.value)}
              className="bg-surface border-border text-foreground placeholder:text-muted-foreground h-12"
            />
          </div>

          {/* Price Display */}
          {form.price > 0 && (
            <div className="bg-gold/5 border border-gold/20 rounded-xl p-4 flex items-center justify-between">
              <span className="text-muted-foreground font-medium">
                Total Amount:
              </span>
              <span className="text-2xl font-bold text-gold">
                ₹{form.price.toLocaleString("en-IN")}
              </span>
            </div>
          )}

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={!form.isValid || placeOrderMutation.isPending}
            className="w-full h-14 text-base font-bold text-background gold-gradient hover:opacity-90 transition-opacity disabled:opacity-50 rounded-xl"
          >
            {placeOrderMutation.isPending ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Placing Order...
              </>
            ) : (
              <>
                <span className="mr-2">📱</span>
                Place Order via WhatsApp
              </>
            )}
          </Button>

          {placeOrderMutation.isError && (
            <p className="text-destructive text-sm text-center">
              Something went wrong. Please try again or contact us on WhatsApp.
            </p>
          )}

          <p className="text-xs text-muted-foreground text-center">
            After clicking, WhatsApp will open with your order details. Complete
            payment via UPI QR code and send the screenshot.
          </p>
        </form>
      </div>
    </section>
  );
}
