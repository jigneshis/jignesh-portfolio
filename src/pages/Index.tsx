import { useScrollReveal } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Index = () => {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TechStack />
      <Work />
      <Testimonials />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Index;
