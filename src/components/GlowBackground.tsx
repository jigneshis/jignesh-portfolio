"use client";

import React from 'react';
import { motion } from 'framer-motion';

const GlowBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505] overflow-hidden">
      {/* Primary Warm Orange Glow */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-[#ff7a18]/5 blur-[120px]"
      />
      
      {/* Secondary Gold Tone Glow */}
      <motion.div
        animate={{
          x: [0, -100, 50, 0],
          y: [0, 50, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#ffd700]/3 blur-[100px]"
      />

      {/* Center Subtle Gradient */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0a0a0a]/50 to-[#050505]" />
    </div>
  );
};

export default GlowBackground;