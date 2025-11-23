import { ReactNode } from 'react';

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  description: string;
  painPoints: string[];
  solutions: string[];
  results: string[];
  image: string; // Placeholder URL
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: ReactNode;
}

export interface NavItem {
  label: string;
  href: string; // Anchor link ID
}

export interface ValueProp {
  title: string;
  desc: string;
  behavior: string[];
  color: string;
}
