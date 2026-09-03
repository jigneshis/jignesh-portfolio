'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { TransitionLink } from '@/components/animations/PageTransition';

export function FloatingBackButton() {
  const pathname = usePathname();
  const isProjectsPage = pathname === '/projects';

  return (
    <AnimatePresence>
      {isProjectsPage && (
        <motion.div
          key="floating-back-btn"
          initial={{ opacity: 0, scale: 0.8, x: -12 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.8, x: -12 }}
          transition={{ type: 'spring', stiffness: 400, damping: 28 }}
          className="fixed left-5 sm:left-8 top-6 sm:top-8 z-50 pointer-events-auto"
        >
          <TransitionLink
            href="/"
            className="w-10 h-10 rounded-full bg-card/90 dark:bg-[#151515]/90 backdrop-blur-xl border border-border/80 shadow-md hover:shadow-xl flex items-center justify-center text-foreground hover:scale-110 active:scale-95 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground group"
            aria-label="Back to home"
            title="Back to home"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="group-hover:-translate-x-0.5 transition-transform"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </TransitionLink>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
