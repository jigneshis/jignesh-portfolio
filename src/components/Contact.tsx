import { Mail, MapPin, ArrowUpRight } from "lucide-react";

const socials = [
  { name: "Twitter / X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "GitHub", href: "#" },
  { name: "Instagram", href: "#" },
];

const Contact = () => {
  return (
    <>
      <section id="contact" className="py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="scroll-reveal grid md:grid-cols-2 gap-16 items-center">
            {/* Left */}
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2.5 mb-5">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm text-primary font-medium uppercase tracking-wider">Contact</span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
                  Let's build
                  <br />
                  something
                  <br />
                  <span className="text-primary">great</span>.
                </h2>
              </div>
              <p className="text-muted-foreground max-w-sm leading-relaxed">
                Got a project in mind? Or just want to chat about an idea? I'd love to hear from you.
              </p>
              <a
                href="mailto:hello@jignesh.dev"
                className="group inline-flex items-center gap-3 text-foreground font-medium text-lg hover:text-primary transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={18} className="text-primary" />
                </div>
                hello@jignesh.dev
              </a>
            </div>

            {/* Right — socials */}
            <div className="space-y-4">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="group flex items-center justify-between py-5 px-4 border-b border-border/30 hover:border-primary/30 transition-colors"
                >
                  <span className="text-lg text-muted-foreground group-hover:text-foreground transition-colors">
                    {social.name}
                  </span>
                  <ArrowUpRight
                    size={18}
                    className="text-muted-foreground/50 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="font-display font-bold text-foreground">Jig<span className="italic font-light text-primary">nesh</span></span>
            <span className="text-border">·</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <MapPin size={13} />
            <span>Ajmer, India</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
