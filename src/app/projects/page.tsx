import { Metadata } from 'next';
import { siteConfig } from '@/data/siteConfig';
import { projects } from '@/data/projects';
import { ProjectMockup } from '@/components/ui/ProjectMockup';
import { TransitionLink } from '@/components/animations/PageTransition';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore my portfolio of web applications, SaaS platforms, and custom development projects built with React, Next.js, TypeScript, and Node.js.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    type: 'website',
    url: '/projects',
    title: 'Recent Projects — Jignesh Wadhwani',
    description:
      'Explore my portfolio of web applications, SaaS platforms, and custom development projects built with React, Next.js, TypeScript, and Node.js.',
    images: [
      {
        url: '/images/og/default.png',
        width: 1200,
        height: 630,
        alt: 'Projects — Jignesh Wadhwani',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Recent Projects — Jignesh Wadhwani',
    description:
      'Explore my portfolio of web applications, SaaS platforms, and custom development projects built with React, Next.js, TypeScript, and Node.js.',
    images: ['/images/og/default.png'],
  },
};

export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center w-full min-h-screen pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-5xl flex flex-col gap-12">
        {/* Header */}
        <div className="flex flex-col gap-4">
          <TransitionLink
            href="/"
            className="text-xs font-medium text-muted hover:text-foreground transition-colors self-start inline-flex items-center gap-1.5"
          >
            ← Back to Home
          </TransitionLink>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
            My most recent work
          </h1>
          <p className="text-muted text-base sm:text-lg max-w-xl">
            No fluff, just solid engineering and clean code.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project) => {
            const isComingSoon = Boolean(project.comingSoon);

            return (
              <div key={project.slug} className="flex flex-col gap-4 group">
                <div className="relative rounded-3xl border border-border/80 overflow-hidden aspect-video bg-card shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:border-foreground/30 group-hover:-translate-y-1">
                  {isComingSoon ? (
                    <div className="block w-full h-full relative cursor-default">
                      <ProjectMockup slug={project.slug} />
                    </div>
                  ) : (
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full sm:cursor-none cursor-pointer"
                    >
                      <ProjectMockup slug={project.slug} />
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between px-1">
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-foreground/80 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-muted mt-0.5">{project.category}</p>
                  </div>

                  {isComingSoon ? (
                    <span className="text-xs font-medium text-muted">
                      Coming Soon
                    </span>
                  ) : (
                    <a
                      href={project.liveUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-foreground hover:opacity-75 transition-opacity inline-flex items-center gap-1"
                    >
                      <span>↗</span>
                      <span>View Project</span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 p-8 sm:p-12 rounded-3xl bg-card border border-border text-center flex flex-col items-center gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Like what you see?
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-md">
            Let&apos;s discuss your project and explore how we can collaborate.
          </p>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-8 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 transition-opacity"
          >
            💬 Let&apos;s Chat
          </a>
        </div>
      </div>
    </main>
  );
}
