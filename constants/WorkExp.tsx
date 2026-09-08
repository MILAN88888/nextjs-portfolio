import type { Job } from "./types";

export const WORK_EXP: Job[] = [
  {
    id: "themegrill-software-engineer",
    position: "Software Engineer",
    company: "ThemeGrill Pvt Ltd",
    companyUrl: "https://themegrill.com",
    period: "Jan 2023 — Present",
    summary:
      "I joined as a plugin intern, fixing issues on a plugin that was already live, and moved onto the product teams from there. I now work across seven WordPress products with about 150,000 sites between them, plus the AI platform behind their AI features.",
    highlights: [
      "Look after the payment side of User Registration & Membership: PayPal on its REST API with webhooks, Stripe currency and payment record fixes, Mollie renewals that used to charge twice, and signature checks on Authorize.Net webhooks",
      "Built SmartSMTP from its early versions through its first public releases, and still know it end to end",
      "Ship features in Everest Forms and User Registration: form fields, the content drip module, membership upgrades and admin screens",
      "Work on Gutenberg blocks in BlockArt and Magazine Blocks, including a security fix in the counter block and capability checks on editor actions",
      "Designed and built the AI gateway our plugins call, on FastAPI, LiteLLM, Postgres and Redis, with a licence check, a rate limit and a spending cap on every request",
      "Fix security issues when they turn up, like a faked gateway that could push a free membership down the paid order path, and an unsafe unserialize call on old PHP versions",
      "Ship smaller work across 20 or so User Registration add-ons, and cut releases for the paired free and pro plugins",
      "Use Claude Code with Playwright over MCP to check a fix in a real WordPress install, with my own skills holding the coding standards and the debug routine",
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
    summary: "Backend work on Oxole, a site where students swapped textbooks.",
    highlights: [
      "Built sign-up, book listings, search, exchange requests and profile pages",
      "Plain PHP in an MVC layout, with jQuery and Ajax, Twig templates and SQL I wrote by hand",
    ],
  },
];
