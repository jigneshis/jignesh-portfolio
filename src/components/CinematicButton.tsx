"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '../lib/utils';

interface CinematicButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: 'primary' | 'outline';
  children?: React.ReactNode;
}

const CinematicButton = ({ variant = 'primary', children, className, ...props }: CinematicButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative px-8 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group",
        variant === 'primary' 
          ? "bg-[#ff7a18] text-white shadow-[0_0_20px_rgba(255,122,24,0.3)] hover:shadow-[0_0_35px_rgba(255,122,24,0.5)]" 
          : "border border-white/20 text-white hover:bg-white/10",
        className
      )}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'primary' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-[#ff7a18] via-[#ffa360] to-[#ff7a18] bg-[length:200%_100%]"
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
        />
      )}
    </motion.button>
  );
};

export default CinematicButton;