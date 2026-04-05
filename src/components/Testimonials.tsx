"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Jignesh turned our outdated website into a conversion machine. Our ROI was instant.",
    name: "Rohit Sharma",
    role: "Owner, FitZone Gym",
    initials: "RS",
  },
  {
    quote: "The site feels luxurious but loads in seconds. Exactly what our premium brand needed.",
    name: "Anita Verma",
    role: "Director, Studio Luxe",
    initials: "AV",
  },
  {
    quote: "Exceptional attention to detail. Every pixel serves a purpose. Highly recommended.",
    name: "Priya Meena",
    role: "Founder, Chai & Co",
    initials: "PM",
  },
  {
    quote: "Fast turnaround and incredible design sense. He understood our vision perfectly.",
    name: "Suresh Joshi",
    role: "CEO, Ajmer Heritage",
    initials: "SJ",
  },
];

const TestimonialCard = ({ quote, name, role, initials }: typeof testimonials[0]) => (
  <motion.div
    whileHover={{ y: -15, rotateX: 5, rotateY: 5, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="flex-shrink-0 w-[400px] sm:w-[500px] glass-card rounded-[2.5rem] p-12 space-y-10 relative group cursor-grab active:cursor-grabbing overflow-hidden interactive-card"
  >
    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-40 group-hover:text-primary transition-all duration-700 group-hover:scale-110">
      <Quote size={100} className="stroke-[1px]" />
    </div>
    
    <div className="relative space-y-8">
      <p className="text-2xl text-foreground font-medium leading-relaxed tracking-tight">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-5 pt-10 border-t border-white/5">
        <div className="w-16 h-16 rounded-[1.25rem] bg-primary/10 border border-primary/20 flex items-center justify-center text-lg font-black text-primary shadow-[0_0_20px_rgba(255,122,24,0.1)]">
          {initials}
        </div>
        <div>
          <p className="text-xl font-bold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground font-bold tracking-[0.2em] uppercase">{role}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-40 overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-mesh opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-[1px] bg-primary" />
            <span className="text-xs text-primary font-black uppercase tracking-[0.4em]">Voices of Trust</span>
            <div className="w-12 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display text-6xl sm:text-7xl font-bold text-foreground tracking-tighter">
            Loved by <span className="text-gradient-orange">Visionaries.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-10 px-10 w-fit"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} {...t} />
          ))}
        </motion.div>
        
        {/* Faders */}
        <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;