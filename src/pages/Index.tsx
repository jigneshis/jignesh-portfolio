"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#050505] selection:bg-primary/30 selection:text-white cursor-none">
      <CustomCursor />
      <div className="grain-overlay" />
      <div className="vignette" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[60]"
        style={{ scaleX }}
      />

      {/* Dynamic Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Animated Light Source 1: Top Left Orange */}
        <motion.div
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-full h-full bg-[radial-gradient(circle,rgba(255,122,24,0.15)_0%,transparent_70%)]"
        />
        
        {/* Animated Light Source 2: Bottom Right Amber */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, -60, 0],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-[radial-gradient(circle,rgba(255,163,100,0.1)_0%,transparent_70%)]"
        />

        {/* Subtle Contrast Light: Deep Indigo */}
        <motion.div
          animate={{ opacity: [0.02, 0.04, 0.02] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle,rgba(99,102,241,0.05)_0%,transparent_60%)]"
        />
      </div>

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