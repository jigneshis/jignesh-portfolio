import React from 'react';
import Image from 'next/image';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiMongodb,
  SiTailwindcss,
  SiAnthropic,
  SiFigma,
  SiGithub,
  SiGit,
  SiRedis,
  SiWhatsapp,
  SiGmail,
} from 'react-icons/si';
import { RiOpenaiFill } from 'react-icons/ri';
import { FaAws } from 'react-icons/fa6';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
}

// -------------------------------------------------------------
// Contact Dock Brand Icons (Official Simple Icons Vector Marks)
// -------------------------------------------------------------

export function WhatsAppIcon({ size = 20, className, ...props }: IconProps) {
  return <SiWhatsapp size={size} className={className} {...props} />;
}

export function GmailIcon({ size = 20, className, ...props }: IconProps) {
  return <SiGmail size={size} className={className} {...props} />;
}

// -------------------------------------------------------------
// Official Tech Stack SVGs (100% Real Authentic Brand Vectors)
// -------------------------------------------------------------

export function ReactIcon({ size = 24, className, ...props }: IconProps) {
  return <SiReact size={size} className={className} color="#61DAFB" {...props} />;
}

export function NextjsIcon({ size = 24, className, ...props }: IconProps) {
  return <SiNextdotjs size={size} className={className} {...props} />;
}

export function TypeScriptIcon({ size = 24, className, ...props }: IconProps) {
  return <SiTypescript size={size} className={className} color="#3178C6" {...props} />;
}

export function NodejsIcon({ size = 24, className, ...props }: IconProps) {
  return <SiNodedotjs size={size} className={className} color="#5FA04E" {...props} />;
}

export function PostgresIcon({ size = 24, className, ...props }: IconProps) {
  return <SiPostgresql size={size} className={className} color="#4169E1" {...props} />;
}

export function SupabaseIcon({ size = 24, className, ...props }: IconProps) {
  return <SiSupabase size={size} className={className} color="#3ECF8E" {...props} />;
}

export function MongoIcon({ size = 24, className, ...props }: IconProps) {
  return <SiMongodb size={size} className={className} color="#47A248" {...props} />;
}

export function TailwindIcon({ size = 24, className, ...props }: IconProps) {
  return <SiTailwindcss size={size} className={className} color="#06B6D4" {...props} />;
}

export function FigmaIcon({ size = 24, className, ...props }: IconProps) {
  return <SiFigma size={size} className={className} color="#F24E1E" {...props} />;
}

export function GithubIcon({ size = 24, className, ...props }: IconProps) {
  return <SiGithub size={size} className={className} {...props} />;
}

export function GitIcon({ size = 24, className, ...props }: IconProps) {
  return <SiGit size={size} className={className} color="#F05032" {...props} />;
}

export function RedisIcon({ size = 24, className, ...props }: IconProps) {
  return <SiRedis size={size} className={className} color="#DC382D" {...props} />;
}

export function AWSIcon({ size = 24, className, ...props }: IconProps) {
  return <FaAws size={size} className={className} color="#FF9900" {...props} />;
}

export function AntigravityIcon({ size = 24, className }: IconProps) {
  return (
    <Image
      src="/images/antigravity.png"
      alt="Google Antigravity"
      width={size}
      height={size}
      className={`object-contain ${className || ''}`}
      unoptimized
    />
  );
}

export function CodexIcon({ size = 24, className, ...props }: IconProps) {
  return <RiOpenaiFill size={size} className={className} color="#10A37F" {...props} />;
}

export function ClaudeIcon({ size = 24, className, ...props }: IconProps) {
  return <SiAnthropic size={size} className={className} color="#D97706" {...props} />;
}

// -------------------------------------------------------------
// Dedicated Service Field Icons
// -------------------------------------------------------------

/** 1. Frontend Development: Browser window with clean code tags */
export function FrontendIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m10 10-2 2 2 2" />
      <path d="m14 14 2-2-2-2" />
    </svg>
  );
}

/** 2. Backend & APIs: Server rack with API port brackets */
export function BackendIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="8" x="2" y="2" rx="2" />
      <rect width="20" height="8" x="2" y="14" rx="2" />
      <line x1="6" x2="6.01" y1="6" y2="6" />
      <line x1="6" x2="6.01" y1="18" y2="18" />
      <path d="m13 6 2 2-2 2" />
      <path d="m17 6-2 2 2 2" />
    </svg>
  );
}

/** 3. Full-Stack Web Apps: Multi-tiered stacked application layers */
export function FullStackIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
      <path d="m22 12.5-9.42 4.28a2 2 0 0 1-1.16 0L2 12.5" />
      <path d="m22 17.5-9.42 4.28a2 2 0 0 1-1.16 0L2 17.5" />
    </svg>
  );
}

/** 4. Database Architecture: Structured multi-disk cylindrical database */
export function DatabaseIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

/** 5. Cloud & DevOps: High-availability cloud infrastructure with deployment uplink */
export function CloudDevOpsIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
      <polyline points="12 11 12 16" />
      <polyline points="9 13 12 11 15 13" />
    </svg>
  );
}

/** 6. UI Implementation: Artboard layout and design pen-tool */
export function UIIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="m18 2 4 4-14 14H4v-4L18 2z" />
      <circle cx="14.5" cy="5.5" r="1.5" />
    </svg>
  );
}

/** 7. Performance Optimization: High performance speedometer / gauge */
export function PerformanceIcon({ size = 20, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="m12 14 4-4" />
      <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    </svg>
  );
}

// -------------------------------------------------------------
// Social Platform Brand Icons
// -------------------------------------------------------------

export function TwitterXIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function InstagramIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function DiscordIcon({ size = 16, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.929 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  );
}
