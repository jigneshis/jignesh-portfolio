'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { usePageTransition } from '@/components/animations/PageTransition';

export default function Template({ children }: { children: React.ReactNode }) {
  const { isExiting } = usePageTransition();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: 'blur(12px)' }}
      animate={
        isExiting
          ? { opacity: 0, scale: 0.98, filter: 'blur(12px)' }
          : { opacity: 1, scale: 1, filter: 'blur(0px)' }
      }
      transition={{
        duration: isExiting ? 0.32 : 0.4,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full flex flex-col flex-1"
    >
      {children}
    </motion.div>
  );
}
