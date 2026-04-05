"use client";

import {
  Code2, Figma, Globe, Layers, Monitor, Paintbrush,
  Server, Smartphone, Sparkles, Terminal, Triangle, Zap,
} from "lucide-react";

const techs = [
  { name: "React", icon: Code2 },
  { name: "Next.js", icon: Globe },
  { name: "Tailwind CSS", icon: Paintbrush },
  { name: "TypeScript", icon: Terminal },
  { name: "Framer Motion", icon: Sparkles },
  { name: "Supabase", icon: Server },
  { name: "Vercel", icon: Triangle },
  { name: "JavaScript", icon: Zap },
  { name: "HTML/CSS", icon: Monitor },
  { name: "Figma", icon: Figma },
  { name: "Node.js", icon: Layers },
  { name: "shadcn/ui", icon: Smartphone },
];

const TechPill = ({ name, icon: Icon }: { name: string; icon: any }) => (
  <div className="flex items-center gap-2.5 px-4 py-2 md:px-6 md:py-3 bg-secondary/80 rounded-full border border-border/50 text-xs md:text-sm text-foreground whitespace-nowrap hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_20px_-5px_hsl(25_100%_55%/0.2)] transition-all duration-300 cursor-default select-none">
    <Icon size={14} className="text-primary md:w-[16px]" />
    {name}
  </div>
);

const TechStack = () => {
  // Triple the items to ensure smooth infinite loop coverage
  const row1 = [...techs, ...techs, ...techs];
  const row2 = [...techs.slice(6), ...techs.slice(0, 6), ...techs.slice(6), ...techs.slice(0, 6), ...techs.slice(6), ...techs.slice(0, 6)];

  return (
    <section id="tech" className="fluid-py overflow-hidden">
      <div className="container-wide mb-10 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2.5 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[10px] md:text-xs text-primary font-bold uppercase tracking-wider">Tech Stack</span>
            </div>
            <h2 className="font-display fluid-h2 font-bold text-foreground">
              Tools I build with<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm md:text-base max-w-sm">
            Modern frameworks & tools for websites that are fast, beautiful, and built to last.
          </p>
        </div>
      </div>

      <div className="space-y-4 md:space-y-6 pause-on-hover mask-fade-edges">
        <div className="flex gap-4 animate-marquee w-max">
          {row1.map((tech, i) => (
            <TechPill key={`a-${tech.name}-${i}`} {...tech} />
          ))}
        </div>
        <div className="flex gap-4 animate-marquee-reverse w-max">
          {row2.map((tech, i) => (
            <TechPill key={`b-${tech.name}-${i}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;