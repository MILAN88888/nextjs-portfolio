import type { TechGroup } from "./types";

/**
 * Grouped by what the work actually is, not by language family. The AI group
 * lists what I build and operate — model names on their own are a badge, and
 * badges read as unverified.
 */
export const TECH_LIST: TechGroup[] = [
  {
    category: "AI platform & agentic engineering",
    items: [
      "LLM gateway design",
      "LiteLLM routing",
      "OpenAI API",
      "System prompt design",
      "Response schema validation",
      "Per-tenant tokens",
      "Rate & budget control",
      "Cost measurement",
      "Claude Code",
      "MCP servers",
      "Agent skills & hooks",
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
    category: "WordPress product engineering",
    items: [
      "Plugin architecture",
      "WooCommerce",
      "Gutenberg blocks",
      "Block editor (React)",
      "Free/pro tree sync",
      "Release management",
      "WP REST API",
      "Hooks & filters",
      "Backwards compatibility",
      "WPCS / PHPCS",
      "i18n",
      "Licensing & updates",
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
      "HTML & CSS",
      "Accessibility",
    ],
  },
  {
    category: "Infrastructure & networking",
    items: [
      "Docker & Compose",
      "Linux VPS",
      "Nginx reverse proxy",
      "TLS & DNS",
      "Tailscale",
      "Proxy setup",
      "Modem & mobile IP routing",
      "GitHub Actions",
      "Shell",
    ],
  },
  {
    category: "Practice",
    items: [
      "Debugging",
      "Code review",
      "Playwright E2E",
      "Security review",
      "Performance budgets",
      "Technical writing",
    ],
  },
];
