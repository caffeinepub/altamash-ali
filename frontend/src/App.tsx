import Header from './components/Header';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import OrderForm from './components/OrderForm';
import PaymentSection from './components/PaymentSection';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <ServicesSection />
        <OrderForm />
        <PaymentSection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
