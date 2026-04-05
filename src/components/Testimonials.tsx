import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Jignesh turned our outdated website into something our members actually love. The booking flow is seamless now.",
    name: "Rohit Sharma",
    role: "Owner, FitZone Gym",
    initials: "RS",
  },
  {
    quote: "We went from having no online presence to getting daily orders through our site. Couldn't be happier.",
    name: "Priya Meena",
    role: "Founder, Chai & Co Café",
    initials: "PM",
  },
  {
    quote: "He understood our brand from day one. The site feels luxurious but loads in seconds. Our clients love it.",
    name: "Anita Verma",
    role: "Director, Studio Luxe Salon",
    initials: "AV",
  },
  {
    quote: "Professional, fast, and incredibly easy to work with. He delivered exactly what we envisioned — and then some.",
    name: "Suresh Joshi",
    role: "Manager, Ajmer Heritage Stays",
    initials: "SJ",
  },
  {
    quote: "Our portfolio site has directly landed us three new clients. The ROI on this was insane.",
    name: "Dev Patel",
    role: "Co-founder, DevCraft Agency",
    initials: "DP",
  },
  {
    quote: "Fast turnaround, great communication, and a beautiful end product. Will definitely work with him again.",
    name: "Kavita Singh",
    role: "Owner, Bloom Florists",
    initials: "KS",
  },
];

const TestimonialCard = ({ quote, name, role, initials }: typeof testimonials[0]) => (
  <div className="flex-shrink-0 w-80 sm:w-96 bg-secondary border border-border rounded-xl p-6 space-y-4">
    <Quote size={20} className="text-primary/50" />
    <p className="text-sm text-muted-foreground leading-relaxed">{quote}</p>
    <div className="flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-xs font-semibold text-primary">
        {initials}
      </div>
      <div>
        <p className="text-sm font-medium text-foreground">{name}</p>
        <p className="text-xs text-muted-foreground">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <div className="scroll-reveal">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-primary font-medium">Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            What clients say
          </h2>
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
