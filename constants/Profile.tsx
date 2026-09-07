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
    "Four years building WordPress products that run on more than 150,000 live sites: PHP plugin architecture, React in the block editor, Python on the back end. I designed and deployed the AI gateway behind their AI features, and I run the self-hosted Linux and Docker infrastructure it sits on.",
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
    value: "97/100",
    label: "Average rating",
    note: "Weighted across 1,228 WordPress.org reviews of the plugins I work on",
  },
  {
    value: `${EXPERIENCE_YEARS}+ yrs`,
    label: "Years shipping",
    note: "PHP, Python and TypeScript, since July 2022",
  },
];

/** About section body copy. */
export const BIO: string[] = [
  "Most of what I write goes out to sites I will never see. That is the whole job, really: a change has to hold up on PHP versions I would not choose, under themes I have never opened, on installs nobody is ever going to migrate. It makes you conservative in useful ways — small surface area, obvious code, and a plan for the version that is already out there.",
  "I like owning a thing end to end. SmartSMTP is the clearest example: I built it out through its first releases, so the connection model, the provider setup, the test-mail flow and the delivery log are all decisions I had to make and then live with. Custom Code Snippets Manager, the plugin I maintain on my own account, taught me the same lesson from the other side — it runs code a user typed, so the interesting part was never the editor, it was what happens when their PHP throws.",
  "The rest of my week is spread across a plugin suite: membership upgrades and content drip, payment add-ons for Stripe, Mollie and Authorize.Net where a missed webhook signature or an unretried renewal is somebody's money, and React blocks in BlockArt and Magazine Blocks where a missing capability check is the difference between a feature and a vulnerability.",
  "Underneath all of it I run my own infrastructure — Docker, Postgres and Redis, Nginx reverse proxies, TLS and DNS, Tailscale between machines, and routing through modem and mobile IPs when a job needs a real path out. Being able to stand that up myself is what let the AI gateway be a shipped feature instead of a proposal.",
  "And I work with agents rather than around them: Claude Code driving Playwright through MCP to prove a fix in a live WordPress install, with my own skills encoding the standards and the triage steps. They are quick at the parts that were never interesting. What to build, and whether the answer is actually right, doesn't delegate.",
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
