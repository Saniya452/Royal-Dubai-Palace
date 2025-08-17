import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PropertyGrid } from "@/components/PropertyGrid";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PropertyGrid />
      <ServicesSection />
      <TestimonialsSection />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
