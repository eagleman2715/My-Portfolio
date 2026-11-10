export type ProjectType = 'Client Implementation' | 'Demonstration';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'CRM & Automation' | 'Systems Integration' | 'Funnels & Landing Pages' | 'Custom Workflows & Scripts';
  /** Shown as a badge on the card and in the case study. */
  projectType: ProjectType;
  /** The flagship project. Shown with a "Flagship" badge. */
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
  /** Your exact role on the project. Only shown when filled in. */
  myRole?: string;
  /** Ordered steps of how the system runs. Shown in the "Key Workflows" tab. */
  keyWorkflows?: string[];
  /** Qualitative outcomes. Add measured figures only when you have real data. */
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
  /** `level` is optional and no longer shown on the page. */
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