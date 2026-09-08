import type { TechGroup } from "./types";

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
