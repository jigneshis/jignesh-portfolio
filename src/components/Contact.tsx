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
    <section id="contact" className="fluid-py relative overflow-hidden">
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
              whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,122,24,0.3)" }}
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
                  className="text-muted-foreground transition-all duration-300"
                >
                  <social.icon size={24} className="md:w-[32px]" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <footer className="mt-24 md:mt-40 pt-10 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] md:text-[12px] text-muted-foreground font-black uppercase tracking-widest">
          <div className="flex items-center gap-6">
            <span className="font-display font-black text-foreground text-xl tracking-tighter">Jig<span className="text-primary italic font-light">nesh</span></span>
            <span className="opacity-10 w-[1px] h-6 bg-white" />
            <span>© {new Date().getFullYear()} — RAJASTHAN, INDIA</span>
          </div>
          <div className="flex items-center gap-8 md:gap-12 flex-wrap justify-center">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms</a>
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
              <span className="text-cyan-500/80">Systems: Online</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Contact;