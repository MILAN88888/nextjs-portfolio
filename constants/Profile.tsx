import type { Achievement, Stat } from "./types";

/**
 * Every fact about Milan that the UI renders. Contact details, the CV path
 * and the site URL live here only — nothing downstream should hardcode them.
 */
export const PROFILE = {
  name: "Milan Chaudhary",
  fullName: "Milan Kumar Chaudhary",
  handle: "milan",
  /** Employment title. Matches the ThemeGrill entry in WorkExp, and feeds metadata. */
  role: "Software Engineer",
  /** Discipline line for metadata and the footer — narrower than the job title. */
  focus: "Full-stack WordPress and backend engineering",
  /** First line under the name in the hero: what I do, and where. */
  titleLine: "Full-Stack Engineer · WordPress, React, Python · Remote",
  /** Second line, the two things worth knowing before the paragraph. */
  proofLine: "150,000+ active installs · AI integration and infrastructure",
  intro:
    "I build WordPress plugins and Gutenberg blocks, and the Python services behind them. Four years of it now: PHP and React inside the plugins, Python, Postgres and Redis on the servers I run. Last year I built the service behind Everest Forms' AI form builder and put it into production.",
  availabilityNote: "Open to remote full-stack, WordPress and backend roles",
  /** Longer form, for Contact and the About facts. */
  openTo: "remote full-stack, WordPress engineering and backend or Python work",
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
 * measured from live traffic — a number without the context that makes it
 * checkable is a red flag, so each one carries the note that qualifies it.
 */
export const HERO_STATS: Stat[] = [
  {
    icon: "installs",
    value: PROFILE.installBase,
    label: "Active installs",
    note: "Across the plugins I work on, per WordPress.org",
  },
  {
    icon: "products",
    value: "8",
    label: "Products released",
    note: "Form builders, memberships, blocks, email",
  },
  {
    icon: "rating",
    value: "97/100",
    label: "Average rating",
    note: "1,228 reviews, weighted per plugin",
  },
  {
    icon: "clock",
    value: `${EXPERIENCE_YEARS}+ yrs`,
    label: "Years working",
    note: "PHP, Python, TypeScript, since July 2022",
  },
];

/**
 * The About section's headline work, one icon card each. This is the list Milan
 * pasted as LinkedIn "Key Highlights" and "Key Achievements", tightened: his
 * labels, his figures, one line of body.
 *
 * **One line each, and keep it that way.** Milan's note on the first version of
 * these cards was that nobody reads a paragraph in a card. If a card needs a
 * second sentence, the sentence belongs in the bio or in the project card.
 *
 * Two rules on the content. Every install figure is the one the plugin API
 * reports, not a rounder number that reads better — re-check before editing
 * one. And the AI card stays at the level of what the service does: no token
 * mechanics, endpoint paths, thresholds, costs or capacity figures. See the
 * disclosure note in CLAUDE.md.
 */
export const ACHIEVEMENTS: Achievement[] = [
  {
    icon: "globe",
    label: "Scale & reach",
    body: "150,000+ sites run a feature I shipped. Everest Forms 90,000, User Registration 50,000.",
  },
  {
    icon: "ai",
    label: "AI backend",
    body: "Built and deployed the Python service behind Everest Forms' AI form builder.",
  },
  {
    icon: "payments",
    label: "Payment systems",
    body: "Four gateways in two products: PayPal, Stripe, Mollie and Authorize.Net.",
  },
  {
    icon: "security",
    label: "Security hardening",
    body: "40 fixes across nine plugins, from unauthenticated privilege escalation to stored XSS.",
  },
  {
    icon: "servers",
    label: "DevOps & infrastructure",
    body: "Linux and Docker in production, with Postgres, Redis and Nginx underneath.",
  },
  {
    icon: "blocks",
    label: "Blocks & the editor",
    body: "Gutenberg blocks in React, Elementor widgets and two WooCommerce extensions.",
  },
];

/** About section body copy. */
/**
 * Four short paragraphs, first person, plain sentences. **Short is the point.**
 * This was five long ones and Milan's note was that nobody reads that much on a
 * portfolio; the detail it used to carry now lives in the achievement cards, the
 * project cards and the experience bullets, where a reader goes looking for it.
 * No aphorisms, no em-dash flourishes, no paragraph that ends on a punchline, no
 * resume register. See the voice notes in CLAUDE.md before editing, and don't
 * reinstate a paragraph Milan has removed.
 */
export const BIO: string[] = [
  "I'm a full-stack engineer based in Nepal. I build WordPress plugins at ThemeGrill, the kind of thing people install once and then forget about, so most of what I write has to keep working for years on sites I will never see.",
  "I joined in January 2023 as a plugin intern and stayed. Since then I have shipped features in Everest Forms and User Registration, built SmartSMTP out through its first releases, and worked on blocks in BlockArt and Magazine Blocks.",
  "Most of my time goes on the money path and the security side. Money and accounts are the two things people cannot forgive you for getting wrong.",
  "Last year I moved further down the stack: Python, Postgres, Redis and Docker in production rather than just read about. That has become the part of the job I like most, and it is the work I am looking for next.",
];

/** Fact card beside the About copy. */
export const ABOUT_FACTS: { label: string; value: string }[] = [
  { label: "Experience", value: `${EXPERIENCE_YEARS}+ years, since July 2022` },
  { label: "Currently",  value: "Software Engineer at ThemeGrill Pvt Ltd" },
  { label: "Focus",      value: "WordPress products · block editor · backend platform" },
  { label: "Core stack", value: "PHP · Python · TypeScript · React · Docker" },
  { label: "Based in",   value: `Nepal · remote-friendly, ${PROFILE.timezone}` },
  { label: "Open to",    value: "Full-stack, WordPress engineering, backend and Python roles" },
];
