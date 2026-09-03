'use client';

import React, { useRef, useState, useEffect, useCallback } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { TransitionLink } from '@/components/animations/PageTransition';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import { projects } from '@/data/projects';
import { ProjectMockup } from '@/components/ui/ProjectMockup';
import { LogoStrip } from '@/components/sections/LogoStrip';
import { useMediaQuery } from '@/hooks/useMediaQuery';

export function HeroProjectsFlow() {
  const shouldReduceMotion = useReducedMotion();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const { scrollY } = useScroll();

  const heroAnchorRef = useRef<HTMLDivElement>(null);
  const slot0Ref = useRef<HTMLDivElement>(null);
  const slot1Ref = useRef<HTMLDivElement>(null);
  const slot2Ref = useRef<HTMLDivElement>(null);
  const slot3Ref = useRef<HTMLDivElement>(null);

  // Initial fallbacks before DOM measurement
  const [offsets, setOffsets] = useState([
    { deltaX: 430, deltaY: -700 },
    { deltaX: 75, deltaY: -680 },
    { deltaX: 430, deltaY: -1200 },
    { deltaX: 75, deltaY: -1220 },
  ]);

  const updateOffsets = useCallback(() => {
    if (!heroAnchorRef.current) return;
    const heroRect = heroAnchorRef.current.getBoundingClientRect();
    const heroCenterX = heroRect.left + heroRect.width / 2;
    const heroCenterY = heroRect.top + heroRect.height / 2;

    const refs = [slot0Ref, slot1Ref, slot2Ref, slot3Ref];
    const fanDeltas = [
      { x: -30, y: 0 },   // Card 0: Apurvix Media (Front Center)
      { x: 80, y: 16 },   // Card 1: Samim (Right Wing)
      { x: -105, y: 12 }, // Card 2: Flash (Left Wing)
      { x: -15, y: -38 }, // Card 3: Ishant (Center Back)
    ];

    setOffsets((prev) =>
      refs.map((ref, idx) => {
        if (!ref.current) return prev[idx];
        const slotRect = ref.current.getBoundingClientRect();
        const slotCenterX = slotRect.left + slotRect.width / 2;
        const slotCenterY = slotRect.top + slotRect.height / 2;

        return {
          deltaX: heroCenterX - slotCenterX + (isDesktop ? fanDeltas[idx].x : fanDeltas[idx].x * 0.4),
          deltaY: heroCenterY - slotCenterY + (isDesktop ? fanDeltas[idx].y : fanDeltas[idx].y * 0.4),
        };
      })
    );
  }, [isDesktop]);

  useEffect(() => {
    updateOffsets();
    window.addEventListener('resize', updateOffsets);
    return () => window.removeEventListener('resize', updateOffsets);
  }, [updateOffsets]);

  // Scroll Progress: 0 (Hero at rest) -> 1 (Cards locked in 2x2 grid in Latest Projects)
  const scrollThreshold = 650;

  // Card 0 (Apurvix Media): Top-Left Slot
  const x0 = useTransform(scrollY, [0, scrollThreshold], [offsets[0].deltaX, 0]);
  const y0 = useTransform(scrollY, [0, scrollThreshold], [offsets[0].deltaY, 0]);
  const rotZ0 = useTransform(scrollY, [0, scrollThreshold], [-5, 0]);
  const scale0 = useTransform(scrollY, [0, scrollThreshold], [isDesktop ? 0.82 : 0.95, 1]);

  // Card 1 (Samim): Top-Right Slot
  const x1 = useTransform(scrollY, [0, scrollThreshold], [offsets[1].deltaX, 0]);
  const y1 = useTransform(scrollY, [0, scrollThreshold], [offsets[1].deltaY, 0]);
  const rotZ1 = useTransform(scrollY, [0, scrollThreshold], [12, 0]);
  const scale1 = useTransform(scrollY, [0, scrollThreshold], [isDesktop ? 0.77 : 0.92, 1]);

  // Card 2 (Flash): Bottom-Left Slot
  const x2 = useTransform(scrollY, [0, scrollThreshold], [offsets[2].deltaX, 0]);
  const y2 = useTransform(scrollY, [0, scrollThreshold], [offsets[2].deltaY, 0]);
  const rotZ2 = useTransform(scrollY, [0, scrollThreshold], [-14, 0]);
  const scale2 = useTransform(scrollY, [0, scrollThreshold], [isDesktop ? 0.76 : 0.9, 1]);

  // Card 3 (Ishant): Bottom-Right Slot
  const x3 = useTransform(scrollY, [0, scrollThreshold], [offsets[3].deltaX, 0]);
  const y3 = useTransform(scrollY, [0, scrollThreshold], [offsets[3].deltaY, 0]);
  const rotZ3 = useTransform(scrollY, [0, scrollThreshold], [-2, 0]);
  const scale3 = useTransform(scrollY, [0, scrollThreshold], [isDesktop ? 0.75 : 0.9, 1]);

  // Metadata below each card reveals smoothly upon landing
  const metaOpacity = useTransform(scrollY, [450, scrollThreshold], [0, 1]);
  const cardPointerEvents = useTransform(scrollY, (v) => (v > 500 ? 'auto' : 'none'));

  const cardTransforms = [
    { x: x0, y: y0, rotZ: rotZ0, scale: scale0, zIndex: 40, ref: slot0Ref },
    { x: x1, y: y1, rotZ: rotZ1, scale: scale1, zIndex: 30, ref: slot1Ref },
    { x: x2, y: y2, rotZ: rotZ2, scale: scale2, zIndex: 10, ref: slot2Ref },
    { x: x3, y: y3, rotZ: rotZ3, scale: scale3, zIndex: 20, ref: slot3Ref },
  ];

  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <div className="w-full flex flex-col relative overflow-visible">
      {/* 1. HERO SECTION */}
      <section
        id="hero"
        aria-label="Introduction"
        className="w-full pt-28 pb-16 md:pt-32 md:pb-24 px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative overflow-visible"
      >
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-6 flex flex-col items-start text-left gap-5 z-10">
          {/* Editorial Mixed-weight Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-[3.65rem] font-bold tracking-[-0.035em] text-foreground leading-[1.06] max-w-md"
          >
            <span className="text-muted-foreground font-normal block">Code That</span>
            <span className="block text-foreground font-bold">Delivers Results.</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-sm sm:text-base text-muted max-w-[420px] font-normal leading-relaxed"
          >
            Strategic development that drives growth, not just looks good. I build everything your
            product needs to attract users and turn them into customers.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="pt-2 flex items-center"
          >
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 pl-2 pr-5 py-2 rounded-full bg-foreground text-background font-medium text-xs sm:text-sm shadow-[0_10px_25px_-5px_rgba(0,0,0,0.22)] hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20 shrink-0">
                <Image
                  src="/images/profile/jignesh.jpg"
                  alt={siteConfig.name}
                  width={28}
                  height={28}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <span className="tracking-tight font-semibold">Book a call with me</span>
            </a>
          </motion.div>
        </div>

        {/* Right Column: Hero Card Anchor (defines height & center point) */}
        <div
          ref={heroAnchorRef}
          className="lg:col-span-6 w-full h-[400px] sm:h-[450px] pointer-events-none flex items-center justify-center relative overflow-visible"
        />
      </section>

      {/* 2. LOGO STRIP */}
      <div className="relative z-0">
        <LogoStrip />
      </div>

      {/* 3. LATEST PROJECTS SECTION */}
      <section
        id="projects"
        aria-label="Latest projects"
        className="w-full px-4 sm:px-6 lg:px-10 py-16 md:py-24 flex flex-col gap-10 relative z-10 overflow-visible bg-background"
      >
        {/* Section Heading with Dynamic Color Inversion (mix-blend-mode: difference over cards) */}
        <div
          style={{ mixBlendMode: 'difference' }}
          className="flex flex-col gap-2 relative z-50 pointer-events-none w-fit"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white select-none">
            Latest Projects
          </h2>
          <p className="text-sm sm:text-base text-white/70 select-none">
            Selected full-stack web applications and digital products.
          </p>
        </div>

        {/* 2x2 Grid Hosting the 4 Landing Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 overflow-visible">
          {featured.map((project, idx) => {
            const transform = cardTransforms[idx];

            if (shouldReduceMotion) {
              return (
                <div key={project.slug} className="flex flex-col gap-4 group">
                  <div className="rounded-3xl border border-border/80 overflow-hidden aspect-video bg-card shadow-lg">
                    <ProjectMockup slug={project.slug} />
                  </div>
                  <div className="flex items-center justify-between px-1">
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-xs text-muted mt-0.5">{project.category}</p>
                    </div>
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:opacity-75 transition-opacity inline-flex items-center gap-1"
                    >
                      <span>↗</span>
                      <span>View Project</span>
                    </a>
                  </div>
                </div>
              );
            }

            return (
              <div key={project.slug} className="flex flex-col gap-4 group relative overflow-visible">
                {/* Landing Slot container (keeps slot dimensions in grid layout) */}
                <div
                  ref={transform.ref}
                  className="rounded-3xl aspect-video relative overflow-visible"
                >
                  {/* The Single Unified Card (travels from Hero anchor to here) */}
                  <motion.div
                    style={{
                      x: transform.x,
                      y: transform.y,
                      rotate: transform.rotZ,
                      scale: transform.scale,
                      zIndex: transform.zIndex,
                      pointerEvents: cardPointerEvents,
                      transformOrigin: 'center center',
                    }}
                    className="absolute inset-0 rounded-3xl border border-white/25 dark:border-white/15 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.18)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.45)] bg-card transition-shadow hover:shadow-2xl"
                  >
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full sm:cursor-none cursor-pointer"
                    >
                      <ProjectMockup slug={project.slug} />
                    </a>
                  </motion.div>
                </div>

                {/* Info row beneath card: only reveals as card lands */}
                <motion.div
                  style={{ opacity: metaOpacity }}
                  className="flex items-center justify-between px-1"
                >
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">{project.category}</p>
                  </div>
                  <a
                    href={project.liveUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-foreground hover:opacity-75 transition-opacity inline-flex items-center gap-1"
                  >
                    <span>↗</span>
                    <span>View Project</span>
                  </a>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* View All Projects Button (Elevated 10/10 pill) */}
        <motion.div style={{ opacity: metaOpacity }} className="flex justify-center pt-6">
          <TransitionLink
            href="/projects"
            className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-card border border-border text-foreground font-medium text-sm shadow-md hover:shadow-xl hover:border-foreground/40 hover:bg-card/80 transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>View all my projects</span>
            <span className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center text-xs transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </TransitionLink>
        </motion.div>
      </section>
    </div>
  );
}
