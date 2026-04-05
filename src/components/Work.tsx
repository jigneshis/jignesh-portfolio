import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    name: "FitZone Gym",
    tags: ["Landing Page", "Responsive"],
    description: "A bold, energetic landing page for Ajmer's fastest-growing fitness center. Mobile-first design with class schedules and membership CTAs.",
  },
  {
    name: "Chai & Co Café",
    tags: ["Full Website", "Menu System"],
    description: "Warm, inviting multi-page website for a specialty chai café. Features an interactive menu, location map, and online ordering integration.",
  },
  {
    name: "Studio Luxe Salon",
    tags: ["Landing Page", "Booking"],
    description: "Elegant, minimal one-pager for a premium salon. Integrated booking widget, service showcase, and Instagram feed.",
  },
  {
    name: "Ajmer Heritage Stays",
    tags: ["Full Website", "Gallery"],
    description: "A heritage-inspired website for a boutique homestay. Rich photo gallery, room listings, and direct WhatsApp booking.",
  },
  {
    name: "DevCraft Agency",
    tags: ["Portfolio", "SaaS"],
    description: "Clean, dark-themed portfolio site for a dev agency. Case studies, team section, and a custom contact form with email integration.",
  },
];

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="scroll-reveal mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-primary font-medium">Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Selected projects
          </h2>
        </div>

        <div className="scroll-reveal space-y-0 border-t border-border">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="group border-b border-border py-6 md:py-8 cursor-pointer transition-colors hover:bg-secondary/30"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center justify-between px-2 md:px-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground text-sm font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-xl md:text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.name}
                    </h3>
                    <div className="hidden sm:flex gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2.5 py-0.5 rounded-full border border-border text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable description */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      hoveredIndex === i ? "max-h-24 opacity-100 mt-3" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground pl-10 max-w-xl">
                      {project.description}
                    </p>
                  </div>
                </div>

                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
