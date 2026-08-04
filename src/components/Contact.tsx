"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, MessageCircle, Phone, Globe, Heart } from "lucide-react";

const socials = [
  { name: "Instagram", icon: Instagram, href: "https://instagram.com/jigneshis" },
  { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/919351090785" },
  { name: "Call", icon: Phone, href: "tel:+919351090785" },
];

const Contact = () => {
  return (
    <section id="contact" className="fluid-py relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] md:w-[1200px] h-[400px] md:h-[600px] bg-primary/10 rounded-full blur-[120px] md:blur-[180px] opacity-40 pointer-events-none" />

      <div className="container-wide relative z-10">
        <div className="glass-card rounded-[2.5rem] md:rounded-[4rem] p-10 md:p-24 lg:p-32 text-center space-y-12 md:space-y-16 overflow-hidden relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-4">
              <div className="w-10 md:w-16 h-[1px] bg-primary" />
              <span className="text-[10px] md:text-xs text-primary font-black uppercase tracking-[0.3em]">The Next Step</span>
              <div className="w-10 md:w-16 h-[1px] bg-primary" />
            </div>
            <h2 className="font-display fluid-h2 font-black text-foreground leading-[0.85]">
              READY TO <br /><span className="text-gradient-nebula">ELEVATE?</span>
            </h2>
            <p className="text-muted-foreground text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
              Stop settling for templates. Let's engineer a digital legacy that commands attention.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-10 md:gap-12"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(123,92,255,0.3)" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:hello@jignesh.dev"
              className="btn-primary-glow group bg-primary text-primary-foreground font-black text-xl md:text-3xl px-12 py-6 md:px-20 md:py-10 rounded-2xl md:rounded-[2.5rem] flex items-center gap-4 md:gap-5 shine-sweep"
            >
              Start Your Project
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform duration-500 w-[24px] md:w-[32px]" />
            </motion.a>

            <div className="flex gap-8 md:gap-12">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ y: -5, color: "hsl(var(--primary))", scale: 1.15 }}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-all duration-300 flex flex-col items-center gap-2 group"
                >
                  <social.icon size={24} className="md:w-[32px]" />
                  <span className="text-[9px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    {social.name}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Enhanced Footer */}
        <footer className="mt-32 md:mt-48 pb-12 border-t border-white/[0.05]">
          <div className="pt-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
            {/* Left: Brand & Location */}
            <div className="space-y-6">
              <div className="font-display font-black text-foreground text-3xl tracking-tighter">
                Jig<span className="text-primary italic font-light">nesh</span>
              </div>
              <div className="flex flex-col gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Globe size={14} className="text-primary" />
                  <span>Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-cyan-500/80">Available Worldwide</span>
                </div>
              </div>
            </div>

            {/* Center: Navigation/Links */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Sitemap</span>
              <div className="flex flex-wrap justify-center md:justify-start gap-x-8 gap-y-3 text-[12px] font-bold uppercase tracking-widest text-foreground/60">
                <a href="#work" className="hover:text-primary transition-colors">Portfolio</a>
                <a href="#tech" className="hover:text-primary transition-colors">Stack</a>
                <a href="#pricing" className="hover:text-primary transition-colors">Services</a>
                <a href="/bio" className="hover:text-primary transition-colors">Socials</a>
              </div>
            </div>

            {/* Right: Credits */}
            <div className="flex flex-col items-center md:items-end gap-6 text-center md:text-right">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-black uppercase tracking-widest text-muted-foreground">© {new Date().getFullYear()} — JIGNESHIS</span>
                <span className="text-[10px] font-medium text-muted-foreground/40 italic">All rights reserved.</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
                <span>Handcrafted with</span>
                <Heart size={10} className="text-primary fill-primary animate-pulse" />
                <span>by Jignesh</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 flex flex-col sm:flex-row justify-between items-center gap-6 pt-8 border-t border-white/[0.03] text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/30">
            <span>v2.0.24 — Digital Artifact</span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
