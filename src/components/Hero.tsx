const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 pb-16 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/3 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative max-w-5xl mx-auto text-center space-y-10">
        {/* Availability badge */}
        <div className="inline-flex items-center gap-2.5 border border-primary/20 bg-primary/5 rounded-full px-5 py-2 text-sm text-primary">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-primary animate-pulse-dot" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          Available for new projects
        </div>

        {/* Headline */}
        <div className="space-y-2">
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-foreground">
            Your brand
          </h1>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight">
            <span className="text-stroke text-5xl sm:text-6xl md:text-7xl lg:text-8xl">deserves</span>
          </h1>
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tight text-foreground">
            better<span className="text-primary glow-text">.</span>
          </h1>
        </div>

        {/* Subtext */}
        <p className="text-muted-foreground text-lg sm:text-xl max-w-lg mx-auto leading-relaxed">
          I craft fast, stunning websites for real businesses — gyms, cafés, studios — that
          <span className="text-foreground font-medium"> actually convert</span>.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="#work"
            className="group relative bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-full hover:shadow-[0_0_40px_-5px_hsl(25_100%_55%/0.6)] transition-all duration-300 hover:scale-105 text-sm tracking-wide"
          >
            See My Work
            <span className="absolute inset-0 rounded-full bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="#pricing"
            className="text-muted-foreground hover:text-foreground font-medium px-8 py-3.5 rounded-full border border-border hover:border-primary/40 transition-all duration-300 text-sm tracking-wide"
          >
            How I Work →
          </a>
        </div>

        {/* Social proof */}
        <div className="flex items-center justify-center gap-4 pt-6">
          <div className="flex -space-x-3">
            {["RS", "PM", "AV", "SJ"].map((initials, i) => (
              <div
                key={i}
                className="w-9 h-9 rounded-full bg-secondary border-2 border-background flex items-center justify-center text-[11px] font-semibold text-muted-foreground"
              >
                {initials}
              </div>
            ))}
          </div>
          <div className="text-sm text-muted-foreground">
            Trusted by <span className="text-primary font-semibold">7+</span> businesses
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/40">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
