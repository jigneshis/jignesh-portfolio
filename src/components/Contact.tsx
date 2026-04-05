import { Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="scroll-reveal text-center space-y-6 mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Let's build something great<span className="text-primary">.</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Got a project in mind? Let's talk about how I can help bring your vision to life.
          </p>
          <a
            href="mailto:hello@jignesh.dev"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-medium px-8 py-3.5 rounded-full hover:bg-primary/90 transition-colors text-sm"
          >
            <Mail size={16} />
            hello@jignesh.dev
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Jignesh. All rights reserved.</p>
          <div className="flex items-center gap-1.5">
            <MapPin size={14} />
            <span>Ajmer, India</span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
