"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, Linkedin, Twitter } from "lucide-react";

const socials = [
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-40 relative overflow-hidden">
      {/* Intense Cinematic Spotlight */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-primary/20 rounded-full blur-[180px] opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="glass-card rounded-[4rem] p-16 md:p-32 text-center space-y-16 overflow-hidden relative interactive-card shadow-[inset_0_0_100px_rgba(255,122,24,0.05)]">
          {/* Animated pulsing background layer */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(255,122,24,0.5),transparent_70%)]"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-4">
              <div className="w-16 h-[1px] bg-primary" />
              <span className="text-xs text-primary font-black uppercase tracking-[0.5em]">The Next Step</span>
              <div className="w-16 h-[1px] bg-primary" />
            </div>
            <h2 className="font-display text-6xl md:text-8xl lg:text-9xl font-black text-foreground tracking-tighter leading-[0.85]">
              READY TO <br /><span className="text-gradient-orange">ELEVATE?</span>
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-medium">
              Stop settling for templates. Let's engineer a digital legacy that commands attention and results.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-12"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 80px rgba(255,122,24,0.5)" }}
              whileTap={{ scale: 0.95 }}
              href="mailto:hello@jignesh.dev"
              className="btn-primary-glow group bg-primary text-primary-foreground font-black text-2xl md:text-3xl px-20 py-10 rounded-[2.5rem] flex items-center gap-5 shadow-[0_25px_80px_rgba(255,122,24,0.4)] shine-sweep"
            >
              Start Your Project
              <ArrowRight size={40} className="group-hover:translate-x-3 transition-transform duration-500" />
            </motion.a>

            <div className="flex gap-12">
              {socials.map((social) => (
                <motion.a
                  key={social.name}
                  whileHover={{ y: -8, color: "hsl(var(--primary))", scale: 1.2 }}
                  href={social.href}
                  className="text-muted-foreground transition-all duration-300"
                >
                  <social.icon size={32} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Cinematic Footer */}
        <footer className="mt-40 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10 text-[12px] text-muted-foreground font-black uppercase tracking-[0.3em]">
          <div className="flex items-center gap-6">
            <span className="font-display font-black text-foreground text-2xl tracking-tighter">Jig<span className="text-primary italic font-light">nesh</span></span>
            <span className="opacity-10 w-[1px] h-6 bg-white" />
            <span>© {new Date().getFullYear()} — RAJASTHAN, INDIA</span>
          </div>
          <div className="flex items-center gap-12">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
              <span className="text-green-500/80">Core Systems: Online</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;