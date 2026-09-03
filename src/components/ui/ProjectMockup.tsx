'use client';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface ProjectMockupProps {
  slug: string;
  isCompact?: boolean;
  className?: string;
}

const projectImages: Record<string, { src: string; alt: string }> = {
  'apurvix-media': {
    src: '/images/projects/apurvix-media.png',
    alt: 'Apurvix Media website preview',
  },
  kora: {
    src: '/images/projects/apurvix-media.png',
    alt: 'Apurvix Media website preview',
  },
  samim: {
    src: '/images/projects/samim.jpg',
    alt: 'Samim website preview',
  },
  kyma: {
    src: '/images/projects/samim.jpg',
    alt: 'Samim website preview',
  },
  flash: {
    src: '/images/projects/flash.png',
    alt: 'Flash website preview',
  },
  mugen: {
    src: '/images/projects/flash.png',
    alt: 'Flash website preview',
  },
  ishant: {
    src: '/images/projects/ishant.png',
    alt: 'Ishant website preview',
  },
  axiom: {
    src: '/images/projects/ishant.png',
    alt: 'Ishant website preview',
  },
  'abi-editz': {
    src: '/images/projects/abi-editz.png',
    alt: 'Abi Editz website preview',
  },
  'bharat-esports': {
    src: '/images/projects/bharat-esports.png',
    alt: 'Bharat Esports website preview',
  },
  crewcut: {
    src: '/images/projects/crewcut.png',
    alt: 'Crewcut website preview',
  },
};

export function ProjectMockup({ slug, isCompact = false, className = '' }: ProjectMockupProps) {
  const project = projectImages[slug] || projectImages['ishant'];
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse coordinate values relative to the card container
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Snappy yet smooth spring physics
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  if (slug === 'crewcut') {
    return (
      <div
        className={`w-full h-full flex flex-col items-center justify-center p-8 bg-white dark:bg-black select-none transition-colors duration-300 ${className}`}
      >
        <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
          Crewcut
        </span>
        <span className="mt-3 text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-neutral-400 dark:text-neutral-500">
          Coming Soon
        </span>
      </div>
    );
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`w-full h-full relative overflow-hidden bg-card select-none group/mockup sm:cursor-none ${className}`}
    >
      <Image
        src={project.src}
        alt={project.alt}
        fill
        sizes={isCompact ? '340px' : '(max-width: 768px) 100vw, 50vw'}
        className="object-cover object-left-top transition-transform duration-700 ease-out group-hover/mockup:scale-105"
        priority={isCompact}
      />

      {/* Subtle glossy vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none" />

      {/* Desktop Magnetic Follower Pill with Dynamic Color Inversion */}
      {!isCompact && (
        <motion.div
          style={{
            left: cursorX,
            top: cursorY,
            translateX: '-50%',
            translateY: '-50%',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            scale: isHovered ? 1 : 0.5,
          }}
          transition={{ duration: 0.18, ease: 'easeOut' }}
          className="hidden sm:flex pointer-events-none absolute z-30 items-center justify-center px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/35 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        >
          <span className="text-xs sm:text-[13px] font-semibold tracking-tight text-white [mix-blend-mode:difference] select-none whitespace-nowrap">
            View Project
          </span>
        </motion.div>
      )}

      {/* Mobile/Touch Fallback Static Pill in Bottom Right */}
      <div className="sm:hidden absolute bottom-3 right-3 z-10 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] font-medium flex items-center gap-1 shadow-md">
        <span>View Project</span>
        <span>↗</span>
      </div>
    </div>
  );
}
