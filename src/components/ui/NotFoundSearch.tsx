'use client';

import React from 'react';
import { TransitionLink } from '@/components/animations/PageTransition';

export function NotFoundSearch() {
  return (
    <div className="w-full max-w-2xl space-y-6 pt-2">
      {/* Primary Return Button */}
      <div>
        <TransitionLink
          href="/"
          className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-foreground text-background font-semibold text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-md group"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span>
          <span>Return to home</span>
        </TransitionLink>
      </div>

      {/* Enhanced Pathway Cards Grid */}
      <div className="pt-4 border-t border-neutral-200/70 dark:border-neutral-800">
        <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
          Explore helpful pathways
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Card 1: All Projects */}
          <TransitionLink
            href="/projects"
            className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium">
                  Portfolio
                </span>
                <span className="text-neutral-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
              <h2 className="text-sm font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                All Projects
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Client builds, creator sites, and agency platforms.
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-neutral-200/50 dark:border-neutral-800/60 text-[11px] font-medium text-neutral-400 dark:text-neutral-500 group-hover:text-foreground transition-colors flex items-center gap-1">
              <span>View archive</span>
              <span>→</span>
            </div>
          </TransitionLink>

          {/* Card 2: Services & Pricing */}
          <TransitionLink
            href="/#services"
            className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800 hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-neutral-200/60 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 font-medium">
                  Offerings
                </span>
                <span className="text-neutral-400 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all">
                  →
                </span>
              </div>
              <h2 className="text-sm font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                Services &amp; Pricing
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Full-stack engineering, rapid MVPs &amp; retainers.
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-neutral-200/50 dark:border-neutral-800/60 text-[11px] font-medium text-neutral-400 dark:text-neutral-500 group-hover:text-foreground transition-colors flex items-center gap-1">
              <span>See pricing</span>
              <span>→</span>
            </div>
          </TransitionLink>

          {/* Card 3: Get in Touch (WhatsApp) */}
          <a
            href="https://wa.me/919351090785"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-neutral-100/70 dark:bg-neutral-900/50 border border-neutral-200/80 dark:border-neutral-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/50 hover:bg-white dark:hover:bg-neutral-900 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-medium border border-emerald-500/20">
                  Direct
                </span>
                <span className="text-neutral-400 group-hover:text-emerald-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                  ↗
                </span>
              </div>
              <h2 className="text-sm font-bold text-foreground group-hover:text-emerald-500 transition-colors">
                Get in Touch
              </h2>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                Discuss your project or book a call on WhatsApp.
              </p>
            </div>
            <div className="mt-4 pt-2.5 border-t border-neutral-200/50 dark:border-neutral-800/60 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
              <span>Chat now</span>
              <span>↗</span>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
