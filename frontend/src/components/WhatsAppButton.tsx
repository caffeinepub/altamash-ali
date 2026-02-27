import { MessageCircle } from 'lucide-react';

const WA_URL = 'https://wa.me/917668237595?text=Hi%20Altamash!%20I%20want%20to%20order%20a%20social%20media%20service';

export default function WhatsAppButton() {
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg hover:scale-105 transition-transform animate-pulse-gold"
      style={{ backgroundColor: '#25D366' }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 text-white" strokeWidth={2} />
      <span className="text-white text-sm font-semibold hidden sm:inline">Chat with us</span>
    </a>
  );
}
