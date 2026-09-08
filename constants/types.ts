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
  /** Renders full width at the top of the grid. */
  featured?: boolean;
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
  /** Flat bullets. Use for a role that was one job on one thing. */
  highlights?: string[];
  /** Bullets grouped by product. Use when the role spanned several products. */
  groups?: { product: string; items: string[] }[];
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
  /** The section's only heading, and its nav label. */
  label: string;
  /** Shorter label for the header nav, where horizontal room runs out. */
  navLabel?: string;
}

/** A number worth putting in front of a reader, with the context that makes it mean something. */
export interface Stat {
  value: string;
  label: string;
  note?: string;
}
