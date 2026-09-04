import type { TechGroup } from "./types";

export const TECH_LIST: TechGroup[] = [
  {
    category: "Languages",
    items: ["PHP", "JavaScript", "TypeScript", "HTML", "CSS", "SQL", "Shell"],
  },
  {
    category: "AI-assisted engineering",
    items: [
      "ChatGPT",
      "Claude",
      "DeepSeek AI",
      "Prompt-driven development",
      "AI code review",
      "AI-assisted debugging",
      "Test generation",
      "Spec-to-code workflows",
    ],
  },
  {
    category: "Frameworks & libraries",
    items: ["React", "Next.js", "Laravel", "Slim", "Twig", "jQuery", "Tailwind CSS"],
  },
  {
    category: "Platforms",
    items: ["WordPress", "WooCommerce", "REST APIs", "MySQL", "Git", "GitHub Actions"],
  },
  {
    category: "Infrastructure & networking",
    items: [
      "Linux servers",
      "Networking fundamentals",
      "Tailscale",
      "Reverse proxies",
      "Nginx / Apache config",
      "TLS & DNS basics",
    ],
  },
  {
    category: "Ways of working",
    items: [
      "Problem solving",
      "Debugging",
      "Code review",
      "Testing",
      "Performance budgets",
      "Accessibility",
      "Documentation",
    ],
  },
];
