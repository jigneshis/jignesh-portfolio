'use client';

import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { ProjectMockup } from '@/components/ui/ProjectMockup';
import { useMediaQuery } from '@/hooks/useMediaQuery';

interface ParallaxCardsProps {
  className?: string;
}

export function ParallaxCards({ className }: ParallaxCardsProps) {
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { scrollY } = useScroll();

  // Desktop Target Destination in Latest Projects:
  // Card 1 (Apurvix Media): Top-Left (x: -320, y: 360)
  const x1 = useTransform(scrollY, [0, 750], [isDesktop ? -15 : -5, isDesktop ? -320 : 0]);
  const y1 = useTransform(scrollY, [0, 750], [0, isDesktop ? 360 : 160]);
  const rotZ1 = useTransform(scrollY, [0, 750], [-6, 0]);
  const rotY1 = useTransform(scrollY, [0, 750], [-6, 0]);
  const rotX1 = useTransform(scrollY, [0, 750], [4, 0]);
  const scale1 = useTransform(scrollY, [0, 750], [1.02, 1.05]);

  // Card 2 (Samim): Top-Right (x: 200, y: 360) - Tilted Right Wing
  const x2 = useTransform(scrollY, [0, 750], [isDesktop ? 75 : 25, isDesktop ? 200 : 0]);
  const y2 = useTransform(scrollY, [0, 750], [18, isDesktop ? 360 : 320]);
  const rotZ2 = useTransform(scrollY, [0, 750], [14, 0]);
  const rotY2 = useTransform(scrollY, [0, 750], [-10, 0]);
  const rotX2 = useTransform(scrollY, [0, 750], [5, 0]);
  const scale2 = useTransform(scrollY, [0, 750], [0.95, 1.05]);

  // Card 3 (Flash): Bottom-Left (x: -320, y: 800) - Tilted Left Wing
  const x3 = useTransform(scrollY, [0, 750], [isDesktop ? -75 : -25, isDesktop ? -320 : 0]);
  const y3 = useTransform(scrollY, [0, 750], [14, isDesktop ? 800 : 480]);
  const rotZ3 = useTransform(scrollY, [0, 750], [-16, 0]);
  const rotY3 = useTransform(scrollY, [0, 750], [10, 0]);
  const rotX3 = useTransform(scrollY, [0, 750], [5, 0]);
  const scale3 = useTransform(scrollY, [0, 750], [0.94, 1.05]);

  // Card 4 (Ishant): Bottom-Right (x: 200, y: 800) - Center-Back Standing Card
  const x4 = useTransform(scrollY, [0, 750], [isDesktop ? -5 : 0, isDesktop ? 200 : 0]);
  const y4 = useTransform(scrollY, [0, 750], [-35, isDesktop ? 800 : 640]);
  const rotZ4 = useTransform(scrollY, [0, 750], [-2, 0]);
  const rotY4 = useTransform(scrollY, [0, 750], [2, 0]);
  const rotX4 = useTransform(scrollY, [0, 750], [8, 0]);
  const scale4 = useTransform(scrollY, [0, 750], [0.94, 1.05]);

  // Global opacity handover to Latest Projects
  const opacity = useTransform(scrollY, [0, 620, 800], [1, 1, 0]);

  if (shouldReduceMotion) {
    return (
      <div className={`relative flex flex-col gap-4 w-full max-w-sm mx-auto ${className || ''}`}>
        {['apurvix-media', 'samim', 'flash', 'ishant'].map((slug) => (
          <div
            key={slug}
            className="w-full aspect-video rounded-2xl border border-border overflow-hidden shadow-md"
          >
            <ProjectMockup slug={slug} isCompact />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-[400px] sm:h-[440px] max-w-md mx-auto [perspective:1400px] flex items-center justify-center pointer-events-none z-20 overflow-visible ${
        className || ''
      }`}
    >
      {/* 1. Left Wing Card: Flash (Layer 1 - deepest on left, tilted -16deg) */}
      <motion.div
        style={{
          x: x3,
          y: y3,
          rotateZ: rotZ3,
          rotateY: rotY3,
          rotateX: rotX3,
          scale: scale3,
          opacity,
          zIndex: 10,
        }}
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute w-72 sm:w-84 aspect-video rounded-3xl border border-white/20 dark:border-white/10 overflow-hidden shadow-xl bg-card"
      >
        <ProjectMockup slug="flash" isCompact />
      </motion.div>

      {/* 2. Center-Back Card: Ishant (Layer 2 - raised -35px behind center) */}
      <motion.div
        style={{
          x: x4,
          y: y4,
          rotateZ: rotZ4,
          rotateY: rotY4,
          rotateX: rotX4,
          scale: scale4,
          opacity,
          zIndex: 20,
        }}
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute w-72 sm:w-84 aspect-video rounded-3xl border border-white/20 dark:border-white/10 overflow-hidden shadow-xl bg-card"
      >
        <ProjectMockup slug="ishant" isCompact />
      </motion.div>

      {/* 3. Right Wing Card: Samim (Layer 3 - tilted right +14deg) */}
      <motion.div
        style={{
          x: x2,
          y: y2,
          rotateZ: rotZ2,
          rotateY: rotY2,
          rotateX: rotX2,
          scale: scale2,
          opacity,
          zIndex: 30,
        }}
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute w-72 sm:w-84 aspect-video rounded-3xl border border-white/20 dark:border-white/10 overflow-hidden shadow-xl bg-card"
      >
        <ProjectMockup slug="samim" isCompact />
      </motion.div>

      {/* 4. Foreground Hero Card: Apurvix Media (Layer 4 - Front & Center, tilted -6deg, deep shadow) */}
      <motion.div
        style={{
          x: x1,
          y: y1,
          rotateZ: rotZ1,
          rotateY: rotY1,
          rotateX: rotX1,
          scale: scale1,
          opacity,
          zIndex: 40,
        }}
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.05, ease: [0.2, 0.8, 0.2, 1] }}
        className="absolute w-76 sm:w-88 aspect-video rounded-3xl border border-white/30 dark:border-white/20 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.45)] bg-card"
      >
        <ProjectMockup slug="apurvix-media" isCompact />
      </motion.div>
    </div>
  );
}
