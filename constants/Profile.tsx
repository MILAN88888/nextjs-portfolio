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
    "I build AI gateways, and the WordPress products that call them — on an install base of 140,000+ sites.",
  intro:
    "Software engineer in Nepal, building at ThemeGrill. I designed and shipped the multi-tenant AI gateway that powers AI form generation in Everest Forms — FastAPI, LiteLLM, Postgres and Redis behind Docker — and I write the PHP and React features in plugins that run on other people's production sites. Agents do the mechanical work in my day; the engineering calls stay mine.",
  availabilityNote: "Open to AI platform & backend work",
  /** Longer form, for Contact and the About facts. */
  openTo: "AI platform, backend and full-stack work",
  availableForWork: true,

  /** Combined WordPress.org active installs of the plugins I ship features in. */
  installBase: "140,000+",

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
    value: "90,000",
    label: "On the AI gateway",
    note: "Everest Forms, where AI form generation runs through the platform I built",
  },
  {
    value: "< 1¢",
    label: "Per AI generation",
    note: "Measured on live traffic, capped per site by budget and rate limits",
  },
  {
    value: `${EXPERIENCE_YEARS}+ yrs`,
    label: "Years shipping",
    note: "PHP, Python and TypeScript, since July 2022",
  },
];

/** About section body copy. */
export const BIO: string[] = [
  "I write software other people depend on. At ThemeGrill I ship features in WordPress plugins with a combined 140,000+ active installations, which sets the standard for every change: it has to survive old PHP versions, somebody else's theme, and sites that will never be migrated.",
  "In 2026 I moved from using AI to building the platform that serves it. Our plugins needed AI features, and shipping a provider key inside a plugin is not an option — it leaks the first time someone downloads the folder, and every site spends against one unbounded budget. So I built a gateway: sites prove they own their domain, get a scoped token, and each request clears licence checks, rate limits and spend caps before a model ever sees it.",
  "I'm comfortable in the layer most product developers hand off. Docker, Postgres and Redis, Nginx reverse proxies, TLS and DNS, Tailscale between machines, and routing through modem and mobile IPs when a job needs a real path out. Being able to stand the infrastructure up myself is what makes the AI work shippable instead of a demo.",
  "Day to day I work with agents rather than around them: Claude Code driving Playwright through MCP to prove a fix in a live WordPress install, and my own skills encoding the suite's coding standards and triage steps. They are fast at what was never the interesting part. Deciding what to build, and whether the answer is actually correct, doesn't delegate.",
];

/** Fact card beside the About copy. */
export const ABOUT_FACTS: { label: string; value: string }[] = [
  { label: "Experience", value: `${EXPERIENCE_YEARS}+ years, since July 2022` },
  { label: "Currently",  value: "Software Engineer at ThemeGrill Pvt Ltd" },
  { label: "Focus",      value: "AI platform engineering · WordPress products" },
  { label: "Core stack", value: "Python · PHP · TypeScript · Postgres · Docker" },
  { label: "Based in",   value: `Nepal · remote-friendly, ${PROFILE.timezone}` },
  { label: "Open to",    value: "AI platform, backend and full-stack roles" },
];
