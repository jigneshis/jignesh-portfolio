import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface AvatarClusterProps {
  count?: string;
  rating?: string;
  className?: string;
}

export function AvatarCluster({
  count = '10+',
  rating = '★★★★★',
  className,
}: AvatarClusterProps) {
  const avatars = [
    { src: '/images/avatars/avatar-1.jpg', alt: 'Client 1' },
    { src: '/images/avatars/avatar-2.jpg', alt: 'Client 2' },
    { src: '/images/avatars/avatar-3.jpg', alt: 'Client 3' },
    { src: '/images/avatars/avatar-4.jpg', alt: 'Client 4' },
  ];

  return (
    <div className={cn('inline-flex items-center gap-4 select-none', className)}>
      <div className="flex items-center -space-x-3" aria-label="Client avatars">
        {avatars.map((avatar, index) => (
          <div
            key={avatar.src}
            className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-background overflow-hidden shadow-sm bg-card shrink-0"
            style={{ zIndex: 10 - index }}
          >
            <Image
              src={avatar.src}
              alt={avatar.alt}
              width={40}
              height={40}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>
        ))}
      </div>
      <div className="flex flex-col text-left">
        <span className="text-amber-500 tracking-wider text-xs sm:text-sm leading-tight font-semibold">
          {rating}
        </span>
        <span className="text-sm sm:text-[15px] font-bold text-foreground tracking-tight whitespace-nowrap">
          {count} Happy clients
        </span>
      </div>
    </div>
  );
}
