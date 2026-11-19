export interface SystemUnit {
  id: string;
  code: string; // e.g. "U-01"
  title: string;
  category: string;
  tagline: string;
  description: string;
  metrics: {
    primary: string;
    label: string;
  };
  deliverables: string[];
  techStack: string[];
  systemHighlights: string[];
  badgeColor?: 'cyan' | 'emerald' | 'amber' | 'violet';
}

export interface CaseStudy {
  id: string;
  clientName: string;
  industry: string;
  timeframe: string;
  challenge: string;
  architecture: string;
  results: {
    label: string;
    value: string;
    change: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    company: string;
    avatar: string;
  };
  tags: string[];
}

export interface ContentBlueprint {
  id: string;
  title: string;
  archetype: string;
  targetPlatform: string;
  hook: string;
  psychologicalTrigger: string;
  scriptStructure: {
    step: string;
    description: string;
    pacing: string;
  }[];
  benchmarks: {
    retentionRate: string;
    avgViews: string;
    directConversions: string;
  };
}

export interface ComparisonPoint {
  id: string;
  category: string;
  legacyAgency: string;
  yugamEngine: string;
  impactVerdict: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  metricBadge: string;
  industry: string;
  verified: boolean;
}

export interface AuditFormData {
  fullName: string;
  businessEmail: string;
  companyName: string;
  websiteUrl: string;
  currentMonthlyRevenue: string;
  primaryBottleneck: string;
  growthGoalMonthly: string;
  selectedDate?: string;
  selectedTimeSlot?: string;
}
