'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { WhatsAppIcon, GmailIcon } from '@/components/ui/Icons';

export function ContactDock() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const footer = document.querySelector('footer');
      let nearFooter = false;

      if (footer) {
        const rect = footer.getBoundingClientRect();
        // Hide dock before entering footer (buffer of 40px)
        nearFooter = rect.top <= window.innerHeight - 40;
      } else {
        const totalHeight = document.documentElement.scrollHeight;
        nearFooter = scrollY + window.innerHeight > totalHeight - 600;
      }

      if (scrollY > 300 && !nearFooter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Subtle bottom viewport frosted glass feather (Matching reference Image 2, zero color fog) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-0 inset-x-0 h-12 sm:h-16 z-30 backdrop-blur-[6px] [mask-image:linear-gradient(to_top,black_25%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_top,black_25%,transparent_100%)]"
      />

      {/* Floating Quick Contact Dock */}
      <AnimatePresence>
        {isVisible && (
          <motion.aside
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
            aria-label="Quick contact"
          >
            <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-background/90 dark:bg-[#121212]/90 backdrop-blur-xl border border-border/80 shadow-[0_12px_40px_rgba(0,0,0,0.14)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.6)]">
              <div className="flex flex-col pr-3 border-r border-border/60">
                <span className="text-xs font-bold text-foreground leading-tight">
                  Speak to me
                </span>
                <span className="text-[10px] text-muted font-normal leading-tight mt-0.5">
                  Email or book a call
                </span>
              </div>

              {/* WhatsApp CTA (sleek monochrome matching reference) */}
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-90 transition-all hover:scale-105 shadow-xs"
                aria-label="Chat on WhatsApp"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon size={16} />
              </a>

              {/* Email CTA (sleek monochrome matching reference) */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center hover:opacity-90 transition-all hover:scale-105 shadow-xs"
                aria-label={`Send email to ${siteConfig.email}`}
                title={`Send email to ${siteConfig.email}`}
              >
                <GmailIcon size={16} />
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
}
