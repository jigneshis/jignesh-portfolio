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
    whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
    className="flex-shrink-0 w-[350px] sm:w-[450px] glass-card rounded-3xl p-10 space-y-8 relative group cursor-grab active:cursor-grabbing overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 group-hover:text-primary transition-all duration-500">
      <Quote size={80} />
    </div>
    
    <div className="relative space-y-6">
      <p className="text-xl text-foreground font-medium leading-relaxed">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4 pt-8 border-t border-white/5">
        <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-sm font-bold text-primary">
          {initials}
        </div>
        <div>
          <p className="text-lg font-bold text-foreground">{name}</p>
          <p className="text-sm text-muted-foreground font-medium tracking-wide">{role}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 overflow-hidden bg-mesh animate-mesh">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-[1px] bg-primary" />
            <span className="text-sm text-primary font-bold uppercase tracking-[0.2em]">Wall of Love</span>
            <div className="w-10 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display text-5xl sm:text-6xl font-bold text-foreground tracking-tight">
            Loved by <span className="text-gradient-orange">Visionaries.</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 px-10 w-fit"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} {...t} />
          ))}
        </motion.div>
        
        {/* Faders */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10" />
      </div>
    </section>
  );
};

export default Testimonials;