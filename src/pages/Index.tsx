import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustedBy from "@/components/TrustedBy";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <TrustedBy />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
