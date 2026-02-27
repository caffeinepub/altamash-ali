import { MessageCircle, CreditCard, Heart } from 'lucide-react';

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname = typeof window !== 'undefined' ? window.location.hostname : 'crown-followers';
  const utmContent = encodeURIComponent(hostname);

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold gold-text mb-2">Crown Followers</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Your trusted Social Media Growth Partner. We provide real Instagram and YouTube growth services at the best prices in India.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/917668237595"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center border border-border hover:border-gold/40 hover:text-gold transition-colors text-muted-foreground"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="hover:text-gold transition-colors cursor-pointer" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>📸 Instagram Followers</li>
              <li className="hover:text-gold transition-colors cursor-pointer" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>❤️ Instagram Likes</li>
              <li className="hover:text-gold transition-colors cursor-pointer" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>▶️ YouTube Views</li>
              <li className="hover:text-gold transition-colors cursor-pointer" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>🔔 YouTube Subscribers</li>
              <li className="hover:text-gold transition-colors cursor-pointer" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>🎬 YouTube Shorts Views</li>
              <li className="hover:text-gold transition-colors cursor-pointer" onClick={() => document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' })}>👍 YouTube Likes</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/917668237595"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-gold transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">WhatsApp</p>
                  <p className="font-medium text-foreground">+91 7668237595</p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-lg bg-surface flex items-center justify-center">
                  <CreditCard className="w-4 h-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">UPI ID</p>
                  <p className="font-medium text-gold font-mono">7668237595@fam</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {year} Crown Followers. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-gold fill-gold mx-0.5" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${utmContent}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline ml-0.5"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
