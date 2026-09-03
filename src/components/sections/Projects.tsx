import React from 'react';
import { TransitionLink } from '@/components/animations/PageTransition';
import { projects } from '@/data/projects';
import { Section } from '@/components/layout/Section';
import { ScrollReveal } from '@/components/animations/ScrollReveal';
import { ProjectMockup } from '@/components/ui/ProjectMockup';

export function Projects() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <Section id="projects" aria-label="Latest projects" className="flex flex-col gap-12">
      <ScrollReveal className="flex flex-col gap-2">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Latest Projects
        </h2>
        <p className="text-muted text-base">
          Selected full-stack web applications and digital products.
        </p>
      </ScrollReveal>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {featuredProjects.map((project, idx) => (
          <ScrollReveal key={project.slug} delay={idx * 0.1}>
            <div className="flex flex-col gap-4 group">
              {/* Full-bleed realistic project screenshot mockup card */}
              <div className="rounded-3xl border border-border/80 overflow-hidden aspect-video bg-card shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-foreground/30 group-hover:-translate-y-1">
                <a
                  href={project.liveUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full sm:cursor-none cursor-pointer"
                >
                  <ProjectMockup slug={project.slug} />
                </a>
              </div>

              {/* Bottom Info below the card */}
              <div className="flex items-center justify-between px-1">
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted mt-0.5">
                    {project.category}
                  </p>
                </div>
                <a
                  href={project.liveUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-foreground hover:opacity-75 transition-opacity inline-flex items-center gap-1"
                >
                  <span>↗</span>
                  <span>View Project</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* View All Projects Link */}
      <div className="flex justify-center pt-4">
        <TransitionLink
          href="/projects"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:opacity-80 transition-opacity"
        >
          <span>View all my projects</span>
          <span className="transition-transform group-hover:translate-x-0.5">↗</span>
        </TransitionLink>
      </div>
    </Section>
  );
}
