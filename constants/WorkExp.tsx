import type { Job } from "./types";

/**
 * The ThemeGrill role is grouped by product rather than as one flat list.
 * Seven products in a single bullet list buries what each one actually was,
 * and a reviewer reads "which products, and what in each" far faster.
 */
export const WORK_EXP: Job[] = [
  {
    id: "themegrill-software-engineer",
    position: "Software Engineer",
    company: "ThemeGrill Pvt Ltd",
    companyUrl: "https://themegrill.com",
    period: "Jan 2023 — Present",
    summary:
      "I joined as a plugin intern, fixing issues on a plugin that was already live, and moved onto the product teams from there. I now work across seven WordPress products with about 150,000 sites between them.",
    groups: [
      {
        product: "Everest Forms",
        items: [
          "Built the AI form builder end to end: the back end service in Python and FastAPI, the prompt setup, and the WordPress side that calls it, so no API key ships inside the plugin",
          "Added the divider field and multiple-select support, styled the lookup field, and added range slider and single-item options to calculations",
          "Blocked an unsafe unserialize call on old PHP versions",
          "Around 440 commits across the free and pro plugins",
        ],
      },
      {
        product: "User Registration & Membership",
        items: [
          "Moved PayPal onto its REST API with webhook handling, and added checks on the IPN receiver address and amount",
          "Fixed Stripe charging the wrong currency when a plan had no local price, and stopped Mollie retries charging twice",
          "Added signature checks and a retry flow to Authorize.Net webhooks",
          "Closed a hole where a faked gateway could send a free membership down the paid order path",
          "Built the content drip module and the membership upgrade flow, and shipped smaller work across about 20 add-ons",
        ],
      },
      {
        product: "SmartSMTP",
        items: [
          "Built most of the plugin, from its early versions through its first public releases",
          "The main and fallback connections, provider setup, test mail, attachment handling, the delivery log, and the hand-off from User Registration",
          "303 of its 331 commits are mine",
        ],
      },
      {
        product: "BlockArt and Magazine Blocks",
        items: [
          "Fixed a security hole in the counter block, and made the colour picker offer the theme's own palette",
          "Block features in both the free and pro plugins, capability checks on editor actions, and I cut the 1.8 release",
        ],
      },
      {
        product: "WooCommerce extensions",
        items: [
          "Customize My Account Page: the colour palette manager, navigation layout and menu position controls, live previews for every control, and the 2.0.1 release. 158 commits",
          "Registration Form Fields: the file upload field end to end, at checkout, in the dashboard and for multiple files, plus the phone field, smart tags and PHP 8 fixes",
        ],
      },
      {
        product: "Across the suite",
        items: [
          "Cut releases for the paired free and pro plugins: changelogs, version bumps and keeping both shippable from one change",
          "Use Claude Code with Playwright over MCP to check a fix in a real WordPress install, with my own skills holding the coding standards and the debug routine",
        ],
      },
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
