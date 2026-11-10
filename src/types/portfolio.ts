export type ProjectType = 'Client Implementation' | 'Demonstration';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'CRM & Automation' | 'Systems Integration' | 'Funnels & Landing Pages' | 'Custom Workflows & Scripts';
  projectType: ProjectType;
  featured?: boolean;
  year: string;
  clientOrContext: string;
  image: string;
  additionalImages?: string[];
  pairedComparison?: {
    titleA: string;
    imageA: string;
    titleB: string;
    imageB: string;
    description: string;
  };
  tags: string[];
  metrics: { label: string; value: string }[];
  summary: string;
  challenge: string;
  solution: string;
  myRole?: string;
  keyWorkflows?: string[];
  businessImpact?: string[];
  architectureHighlights: string[];
  techStack: string[];
  demoUrl?: string;
  liveUrl?: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  careerHighlight?: string;
  achievements: string[];
  technologies: string[];
}

export interface SkillGroup {
  category: string;
  description: string;
  skills: { name: string; note: string; level?: number }[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar?: string;
  content: string;
  outcomeMetric: string;
}

export interface UserProfile {
  name: string;
  preferredName?: string;
  role: string;
  secondaryTitle: string;
  location: string;
  availability: string;
  email: string;
  alternateEmail?: string;
  phone: string;
  cvPdfUrl: string;
  github?: string;
  linkedin?: string;
  bio: string;
  leadParagraph: string;
  industries: string[];
  stats: { label: string; value: string; detail: string }[];
}

