import type { Job } from "./types";

export const WORK_EXP: Job[] = [
  {
    id: "themegrill-software-engineer",
    position: "Software Engineer",
    company: "ThemeGrill Pvt Ltd",
    companyUrl: "https://themegrill.com",
    period: "Mar 2023 — Present",
    summary:
      "Product engineering on WordPress plugins with a combined 140,000+ active installations — and, since 2026, the AI platform those products call.",
    highlights: [
      "Designed and built ThemeGrill AI Cloud: a FastAPI gateway in front of a LiteLLM router, on Docker with Postgres and Redis, that registers sites, verifies licences and enforces per-site rate and spend limits before a request reaches a model provider",
      "Shipped AI form generation end to end — the gateway, the per-product prompt modules, and the WordPress side that stores credentials, calls the API and turns model JSON into a working form",
      "Ship PHP and React features in Everest Forms and User Registration & Membership: builder field types, membership plans, payment flows, Gutenberg blocks and admin interfaces",
      "Hold the line on backwards compatibility and performance for sites already running these plugins — old PHP versions, unknown themes, no migration path",
      "Work agentically: Claude Code with Playwright over MCP to verify a fix in a live WordPress install, and my own skills encoding the suite's coding standards and debug triage",
    ],
    links: [
      { title: "Everest Forms",              url: "https://wordpress.org/plugins/everest-forms/" },
      { title: "User Registration",           url: "https://wordpress.org/plugins/user-registration/" },
      { title: "SmartSMTP",                   url: "https://wordpress.org/plugins/smart-smtp/" },
      { title: "Registration Form Fields",    url: "https://woocommerce.com/products/registration-form-fields/" },
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
