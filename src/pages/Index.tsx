"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import SmoothScroll from "@/components/SmoothScroll";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-[#050507] selection:bg-primary/30 selection:text-white">
      <SmoothScroll />
      <div className="vignette" />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] bg-primary origin-left z-[110]"
        style={{ scaleX }}
      />

      {/* Dynamic Cinematic Background */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Cool Purple Light Source */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            opacity: [0.08, 0.12, 0.08]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-1/4 -left-1/4 w-full h-full bg-[radial-gradient(circle,rgba(123,92,255,0.12)_0%,transparent_70%)]"
        />
        
        {/* Electric Blue Light Source */}
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            opacity: [0.06, 0.1, 0.06]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-1/4 -right-1/4 w-full h-full bg-[radial-gradient(circle,rgba(0,210,255,0.1)_0%,transparent_70%)]"
        />

        {/* Deep Dark Spot */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
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
