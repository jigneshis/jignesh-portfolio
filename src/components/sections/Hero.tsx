'use client';

import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { ParallaxCards } from '@/components/animations/ParallaxCards';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="w-full max-w-7xl mx-auto pt-16 pb-20 md:py-28 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
    >
      {/* Left Column: Copy & Actions */}
      <div className="lg:col-span-7 flex flex-col items-start text-left gap-6">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card border border-border text-xs font-medium text-foreground"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>Available for {siteConfig.availableDate}</span>
        </motion.div>

        {/* Mixed-weight Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.08]"
        >
          <span className="text-muted-foreground font-normal block">Code That</span>
          <span className="block text-foreground">Delivers Results.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted max-w-xl font-normal leading-relaxed"
        >
          Strategic development that drives growth, not just looks good. I build
          everything your product needs to attract users and turn them into customers.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="pt-2 flex items-center gap-4"
        >
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl"
          >
            <div className="w-6 h-6 rounded-full bg-background/20 flex items-center justify-center text-xs font-semibold shadow-md border border-white/20">
              {siteConfig.name[0]}
            </div>
            <span>Let&apos;s talk</span>
          </a>
        </motion.div>
      </div>

      {/* Right Column: 3D Parallax Card Stack */}
      <div className="lg:col-span-5 w-full flex justify-center items-center">
        <ParallaxCards />
      </div>
    </section>
  );
}
