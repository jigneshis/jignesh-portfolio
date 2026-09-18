'use client';

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export function NotFoundGraphic() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse position values for 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [14, -14]), {
    stiffness: 180,
    damping: 24,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 16]), {
    stiffness: 180,
    damping: 24,
  });
  const scale = useSpring(1, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseEnter = () => {
    scale.set(1.03);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    scale.set(1);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-8 sm:py-12 flex items-center justify-center perspective-[1000px] select-none"
    >
      {/* Background subtle radial glow */}
      <div className="absolute inset-0 -z-10 flex items-center justify-center pointer-events-none">
        <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 blur-3xl transition-opacity duration-700" />
      </div>

      <motion.div
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d',
        }}
        className="relative cursor-grab active:cursor-grabbing"
      >
        {/* SVG Graphic with tactile dual-tone numbers & hard offset shadows */}
        <svg
          viewBox="0 0 520 280"
          className="w-full max-w-[340px] xs:max-w-[400px] sm:max-w-[480px] lg:max-w-[520px] h-auto drop-shadow-2xl"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Split Duo-Tone Gradients for each digit */}
            <linearGradient id="digitSplitLight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#4de0b2" />
              <stop offset="50%" stopColor="#2db58a" />
              <stop offset="100%" stopColor="#2db58a" />
            </linearGradient>

            <linearGradient id="digitSplitDark" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="50%" stopColor="#34d399" />
              <stop offset="50%" stopColor="#059669" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>

            {/* Filter for crisp drop shadow */}
            <filter id="crispShadow" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="8" dy="10" stdDeviation="0" floodColor="#09090b" floodOpacity="0.85" />
            </filter>
            <filter id="crispShadowLight" x="-10%" y="-10%" width="130%" height="130%">
              <feDropShadow dx="8" dy="10" stdDeviation="0" floodColor="#0a0a0a" floodOpacity="0.95" />
            </filter>
          </defs>

          {/* Group with 3D offset shadow */}
          {/* Shadow layer (solid offset) */}
          <g transform="translate(10, 12)" className="text-neutral-900 dark:text-black fill-current opacity-90 dark:opacity-100">
            <text
              x="85"
              y="205"
              fontFamily="var(--font-inter), system-ui, -apple-system, sans-serif"
              fontSize="200"
              fontWeight="900"
              letterSpacing="-8px"
              textAnchor="middle"
            >
              4
            </text>
            <text
              x="260"
              y="205"
              fontFamily="var(--font-inter), system-ui, -apple-system, sans-serif"
              fontSize="200"
              fontWeight="900"
              letterSpacing="-8px"
              textAnchor="middle"
            >
              0
            </text>
            <text
              x="435"
              y="205"
              fontFamily="var(--font-inter), system-ui, -apple-system, sans-serif"
              fontSize="200"
              fontWeight="900"
              letterSpacing="-8px"
              textAnchor="middle"
            >
              4
            </text>
          </g>

          {/* Foreground Digits with thick bold contour and dual tone */}
          <g className="stroke-neutral-950 dark:stroke-black stroke-[7px] [paint-order:stroke_fill]">
            {/* Digit 1: '4' */}
            <text
              x="85"
              y="205"
              fontFamily="var(--font-inter), system-ui, -apple-system, sans-serif"
              fontSize="200"
              fontWeight="900"
              letterSpacing="-8px"
              textAnchor="middle"
              className="fill-[url(#digitSplitLight)] dark:fill-[url(#digitSplitDark)]"
            >
              4
            </text>

            {/* Digit 2: '0' */}
            <text
              x="260"
              y="205"
              fontFamily="var(--font-inter), system-ui, -apple-system, sans-serif"
              fontSize="200"
              fontWeight="900"
              letterSpacing="-8px"
              textAnchor="middle"
              className="fill-[url(#digitSplitLight)] dark:fill-[url(#digitSplitDark)]"
            >
              0
            </text>

            {/* Digit 3: '4' */}
            <text
              x="435"
              y="205"
              fontFamily="var(--font-inter), system-ui, -apple-system, sans-serif"
              fontSize="200"
              fontWeight="900"
              letterSpacing="-8px"
              textAnchor="middle"
              className="fill-[url(#digitSplitLight)] dark:fill-[url(#digitSplitDark)]"
            >
              4
            </text>
          </g>
        </svg>
      </motion.div>
    </div>
  );
}
