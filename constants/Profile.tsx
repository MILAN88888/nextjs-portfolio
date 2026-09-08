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
    "I build WordPress plugins and blocks that run on more than 150,000 sites, and the back end behind their AI features.",
  intro:
    "I have spent four years building WordPress products, mostly PHP and React, with Python on the back end. Last year I built the back end behind Everest Forms' AI form builder, and I run the Linux and Docker servers it sits on.",
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
    note: "Added up across the plugins I work on, counted by WordPress.org",
  },
  {
    value: "8",
    label: "Products released",
    note: "Form builders, memberships, block libraries, email, and a subdomain plugin",
  },
  {
    value: "97/100",
    label: "Average rating",
    note: "Across 1,228 reviews on WordPress.org, weighted by how many each plugin has",
  },
  {
    value: `${EXPERIENCE_YEARS}+ yrs`,
    label: "Years working",
    note: "PHP, Python and TypeScript, since July 2022",
  },
];

/** About section body copy. */
/**
 * Short paragraphs, first person, plain sentences: who I am now, how I got here,
 * the security side of it, moving down the stack, and what I am looking for.
 * Deliberately not written to impress — no aphorisms, no em-dash flourishes, no
 * paragraph that ends on a punchline. See the voice notes in CLAUDE.md before
 * editing, and don't reinstate a paragraph Milan has removed.
 */
export const BIO: string[] = [
  "I'm a software engineer based in Nepal. I work at ThemeGrill on WordPress plugins, the kind of thing people install once and then forget about. That means most of what I write has to keep working for years, for people I will never meet, on sites I cannot see.",
  "I started out writing PHP for small business sites, then spent a few months as a backend intern on a book exchange platform. I joined ThemeGrill in January 2023 as a plugin intern and stayed. Since then I have shipped features in Everest Forms and User Registration, built SmartSMTP out through its first releases, worked on blocks in BlockArt and Magazine Blocks, and spent most of my time on the payment side, where Stripe, PayPal, Mollie and Authorize.Net all have to keep working.",
  "The other half of that work is security. Forty or so of my fixes have been security ones, and the ones I remember are the payment flaw that let somebody mark an unpaid order as paid, an escalation that let an unauthenticated request delete users, shortcodes running from a field somebody typed their own name into, and a stored XSS sitting in a mail log. Money and accounts are the two things people cannot forgive you for getting wrong.",
  "Last year I moved further down the stack. I built the service behind Everest Forms' AI form builder, which meant getting properly comfortable with Python, and running Postgres, Redis and Docker in production rather than just reading about them. It has become the part of the job I like most.",
  "Right now I am looking for backend, platform or full-stack work on a product that has real users. Remote suits me, and I am happy to work across time zones.",
];

/** Fact card beside the About copy. */
export const ABOUT_FACTS: { label: string; value: string }[] = [
  { label: "Experience", value: `${EXPERIENCE_YEARS}+ years, since July 2022` },
  { label: "Currently",  value: "Software Engineer at ThemeGrill Pvt Ltd" },
  { label: "Focus",      value: "WordPress products · block editor · backend platform" },
  { label: "Core stack", value: "PHP · Python · TypeScript · React · Docker" },
  { label: "Based in",   value: `Nepal · remote-friendly, ${PROFILE.timezone}` },
  { label: "Open to",    value: "Backend, AI platform and full-stack roles" },
];
