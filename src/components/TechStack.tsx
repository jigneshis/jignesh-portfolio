import {
  Code2,
  Figma,
  Globe,
  Layers,
  Monitor,
  Paintbrush,
  Server,
  Smartphone,
  Sparkles,
  Terminal,
  Triangle,
  Zap,
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
  <div className="flex items-center gap-2 px-4 py-2 bg-secondary rounded-full border border-border text-sm text-foreground whitespace-nowrap hover:border-primary/50 hover:shadow-[0_0_15px_-3px_hsl(var(--primary)/0.3)] transition-all duration-300 cursor-default">
    <Icon size={16} className="text-primary" />
    {name}
  </div>
);

const TechStack = () => {
  const doubled = [...techs, ...techs];

  return (
    <section id="tech" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="scroll-reveal">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-primary font-medium">Tech Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Tools I build with
          </h2>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-4 animate-marquee">
          {doubled.map((tech, i) => (
            <TechPill key={`${tech.name}-${i}`} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
