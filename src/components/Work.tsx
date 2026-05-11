"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "CrewCut",
    href: "https://app.crewcut.in",
    tags: ["SaaS Startup", "Marketplace"],
    year: "2024",
    description: "A professional ecosystem for video agencies to manage editors, provide timestamped feedback, and automate creative workflows at scale.",
  },
  {
    name: "KeySync",
    href: "https://keysync-jigneshis.vercel.app/",
    tags: ["Security Tool", "Brutalist UI"],
    year: "2024",
    description: "A high-performance, brutalist password utility for developers who prioritize data sovereignty. Manage secrets in total isolation with zero cloud dependency.",
  },
  {
    name: "Abi Editz",
    href: "https://madxedits.com/",
    tags: ["Video Portfolio", "Cinematic Edits"],
    year: "2025",
    description: "A premium video editor portfolio featuring cinematic transitions, beat-sync editing, and high-impact visual storytelling for social media platforms.",
  },
  {
    name: "Ishant Kale",
    href: "https://ishanttt.vercel.app",
    tags: ["Video Portfolio", "Creator Site"],
    year: "2024",
    description: "A video editor's portfolio designed to showcase his work and get more clients through high-impact visual storytelling.",
  },
  {
    name: "Samim",
    href: "https://illusion-gold.vercel.app",
    tags: ["Editor Site", "Brand Growth"],
    year: "2024",
    description: "A specialized portfolio for a video editor focused on showcasing creative work to attract premium brand collaborations.",
  },
  {
    name: "Flash",
    href: "https://theycallmeflash.vercel.app",
    tags: ["Visual Effects", "Portfolio"],
    year: "2023",
    description: "A high-octane video editor portfolio designed to capture attention and highlight technical editing mastery.",
  },
  {
    name: "Bharat Esports",
    href: "https://bharatesports.online",
    tags: ["Full Stack", "Gaming Hub"],
    year: "2024",
    description: "A comprehensive full-stack platform for esports tournament organizers to manage, track, and host professional events.",
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0], index: number }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative border-t border-white/[0.05] last:border-b block"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.05] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative py-12 md:py-20 px-4 md:px-12 flex flex-col md:flex-row md:items-center justify-between gap-8 md:gap-10 cursor-pointer transition-all duration-700 group-hover:bg-white/[0.01]">
        <div className="flex items-center gap-6 md:gap-12 flex-1" style={{ transform: "translateZ(30px)" }}>
          <span className="text-stroke font-display text-4xl md:text-6xl font-bold opacity-20 group-hover:opacity-100 group-hover:text-primary transition-all duration-700">
            {String(index + 1).padStart(2, "0")}
          </span>

          <div className="space-y-4">
            <div className="flex items-center gap-4 flex-wrap">
              <h3 className="font-display text-3xl md:text-5xl font-bold text-foreground group-hover:translate-x-2 transition-transform duration-700">
                {project.name}
              </h3>
              <div className="flex gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[9px] px-3 py-1 rounded-full glass-card text-muted-foreground uppercase tracking-widest font-bold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-8 md:gap-12 self-end md:self-center" style={{ transform: "translateZ(20px)" }}>
          <span className="text-[10px] md:text-xs font-mono text-muted-foreground/40 font-bold uppercase tracking-widest">
            {project.year}
          </span>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-white/[0.08] flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-700 rotate-[-45deg] group-hover:rotate-0 shadow-xl">
            <ArrowUpRight
              size={24}
              className="text-foreground group-hover:text-primary-foreground transition-colors md:w-[28px]"
            />
          </div>
        </div>
      </div>
    </motion.a>
  );
};

const Work = () => {
  return (
    <section id="work" className="fluid-py relative">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-8 md:w-12 h-[1px] bg-primary" />
              <span className="text-[10px] md:text-xs text-primary font-black uppercase tracking-[0.3em]">Selected Works</span>
            </div>
            <h2 className="font-display fluid-h2 font-bold text-foreground">
              Digital Artifacts<br /><span className="text-gradient-nebula">Designed for Impact.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-base md:text-lg max-w-md font-medium">
            I engineer digital experiences that define the next generation of premium brands.
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