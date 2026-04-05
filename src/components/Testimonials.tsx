import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Jignesh turned our outdated website into something our members actually love. The booking flow is seamless now.",
    name: "Rohit Sharma",
    role: "Owner, FitZone Gym",
    initials: "RS",
  },
  {
    quote: "We went from having no online presence to getting daily orders through our site. Best investment we made.",
    name: "Priya Meena",
    role: "Founder, Chai & Co",
    initials: "PM",
  },
  {
    quote: "He understood our brand from day one. The site feels luxurious but loads in seconds. Our clients love it.",
    name: "Anita Verma",
    role: "Director, Studio Luxe",
    initials: "AV",
  },
  {
    quote: "Professional, fast, and incredibly easy to work with. Delivered exactly what we envisioned — and then some.",
    name: "Suresh Joshi",
    role: "Ajmer Heritage Stays",
    initials: "SJ",
  },
  {
    quote: "Our portfolio site has directly landed us three new clients. The ROI on this was insane.",
    name: "Dev Patel",
    role: "Co-founder, DevCraft",
    initials: "DP",
  },
  {
    quote: "Fast turnaround, great communication, beautiful end product. Will definitely work with him again.",
    name: "Kavita Singh",
    role: "Owner, Bloom Florists",
    initials: "KS",
  },
];

const TestimonialCard = ({ quote, name, role, initials }: typeof testimonials[0]) => (
  <div className="flex-shrink-0 w-[340px] sm:w-[400px] tilt-card bg-card border border-border/50 rounded-2xl p-7 space-y-5 relative overflow-hidden group">
    {/* Subtle gradient bg on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="relative">
      <Quote size={24} className="text-primary/30" />
      <p className="text-sm text-muted-foreground leading-relaxed mt-3">{quote}</p>
      
      <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border/30">
        <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
          {initials}
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14">
        <div className="scroll-reveal flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Testimonials</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              Kind words<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Don't just take my word for it — here's what my clients have to say.
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="flex gap-6 animate-marquee-slow">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
