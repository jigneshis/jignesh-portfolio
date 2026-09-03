import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: 'default' | 'dark';
}

export function Card({
  children,
  variant = 'default',
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-2xl p-6 transition-all',
        variant === 'dark'
          ? 'bg-surface-dark text-surface-dark-foreground border border-neutral-800'
          : 'bg-card text-foreground border border-border',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
