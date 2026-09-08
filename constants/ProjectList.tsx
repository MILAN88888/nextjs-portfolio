import type { Project } from "./types";

/**
 * The gateway leads as the one `featured` entry. User Registration follows even
 * though Everest Forms has more installs, because the membership payment work is
 * the deepest thing here. After that, roughly by size, with the two I own
 * outright (SmartSMTP and the snippet plugin) kept high.
 *
 * `role` is written from the commit history, not from memory, and in plain
 * words: name the field, the bug or the module, and skip the adjectives. Most
 * of these are team products, so say what my part was and nothing more.
 */
export const PROJECT_LIST: Project[] = [
  {
    id: "ai-gateway",
    title: "AI gateway for WordPress plugins",
    featured: true,
    metric: "Powers AI form building in a plugin on 90,000 sites",
    description:
      "Our plugins needed AI features, and an API key inside a plugin is not an option: anyone who downloads the plugin can read it, and every site would spend from the same account. So the plugins ask a gateway instead. It is FastAPI in front of LiteLLM, with Postgres and Redis, all on Docker. A site has to prove it owns its domain before it gets a token, tokens are stored hashed and expire when nobody uses them, and each request is checked against that site's licence, rate limit and spending cap before it reaches a model. What comes back is checked against the plugin's own field format before WordPress does anything with it. The plugins ask for a nickname rather than a specific model, so we can switch model or provider on the server without shipping an update to thousands of sites.",
    role: "I designed it and wrote it, on both sides: the gateway, the prompt setup for each product, and the WordPress code that keeps the token and turns the model's answer into a working form",
    stack: ["Python", "FastAPI", "LiteLLM", "PostgreSQL", "Redis", "Docker", "PHP"],
    note: "Closed source, built at work. The feature it powers is public, in Everest Forms",
  },
  {
    id: "user-registration",
    title: "User Registration & Membership",
    metric: "50,000+ installs, rated 96/100 by 828 people",
    description:
      "Registration, login and paid memberships for WordPress: a builder for sign-up fields and roles, content restriction, membership plans, and payments through Stripe, PayPal, Mollie, Authorize.Net and bank transfer.",
    role: "Mostly the payment side: PayPal moved onto its REST API with webhooks and stricter IPN checks, a Stripe bug that charged the wrong currency, Mollie retries that charged twice, and signature checks on Authorize.Net webhooks. I also built the content drip module and the membership upgrade flow, and closed a hole where a faked gateway could send a free membership down the paid order path",
    stack: ["WordPress", "PHP", "React", "Payments"],
    repoUrl: "https://github.com/wpeverest/user-registration",
    liveUrl: "https://wordpress.org/plugins/user-registration/",
  },
  {
    id: "everest-forms",
    title: "Everest Forms",
    metric: "90,000 installs, rated 98/100 by 375 people",
    description:
      "A drag-and-drop form builder with payments, quizzes and a pro tier of add-ons. Forms people built years ago still have to open and submit correctly, so most of the care goes into not breaking them.",
    role: "The divider field and multiple-select support, styling for the lookup field, range slider and single-item options in calculations, and the AI form building feature. I also blocked an unsafe unserialize call on old PHP versions. Around 440 commits across the free and pro plugins",
    stack: ["WordPress", "PHP", "React", "AI"],
    repoUrl: "https://github.com/wpeverest/everest-forms",
    liveUrl: "https://wordpress.org/plugins/everest-forms/",
  },
  {
    id: "smart-smtp",
    title: "SmartSMTP",
    metric: "2,000 installs, and 303 of its 331 commits are mine",
    description:
      "Email sending for WordPress that tells you when it fails. One main SMTP connection with a backup behind it, setup for the common providers, a test email you can send before anything is configured, and a log of what actually went out.",
    role: "I built most of this one, from the early versions through its first public releases: the main and fallback connections, provider setup, test mail, attachment handling, the delivery log, and the hand-off from User Registration",
    stack: ["WordPress", "PHP", "React", "Email"],
    liveUrl: "https://wordpress.org/plugins/smart-smtp/",
  },
  {
    id: "snippets-manager",
    title: "Custom Code Snippets Manager",
    metric: "My own plugin, built on my own time",
    description:
      "For running small pieces of PHP, JavaScript, CSS or HTML on a site without editing theme files. It has a proper code editor, checks the syntax on both the server and in the browser, lets you choose where each snippet runs, and imports and exports as JSON. If a PHP snippet throws a fatal error it is caught and switched off, so one bad snippet cannot take the site down.",
    role: "All of it: the idea, the structure, the admin screens, the safety model and the build setup",
    stack: ["WordPress", "PHP", "TypeScript", "CodeMirror"],
    note: "Not released yet, waiting on the plugin directory",
  },
  {
    id: "blockart",
    title: "BlockArt Blocks",
    metric: "10,000+ installs, rated 98/100 by 16 people",
    description:
      "A library of Gutenberg blocks with ready-made sections and templates. Every setting has to keep rendering the same way on pages built long before the current version.",
    role: "Fixed a security hole in the counter block, and made the colour picker offer the theme's own palette",
    stack: ["WordPress", "React", "Gutenberg", "PHP"],
    liveUrl: "https://wordpress.org/plugins/blockart-blocks/",
  },
  {
    id: "magazine-blocks",
    title: "Magazine Blocks",
    metric: "6,000 installs, rated 98/100 by 9 people",
    description:
      "Blocks for news and magazine sites: post grids, sliders, tickers and an ad system, all pulling posts behind the editor.",
    role: "Block features in both the free and pro plugins, capability checks on editor actions, and I cut the 1.8 release. 79 commits across the two",
    stack: ["WordPress", "React", "Gutenberg", "PHP"],
    liveUrl: "https://wordpress.org/plugins/magazine-blocks/",
  },
  {
    id: "registration-form-fields",
    title: "Registration Form Fields for WooCommerce",
    metric: "Paid extension, sold on WooCommerce.com",
    description:
      "A drag-and-drop builder for the WooCommerce registration form: custom fields, validation and admin management, running on stores I never get to see.",
    role: "Built the file upload field end to end, at checkout, in the dashboard user screen and for multiple files, plus the phone field, the first and last name smart tags, PHP 8 fixes and repairs to the email templates",
    stack: ["WooCommerce", "PHP", "React", "Paid"],
    liveUrl: "https://woocommerce.com/products/registration-form-fields/",
    internal: true,
  },
  {
    id: "customize-my-account",
    title: "Customize My Account Page for WooCommerce",
    metric: "Paid on WooCommerce.com, free edition on WordPress.org",
    description:
      "Lets a store owner rebuild the WooCommerce My Account area without touching a theme: custom endpoints, tabs and groups, different navigation layouts, and a customiser that shows each change as you make it.",
    role: "The colour palette manager, the navigation layout and menu position controls, live previews for every control, support for the older style engine, a warning before you leave with unsaved changes, and the 2.0.1 release. 158 commits",
    stack: ["WooCommerce", "PHP", "React", "Paid"],
    liveUrl: "https://woocommerce.com/products/customize-my-account-page-for-woocommerce/",
    internal: true,
  },
  {
    id: "personal-portfolio",
    title: "This site",
    metric: "Static Next.js, about 85 kB of JavaScript",
    description:
      "One page, rendered as static HTML. Both themes come from a single set of CSS variables, no colour is written into a component, and all the text lives in one typed file so nothing drifts out of sync.",
    role: "The design, the tokens, the accessibility pass and the words",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/MILAN88888/nextjs-portfolio",
    liveUrl: "https://milanc.com.np/",
  },
];
