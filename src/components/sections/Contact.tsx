import React from 'react';
import { siteConfig } from '@/data/siteConfig';
import { Section } from '@/components/layout/Section';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { WordCycler } from '@/components/animations/WordCycler';

export function Contact() {
  return (
    <Section
      id="contact"
      aria-label="Contact CTA"
      hasDivider
      className="py-24 md:py-36 flex flex-col items-center text-center gap-8"
    >
      <ScrollReveal className="flex flex-col items-center gap-4 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground leading-[1.15] text-center flex flex-col items-center">
          {/* Line 1: Let's [build/create/ship] */}
          <span className="text-muted-foreground font-normal inline-flex items-baseline justify-center whitespace-nowrap">
            <span>Let&apos;s</span>
            <WordCycler
              words={['build', 'create', 'ship']}
              intervalMs={2600}
              className="text-muted-foreground font-normal"
              containerClassName="ml-2 sm:ml-2.5"
            />
          </span>

          {/* Line 2: the future of your [business./startup./project./idea.] */}
          <span className="text-foreground font-bold inline-flex items-baseline justify-center whitespace-nowrap">
            <span>the future of your</span>
            <WordCycler
              words={['business.', 'startup.', 'project.', 'product.']}
              intervalMs={2600}
              className="text-foreground font-bold"
              containerClassName="ml-2 sm:ml-2.5"
            />
          </span>
        </h2>
        <p className="text-muted text-base sm:text-lg max-w-lg leading-relaxed mt-2">
          Have a project in mind or want to discuss opportunities? Send a direct message or
          email and let&apos;s talk through your goals.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={0.1} className="flex flex-wrap items-center justify-center gap-4">
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-3.5 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity shadow-lg"
        >
          Message on WhatsApp ↗
        </a>
        <a
          href={`mailto:${siteConfig.email}`}
          className="px-8 py-3.5 rounded-full bg-card border border-border text-foreground font-medium text-sm hover:bg-border/60 transition-colors shadow-xs"
        >
          Send an Email
        </a>
      </ScrollReveal>
    </Section>
  );
}
