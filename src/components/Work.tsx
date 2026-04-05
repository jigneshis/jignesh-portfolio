"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";

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

const Work = () => {
  return (
    <section id="work" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-primary" />
              <span className="text-sm text-primary font-bold uppercase tracking-[0.2em]">Selected Work</span>
            </div>
            <h2 className="font-display text-5xl sm:text-6xl font-bold text-foreground tracking-tight">
              Crafting Digital<br /><span className="text-gradient-orange">Masterpieces.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-sm leading-relaxed">
            I don't just build websites; I create digital experiences that define brands.
          </p>
        </motion.div>

        <div className="grid gap-1">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="group relative border-t border-white/5 last:border-b"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative py-12 md:py-20 px-4 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-8 cursor-pointer overflow-hidden transition-all duration-500 group-hover:px-12">
                <div className="flex items-center gap-10 flex-1">
                  <span className="text-stroke font-display text-4xl md:text-5xl font-bold opacity-30 group-hover:opacity-100 group-hover:text-primary transition-all duration-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 flex-wrap">
                      <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground group-hover:translate-x-2 transition-transform duration-500">
                        {project.name}
                      </h3>
                      <div className="flex gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] px-3 py-1 rounded-full glass-card text-muted-foreground uppercase tracking-widest"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="text-muted-foreground max-w-md line-clamp-2 group-hover:text-foreground/80 transition-colors">
                      {project.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-12 self-end md:self-center">
                  <span className="text-sm font-mono text-muted-foreground/50 group-hover:text-primary transition-colors">
                    {project.year}
                  </span>
                  <div className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-500 rotate-[-45deg] group-hover:rotate-0">
                    <ArrowUpRight
                      size={24}
                      className="text-foreground group-hover:text-primary-foreground"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;