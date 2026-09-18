import React from 'react';
import Image from 'next/image';
import { siteConfig } from '@/data/siteConfig';
import { socialLinks } from '@/data/social';
import { Section } from '@/components/layout/Section';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { GithubIcon, TwitterXIcon, InstagramIcon, DiscordIcon } from '@/components/ui/Icons';

function getSocialIcon(platform: string) {
  switch (platform) {
    case 'github':
      return <GithubIcon size={14} />;
    case 'twitter':
      return <TwitterXIcon size={13} />;
    case 'instagram':
      return <InstagramIcon size={14} />;
    case 'discord':
      return <DiscordIcon size={14} />;
    default:
      return null;
  }
}

export function About() {
  return (
    <Section id="about" aria-label="About me" hasDivider className="py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Full-bleed portrait card with overlaid social links */}
        <ScrollReveal className="lg:col-span-5 flex flex-col items-center lg:items-start gap-3">
          <div className="relative w-full max-w-sm aspect-4/5 rounded-3xl border border-border overflow-hidden shadow-lg group bg-card">
            <Image
              src="/images/profile/jignesh-portrait.jpg"
              alt="Portrait of Jignesh Wadhwani"
              fill
              className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 384px"
              priority
            />

            {/* Bottom vignette for social bar readability */}
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

            {/* Floating Glass Social Bar */}
            <div className="absolute bottom-4 inset-x-4 flex items-center justify-center gap-2.5 py-2 px-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 shadow-lg">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all hover:scale-110"
                  aria-label={social.label}
                  title={social.label}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>

          {/* Name & Title below portrait card (reference layout) */}
          <div className="w-full max-w-sm px-1 text-center lg:text-left">
            <h3 className="text-xl font-bold text-foreground tracking-tight">{siteConfig.name}</h3>
            <p className="text-xs font-medium text-muted mt-0.5">{siteConfig.title}</p>
          </div>
        </ScrollReveal>

        {/* Right Column: Bio text */}
        <ScrollReveal className="lg:col-span-7 flex flex-col gap-6" delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            <span className="text-muted-foreground font-normal block">Building Software That</span>
            <span className="block text-foreground">Solves Real Problems.</span>
          </h2>

          <div className="flex flex-col gap-4 text-muted text-base sm:text-lg leading-relaxed font-normal">
            <p>
              I&apos;m {siteConfig.name} (friends call me {siteConfig.nickname}). I build web applications and digital products that deliver measurable growth for your business. Good software should just work without getting in the way of what users are trying to do.
            </p>
            <p>
              My day-to-day stack revolves around React, Next.js, TypeScript, and Node.js. I handle the entire lifecycle, from clean database architecture and rock-solid APIs all the way down to polished, pixel-perfect user interfaces that convert.
            </p>
            <p>
              I treat every client project like my own product. You get direct communication, clean and maintainable code, and reliable delivery without the corporate fluff or endless agency overhead.
            </p>
          </div>

          {/* Authentic Handwritten Signature (Dual Theme) */}
          <div className="pt-2 select-none pointer-events-none">
            <Image
              src="/images/signature-light.png"
              alt={`${siteConfig.name} Signature`}
              width={200}
              height={123}
              className="dark:hidden w-44 sm:w-52 h-auto object-contain"
              unoptimized
            />
            <Image
              src="/images/signature-dark.png"
              alt={`${siteConfig.name} Signature`}
              width={200}
              height={123}
              className="hidden dark:block w-44 sm:w-52 h-auto object-contain"
              unoptimized
            />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}
