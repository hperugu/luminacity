import React from 'react';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export interface SolutionItem {
  imageUrl: string;
  title: string;
  description: string;
  tags: string[];
}

export interface BlogPostItem {
  id: string;
  imageUrl: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  url?: string;
}

export interface SectionProps {
  id: string;
  className?: string;
}
    