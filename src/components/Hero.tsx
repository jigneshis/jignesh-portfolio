"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";
import LiquidEther from "./LiquidEther";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* Smooth Liquid Ether Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <LiquidEther 
          colors={["#5227FF", "#7B5CFF", "#B19EEF"]}
          mouseForce={15}
          cursorSize={90}
          isViscous={true}
          viscous={30}
          resolution={0.5}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2}
        />
        {/* Soft Blending Overlay - Lightened to allow colors to glow */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-[1]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative container-wide text-center z-10"
      >
        {/* Availability badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 border border-white/10 bg-white/[0.05] backdrop-blur-md rounded-full px-5 py-2 md:px-6 md:py-2.5 text-[11px] md:text-[13px] text-white/90 mb-8 md:mb-12 uppercase tracking-widest font-bold"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#7B5CFF] animate-ping opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7B5CFF]" />
          </span>
          Available for new projects
        </motion.div>

        {/* Headline */}
        <div className="space-y-0 md:space-y-2 mb-8 md:mb-12">
          <motion.h1
            variants={itemVariants}
            className="font-display fluid-h1 font-extrabold tracking-tighter text-foreground leading-[0.9]"
          >
            Your brand
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="font-display fluid-h1 font-extrabold tracking-tighter leading-[0.9]"
          >
            <span className="text-stroke">deserves</span>
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="font-display fluid-h1 font-extrabold tracking-tighter leading-[0.9]"
          >
            <span className="text-gradient-nebula drop-shadow-[0_0_40px_rgba(123,92,255,0.3)]">better.</span>
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-white/70 fluid-p max-w-2xl mx-auto mb-10 md:mb-14 px-4"
        >
          I craft fast, stunning websites for premium businesses that
          <span className="text-foreground font-semibold"> convert visitors into clients.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="w-full sm:w-auto btn-primary-glow group bg-primary text-primary-foreground font-bold px-8 py-4 md:px-12 md:py-6 rounded-full text-base md:text-lg flex items-center justify-center gap-3 shine-sweep"
          >
            See My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.98 }}
            href="#pricing"
            className="w-full sm:w-auto glass-card text-foreground font-bold px-8 py-4 md:px-12 md:py-6 rounded-full text-base md:text-lg flex items-center justify-center transition-all"
          >
            How I Work
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 md:gap-3"
      >
        <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] font-bold text-white/50">Scroll</span>
        <div className="w-[1px] h-8 md:h-12 bg-gradient-to-b from-[#7B5CFF] to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;