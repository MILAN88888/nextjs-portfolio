export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  repoUrl?: string;
  liveUrl?: string;
}

export interface Job {
  id: string;
  position: string;
  company: string;
  companyUrl?: string;
  /** Free text — "Present", "Earlier" — not a strict date. */
  period: string;
  summary: string;
  highlights: string[];
  links?: { title: string; url: string }[];
}

export interface School {
  id: string;
  qualification: string;
  institution: string;
  institutionUrl?: string;
  period: string;
  summary?: string;
}

export interface TechGroup {
  category: string;
  items: string[];
}

export interface SocialLink {
  id: string;
  label: string;
  url: string;
}

export interface SectionMeta {
  id: string;
  /** Display number for the `01 — ABOUT` heading. */
  num: string;
  label: string;
  /** Heading shown above the section body. */
  title: string;
}
