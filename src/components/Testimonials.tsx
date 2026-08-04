"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Not gonna lie, I love the website so much. You really did well, Jignesh, and I really got what I wanted.",
    name: "Apoorv Sharma",
    role: "Founder, Apurvix Media",
    initials: "AS",
  },
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
    whileHover={{ y: -10, rotateX: 3, rotateY: 3, scale: 1.01 }}
    className="flex-shrink-0 w-[300px] md:w-[450px] glass-card rounded-[2rem] p-8 md:p-10 space-y-8 relative group cursor-grab active:cursor-grabbing overflow-hidden"
  >
    <div className="absolute top-0 right-0 p-6 md:p-8 opacity-5 group-hover:opacity-10 transition-all duration-700">
      <Quote size={80} className="stroke-[1px]" />
    </div>
    
    <div className="relative space-y-6">
      <p className="text-lg md:text-xl text-foreground font-medium leading-relaxed tracking-tight">
        "{quote}"
      </p>
      
      <div className="flex items-center gap-4 pt-6 md:pt-8 border-t border-white/[0.05]">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-base md:text-lg font-black text-primary">
          {initials}
        </div>
        <div>
          <p className="text-base md:text-lg font-bold text-foreground">{name}</p>
          <p className="text-[10px] md:text-xs text-muted-foreground font-bold tracking-widest uppercase">{role}</p>
        </div>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  return (
    <section id="testimonials" className="fluid-py overflow-hidden relative">
      <div className="container-wide mb-12 md:mb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className="flex items-center justify-center gap-4">
            <div className="w-8 h-[1px] bg-primary" />
            <span className="text-[10px] md:text-xs text-primary font-black uppercase tracking-[0.3em]">Voices of Trust</span>
            <div className="w-8 h-[1px] bg-primary" />
          </div>
          <h2 className="font-display fluid-h2 font-bold text-foreground tracking-tighter">
            Loved by <span className="text-gradient-nebula">Visionaries.</span>
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
          className="flex gap-6 md:gap-10 px-6 w-fit"
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} {...t} />
          ))}
        </motion.div>
        
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-[#050507] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-[#050507] to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Testimonials;
