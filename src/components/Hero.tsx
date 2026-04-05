const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-24 pb-16">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2 border border-border rounded-full px-4 py-1.5 text-sm text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for new projects
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-foreground">
          Your brand deserves
          <br />
          better than a template<span className="text-primary">.</span>
        </h1>

        {/* Subtext */}
        <p className="text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto leading-relaxed">
          I build fast, clean websites for real businesses — gyms, studios, local brands — that actually look the part.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#work"
            className="bg-primary text-primary-foreground font-medium px-7 py-3 rounded-full hover:bg-primary/90 transition-colors text-sm"
          >
            See My Work
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground hover:text-foreground font-medium px-7 py-3 rounded-full border border-border hover:border-muted-foreground transition-colors text-sm"
          >
            How I Work
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-3 pt-4">
          <div className="flex -space-x-2">
            {[
              "bg-primary/30",
              "bg-primary/50",
              "bg-primary/20",
              "bg-muted",
            ].map((bg, i) => (
              <div
                key={i}
                className={`w-8 h-8 rounded-full ${bg} border-2 border-background flex items-center justify-center text-[10px] font-medium text-foreground/70`}
              >
                {["R", "P", "A", "S"][i]}
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Trusted by <span className="text-foreground font-medium">7+</span> businesses across Rajasthan
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
