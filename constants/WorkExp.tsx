import type { Job } from "./types";

export const WORK_EXP: Job[] = [
  {
    id: "themegrill-software-engineer",
    position: "Software Engineer",
    company: "ThemeGrill Pvt Ltd",
    companyUrl: "https://themegrill.com",
    period: "Jan 2023 — Present",
    summary:
      "Joined as a plugin development intern, fixing issues on a plugin already in production, and moved onto the product teams from there. Now across seven WordPress products with a combined 150,000+ active installations, and the AI platform they call.",
    highlights: [
      "Ship PHP and React features in Everest Forms and User Registration & Membership: builder field types, membership upgrades, the content-drip module and admin interfaces",
      "Built SmartSMTP out through its first releases — the connection and fallback model, provider setup, test mail, delivery logging — and it remains the product I know end to end",
      "Own the payment add-ons: Authorize.Net webhook signature verification and payment retries, Mollie renewal handling, Stripe payment records for standard registrations",
      "Build and fix Gutenberg blocks in BlockArt and Magazine Blocks across free and pro, including a vulnerability in the counter block and capability checks on editor-side actions",
      "Designed and built the AI gateway behind these products' AI features: FastAPI in front of a LiteLLM router, on Docker with Postgres and Redis, enforcing per-site licence, rate and spend limits",
      "Ship features and fixes across 20+ User Registration add-ons — two-factor auth, invite codes, file uploads, conditional logic, marketing integrations — and cut releases across paired free and pro trees",
      "Work agentically: Claude Code with Playwright over MCP to verify a fix in a live WordPress install, and my own skills encoding coding standards and debug triage",
    ],
    links: [
      { title: "Everest Forms",     url: "https://wordpress.org/plugins/everest-forms/" },
      { title: "User Registration", url: "https://wordpress.org/plugins/user-registration/" },
      { title: "SmartSMTP",         url: "https://wordpress.org/plugins/smart-smtp/" },
      { title: "BlockArt Blocks",   url: "https://wordpress.org/plugins/blockart-blocks/" },
      { title: "Magazine Blocks",   url: "https://wordpress.org/plugins/magazine-blocks/" },
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
