"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Work", href: "#work" },
  { label: "Stack", href: "#tech" },
  { label: "Voices", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-4 md:top-5 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-1.5rem)] md:w-fit">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`relative flex items-center justify-between gap-4 md:gap-8 px-4 py-1.5 md:px-6 md:py-2 rounded-2xl md:rounded-[1.5rem] border transition-all duration-500 glass-shine ${
          scrolled 
            ? "bg-black/70 backdrop-blur-2xl border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.2)]" 
            : "bg-white/[0.04] backdrop-blur-xl border-white/10 shadow-[0_5px_15px_rgba(255,122,24,0.03)]"
        }`}
      >
        {/* Logo */}
        <a href="#" className="font-display text-base md:text-xl font-bold tracking-tight text-foreground whitespace-nowrap group">
          Jig<span className="italic font-light text-primary transition-all group-hover:tracking-wider">nesh</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onMouseEnter={() => setHoveredLink(link.label)}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative text-[11px] md:text-[12px] font-bold text-muted-foreground hover:text-foreground transition-all duration-300 px-3.5 py-1.5 group uppercase tracking-widest"
            >
              <span className="relative z-10">{link.label}</span>
              <motion.span
                initial={{ width: 0, left: 0 }}
                animate={{ width: hoveredLink === link.label ? "40%" : 0 }}
                className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-primary/40 pointer-events-none"
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-2">
          <motion.a
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,122,24,0.2)" }}
            whileTap={{ scale: 0.97 }}
            href="#contact"
            className="hidden sm:block bg-primary text-primary-foreground text-[10px] font-black px-4 py-1.5 md:px-5 md:py-2 rounded-full uppercase tracking-widest shine-sweep"
          >
            Let's Talk
          </motion.a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-1.5 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            className="absolute top-full left-0 right-0 mt-3 md:hidden bg-black/95 backdrop-blur-3xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl p-5 space-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-display font-bold text-muted-foreground hover:text-primary transition-colors py-1.5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-white/5 sm:hidden">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center block bg-primary text-primary-foreground font-black py-3 rounded-xl uppercase tracking-widest text-xs"
              >
                Let's Talk
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;