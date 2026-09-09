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
  icon: IconName;
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

/**
 * The icons the UI knows how to draw, named for what they mean rather than for
 * the glyph. `components/ui/Icon.tsx` maps each one onto a Feather icon; this
 * union is the vocabulary, so `constants/` stays free of JSX and `react-icons`
 * never reaches `app/metadata.ts`'s module graph.
 */
export type IconName =
  | "installs"
  | "products"
  | "rating"
  | "clock"
  | "globe"
  | "ai"
  | "payments"
  | "security"
  | "servers"
  | "blocks"
  | "commits"
  | "database"
  | "code"
  | "wordpress"
  | "frontend"
  | "toolbox";

/**
 * One piece of headline work in the About section. One short line of body — the
 * cards are there to be scanned, not read, so a second sentence goes in the
 * bio or the project card instead.
 */
export interface Achievement {
  icon: IconName;
  label: string;
  body: string;
}

/** A number worth putting in front of a reader, with the context that makes it mean something. */
export interface Stat {
  value: string;
  label: string;
  note?: string;
  icon?: IconName;
}
