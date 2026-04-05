"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Cinematic Background Light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] animate-pulse delay-700" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center z-10">
        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2.5 border border-white/10 bg-white/5 backdrop-blur-sm rounded-full px-6 py-2.5 text-sm text-primary mb-12"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-ping opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-medium tracking-wide">Available for new projects</span>
        </motion.div>

        {/* Headline */}
        <div className="space-y-4 mb-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter text-foreground"
          >
            Your brand
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter"
          >
            <span className="text-stroke">deserves</span>
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tighter"
          >
            <span className="text-gradient-orange drop-shadow-[0_0_30px_rgba(255,122,24,0.3)]">better.</span>
          </motion.h1>
        </div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto leading-relaxed mb-12"
        >
          I craft fast, stunning websites for premium businesses that
          <span className="text-foreground font-semibold"> convert visitors into clients.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#work"
            className="btn-primary-glow group bg-primary text-primary-foreground font-bold px-10 py-5 rounded-full text-base flex items-center gap-3"
          >
            See My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            href="#pricing"
            className="glass-card hover:bg-white/10 text-foreground font-bold px-10 py-5 rounded-full text-base transition-all"
          >
            How I Work
          </motion.a>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <div className="flex -space-x-4">
            {["RS", "PM", "AV", "SJ"].map((initials, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-xs font-bold text-muted-foreground border-2 border-[#050505]"
              >
                {initials}
              </div>
            ))}
          </div>
          <div className="text-sm text-muted-foreground tracking-wide uppercase font-medium">
            Trusted by <span className="text-primary">7+</span> global businesses
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground/30"
        >
          <div className="w-px h-16 bg-gradient-to-b from-primary/50 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;