import React from 'react';
import { Metadata } from 'next';
import { NotFoundGraphic } from '@/components/ui/NotFoundGraphic';
import { NotFoundSearch } from '@/components/ui/NotFoundSearch';

export const metadata: Metadata = {
  title: '404 — Page Not Found',
  description: "The page you're looking for doesn't exist or has been moved.",
};

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 sm:px-8 lg:px-12 pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left Column: Text, Search, and Action Pathways */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              <span>404 error</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                Page not found.
              </h1>
              <p className="text-neutral-500 dark:text-neutral-400 text-base sm:text-lg max-w-xl leading-relaxed">
                The link might be broken or the page was moved. Search below or jump to my latest work.
              </p>
            </div>

            {/* Interactive Search Bar & Navigation Pathways */}
            <NotFoundSearch />
          </div>

          {/* Right Column: Giant Dual-Tone 404 Visual Anchor */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex items-center justify-center lg:justify-end">
            <NotFoundGraphic />
          </div>
        </div>
      </div>
    </main>
  );
}
