import { Crown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Order", href: "#order" },
  { label: "Payment", href: "#payment" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg gold-gradient flex items-center justify-center shadow-gold">
            <Crown className="w-5 h-5 text-background" strokeWidth={2.5} />
          </div>
          <span className="font-heading text-xl font-bold gold-text tracking-wide">
            Crown Followers
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-gold transition-colors rounded-md hover:bg-accent"
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/917668237595?text=Hi%20Crown%20Followers!%20I%20want%20to%20order%20a%20social%20media%20service"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold text-background gold-gradient hover:opacity-90 transition-opacity"
          >
            WhatsApp Us
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-card border-b border-border px-4 pb-4">
          <nav className="flex flex-col gap-1 pt-2">
            {navLinks.map((link) => (
              <button
                type="button"
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-gold transition-colors rounded-md hover:bg-accent"
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/917668237595?text=Hi%20Crown%20Followers!%20I%20want%20to%20order%20a%20social%20media%20service"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold text-background gold-gradient text-center"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
