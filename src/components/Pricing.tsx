import { Globe, Layout, RefreshCw, MessageCircle, Paintbrush, Rocket } from "lucide-react";

const services = [
  {
    icon: Layout,
    title: "Landing Pages",
    description: "Single-page sites that convert — perfect for launches, events, or lead generation.",
  },
  {
    icon: Globe,
    title: "Full Websites",
    description: "Multi-page, fully responsive websites with CMS, SEO, and everything your business needs.",
  },
  {
    icon: RefreshCw,
    title: "Redesigns",
    description: "Already have a site? I'll modernize it with a fresh design and better performance.",
  },
];

const steps = [
  { icon: MessageCircle, step: "01", title: "Chat", description: "We discuss your goals, brand, and timeline." },
  { icon: Paintbrush, step: "02", title: "Design", description: "I design and build your site with your feedback." },
  { icon: Rocket, step: "03", title: "Launch", description: "We go live. You get ongoing support." },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="scroll-reveal mb-16">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="text-sm text-primary font-medium">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg">
            Every project is unique. I offer custom quotes based on your needs — no hidden fees, no surprises.
          </p>
        </div>

        {/* Services */}
        <div className="scroll-reveal grid sm:grid-cols-3 gap-6 mb-20">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-secondary border border-border rounded-xl p-6 space-y-3 hover:border-primary/30 transition-colors"
            >
              <s.icon size={24} className="text-primary" />
              <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="scroll-reveal mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-10 text-center">
            How it works
          </h3>
          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
                  <s.icon size={20} className="text-primary" />
                </div>
                <p className="text-xs text-primary font-mono">{s.step}</p>
                <h4 className="text-lg font-semibold text-foreground">{s.title}</h4>
                <p className="text-sm text-muted-foreground">{s.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="scroll-reveal text-center">
          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors text-sm"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
