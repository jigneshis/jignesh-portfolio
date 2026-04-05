"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    name: "FitZone Gym",
    tags: ["Landing Page", "Premium Design"],
    year: "2024",
    description: "A bold, high-energy experience for a leading fitness center. Designed for conversion and peak performance.",
  },
  {
    name: "Chai & Co Café",
    tags: ["Brand Identity", "Full Website"],
    year: "2024",
    description: "Capturing the essence of specialty chai through a warm, immersive digital storefront.",
  },
  {
    name: "Studio Luxe Salon",
    tags: ["UI/UX Design", "Booking Hub"],
    year: "2023",
    description: "Minimalist luxury for a premium salon. Focusing on high-end visuals and seamless booking.",
  },
  {
    name: "Ajmer Heritage Stays",
    tags: ["Tourism Site", "Full Build"],
    year: "2023",
    description: "Preserving history through a modern lens. A boutique hotel experience translated to web.",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative border-t border-white/5 last:border-b interactive-card"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.07] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative py-14 md:py-24 px-6 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-10 cursor-pointer transition-all duration-700 group-hover:bg-white/[0.01]">
        <div className="flex items-center gap-8 md:gap-16 flex-1" style={{ transform: "translateZ(50px)" }}>
          <span className="text-stroke font-display text-5xl md:text-7xl font-bold opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-700">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="space-y-5">
            <div className="flex items-center gap-6 flex-wrap">
              <h3 className="font-display text-4xl md:text-6xl font-bold text-foreground group-hover:translate-x-3 transition-transform duration-700">
                {project.name}
              </h3>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] px-4 py-1.5 rounded-full glass-card text-muted-foreground uppercase tracking-[0.2em] font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground text-lg max-w-lg line-clamp-2 group-hover:text-foreground/90 transition-colors duration-500">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-16 self-end md:self-center" style={{ transform: "translateZ(30px)" }}>
          <span className="text-sm font-mono text-muted-foreground/40 group-hover:text-primary transition-colors font-bold uppercase tracking-widest">
            Established {project.year}
          </span>
          <div className="w-20 h-20 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700 rotate-[-45deg] group-hover:rotate-0 group-hover:scale-110 shadow-2xl">
            <ArrowUpRight
              size={32}
              className="text-foreground group-hover:text-primary-foreground transition-colors"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Work = () => {
  return (
    <section id="work" className="py-40 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-32 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-primary" />
              <span className="text-xs text-primary font-black uppercase tracking-[0.4em]">Selected Works</span>
            </div>
            <h2 className="font-display text-6xl sm:text-7xl font-bold text-foreground tracking-tighter leading-none">
              Digital Artifacts<br /><span className="text-gradient-orange">Designed for Impact.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-xl max-w-md leading-relaxed font-medium">
            I don't just build websites; I engineer digital experiences that define the next generation of brands.
          </p>
        </motion.div>

        <div className="grid gap-0">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;