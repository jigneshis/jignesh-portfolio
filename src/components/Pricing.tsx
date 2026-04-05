import { Globe, Layout, RefreshCw, MessageCircle, Paintbrush, Rocket, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Single-page sites that convert — perfect for launches, events, or lead generation.",
    emoji: "🚀",
  },
  {
    icon: Globe,
    title: "Full Websites",
    description: "Multi-page, fully responsive websites with CMS, SEO, and everything your business needs.",
    emoji: "🌐",
  },
  {
    icon: RefreshCw,
    title: "Redesigns",
    description: "Already have a site? I'll modernize it with a fresh design and better performance.",
    emoji: "✨",
  },
];

const steps = [
  { icon: MessageCircle, step: "01", title: "Chat", description: "We discuss your goals, brand, and timeline over a quick call." },
  { icon: Paintbrush, step: "02", title: "Design & Build", description: "I design and build your site iteratively with your feedback." },
  { icon: Rocket, step: "03", title: "Launch", description: "We go live together. You get ongoing support & maintenance." },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="scroll-reveal mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5 mb-5">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm text-primary font-medium uppercase tracking-wider">Pricing</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground">
              No templates<span className="text-primary">,</span>
              <br />
              no surprises<span className="text-primary">.</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs">
            Every project gets a custom quote based on scope. Transparent pricing, no hidden fees.
          </p>
        </div>

        {/* Services */}
        <div className="scroll-reveal grid sm:grid-cols-3 gap-5 mb-24">
          {services.map((s) => (
            <div
              key={s.title}
              className="tilt-card bg-card border border-border/50 rounded-2xl p-8 space-y-4 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="text-3xl mb-2">{s.emoji}</div>
                <h3 className="font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mt-2">{s.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="scroll-reveal mb-20">
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-14 text-center">
            How it works<span className="text-primary">.</span>
          </h3>
          <div className="grid sm:grid-cols-3 gap-10 relative">
            {/* Connecting line */}
            <div className="hidden sm:block absolute top-8 left-[20%] right-[20%] h-px bg-gradient-to-r from-border via-primary/30 to-border" />
            
            {steps.map((s, i) => (
              <div key={s.step} className="text-center space-y-4 relative">
                <div className="w-16 h-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center mx-auto relative z-10 group hover:border-primary/40 transition-colors">
                  <s.icon size={22} className="text-primary" />
                </div>
                <p className="text-xs text-primary font-mono tracking-widest">{s.step}</p>
                <h4 className="font-display text-lg font-bold text-foreground">{s.title}</h4>
                <p className="text-sm text-muted-foreground max-w-[250px] mx-auto">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-reveal">
          <div className="relative bg-card border border-border/50 rounded-3xl p-10 sm:p-16 text-center overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
            <div className="relative space-y-6">
              <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                Ready to stand out<span className="text-primary">?</span>
              </h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Let's talk about your project. I'll get back to you within 24 hours with a custom plan and quote.
              </p>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-full hover:shadow-[0_0_40px_-5px_hsl(25_100%_55%/0.6)] transition-all duration-300 hover:scale-105 text-sm tracking-wide"
              >
                Get a Free Quote
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
