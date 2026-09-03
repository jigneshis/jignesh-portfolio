import React from 'react';
import { AvatarCluster } from '@/components/ui/AvatarCluster';
import { LogoMarquee } from '@/components/ui/LogoMarquee';

export function LogoStrip() {
  return (
    <div className="w-full border-y border-border/40 py-6 sm:py-7 px-4 sm:px-8 lg:px-12 bg-card/30">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-10">
        <div className="shrink-0 pr-0 md:pr-10 md:border-r border-border/40">
          <AvatarCluster />
        </div>
        <div className="w-full flex-1 overflow-hidden min-w-0">
          <LogoMarquee />
        </div>
      </div>
    </div>
  );
}
