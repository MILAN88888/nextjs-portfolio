import type { Stat, TechGroup } from "./types";

/**
 * Grouped by the kind of work, and written the way I would say it out loud.
 * Named skills only, no model names as badges: what I can build and run.
 */
export const TECH_LIST: TechGroup[] = [
  {
    category: "AI and agents",
    items: [
      "AI gateway design",
      "LiteLLM",
      "OpenAI API",
      "Prompt design",
      "Checking model output",
      "Per-site tokens",
      "Rate and cost limits",
      "Claude Code",
      "MCP servers",
      "Agent skills",
    ],
  },
  {
    category: "Backend",
    items: [
      "PHP",
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "SQLAlchemy",
      "Laravel",
      "Slim",
    ],
  },
  {
    category: "WordPress",
    items: [
      "Plugin structure",
      "WooCommerce",
      "Gutenberg blocks",
      "WP REST API",
      "Hooks and filters",
      "Payment gateways",
      "Backwards compatibility",
      "Coding standards (PHPCS)",
      "Translations",
      "Free and paid releases",
    ],
  },
  {
    category: "Frontend",
    items: [
      "TypeScript",
      "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "jQuery",
      "HTML and CSS",
      "Accessibility",
    ],
  },
  {
    category: "Servers and networking",
    items: [
      "Docker",
      "Linux servers",
      "Nginx",
      "TLS and DNS",
      "Tailscale",
      "Proxy setup",
      "Modem and mobile IPs",
      "GitHub Actions",
      "Shell",
    ],
  },
  {
    category: "How I work",
    items: [
      "Debugging",
      "Code review",
      "Playwright tests",
      "Security fixes",
      "Performance",
      "Writing docs",
    ],
  },
];

/**
 * Skills with the receipts attached. Every figure comes from `git log` in the
 * plugin it names, so it can be checked; nothing here is a self-assessment.
 */
export const PROOF_POINTS: Stat[] = [
  {
    value: "492",
    label: "commits in Everest Forms",
    note: "Across the free and pro plugins, including the AI form builder",
  },
  {
    value: "303 of 331",
    label: "commits in SmartSMTP",
    note: "I built it from its early versions through its first public releases",
  },
  {
    value: "268",
    label: "commits in User Registration",
    note: "Core and pro, most of it on the payment side",
  },
  {
    value: "4",
    label: "payment gateways",
    note: "PayPal, Stripe, Mollie and Authorize.Net, all on the money path",
  },
  {
    value: "2",
    label: "security fixes in production",
    note: "A faked gateway on free memberships, and an unsafe unserialize on old PHP",
  },
  {
    value: "171 of 171",
    label: "commits in my own plugin",
    note: "Custom Code Snippets Manager, start to finish",
  },
];
