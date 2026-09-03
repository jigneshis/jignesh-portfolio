import React from 'react';
import Image from 'next/image';
import { faqItems } from '@/data/faq';
import { siteConfig } from '@/data/siteConfig';
import { Section } from '@/components/layout/Section';
import { Accordion } from '@/components/ui/Accordion';
import { ScrollReveal } from '@/components/animations/ScrollReveal';

export function FAQ() {
  return (
    <Section id="faq" aria-label="Frequently asked questions" hasDivider className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Heading + Accordion */}
        <ScrollReveal className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
              <span className="text-muted-foreground font-normal block">Your Questions</span>
              <span className="block text-foreground">Answered.</span>
            </h2>
            <p className="text-muted text-sm sm:text-base">
              Everything you need to know about working together and project delivery.
            </p>
          </div>

          <div className="pt-2">
            <Accordion items={faqItems} />
          </div>
        </ScrollReveal>

        {/* Right Column: Sticky Discovery Call Card (Smoothly tracks alongside the accordion) */}
        <div className="lg:col-span-5 relative w-full h-full">
          <div className="w-full lg:sticky lg:top-28 rounded-3xl bg-card border border-border/80 p-8 flex flex-col items-center text-center gap-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-foreground/20">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-border shadow-xs shrink-0">
              <Image
                src="/images/profile/jignesh.jpg"
                alt={siteConfig.name}
                width={64}
                height={64}
                className="w-full h-full object-cover"
                unoptimized
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">
                Still not sure?
              </span>
              <h3 className="text-2xl font-bold text-foreground">
                Book a free discovery call.
              </h3>
              <p className="text-muted text-sm leading-relaxed max-w-xs mt-1">
                Learn more about how I work and how I can help bring your digital product to life.
              </p>
            </div>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-foreground text-background font-medium text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-md"
            >
              <span>💬 Let&apos;s Chat</span>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
