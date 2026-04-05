import { useState } from "react";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "FitZone Gym",
    tags: ["Landing Page", "Responsive"],
    year: "2024",
    description: "A bold, energetic landing page for Ajmer's fastest-growing fitness center. Mobile-first design with class schedules and membership CTAs.",
  },
  {
    name: "Chai & Co Café",
    tags: ["Full Website", "Menu System"],
    year: "2024",
    description: "Warm, inviting multi-page website for a specialty chai café. Interactive menu, location map, and online ordering integration.",
  },
  {
    name: "Studio Luxe Salon",
    tags: ["Landing Page", "Booking"],
    year: "2023",
    description: "Elegant, minimal one-pager for a premium salon. Integrated booking widget, service showcase, and Instagram feed.",
  },
  {
    name: "Ajmer Heritage Stays",
    tags: ["Full Website", "Gallery"],
    year: "2023",
    description: "Heritage-inspired website for a boutique homestay. Rich photo gallery, room listings, and direct WhatsApp booking.",
  },
  {
    name: "DevCraft Agency",
    tags: ["Portfolio", "SaaS"],
    year: "2023",
    description: "Clean, dark-themed portfolio for a dev agency. Case studies, team section, and custom contact form with email integration.",
  },
];

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="work" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="scroll-reveal mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Work</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Selected projects<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            A few recent builds for businesses that needed more than just a "website."
          </p>
        </div>

        <div className="scroll-reveal">
          {projects.map((project, i) => (
            <div
              key={project.name}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Gradient line */}
              <div className={`gradient-line transition-opacity duration-300 ${hoveredIndex === i ? 'opacity-100' : 'opacity-30'}`} />
              
              <div className="py-7 md:py-10 px-2 md:px-6 cursor-pointer transition-all duration-300 hover:px-8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6 md:gap-10 flex-1 min-w-0">
                    {/* Number */}
                    <span className="text-stroke font-display text-3xl md:text-4xl font-bold hidden sm:block w-16">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    {/* Name + tags */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-4 flex-wrap">
                        <h3 className="font-display text-xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {project.name}
                        </h3>
                        <div className="hidden sm:flex gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] px-3 py-1 rounded-full border border-border/50 text-muted-foreground uppercase tracking-wider"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Expandable description */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-out ${
                          hoveredIndex === i ? "max-h-20 opacity-100 mt-3" : "max-h-0 opacity-0"
                        }`}
                      >
                        <p className="text-sm text-muted-foreground max-w-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Year + Arrow */}
                  <div className="flex items-center gap-4 md:gap-8">
                    <span className="text-sm text-muted-foreground hidden md:block">{project.year}</span>
                    <div className="w-10 h-10 rounded-full border border-border group-hover:border-primary/50 group-hover:bg-primary/10 flex items-center justify-center transition-all duration-300">
                      <ArrowUpRight
                        size={16}
                        className="text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="gradient-line opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default Work;
