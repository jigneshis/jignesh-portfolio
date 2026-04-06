"use client";

import { motion } from "framer-motion";
import { ArrowRight, Instagram, MessageCircle, Phone, Globe, ExternalLink } from "lucide-react";
import DarkVeil from "@/components/DarkVeil";

const HelloThere = () => {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-foreground">
      <div className="vignette" />

      {/* Animated Shader Background */}
      <DarkVeil baseColor="#050507" veilColor="#5227FF" speed={0.3} intensity={0.8} />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Top badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <div className="glass-card rounded-full px-5 py-2 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
              Behind the pixels
            </span>
          </div>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-center max-w-3xl space-y-8"
        >
          <h1 className="font-display fluid-h2 font-black leading-[0.9] text-foreground">
            The site you just saw?
            <br />
            <span className="text-gradient-nebula">I crafted it.</span>
          </h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.2, delay: 0.8 }}
            className="w-24 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"
          />

          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-xl mx-auto font-medium">
            I'm <span className="text-foreground font-bold">Jignesh Wadhwani</span> — a web designer & developer from
            <span className="text-foreground"> Ajmer, India</span>. I help local businesses and creators stand out online
            with clean, fast, and memorable websites.
          </p>
        </motion.div>

        {/* What I do cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl w-full"
        >
          {[
            { label: "Design", desc: "Pixel-perfect UI" },
            { label: "Develop", desc: "Fast & responsive" },
            { label: "Deploy", desc: "Launch & maintain" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + i * 0.15 }}
              className="glass-card rounded-2xl p-5 text-center space-y-2 group hover:border-primary/20 transition-colors duration-500"
            >
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display font-bold text-foreground text-lg">{item.label}</h3>
              <p className="text-muted-foreground text-xs font-medium">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-20 flex flex-col items-center gap-8"
        >
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
            Want something like this?
          </p>

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(123,92,255,0.25)" }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919351090785"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary-glow group bg-primary text-primary-foreground font-black text-lg md:text-xl px-10 py-5 md:px-14 md:py-6 rounded-2xl flex items-center gap-4 shine-sweep"
          >
            Let's Talk
            <ArrowRight size={22} className="group-hover:translate-x-2 transition-transform duration-500" />
          </motion.a>

          {/* Socials */}
          <div className="flex gap-8 mt-4">
            {[
              { icon: Instagram, href: "https://instagram.com/jigneshis", label: "Instagram" },
              { icon: MessageCircle, href: "https://wa.me/919351090785", label: "WhatsApp" },
              { icon: Phone, href: "tel:+919351090785", label: "Call" },
            ].map((s) => (
              <motion.a
                key={s.label}
                whileHover={{ y: -4, scale: 1.15 }}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 flex flex-col items-center gap-2 group"
              >
                <s.icon size={22} />
                <span className="text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {s.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Portfolio link */}
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          href="/"
          className="mt-20 glass-card rounded-full px-6 py-3 flex items-center gap-3 text-muted-foreground hover:text-foreground hover:border-primary/20 transition-all duration-500 group"
        >
          <span className="text-[10px] font-black uppercase tracking-[0.2em]">See my full portfolio</span>
          <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
        </motion.a>

        {/* Footer credit */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="mt-16 text-center"
        >
          <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/30">
            <Globe size={10} className="text-primary/50" />
            <span>Ajmer, Rajasthan — Available Worldwide</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HelloThere;
