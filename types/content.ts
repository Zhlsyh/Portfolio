import type { ProjectData } from '@/data/projects';

export interface SiteInfo {
  initials: string;
  name: string;
  role: string;
}

export interface NavItem {
  index: string;
  label: string;
  tag: string;
  href: string;
}

export interface HeroBadge {
  icon: string;
  label: string;
  value: string;
}

export interface HeroContent {
  eyebrow: string;
  title1: string;
  title2: string;
  description: string;
  quote: string;
  badges: HeroBadge[];
}

export interface StatItem {
  value: string;
  label: string;
}

export interface ExperienceItem {
  tag: string;
  title: string;
  org: string;
  period: string;
  location: string;
  points: string[];
  skillsLabel: string;
  skills: string[];
}

export interface CapabilityItem {
  name: string;
  detail: string;
  iconType: 'material' | 'image';
  icons: string[];
}

export interface CapabilityCategory {
  icon: string;
  title: string;
  subtitle: string;
  items: CapabilityItem[];
}

export interface Certification {
  badge: string;
  period: string;
  title: string;
  issuer: string;
  description: string;
  tags: string[];
  regNo: string;
}

export interface SocialLink {
  label: string;
  handle: string;
  href: string;
}

export interface ContactContent {
  email: string;
  location: string;
  description: string;
  socials: SocialLink[];
}

export interface OrgCard {
  id: string;
  logo: string;
  role: string;
  period: string;
  responsibility: string;
}

export interface SiteContent {
  site: SiteInfo;
  nav: NavItem[];
  hero: HeroContent;
  stats: StatItem[];
  experience: ExperienceItem[];
  orgProjectIds: string[];
  orgCards: OrgCard[];
  capabilities: CapabilityCategory[];
  certifications: Certification[];
  contact: ContactContent;
}

export type ProjectsMap = Record<string, ProjectData>;
