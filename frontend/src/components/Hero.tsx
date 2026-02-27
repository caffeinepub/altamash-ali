import { ArrowDown, Instagram, Youtube, TrendingUp, Users, Heart } from 'lucide-react';

export default function Hero() {
  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToOrder = () => {
    document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/assets/generated/hero-banner.dim_1200x400.png"
          alt="Hero Background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background" />
      </div>

      {/* Floating Stats */}
      <div className="absolute top-1/4 left-4 md:left-12 hidden md:flex flex-col gap-3 animate-float">
        <div className="bg-card/80 backdrop-blur-sm gold-border rounded-xl p-3 flex items-center gap-2 card-glow">
          <Instagram className="w-4 h-4 text-gold" />
          <div>
            <p className="text-xs text-muted-foreground">Followers</p>
            <p className="text-sm font-bold text-gold">+50K</p>
          </div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm gold-border rounded-xl p-3 flex items-center gap-2 card-glow" style={{ animationDelay: '1s' }}>
          <Heart className="w-4 h-4 text-gold" />
          <div>
            <p className="text-xs text-muted-foreground">Likes</p>
            <p className="text-sm font-bold text-gold">+100K</p>
          </div>
        </div>
      </div>

      <div className="absolute top-1/3 right-4 md:right-12 hidden md:flex flex-col gap-3" style={{ animationDelay: '0.5s' }}>
        <div className="bg-card/80 backdrop-blur-sm gold-border rounded-xl p-3 flex items-center gap-2 card-glow animate-float">
          <Youtube className="w-4 h-4 text-gold" />
          <div>
            <p className="text-xs text-muted-foreground">Views</p>
            <p className="text-sm font-bold text-gold">+1M</p>
          </div>
        </div>
        <div className="bg-card/80 backdrop-blur-sm gold-border rounded-xl p-3 flex items-center gap-2 card-glow animate-float" style={{ animationDelay: '1.5s' }}>
          <Users className="w-4 h-4 text-gold" />
          <div>
            <p className="text-xs text-muted-foreground">Subscribers</p>
            <p className="text-sm font-bold text-gold">+5K</p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-gold border-2 border-gold/30">
            <img
              src="/assets/generated/aa-logo.dim_200x200.png"
              alt="Altamash Ali Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
          <TrendingUp className="w-4 h-4 text-gold" />
          <span className="text-sm text-gold font-medium">India's Trusted SMM Service</span>
        </div>

        <h1 className="font-heading text-5xl md:text-7xl font-bold mb-4 leading-tight">
          <span className="text-foreground">Grow Your</span>
          <br />
          <span className="gold-text">Social Media</span>
          <br />
          <span className="text-foreground">Presence</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Get real Instagram Followers, Likes & YouTube Subscribers, Views, Likes at the best prices in India. Fast delivery, guaranteed results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToOrder}
            className="px-8 py-4 rounded-xl font-semibold text-background gold-gradient hover:opacity-90 transition-all shadow-gold text-lg"
          >
            Order Now 🚀
          </button>
          <button
            onClick={scrollToServices}
            className="px-8 py-4 rounded-xl font-semibold text-gold border border-gold/40 hover:bg-gold/10 transition-all text-lg"
          >
            View Pricing
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="text-gold">✓</span> Fast Delivery
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">✓</span> 100% Safe
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">✓</span> 24/7 Support
          </div>
          <div className="flex items-center gap-2">
            <span className="text-gold">✓</span> Best Prices
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold/60 hover:text-gold transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="w-6 h-6" />
      </button>
    </section>
  );
}
