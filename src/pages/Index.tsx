import { useScrollReveal, useCursorGlow } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Index = () => {
  const ref = useScrollReveal();
  const cursor = useCursorGlow();

  return (
    <div ref={ref} className="min-h-screen bg-background grain">
      {/* Cursor glow — desktop only */}
      <div
        className="cursor-glow hidden lg:block"
        style={{ left: cursor.x, top: cursor.y }}
      />

      <Navbar />
      <Hero />
      <div className="gradient-line" />
      <TechStack />
      <div className="gradient-line" />
      <Work />
      <div className="gradient-line" />
      <Testimonials />
      <div className="gradient-line" />
      <Pricing />
      <div className="gradient-line" />
      <Contact />
    </div>
  );
};

export default Index;
