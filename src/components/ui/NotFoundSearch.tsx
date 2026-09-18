'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePageTransition, TransitionLink } from '@/components/animations/PageTransition';

interface SearchItem {
  id: string;
  title: string;
  category: 'Page' | 'Section' | 'Project';
  description: string;
  href: string;
}

const SEARCH_ITEMS: SearchItem[] = [
  {
    id: 'home',
    title: 'Home',
    category: 'Page',
    description: 'Main landing page, hero, client logos & overview',
    href: '/',
  },
  {
    id: 'projects',
    title: 'All Projects',
    category: 'Page',
    description: 'Complete client projects archive & live sites',
    href: '/projects',
  },
  {
    id: 'services',
    title: 'Services',
    category: 'Section',
    description: 'Full-stack development, rapid MVPs & modern web engineering',
    href: '/#services',
  },
  {
    id: 'pricing',
    title: 'Pricing & Packages',
    category: 'Section',
    description: 'Transparent plans for MVPs, full builds & retainers',
    href: '/#pricing',
  },
  {
    id: 'about',
    title: 'About Jignesh',
    category: 'Section',
    description: 'Tech stack, experience & development philosophy',
    href: '/#about',
  },
  {
    id: 'contact',
    title: 'Contact / Book a Call',
    category: 'Section',
    description: 'Discuss your project directly via WhatsApp or Email',
    href: 'https://wa.me/919351090785',
  },
  {
    id: 'apurvix',
    title: 'Apurvix Media',
    category: 'Project',
    description: 'High-converting viral clipping agency website',
    href: 'https://www.apurvixmedia.com/',
  },
  {
    id: 'samim',
    title: 'Samim',
    category: 'Project',
    description: 'Editor & motion designer portfolio site',
    href: 'https://samim-editz.vercel.app/',
  },
  {
    id: 'flash',
    title: 'Flash Portfolio',
    category: 'Project',
    description: 'Cinematic visual storyteller & video director portfolio',
    href: 'https://theycallmeflash.vercel.app/',
  },
  {
    id: 'ishant',
    title: 'Ishant',
    category: 'Project',
    description: 'Video editor & creator showcase with custom interactions',
    href: 'https://ishanttt.vercel.app/',
  },
  {
    id: 'abi-editz',
    title: 'Abi Editz',
    category: 'Project',
    description: 'Creator brand website with custom motion graphics',
    href: 'https://abi-editz.vercel.app/',
  },
  {
    id: 'bharat-esports',
    title: 'Bharat Esports',
    category: 'Project',
    description: 'Indian esports tournament platform & portal',
    href: 'https://www.bharatesports.online/',
  },
  {
    id: 'crewcut',
    title: 'Crewcut',
    category: 'Project',
    description: 'Coming Soon — AI-powered clipping & content engine',
    href: '/projects',
  },
];

export function NotFoundSearch() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { navigateTo } = usePageTransition();
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Filter items based on query
  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? SEARCH_ITEMS.filter(
        (item) =>
          item.title.toLowerCase().includes(trimmed) ||
          item.description.toLowerCase().includes(trimmed) ||
          item.category.toLowerCase().includes(trimmed)
      )
    : [];

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen || results.length === 0) {
      if (e.key === 'ArrowDown' && results.length > 0) {
        setIsOpen(true);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % results.length);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + results.length) % results.length);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      const target = results[selectedIndex];
      if (target) {
        handleSelect(target.href);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
    }
  };

  const handleSelect = (href: string) => {
    setIsOpen(false);
    if (href.startsWith('http') || href.startsWith('mailto:')) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      navigateTo(href);
    }
  };

  return (
    <div className="w-full max-w-xl space-y-6">
      {/* Search Input Box */}
      <div className="relative">
        <div className="relative flex items-center">
          {/* Search Icon */}
          <div className="absolute left-4.5 pointer-events-none text-neutral-400 dark:text-neutral-500">
            <svg
              className="w-4.5 h-4.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
              setSelectedIndex(0);
            }}
            onFocus={() => {
              if (query.trim()) setIsOpen(true);
            }}
            onKeyDown={handleKeyDown}
            placeholder="Search projects, sections, services..."
            aria-label="Search portfolio"
            className="w-full h-12.5 pl-11.5 pr-20 bg-neutral-100/90 dark:bg-neutral-900/90 text-foreground placeholder:text-neutral-400 dark:placeholder:text-neutral-500 rounded-2xl border border-neutral-200/80 dark:border-neutral-800 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40 transition-all shadow-sm"
          />

          {/* Right Action: Clear or Esc indicator */}
          <div className="absolute right-3.5 flex items-center gap-1.5">
            {query ? (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setIsOpen(false);
                  inputRef.current?.focus();
                }}
                className="p-1 rounded-lg text-neutral-400 hover:text-foreground transition-colors"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            ) : (
              <kbd className="hidden sm:inline-flex items-center px-2 py-0.5 text-[10px] font-mono font-medium text-neutral-400 dark:text-neutral-500 bg-neutral-200/60 dark:bg-neutral-800/80 rounded border border-neutral-300/60 dark:border-neutral-700/60 select-none">
                ESC
              </kbd>
            )}
          </div>
        </div>

        {/* Live Instant Suggestions Dropdown */}
        {isOpen && trimmed && (
          <div
            ref={dropdownRef}
            className="absolute left-0 right-0 top-full mt-2 bg-white dark:bg-[#141416] border border-neutral-200 dark:border-neutral-800 rounded-2xl shadow-2xl z-50 max-h-80 overflow-y-auto overflow-x-hidden p-2"
          >
            {results.length > 0 ? (
              <div className="space-y-1">
                <div className="px-3 py-1 text-[11px] font-mono tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
                  {results.length} {results.length === 1 ? 'match' : 'matches'} found
                </div>
                {results.map((item, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelect(item.href)}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full text-left px-3.5 py-2.5 rounded-xl flex items-center justify-between transition-colors ${
                        isSelected
                          ? 'bg-neutral-100 dark:bg-neutral-800/90 text-foreground'
                          : 'text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100/60 dark:hover:bg-neutral-800/50'
                      }`}
                    >
                      <div className="min-w-0 pr-3">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm text-foreground truncate">
                            {item.title}
                          </span>
                          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-neutral-200/60 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
                            {item.category}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate mt-0.5">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-xs text-neutral-400 dark:text-neutral-500 shrink-0 font-mono">
                        →
                      </span>
                    </button>
                  );
                })}
              </div>
            ) : (
              <div className="p-4 text-center">
                <p className="text-sm font-medium text-foreground">No matches for &ldquo;{query}&rdquo;</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  Try searching for &ldquo;projects&rdquo;, &ldquo;services&rdquo;, or &ldquo;contact&rdquo;.
                </p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Primary Return Button + Micro Action */}
      <div className="flex flex-wrap items-center gap-4">
        <TransitionLink
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium text-sm hover:opacity-90 active:scale-[0.98] transition-all shadow-md group"
        >
          <span className="group-hover:-translate-x-0.5 transition-transform">←</span>
          <span>Return to home</span>
        </TransitionLink>

        <TransitionLink
          href="/projects"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 text-foreground font-medium text-sm hover:bg-neutral-200/60 dark:hover:bg-neutral-800 active:scale-[0.98] transition-all group"
        >
          <span>Explore projects</span>
          <span className="group-hover:translate-x-0.5 transition-transform text-neutral-400">→</span>
        </TransitionLink>
      </div>

      {/* Curated Pathway Links Underneath (Inspired by Ref 1 Behold) */}
      <div className="pt-2 border-t border-neutral-200/60 dark:border-neutral-850">
        <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 dark:text-neutral-500 mb-2.5">
          Helpful pathways
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
          <TransitionLink
            href="/projects"
            className="p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-transparent hover:border-neutral-200/60 dark:hover:border-neutral-800 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
              <span>All Projects</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5 line-clamp-1">
              Recent client builds
            </p>
          </TransitionLink>

          <a
            href="https://wa.me/919351090785"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-transparent hover:border-neutral-200/60 dark:hover:border-neutral-800 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
              <span>Get in touch</span>
              <span className="group-hover:translate-x-1 transition-transform">↗</span>
            </div>
            <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5 line-clamp-1">
              Direct on WhatsApp
            </p>
          </a>

          <TransitionLink
            href="/#services"
            className="p-2.5 rounded-xl hover:bg-neutral-100 dark:hover:bg-neutral-900 border border-transparent hover:border-neutral-200/60 dark:hover:border-neutral-800 transition-all group"
          >
            <div className="flex items-center justify-between text-xs font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
              <span>Services &amp; Pricing</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
            <p className="text-[11px] text-neutral-400 dark:text-neutral-500 mt-0.5 line-clamp-1">
              Plans &amp; stack offerings
            </p>
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
