import type { Stat } from "./types";

/**
 * Every fact about Milan that the UI renders. Contact details, the CV path
 * and the site URL live here only — nothing downstream should hardcode them.
 */
export const PROFILE = {
  name: "Milan Chaudhary",
  fullName: "Milan Kumar Chaudhary",
  handle: "milan",
  role: "Software Engineer",
  /** Discipline line for metadata and the footer — narrower than the job title. */
  focus: "AI platform & WordPress product engineering",
  /** Sits directly under the name in the hero. */
  subtitle:
    "I build WordPress products used on 150,000+ sites — plugins, Gutenberg blocks, and the backend platform behind their AI features.",
  intro:
    "Software engineer in Nepal. Four years across PHP plugin architecture, React in the block editor and Python on the back end — including the AI gateway I designed and built to serve products with a six-figure install base. I ship my own plugin too, and run the Docker, Linux and networking layer underneath. Agents do the mechanical work in my day; the engineering calls stay mine.",
  availabilityNote: "Open to backend, platform & AI work",
  /** Longer form, for Contact and the About facts. */
  openTo: "backend, AI platform and full-stack work",
  availableForWork: true,

  /** Combined WordPress.org active installs of the plugins I ship features in. */
  installBase: "150,000+",

  company: "ThemeGrill Pvt Ltd",
  companyUrl: "https://themegrill.com",
  location: "Nepal",
  fullLocation: "Sarawal-6, Nawalparasi, Nepal",
  timezone: "UTC+5:45",
  email: "chaudharymilan996@gmail.com",
  phone: "+977-9807445408",
  cvPath: "/file/milan-cv.pdf",
  siteUrl: "https://milanc.com.np",
  siteLabel: "milanc.com.np",
  githubUrl: "https://github.com/MILAN88888",
  linkedinUrl: "https://www.linkedin.com/in/milan-c",
  reposUrl: "https://github.com/MILAN88888?tab=repositories",
} as const;

/** First professional role: Intern PHP Developer at Idea Foundation, 15 July 2022. */
const CAREER_START = new Date("2022-07-15T00:00:00Z");

/**
 * Whole years since that first role. Derived rather than hardcoded so the
 * figure can't go stale — it is recomputed on every build.
 */
export const EXPERIENCE_YEARS = Math.floor(
  (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 60 * 60 * 1000),
);

/**
 * The hero proof strip. Every figure is either checkable on WordPress.org or
 * measured from live traffic — a number without its context is a red flag,
 * so each one carries the note that qualifies it.
 */
export const HERO_STATS: Stat[] = [
  {
    value: PROFILE.installBase,
    label: "Active installs",
    note: "Combined WordPress.org install base of the plugins I ship features in",
  },
  {
    value: "7",
    label: "Products shipped",
    note: "Form builders, membership, block libraries and email delivery — free, pro and commercial",
  },
  {
    value: "< 1¢",
    label: "Per AI generation",
    note: "Measured on live traffic through the gateway I built, capped per site",
  },
  {
    value: `${EXPERIENCE_YEARS}+ yrs`,
    label: "Years shipping",
    note: "PHP, Python and TypeScript, since July 2022",
  },
];

/** About section body copy. */
export const BIO: string[] = [
  "I write software other people depend on. The plugins I ship features in have a combined 150,000+ active installations, which sets the standard for every change: it has to survive old PHP versions, somebody else's theme, and sites that will never be migrated.",
  "Much of that work is in the block editor — React blocks in BlockArt and Magazine Blocks, where a setting has to keep working on a page somebody built two years ago, and a missing capability check is the difference between a feature and a vulnerability. I've shipped both, and fixed one.",
  "I also build things I own end to end. Custom Code Snippets Manager is mine: a snippet runner with a CodeMirror editor, syntax checking on both sides of the wire, and a safety model that catches a fatal from a user's PHP and deactivates the snippet instead of taking the site down.",
  "In 2026 I moved from using AI to building the platform that serves it. Shipping a provider key inside a plugin leaks it on the first download, so I designed and built a gateway instead: sites prove they own their domain, get a scoped token, and every request clears licence, rate and spend limits before a model sees it. Underneath it I run the layer most product developers hand off — Docker, Postgres and Redis, Nginx reverse proxies, TLS and DNS, Tailscale, and routing through modem and mobile IPs when a job needs a real path out.",
  "Day to day I work with agents rather than around them: Claude Code driving Playwright through MCP to prove a fix in a live WordPress install, and my own skills encoding coding standards and triage steps. They are fast at what was never the interesting part. Deciding what to build, and whether the answer is actually correct, doesn't delegate.",
];

/** Fact card beside the About copy. */
export const ABOUT_FACTS: { label: string; value: string }[] = [
  { label: "Experience", value: `${EXPERIENCE_YEARS}+ years, since July 2022` },
  { label: "Currently",  value: "Software Engineer at ThemeGrill Pvt Ltd" },
  { label: "Focus",      value: "WordPress products · block editor · backend platform" },
  { label: "Core stack", value: "PHP · Python · TypeScript · React · Docker" },
  { label: "Based in",   value: `Nepal · remote-friendly, ${PROFILE.timezone}` },
  { label: "Open to",    value: "AI platform, backend and full-stack roles" },
];
