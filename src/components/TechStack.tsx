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

const TechPill = ({ name, icon: Icon }: { name: string; icon: typeof Code2 }) => (
  <div className="flex items-center gap-2.5 px-5 py-2.5 bg-secondary/80 rounded-full border border-border/50 text-sm text-foreground whitespace-nowrap hover:border-primary/40 hover:bg-primary/5 hover:shadow-[0_0_20px_-5px_hsl(25_100%_55%/0.2)] transition-all duration-300 cursor-default select-none">
    <Icon size={15} className="text-primary" />
    {name}
  </div>
);

const TechStack = () => {
  const row1 = [...techs, ...techs];
  const row2 = [...techs.slice(6), ...techs.slice(0, 6), ...techs.slice(6), ...techs.slice(0, 6)];

  return (
    <section id="tech" className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14">
        <div className="scroll-reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Tech Stack</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Tools I build with<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Modern frameworks & tools for websites that are fast, beautiful, and built to last.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex gap-4 animate-marquee">
          {row1.map((tech, i) => (
            <TechPill key={`a-${tech.name}-${i}`} {...tech} />
          ))}
        </div>
        <div className="flex gap-4 animate-marquee-reverse">
          {row2.map((tech, i) => (
            <TechPill key={`b-${tech.name}-${i}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
