export interface PricingPackage {
  quantity: string;
  price: number;
  badge?: string;
}

export interface ServiceTier {
  name: string;
  packages: PricingPackage[];
}

export interface ServiceCategory {
  id: string;
  name: string;
  icon: string;
  platform: "instagram" | "youtube";
  description: string;
  badge?: string;
  tiers?: ServiceTier[];
  packages?: PricingPackage[];
}

export const pricingData: ServiceCategory[] = [
  {
    id: "instagram-views",
    name: "Instagram Views",
    icon: "🎥",
    platform: "instagram",
    description: "Boost your Instagram video & reel views instantly",
    tiers: [
      {
        name: "Standard",
        packages: [
          { quantity: "500 Views", price: 5 },
          { quantity: "10,00,000 Views", price: 517 },
          { quantity: "20,00,000 Views", price: 741 },
        ],
      },
      {
        name: "Basic",
        packages: [
          { quantity: "1,000 Views", price: 5 },
          { quantity: "5,000 Views", price: 15 },
          { quantity: "10,000 Views", price: 29 },
          { quantity: "50,000 Views", price: 90 },
          { quantity: "1,00,000 Views", price: 149 },
          { quantity: "2,00,000 Views", price: 240 },
        ],
      },
      {
        name: "Premium",
        packages: [
          { quantity: "1,000 Views", price: 9 },
          { quantity: "5,000 Views", price: 31 },
          { quantity: "10,000 Views", price: 45 },
          { quantity: "50,000 Views", price: 200 },
          { quantity: "1,00,000 Views", price: 380 },
          { quantity: "2,00,000 Views", price: 700 },
          { quantity: "5,00,000 Views", price: 700 },
          { quantity: "10,00,000 Views", price: 1282 },
          { quantity: "20,00,000 Views", price: 1900 },
        ],
      },
    ],
  },
  {
    id: "instagram-followers",
    name: "Instagram Followers",
    icon: "📸",
    platform: "instagram",
    description: "Grow your Instagram following with real-looking profiles",
    tiers: [
      {
        name: "Basic",
        packages: [
          { quantity: "100 Followers Basic Quality Lifetime", price: 25 },
          { quantity: "500 Followers Basic Quality Lifetime", price: 100 },
          { quantity: "1,000 Followers Basic Quality Lifetime", price: 210 },
          { quantity: "5,000 Followers Basic Quality Lifetime", price: 700 },
          { quantity: "10,000 Followers Basic Quality Lifetime", price: 1310 },
          { quantity: "50,000 Followers Basic Quality Lifetime", price: 6010 },
          {
            quantity: "1,00,000 Followers Basic Quality Lifetime",
            price: 11300,
          },
          {
            quantity: "2,00,000 Followers Basic Quality Lifetime",
            price: 22000,
          },
          {
            quantity: "5,00,000 Followers Basic Quality Lifetime",
            price: 43000,
          },
        ],
      },
      {
        name: "Standard",
        packages: [
          { quantity: "100 Followers Standard Quality", price: 30 },
          { quantity: "500 Followers Standard Quality", price: 125 },
          { quantity: "1,000 Followers Standard Quality", price: 200 },
          { quantity: "5,000 Followers Standard Quality", price: 800 },
          { quantity: "10,000 Followers Standard Quality", price: 1450 },
          { quantity: "50,000 Followers Standard Quality", price: 6999 },
          { quantity: "1,00,000 Followers Standard Quality", price: 13000 },
          { quantity: "2,00,000 Followers Standard Quality", price: 25000 },
        ],
      },
      {
        name: "Premium",
        packages: [
          { quantity: "100 Followers VIP Quality Lifetime", price: 40 },
          { quantity: "500 Followers VIP Quality Lifetime", price: 145 },
          { quantity: "1,000 Followers VIP Quality Lifetime", price: 250 },
          { quantity: "5,000 Followers VIP Quality Lifetime", price: 1000 },
          { quantity: "10,000 Followers VIP Quality Lifetime", price: 2000 },
          { quantity: "50,000 Followers VIP Quality Lifetime", price: 9000 },
          { quantity: "1,00,000 Followers VIP Quality Lifetime", price: 16200 },
          { quantity: "2,00,000 Followers VIP Quality Lifetime", price: 30640 },
          { quantity: "5,00,000 Followers VIP Quality Lifetime", price: 59000 },
          {
            quantity: "10,00,000 Followers VIP Quality Lifetime",
            price: 89000,
          },
        ],
      },
    ],
  },
  {
    id: "instagram-likes",
    name: "Instagram Likes",
    icon: "❤️",
    platform: "instagram",
    description: "Increase likes on your Instagram posts instantly",
    packages: [
      { quantity: "100 Likes", price: 10 },
      { quantity: "500 Likes", price: 30 },
      { quantity: "1,000 Likes", price: 80 },
      { quantity: "5,000 Likes", price: 291 },
      { quantity: "10,000 Likes", price: 50 },
      { quantity: "50,000 Likes", price: 1300 },
      { quantity: "1,00,000 Likes", price: 2400 },
      { quantity: "2,00,000 Likes", price: 4600 },
      { quantity: "5,00,000 Likes", price: 8800 },
    ],
  },
  {
    id: "youtube-subscribers",
    name: "YouTube Subscribers",
    icon: "🔔",
    platform: "youtube",
    description: "Get real YouTube subscribers that stay forever",
    badge: "Lifetime Non-Drop",
    packages: [
      { quantity: "100 Subscribers", price: 300, badge: "Lifetime Non-Drop" },
      { quantity: "500 Subscribers", price: 1350, badge: "Lifetime Non-Drop" },
      {
        quantity: "1,000 Subscribers",
        price: 2700,
        badge: "Lifetime Non-Drop",
      },
      {
        quantity: "5,000 Subscribers",
        price: 12000,
        badge: "Lifetime Non-Drop",
      },
    ],
  },
  {
    id: "youtube-shorts-views",
    name: "YouTube Shorts Views",
    icon: "🎬",
    platform: "youtube",
    description: "Boost your YouTube Shorts with guaranteed views",
    badge: "Lifetime Non-Drop",
    packages: [
      { quantity: "100 Views", price: 29, badge: "Lifetime Non-Drop" },
      { quantity: "500 Views", price: 109, badge: "Lifetime Non-Drop" },
      { quantity: "1,000 Views", price: 210, badge: "Lifetime Non-Drop" },
    ],
  },
  {
    id: "youtube-likes",
    name: "YouTube Likes",
    icon: "👍",
    platform: "youtube",
    description: "Increase likes on your YouTube videos permanently",
    badge: "Lifetime",
    packages: [
      { quantity: "100 Likes", price: 15, badge: "Lifetime" },
      { quantity: "500 Likes", price: 60, badge: "Lifetime" },
      { quantity: "1,000 Likes", price: 90, badge: "Lifetime" },
      { quantity: "5,000 Likes", price: 320, badge: "Lifetime" },
      { quantity: "10,000 Likes", price: 570, badge: "Lifetime" },
      { quantity: "50,000 Likes", price: 3001, badge: "Lifetime" },
      { quantity: "1,00,000 Likes", price: 5000, badge: "Lifetime" },
    ],
  },
];

export function getServiceById(id: string): ServiceCategory | undefined {
  return pricingData.find((s) => s.id === id);
}

export function getAllPackagesForService(
  serviceId: string,
): { label: string; price: number; tier?: string }[] {
  const service = getServiceById(serviceId);
  if (!service) return [];

  if (service.tiers) {
    return service.tiers.flatMap((tier) =>
      tier.packages.map((pkg) => ({
        label: `${tier.name} - ${pkg.quantity}`,
        price: pkg.price,
        tier: tier.name,
      })),
    );
  }

  if (service.packages) {
    return service.packages.map((pkg) => ({
      label: pkg.quantity,
      price: pkg.price,
    }));
  }

  return [];
}
