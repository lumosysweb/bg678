import type { IconName } from "@/components/icons";

export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export interface TrustBadge {
  label: string;
  icon: IconName;
}

export interface FeatureCard {
  title: string;
  description: string;
  icon: IconName;
  glow: "primary" | "purple" | "emerald" | "blue";
}

export interface CategoryCard {
  name: string;
  icon: IconName;
  gradient: string;
  count: string;
}

export type Ribbon = "Trending" | "New" | "Hot" | null;

export interface GameCard {
  name: string;
  category: string;
  ribbon: Ribbon;
  gradient: string;
}

export interface TimelineItem {
  title: string;
  description: string;
  icon: IconName;
}

export interface VIPLevel {
  level: string;
  name: string;
  requirement: string;
  perks: string[];
  gradient: string;
}

export interface RewardCard {
  title: string;
  description: string;
  icon: IconName;
  cta: string;
  glow: "primary" | "purple" | "emerald" | "blue";
}

export interface CommunityLink {
  name: string;
  handle: string;
  icon: IconName;
  href: string;
}

export interface Testimonial {
  name: string;
  role: string;
  rating: number;
  quote: string;
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FooterLinkGroup {
  title: string;
  links: NavItem[];
}
