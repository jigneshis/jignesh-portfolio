import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { Section } from '@/components/layout/Section';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function Pricing() {
  const packages = [
    {
      title: 'Landing Page',
      badge: 'Fast Delivery',
      description: 'Perfect for startups and businesses needing a fast, beautiful web presence.',
      features: [
        'Responsive design (mobile-first)',
        'Up to 5 pages',
        'SEO optimization & meta tags',
        'Sub-second performance tuning',
        'Contact form / WhatsApp setup',
        'Vercel analytics integration',
      ],
      timeline: '2-3 weeks',
      isPopular: false,
    },
    {
      title: 'Web Application',
      badge: 'Most Popular',
      description: 'Custom-built web apps with modern architecture and scalable backends.',
      features: [
        'Full-stack development (React + Node.js)',
        'Database design & migrations (PostgreSQL/Supabase)',
        'Authentication & user management',
        'Custom REST / GraphQL APIs',
        'Cloud deployment & edge caching',
        '30 days post-launch support included',
      ],
      timeline: '4-8 weeks',
      isPopular: true,
    },
    {
      title: 'Enterprise Platform',
      badge: 'Complex Scope',
      description: 'For complex platforms that need senior-level architecture and execution.',
      features: [
        'Everything in Web Application',
        'Custom system architecture design',
        'Advanced performance auditing',
        'Robust CI/CD pipeline setup',
        'High-concurrency security practices',
        'Dedicated ongoing retainer support',
      ],
      timeline: 'Custom timeline',
      isPopular: false,
    },
  ];

  return (
    <Section id="pricing" aria-label="Pricing" hasDivider className="py-20 md:py-28">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end mb-12">
        <ScrollReveal className="md:col-span-7 flex flex-col gap-2">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            <span className="text-muted-foreground font-normal block">Simple Pricing.</span>
            <span className="block text-foreground">Exceptional Results.</span>
          </h2>
        </ScrollReveal>
        <ScrollReveal className="md:col-span-5" delay={0.1}>
          <p className="text-muted text-sm sm:text-base">
            Clear scope, no surprises. Choose the package that fits your project, or
            let&apos;s discuss custom requirements.
          </p>
        </ScrollReveal>
      </div>

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {packages.map((pkg, idx) => (
          <ScrollReveal key={pkg.title} delay={idx * 0.1}>
            <div
              className={`rounded-3xl p-8 h-full flex flex-col justify-between border transition-all ${
                pkg.isPopular
                  ? 'bg-surface-dark text-surface-dark-foreground border-neutral-800 shadow-2xl scale-[1.02]'
                  : 'bg-card text-foreground border-border hover:border-foreground/30 shadow-md'
              }`}
            >
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <span
                    className={`text-xs px-3 py-1 rounded-full font-medium ${
                      pkg.isPopular
                        ? 'bg-white/10 text-white border border-white/20'
                        : 'bg-foreground/5 text-muted-foreground border border-border'
                    }`}
                  >
                    {pkg.badge}
                  </span>
                  <span className="text-xs text-muted font-mono">{pkg.timeline}</span>
                </div>

                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold tracking-tight">{pkg.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pkg.description}
                  </p>
                </div>

                <div className="border-t border-border/40 pt-4 flex flex-col gap-3">
                  {pkg.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <span className="text-accent font-bold">✓</span>
                      <span className="text-zinc-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-full text-center text-xs font-semibold block transition-all hover:opacity-90 ${
                    pkg.isPopular
                      ? 'bg-white text-black hover:bg-neutral-100'
                      : 'bg-foreground text-background'
                  }`}
                >
                  Let&apos;s discuss ↗
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
