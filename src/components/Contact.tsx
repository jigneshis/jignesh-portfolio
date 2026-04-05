"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[150px] opacity-50" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="glass-card rounded-[3rem] p-12 md:p-24 text-center space-y-12 overflow-hidden relative">
          {/* Animated pulsing background dot */}
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <div className="w-96 h-96 bg-primary rounded-full animate-ping" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-3">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-sm text-primary font-black uppercase tracking-[0.4em]">Let's Create</span>
              <div className="w-12 h-[1px] bg-primary" />
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black text-foreground tracking-tighter leading-none">
              READY TO <span className="text-gradient-orange">STAND OUT?</span>
            </h2>
            <p className="text-muted-foreground text-xl max-w-xl mx-auto leading-relaxed">
              Stop settling for templates. Let's build a digital experience that actually represents your brand.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-8"
          >
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:hello@jignesh.dev"
              className="btn-primary-glow group bg-primary text-primary-foreground font-black text-2xl px-16 py-8 rounded-[2rem] flex items-center gap-4 shadow-[0_20px_60px_rgba(255,122,24,0.4)]"
            >
              Start Your Project
              <ArrowRight size={32} className="group-hover:translate-x-2 transition-transform" />
            </motion.a>

            <div className="flex gap-10">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ y: -5, color: "hsl(var(--primary))" }}
                  href={social.href}
                  className="text-muted-foreground transition-colors"
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <footer className="mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground font-medium tracking-wide">
          <div className="flex items-center gap-4">
            <span className="font-display font-bold text-foreground text-xl">Jig<span className="text-primary italic">nesh</span></span>
            <span className="opacity-20">|</span>
            <span>© {new Date().getFullYear()} — AJMER, INDIA</span>
          </div>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-primary transition-colors">Privacy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>System Status: Optimal</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;