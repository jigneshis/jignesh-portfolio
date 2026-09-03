'use client';

import React, { createContext, useContext, useState, useEffect, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';

interface PageTransitionContextType {
  isExiting: boolean;
  navigateTo: (href: string) => void;
}

const PageTransitionContext = createContext<PageTransitionContextType>({
  isExiting: false,
  navigateTo: () => {},
});

export function usePageTransition() {
  return useContext(PageTransitionContext);
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const [isExiting, setIsExiting] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  // Reset scroll and exit state whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
    const lenis = (window as unknown as { lenis?: { scrollTo: (target: number | HTMLElement, options?: { immediate?: boolean }) => void } }).lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
    setIsExiting(false);
  }, [pathname]);

  const navigateTo = (href: string) => {
    if (href === pathname) {
      const lenis = (window as unknown as { lenis?: { scrollTo: (target: number | HTMLElement, options?: { duration?: number }) => void } }).lenis;
      if (lenis) {
        lenis.scrollTo(0, { duration: 0.8 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      return;
    }

    setIsExiting(true);

    // Instant top scroll for new page arrival
    setTimeout(() => {
      window.scrollTo(0, 0);
      const lenis = (window as unknown as { lenis?: { scrollTo: (target: number | HTMLElement, options?: { immediate?: boolean }) => void } }).lenis;
      if (lenis) {
        lenis.scrollTo(0, { immediate: true });
      }
    }, 280);

    setTimeout(() => {
      startTransition(() => {
        router.push(href);
      });
    }, 320);
  };

  return (
    <PageTransitionContext.Provider value={{ isExiting, navigateTo }}>
      {children}
    </PageTransitionContext.Provider>
  );
}

interface TransitionLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function TransitionLink({ href, children, className, onClick, ...props }: TransitionLinkProps) {
  const { navigateTo } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // If opening in new tab or external link, allow default
    if (
      props.target === '_blank' ||
      e.ctrlKey ||
      e.metaKey ||
      e.shiftKey ||
      e.altKey ||
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#')
    ) {
      if (onClick) onClick(e);
      return;
    }

    e.preventDefault();
    if (onClick) onClick(e);
    navigateTo(href);
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
