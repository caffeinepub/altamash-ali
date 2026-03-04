import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge as BadgeIcon, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { type ServiceCategory, pricingData } from "../data/pricingData";

function scrollToOrder(serviceId?: string) {
  const el = document.querySelector("#order");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
    if (serviceId) {
      setTimeout(() => {
        const event = new CustomEvent("selectService", { detail: serviceId });
        window.dispatchEvent(event);
      }, 600);
    }
  }
}

function ServiceCard({ service }: { service: ServiceCategory }) {
  const isYT = service.platform === "youtube";

  if (service.tiers) {
    return (
      <div className="bg-card gold-border rounded-2xl overflow-hidden card-glow">
        <div className="p-5 border-b border-border">
          <div className="flex items-center gap-3 mb-2">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${isYT ? "bg-red-500/10" : "bg-pink-500/10"}`}
            >
              {isYT ? (
                <Youtube className="w-5 h-5 text-red-400" />
              ) : (
                <Instagram className="w-5 h-5 text-pink-400" />
              )}
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-foreground">
                {service.name}
              </h3>
              <p className="text-xs text-muted-foreground">
                {service.description}
              </p>
            </div>
          </div>
        </div>
        <div className="p-5">
          <Tabs defaultValue={service.tiers[0].name}>
            <TabsList className="w-full mb-4 bg-surface">
              {service.tiers.map((tier) => (
                <TabsTrigger
                  key={tier.name}
                  value={tier.name}
                  className="flex-1 text-xs data-[state=active]:bg-gold data-[state=active]:text-background"
                >
                  {tier.name}
                </TabsTrigger>
              ))}
            </TabsList>
            {service.tiers.map((tier) => (
              <TabsContent key={tier.name} value={tier.name}>
                <div className="space-y-2">
                  {tier.packages.map((pkg) => (
                    <div
                      key={pkg.quantity}
                      className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-accent/50 transition-colors group"
                    >
                      <span className="text-sm text-foreground">
                        {pkg.quantity}
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-bold text-gold">
                          ₹{pkg.price.toLocaleString("en-IN")}
                        </span>
                        <button
                          type="button"
                          onClick={() => scrollToOrder(service.id)}
                          className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/30 hover:bg-gold hover:text-background transition-all opacity-0 group-hover:opacity-100"
                        >
                          Order
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          <button
            type="button"
            onClick={() => scrollToOrder(service.id)}
            className="w-full mt-4 py-2.5 rounded-xl text-sm font-semibold text-background gold-gradient hover:opacity-90 transition-opacity"
          >
            Order Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card gold-border rounded-2xl overflow-hidden card-glow">
      <div className="p-5 border-b border-border">
        <div className="flex items-center gap-3 mb-2">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center ${isYT ? "bg-red-500/10" : "bg-pink-500/10"}`}
          >
            {isYT ? (
              <Youtube className="w-5 h-5 text-red-400" />
            ) : (
              <Instagram className="w-5 h-5 text-pink-400" />
            )}
          </div>
          <div>
            <h3 className="font-heading text-lg font-bold text-foreground">
              {service.name}
            </h3>
            <p className="text-xs text-muted-foreground">
              {service.description}
            </p>
          </div>
          {service.badge && (
            <Badge className="ml-auto text-xs bg-gold/10 text-gold border-gold/30 border">
              {service.badge}
            </Badge>
          )}
        </div>
      </div>
      <div className="p-5">
        <div className="space-y-2">
          {service.packages?.map((pkg) => (
            <div
              key={pkg.quantity}
              className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-accent/50 transition-colors group"
            >
              <div className="flex items-center gap-2">
                <span className="text-sm text-foreground">{pkg.quantity}</span>
                {pkg.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-full bg-gold/10 text-gold border border-gold/20">
                    {pkg.badge}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="font-bold text-gold">
                  ₹{pkg.price.toLocaleString("en-IN")}
                </span>
                <button
                  type="button"
                  onClick={() => scrollToOrder(service.id)}
                  className="text-xs px-3 py-1 rounded-full bg-gold/10 text-gold border border-gold/30 hover:bg-gold hover:text-background transition-all opacity-0 group-hover:opacity-100"
                >
                  Order
                </button>
              </div>
            </div>
          ))}
        </div>
        <button
          type="button"
          onClick={() => scrollToOrder(service.id)}
          className="w-full mt-4 py-2.5 rounded-xl text-sm font-semibold text-background gold-gradient hover:opacity-90 transition-opacity"
        >
          Order Now
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [filter, setFilter] = useState<"all" | "instagram" | "youtube">("all");

  const filtered = pricingData.filter((s) =>
    filter === "all" ? true : s.platform === filter,
  );

  return (
    <section id="services" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
            <BadgeIcon className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium">
              All Services & Pricing
            </span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Choose Your <span className="gold-text">Growth Package</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Affordable prices, fast delivery, and guaranteed results for
            Instagram and YouTube growth.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-10">
          {(["all", "instagram", "youtube"] as const).map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all capitalize ${
                filter === f
                  ? "gold-gradient text-background shadow-gold"
                  : "border border-border text-muted-foreground hover:text-gold hover:border-gold/40"
              }`}
            >
              {f === "all"
                ? "🌟 All"
                : f === "instagram"
                  ? "📸 Instagram"
                  : "▶️ YouTube"}
            </button>
          ))}
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filtered.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
