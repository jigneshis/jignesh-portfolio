'use client';

import React, { useState, useEffect, useRef } from 'react';
import { TransitionLink } from '@/components/animations/PageTransition';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '@/data/siteConfig';
import { navigationLinks } from '@/data/navigation';
import { useDarkMode } from '@/hooks/useDarkMode';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>('');
  const { theme, toggleTheme } = useDarkMode();
  const navRef = useRef<HTMLElement>(null);

  // Scroll detection & active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 120);

      // Scroll Spy: identify active section
      const sectionIds = ['projects', 'services', 'pricing', 'contact'];
      let current = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = `#${id}`;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile/dropdown menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsMobileMenuOpen(false);
      const targetId = href.replace('#', '');
      const targetEl = document.getElementById(targetId);

      const lenis = (window as unknown as { lenis?: { scrollTo: (target: string | HTMLElement, options?: { offset?: number; duration?: number }) => void } }).lenis;
      if (lenis && targetEl) {
        lenis.scrollTo(targetEl, { offset: -80, duration: 1.2 });
      } else if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="fixed top-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        ref={navRef}
        layout
        transition={{ type: 'spring', stiffness: 350, damping: 30 }}
        className={cn(
          'pointer-events-auto relative flex items-center justify-between',
          'bg-background/85 dark:bg-[#0c0c0c]/85 backdrop-blur-xl border border-border/80',
          'shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.45)] rounded-full',
          'py-1.5 px-2.5 sm:px-3.5 gap-2 sm:gap-3',
          isScrolled ? 'max-w-[320px]' : 'max-w-[620px]',
          'w-auto transition-all duration-300'
        )}
        aria-label="Main navigation"
      >
        {/* Left Side: Avatar with pulsing online indicator + Name */}
        <TransitionLink
          href="/"
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground rounded-full pr-1.5"
        >
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 400, damping: 25 }}
            className="relative w-7 h-7 rounded-full overflow-visible shrink-0"
          >
            <div className="w-full h-full rounded-full overflow-hidden border border-border/70 shadow-2xs">
              <Image
                src="/images/profile/jignesh.jpg"
                alt={siteConfig.name}
                width={28}
                height={28}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                unoptimized
              />
            </div>
            {/* Live Green Online Pulsing Indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 flex h-2.5 w-2.5 pointer-events-none">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 ring-2 ring-background" />
            </span>
          </motion.div>

          <span className="text-[13px] font-semibold text-foreground tracking-tight whitespace-nowrap group-hover:opacity-80 transition-opacity">
            {siteConfig.name}
          </span>
        </TransitionLink>

        {/* Desktop Expanded Navigation Links with Floating Glass Pill */}
        <AnimatePresence mode="wait">
          {!isScrolled ? (
            <motion.div
              key="desktop-links"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onMouseLeave={() => setHoveredLink(null)}
              className="hidden md:flex items-center gap-1 relative"
            >
              {navigationLinks.map((link) => {
                const isContact = link.href === '#contact';
                const isActive = activeSection === link.href;
                const isHovered = hoveredLink === link.label;

                if (isContact) {
                  return (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleScrollTo(e, link.href)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.94 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className={cn(
                        'text-[12px] font-medium px-3.5 py-1 rounded-full relative z-10',
                        'bg-foreground text-background',
                        'shadow-2xs hover:shadow-md transition-shadow',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground'
                      )}
                    >
                      {link.label}
                    </motion.a>
                  );
                }

                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    onMouseEnter={() => setHoveredLink(link.label)}
                    whileTap={{ scale: 0.94 }}
                    className={cn(
                      'text-[12px] font-medium px-2.5 py-1 rounded-full relative z-10 transition-colors',
                      isActive || isHovered ? 'text-foreground' : 'text-muted',
                      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground'
                    )}
                  >
                    {/* Floating Frosted Pill indicator (tracks hover / active) */}
                    {(isHovered || (isActive && !hoveredLink)) && (
                      <motion.span
                        layoutId="nav-hover-pill"
                        transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                        className="absolute inset-0 rounded-full bg-card/80 dark:bg-white/10 border border-border/60 dark:border-white/10 -z-10 shadow-2xs"
                      />
                    )}
                    {link.label}
                  </motion.a>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key="scrolled-menu-dots"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-1"
            >
              {/* Scrolled 3-Dots Button: Rotates 90 degrees on hover */}
              <motion.button
                type="button"
                onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                whileHover={{ scale: 1.15, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 400, damping: 22 }}
                className={cn(
                  'w-8 h-8 flex items-center justify-center rounded-full text-foreground',
                  'hover:bg-card/90 transition-colors',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground',
                  isMobileMenuOpen && 'bg-card text-foreground'
                )}
                aria-label="Toggle navigation menu"
                aria-expanded={isMobileMenuOpen}
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
                >
                  <circle cx="12" cy="12" r="1.5" />
                  <circle cx="19" cy="12" r="1.5" />
                  <circle cx="5" cy="12" r="1.5" />
                </svg>
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Right Action: Delight Theme Toggle with 360° Spring Spin */}
        <div className="flex items-center gap-1 shrink-0">
          <motion.button
            type="button"
            onClick={toggleTheme}
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.85 }}
            transition={{ type: 'spring', stiffness: 400, damping: 20 }}
            className="w-8 h-8 rounded-full flex items-center justify-center text-muted hover:text-foreground hover:bg-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground relative overflow-hidden"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, scale: 0.3, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.3, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                className="flex items-center justify-center"
              >
                {theme === 'dark' ? (
                  // Sun icon with energetic rays
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2" />
                    <path d="M12 20v2" />
                    <path d="m4.93 4.93 1.41 1.41" />
                    <path d="m17.66 17.66 1.41 1.41" />
                    <path d="M2 12h2" />
                    <path d="M20 12h2" />
                    <path d="m6.34 17.66-1.41 1.41" />
                    <path d="m19.07 4.93-1.41 1.41" />
                  </svg>
                ) : (
                  // Moon icon with sleek curve
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                  </svg>
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Mobile Menu Trigger button when not scrolled */}
          {!isScrolled && (
            <motion.button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 20 }}
              className="md:hidden w-8 h-8 flex items-center justify-center rounded-full text-foreground hover:bg-card transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </motion.button>
          )}
        </div>
      </motion.nav>

      {/* Floating Dropdown Menu with Spring Stagger and Directional Arrow Hover */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.94 }}
            transition={{ type: 'spring', stiffness: 350, damping: 26 }}
            className={cn(
              'pointer-events-auto absolute top-18',
              'w-56 p-2 rounded-2xl',
              'bg-background/95 dark:bg-[#111111]/95 backdrop-blur-2xl border border-border/90',
              'shadow-[0_16px_40px_rgba(0,0,0,0.12)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.6)]',
              'flex flex-col gap-1'
            )}
          >
            {navigationLinks.map((link, idx) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.04, duration: 0.2 }}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  'group flex items-center justify-between px-3.5 py-2.5 text-sm font-medium rounded-xl',
                  'text-foreground hover:bg-card/90 transition-colors'
                )}
              >
                <span>{link.label}</span>
                <span className="text-muted text-xs group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-200">
                  →
                </span>
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

