/**
 * Every fact about Milan that the UI renders. Contact details, the CV path
 * and the site URL live here only — nothing downstream should hardcode them.
 */
export const PROFILE = {
  name: "Milan Chaudhary",
  fullName: "Milan Kumar Chaudhary",
  handle: "milan",
  role: "Software Engineer",
  /** Sits directly under the name in the hero. */
  subtitle: "Software Engineer · WordPress products, PHP and AI-assisted engineering.",
  intro:
    "Software engineer based in Nepal, building WordPress products at ThemeGrill. I work across PHP and modern JavaScript — plugin architecture, REST APIs and React interfaces — and lean on AI-assisted workflows to move from problem to shipped fix faster.",
  availabilityNote: "Open to interesting work and collaborations",
  availableForWork: true,

  company: "ThemeGrill Pvt Ltd",
  companyUrl: "https://themegrill.com",
  location: "Nepal",
  fullLocation: "Sarawal-6, Nawalparasi, Nepal",
  email: "chaudharymilan996@gmail.com",
  phone: "+977-9807445408",
  cvPath: "/file/milan-cv.pdf",
  siteUrl: "https://milanc.com.np",
  siteLabel: "milanc.com.np",
  githubUrl: "https://github.com/MILAN88888",
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

/** Hero meta row, under the call-to-action buttons. */
export const HERO_META: { label: string; value: string; href?: string }[] = [
  { label: "Based in",  value: PROFILE.location },
  { label: "Currently", value: PROFILE.company },
  { label: "Website",   value: PROFILE.siteLabel, href: PROFILE.siteUrl },
];

/** About section body copy. */
export const BIO: string[] = [
  "I started out writing PHP for small business sites and grew into building WordPress plugins and themes used by thousands of sites. That work taught me to care about the unglamorous parts of software: backwards compatibility, performance budgets, and code other people can read.",
  "These days I split my time between server-side PHP and TypeScript on the front end. I like reducing a messy requirement to a small, obvious piece of code — and I like shipping.",
  "I also work AI into the day-to-day: using ChatGPT, Claude and DeepSeek as pair programmers for scaffolding, refactors, test cases and code review, and as a fast way to reason through unfamiliar bugs. The judgement stays mine — AI shortens the loop between a problem and a verified fix.",
];

/** Fact card beside the About copy. */
export const ABOUT_FACTS: { label: string; value: string }[] = [
  { label: "Experience", value: `${EXPERIENCE_YEARS}+ years, since July 2022` },
  { label: "Currently", value: "Engineer at ThemeGrill Pvt Ltd" },
  { label: "Based in",  value: "Nepal · remote-friendly" },
  { label: "Focus",     value: "WordPress products, PHP, React & TypeScript" },
  { label: "Also into", value: "AI-assisted development, tooling and CI automation" },
];
