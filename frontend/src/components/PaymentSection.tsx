import { useState } from 'react';
import { Copy, CheckCheck, CreditCard, MessageCircle, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const UPI_ID = '7668237595@fam';

const steps = [
  { icon: '📱', title: 'Open UPI App', desc: 'Open any UPI app like PhonePe, GPay, Paytm, or your bank app' },
  { icon: '📷', title: 'Scan QR Code', desc: 'Scan the QR code shown below, or manually enter the UPI ID' },
  { icon: '💰', title: 'Enter Amount', desc: 'Enter the exact amount as shown in your order' },
  { icon: '📸', title: 'Send Screenshot', desc: 'After payment, send the screenshot on WhatsApp to confirm your order' },
];

export default function PaymentSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      const el = document.createElement('textarea');
      el.value = UPI_ID;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <section id="payment" className="py-20 section-bg">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 mb-4">
            <CreditCard className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold font-medium">Payment Details</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            Pay via <span className="gold-text">UPI</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Scan the QR code or use the UPI ID to make payment. After payment, send the screenshot on WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* QR Code Card */}
          <div className="bg-card gold-border rounded-2xl p-6 card-glow flex flex-col items-center">
            <h3 className="font-heading text-xl font-bold text-foreground mb-6">Scan & Pay</h3>

            {/* QR Code */}
            <div className="bg-white rounded-2xl p-4 mb-6 shadow-gold">
              <img
                src="/assets/generated/upi-qr.dim_400x400.png"
                alt="UPI QR Code - Altamash Ali"
                className="w-56 h-56 object-contain"
              />
            </div>

            {/* Account Info */}
            <div className="w-full bg-surface rounded-xl p-4 mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">Account Holder</span>
              </div>
              <p className="font-semibold text-foreground">Altamash (FamX - RuPay)</p>
            </div>

            {/* UPI ID with Copy */}
            <div className="w-full bg-surface rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground uppercase tracking-wide">UPI ID</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <code className="text-gold font-mono font-bold text-sm flex-1 break-all">{UPI_ID}</code>
                <Button
                  onClick={handleCopy}
                  size="sm"
                  variant="outline"
                  className={`shrink-0 border-gold/30 transition-all ${copied ? 'text-green-400 border-green-400/30' : 'text-gold hover:bg-gold/10'}`}
                >
                  {copied ? (
                    <><CheckCheck className="w-4 h-4 mr-1" /> Copied!</>
                  ) : (
                    <><Copy className="w-4 h-4 mr-1" /> Copy</>
                  )}
                </Button>
              </div>
            </div>

            {/* WhatsApp after payment */}
            <a
              href="https://wa.me/917668237595?text=Hi%20Altamash!%20I%20have%20made%20the%20payment.%20Please%20find%20the%20screenshot%20attached."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-4 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-white bg-whatsapp hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-5 h-5" />
              Send Payment Screenshot
            </a>
          </div>

          {/* Steps */}
          <div className="flex flex-col justify-center">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">How to Pay</h3>
            <div className="space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-4 bg-card gold-border rounded-xl p-4 card-glow">
                  <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center shrink-0 text-xl">
                    {step.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-gold">Step {i + 1}</span>
                    </div>
                    <h4 className="font-semibold text-foreground text-sm">{step.title}</h4>
                    <p className="text-xs text-muted-foreground mt-0.5">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Accepted Apps */}
            <div className="mt-6 bg-card gold-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-3">
                <Smartphone className="w-4 h-4 text-gold" />
                <span className="text-sm font-medium text-foreground">Accepted UPI Apps</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['PhonePe', 'Google Pay', 'Paytm', 'BHIM', 'Amazon Pay', 'Any Bank App'].map(app => (
                  <span key={app} className="text-xs px-3 py-1 rounded-full bg-surface border border-border text-muted-foreground">
                    {app}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
