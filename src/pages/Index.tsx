"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useCursorGlow } from "@/hooks/useScrollReveal";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";

const Index = () => {
  const cursor = useCursorGlow();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-primary/30 selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Layered Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(255,122,24,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(255,122,24,0.05),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_100%_100%,rgba(255,122,24,0.05),transparent_40%)]" />
      </div>

      {/* Cursor glow — desktop only */}
      <motion.div
        className="fixed pointer-events-none z-[100] hidden lg:block"
        animate={{
          left: cursor.x - 150,
          top: cursor.y - 150,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
      >
        <div className="w-[300px] h-[300px] bg-primary/10 rounded-full blur-[80px]" />
      </motion.div>

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <TechStack />
        <Work />
        <Testimonials />
        <Pricing />
        <Contact />
      </div>
    </div>
  );
};

export default Index;