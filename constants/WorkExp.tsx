import type { Job } from "./types";

export const WORK_EXP: Job[] = [
  {
    id: "themegrill-software-engineer",
    position: "Software Engineer",
    company: "ThemeGrill Pvt Ltd",
    companyUrl: "https://themegrill.com",
    period: "Mar 2023 — Present",
    summary:
      "Product engineering across seven WordPress products with a combined 150,000+ active installations — plugins, Gutenberg block libraries, and the AI platform they call.",
    highlights: [
      "Ship PHP and React features in Everest Forms and User Registration & Membership: builder field types, membership plans, payment flows and admin interfaces",
      "Build and fix Gutenberg blocks in BlockArt and Magazine Blocks across free and pro — including a vulnerability in the counter block, capability checks on editor-side actions, and theme-palette support in the colour picker",
      "Designed and built the AI gateway behind the AI features in these products: FastAPI in front of a LiteLLM router, on Docker with Postgres and Redis, enforcing per-site licence checks, rate limits and spend caps",
      "Cut releases across paired free and pro trees — changelogs, version bumps, and keeping both shippable from one change",
      "Hold the line on backwards compatibility and performance for sites already running these plugins — old PHP versions, unknown themes, no migration path",
      "Work agentically: Claude Code with Playwright over MCP to verify a fix in a live WordPress install, and my own skills encoding coding standards and debug triage",
    ],
    links: [
      { title: "Everest Forms",     url: "https://wordpress.org/plugins/everest-forms/" },
      { title: "User Registration", url: "https://wordpress.org/plugins/user-registration/" },
      { title: "BlockArt Blocks",   url: "https://wordpress.org/plugins/blockart-blocks/" },
      { title: "Magazine Blocks",   url: "https://wordpress.org/plugins/magazine-blocks/" },
      { title: "SmartSMTP",         url: "https://wordpress.org/plugins/smart-smtp/" },
    ],
  },
  {
    id: "themegrill-intern",
    position: "Intern Plugin PHP Developer",
    company: "ThemeGrill Pvt Ltd",
    companyUrl: "https://themegrill.com",
    period: "Jan 2023 — Mar 2023",
    summary: "Learned WordPress plugin development on a product already in production.",
    highlights: [
      "Started on plugin fundamentals, then moved to fixing real issues in the live User Registration plugin",
      "Learned to read a codebase written by other people before changing it",
    ],
  },
  {
    id: "idea-foundation-intern",
    position: "Intern PHP Developer",
    company: "Idea Foundation",
    companyUrl: "http://www.ideafoundation.co.in",
    period: "Jul 2022 — Oct 2022",
    summary: "Backend developer on Oxole, an online book-exchange platform.",
    highlights: [
      "Built user registration, book listings, search, exchange requests and profiles",
      "Worked in MVC with core PHP, jQuery and Ajax, Twig templates and hand-written SQL",
    ],
  },
];
