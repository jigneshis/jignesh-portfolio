"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
    <section className="relative min-h-[100svh] flex items-center justify-center px-6 pt-20 pb-16">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl mx-auto text-center z-10"
      >
        {/* Availability badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-6 py-2.5 text-[13px] text-primary mb-12 uppercase tracking-widest font-bold"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-ping opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for new projects
        </motion.div>

        {/* Headline */}
        <div className="space-y-2 mb-12">
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-foreground leading-[0.9]"
          >
            Your brand
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9]"
          >
            <span className="text-stroke">deserves</span>
          </motion.h1>
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter leading-[0.9]"
          >
            <span className="text-gradient-orange drop-shadow-[0_0_30px_rgba(255,122,24,0.3)]">better.</span>
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          variants={itemVariants}
          className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-14"
        >
          I craft fast, stunning websites for premium businesses that
          <span className="text-foreground font-semibold"> convert visitors into clients.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="btn-primary-glow group bg-primary text-primary-foreground font-bold px-12 py-6 rounded-full text-lg flex items-center gap-3 shine-sweep"
          >
            See My Work
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.98 }}
            href="#pricing"
            className="glass-card text-foreground font-bold px-12 py-6 rounded-full text-lg transition-all"
          >
            How I Work
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;