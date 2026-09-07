export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[];
  /** Verifiable scale line — install counts, ratings. Rendered under the title. */
  metric?: string;
  /** What I actually did on it. Team products are not solo achievements. */
  role?: string;
  repoUrl?: string;
  liveUrl?: string;
  /** No public repository — internal or commercial. Renders a "Closed source" note. */
  internal?: boolean;
  /** Free-text status note for the links row, where neither a repo nor a live URL applies yet. */
  note?: string;
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
  /** Shorter label for the header nav, where horizontal room runs out. */
  navLabel?: string;
  /** Heading shown above the section body. */
  title: string;
}

/** A number worth putting in front of a reader, with the context that makes it mean something. */
export interface Stat {
  value: string;
  label: string;
  note?: string;
}

/** One piece of work explained the way a reviewer reads it: problem, calls made, outcome. */
export interface CaseStudy {
  id: string;
  title: string;
  /** Where and when, and what my part in it was. */
  context: string;
  problem: string;
  approach: string;
  /** The engineering calls. This is the part a senior reviewer actually reads. */
  decisions: { title: string; body: string }[];
  outcomes: string[];
  stack: string[];
  /** Shown in place of a repository link when the code isn't public. */
  internalNote?: string;
  links?: { title: string; url: string }[];
}
