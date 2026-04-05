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
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-[calc(100%-2rem)] md:w-fit">
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`relative flex items-center justify-between gap-8 px-6 py-3 md:px-8 md:py-4 rounded-[2rem] border transition-all duration-500 glass-shine ${
          scrolled 
            ? "bg-black/40 backdrop-blur-2xl border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]" 
            : "bg-white/[0.05] backdrop-blur-xl border-white/10 shadow-[0_10px_30px_rgba(255,122,24,0.05)]"
        }`}
      >
        {/* Subtle inner highlight for glass feel */}
        <div className="absolute inset-0 rounded-[2rem] border border-white/[0.05] pointer-events-none" />

        {/* Logo */}
        <a href="#" className="font-display text-xl md:text-2xl font-bold tracking-tight text-foreground whitespace-nowrap group">
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
              className="relative text-[13px] font-bold text-muted-foreground hover:text-foreground transition-all duration-300 px-5 py-2 group uppercase tracking-widest"
            >
              <span className="relative z-10">{link.label}</span>
              
              {/* Animated Underline */}
              <motion.span
                initial={{ width: 0, left: 0 }}
                animate={{ width: hoveredLink === link.label ? "50%" : 0 }}
                className="absolute bottom-1 left-1/2 -translate-x-1/2 h-[1px] bg-primary/60 shadow-[0_0_8px_rgba(255,122,24,0.5)] pointer-events-none"
              />
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255,122,24,0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="hidden md:block bg-primary text-primary-foreground text-[12px] font-black px-7 py-3 rounded-full uppercase tracking-widest shine-sweep"
          >
            Let's Talk
          </motion.a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-2 rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full left-0 right-0 mt-4 md:hidden bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl p-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xl font-display font-bold text-muted-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/5">
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center block bg-primary text-primary-foreground font-black py-4 rounded-2xl uppercase tracking-widest"
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