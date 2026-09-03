import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  hasDivider?: boolean;
  'aria-label'?: string;
}

export function Section({
  children,
  className,
  id,
  hasDivider = false,
  'aria-label': ariaLabel,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      className={cn(
        'w-full px-4 sm:px-6 lg:px-10 py-16 md:py-24',
        hasDivider && 'border-t border-border/40',
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
