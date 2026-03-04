import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OrderForm from "./components/OrderForm";
import PaymentSection from "./components/PaymentSection";
import ServicesSection from "./components/ServicesSection";
import WhatsAppButton from "./components/WhatsAppButton";

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
