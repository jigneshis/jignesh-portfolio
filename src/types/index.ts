export * from './project';

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface Service {
  title: string;
  icon: string;
  description?: string;
}

export interface TechStackItem {
  name: string;
  icon: string;
  url?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export interface SocialLink {
  platform: 'github' | 'twitter' | 'instagram' | 'discord';
  url: string;
  icon: string;
  label: string;
  followerCount?: string;
}

export interface SiteConfig {
  name: string;
  handle?: string;
  nickname?: string;
  title: string;
  email: string;
  phone?: string;
  whatsappUrl: string;
  telegramUrl?: string;
  availableDate: string;
  isAvailable: boolean;
  siteUrl: string;
  description: string;
}
