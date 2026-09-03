'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface WordCyclerProps {
  words?: string[];
  intervalMs?: number;
  className?: string;
  containerClassName?: string;
}

export function WordCycler({
  words = ['build', 'create', 'ship'],
  intervalMs = 2500,
  className,
  containerClassName,
}: WordCyclerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % words.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [words.length, intervalMs, shouldReduceMotion]);

  if (shouldReduceMotion) {
    return <span className={className}>{words[0]}</span>;
  }

  // Use the longest word as a sizer so the grid area is sized perfectly without clipping
  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), '');

  return (
    <span
      className={`inline-grid [grid-template-areas:'stack'] justify-items-start text-left overflow-hidden align-baseline ${
        containerClassName || 'ml-1.5 sm:ml-2'
      }`}
    >
      {/* Invisible spacer taking full dimensions of the longest word */}
      <span
        aria-hidden="true"
        className={`[grid-area:stack] invisible pointer-events-none select-none tracking-tight text-left ${
          className || ''
        }`}
      >
        {longestWord}
      </span>

      {/* Animated active word in the exact same grid cell */}
      <AnimatePresence mode="wait">
        <motion.span
          key={words[currentIndex]}
          initial={{ y: 28, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -28, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
          className={`[grid-area:stack] inline-block tracking-tight text-left ${
            className || 'text-neutral-400 font-bold'
          }`}
        >
          {words[currentIndex]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
