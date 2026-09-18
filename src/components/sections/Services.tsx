import React from 'react';
import { services } from '@/data/services';
import { techStack } from '@/data/techStack';
import { Section } from '@/components/layout/Section';
import { Tooltip } from '@/components/ui/Tooltip';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import {
  ReactIcon,
  NextjsIcon,
  TypeScriptIcon,
  NodejsIcon,
  PostgresIcon,
  SupabaseIcon,
  MongoIcon,
  TailwindIcon,
  FigmaIcon,
  GithubIcon,
  RedisIcon,
  AWSIcon,
  FrontendIcon,
  BackendIcon,
  FullStackIcon,
  DatabaseIcon,
  CloudDevOpsIcon,
  UIIcon,
  PerformanceIcon,
  AntigravityIcon,
  CodexIcon,
  ClaudeIcon,
} from '@/components/ui/Icons';

function getTechIcon(name: string) {
  switch (name.toLowerCase()) {
    case 'react':
      return <ReactIcon size={22} />;
    case 'next.js':
      return <NextjsIcon size={22} />;
    case 'typescript':
      return <TypeScriptIcon size={22} />;
    case 'node.js':
      return <NodejsIcon size={22} />;
    case 'postgresql':
      return <PostgresIcon size={22} />;
    case 'supabase':
      return <SupabaseIcon size={22} />;
    case 'mongodb':
      return <MongoIcon size={22} />;
    case 'tailwind css':
      return <TailwindIcon size={22} />;
    case 'antigravity':
      return <AntigravityIcon size={22} />;
    case 'openai codex':
    case 'codex':
      return <CodexIcon size={22} />;
    case 'claude code':
    case 'claude':
      return <ClaudeIcon size={22} />;
    case 'figma':
      return <FigmaIcon size={20} />;
    case 'github':
    case 'git':
      return <GithubIcon size={22} />;
    case 'redis':
      return <RedisIcon size={22} />;
    case 'aws':
      return <AWSIcon size={22} />;
    default:
      return <span className="text-xs font-bold">{name.slice(0, 2).toUpperCase()}</span>;
  }
}

function getServiceIcon(title: string) {
  switch (title.toLowerCase()) {
    case 'frontend development':
      return <FrontendIcon size={20} />;
    case 'backend & apis':
      return <BackendIcon size={20} />;
    case 'full-stack web apps':
      return <FullStackIcon size={20} />;
    case 'database architecture':
      return <DatabaseIcon size={20} />;
    case 'cloud & devops':
      return <CloudDevOpsIcon size={20} />;
    case 'ui implementation':
      return <UIIcon size={20} />;
    case 'performance optimization':
      return <PerformanceIcon size={20} />;
    default:
      return <FrontendIcon size={20} />;
  }
}

export function Services() {
  return (
    <Section id="services" aria-label="Services" hasDivider className="py-20 md:py-28">
      <div className="flex flex-col gap-12">
        {/* Section Header */}
        <ScrollReveal className="flex flex-col gap-3 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.15]">
            <span className="text-muted-foreground font-normal">Engineering services to</span>{' '}
            scale your business.
          </h2>
          <p className="text-muted text-sm sm:text-base leading-relaxed">
            Full-cycle engineering from database architecture to high-converting user
            interfaces.
          </p>
        </ScrollReveal>

        {/* Tech Stack Grid — Full-width row with labels */}
        <ScrollReveal delay={0.1} className="flex flex-col gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted">
            My tech stack
          </span>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-15 gap-3">
            {techStack.map((tech) => (
              <Tooltip key={tech.name} content={tech.name}>
                <div className="flex flex-col items-center gap-1.5 cursor-default group">
                  <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center text-foreground hover:border-foreground/30 hover:scale-105 hover:bg-card/80 transition-all shadow-2xs">
                    {getTechIcon(tech.name)}
                  </div>
                  <span className="text-[10px] text-muted text-center leading-tight truncate w-full">
                    {tech.name}
                  </span>
                </div>
              </Tooltip>
            ))}
          </div>
        </ScrollReveal>

        {/* Services List — Full-width grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.05}>
              <div className="p-5 rounded-2xl bg-card border border-border flex items-center gap-4 hover:border-foreground/20 transition-all group">
                <div className="w-10 h-10 rounded-full bg-foreground text-background flex items-center justify-center shrink-0 shadow-xs group-hover:scale-105 transition-transform">
                  {getServiceIcon(service.title)}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-base font-semibold text-foreground">
                    {service.title}
                  </h3>
                  {service.description && (
                    <p className="text-xs text-muted mt-0.5 leading-relaxed">
                      {service.description}
                    </p>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
