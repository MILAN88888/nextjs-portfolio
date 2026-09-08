import type { Project } from "./types";

/**
 * User Registration & Membership is the one `featured` entry. Everest Forms has
 * more installs, but the payment work here is the deepest thing on the page, and
 * it is what I want read first. After that, roughly by size, with the ones I own
 * outright kept high.
 *
 * Milan has other work that is deliberately not listed here. Don't add a project
 * to this file unless he has asked for it by name.
 *
 * The gateway is described here, as my part in a public Everest Forms feature,
 * rather than as a project of its own. It is my employer's system: the
 * architecture is fine to describe at this level, the code and the internals are
 * not. Do not add token mechanics, thresholds, costs or the repo.
 *
 * `role` is written from the commit history, not from memory, and in plain
 * words: name the field, the bug or the module, and skip the adjectives. Most
 * of these are team products, so say what my part was and nothing more.
 *
 * Every grid card's `description` opens with one short sentence, then a blank
 * line. That first line is all a closed card shows, which is what keeps the
 * cards the same height; everything after it, and the whole of `role`, sits
 * behind the toggle.
 */
export const PROJECT_LIST: Project[] = [
  {
    id: "user-registration",
    title: "User Registration & Membership",
    featured: true,
    metric: "50,000+ installs, rated 96/100 by 828 people",
    description:
      "Registration, login and paid memberships for WordPress: a builder for sign-up fields and roles, content restriction, membership plans, and payments through Stripe, PayPal, Mollie, Authorize.Net or bank transfer.\n\nMost of my work here is on the money path. Every gateway has its own webhooks, retries and quirks, and when one fails quietly somebody has paid and not been given what they paid for, or has been charged twice. That is the part I look after.",
    role: "Moved PayPal onto its REST API with webhooks and stricter IPN checks, fixed Stripe charging the wrong currency when a plan had no local price, stopped Mollie retries charging twice, and added signature checks and a retry flow to Authorize.Net. I also built the content drip module and the membership upgrade flow. On the security side I patched unauthenticated privilege escalation and user deletion, arbitrary shortcode execution through user-controlled smart tags, a PayPal flaw that let an attacker mark a pending payment as completed without paying, a forged gateway on free memberships, and an open redirect after login. 268 commits across core and pro",
    stack: ["WordPress", "PHP", "React", "Payments"],
    repoUrl: "https://github.com/wpeverest/user-registration",
    liveUrl: "https://wordpress.org/plugins/user-registration/",
  },
  {
    id: "everest-forms",
    title: "Everest Forms",
    metric: "90,000 installs · 98/100 rating",
    description:
      "A drag-and-drop form builder with payments, quizzes and add-ons.\n\nA whole pro tier of add-ons hangs off it, and forms people built years ago still have to open and submit correctly, so a lot of the work is in not breaking them.\n\nIts newest feature builds a whole form from a sentence describing what you need. That part runs through a service I designed and built: the plugin sends the request to us, we check the site's licence and its limits, ask the model, and make sure the answer is a valid form before the plugin touches it. No API key is ever shipped inside the plugin.",
    role: "The AI form builder end to end: the gateway in Python and FastAPI with Postgres and Redis on Docker, the prompt setup, and the WordPress side that calls it. Before that, the divider field and multiple-select support, styling for the lookup field, range slider and single-item options in calculations, and 17 security fixes: blocking an unsafe unserialize call on old PHP, nonce verification across forms on one page, sanitisation and escaping, entry permissions and file-upload capability checks. 492 commits across the free and pro plugins",
    stack: ["WordPress", "PHP", "React", "Python", "FastAPI", "Docker"],
    repoUrl: "https://github.com/wpeverest/everest-forms",
    liveUrl: "https://wordpress.org/plugins/everest-forms/",
    note: "AI gateway is my employer's",
  },
  {
    id: "smart-smtp",
    title: "SmartSMTP",
    metric: "2,000 installs · 303 of 331 commits",
    description:
      "Email sending for WordPress that tells you when it fails.\n\nOne main SMTP connection with a backup behind it, setup for the common providers, a test email you can send before anything is configured, and a log of what actually went out.",
    role: "I built most of this one, from the early versions through its first public releases: the main and fallback connections, provider setup, test mail, attachment handling, the delivery log, the hand-off from User Registration, and a stored XSS fix in the mail log viewer",
    stack: ["WordPress", "PHP", "React", "Email"],
    liveUrl: "https://wordpress.org/plugins/smart-smtp/",
  },
  {
    id: "snippets-manager",
    title: "Custom Code Snippets Manager",
    metric: "My own plugin · 171 of 171 commits",
    description:
      "Runs PHP, JavaScript, CSS or HTML snippets without editing theme files.\n\nIt runs on any site without touching a theme file. There is a proper code editor, it checks the syntax on both the server and in the browser, lets you choose where each snippet runs, and imports and exports as JSON. If a PHP snippet throws a fatal error it is caught and switched off, so one bad snippet cannot take the site down.",
    role: "All of it: the idea, the structure, the admin screens, the safety model and the build setup",
    stack: ["WordPress", "PHP", "TypeScript", "CodeMirror"],
    note: "Not yet in the plugin directory",
  },
  {
    id: "turbo-subdomains",
    title: "Turbo Subdomains",
    metric: "Commercial WordPress plugin, 18 commits mine",
    description:
      "A plugin for running content campaigns across a large set of subdomains.\n\nI came in for a run of features in early 2026: live search through a self-hosted SearXNG instance, AI featured images that print the article title onto the image and embed IPTC metadata, bulk category editing and campaign exports moved into background jobs, CSV export for selected subdomains, iframe post scheduling, and a database refactor that added the indexes the campaign tables were missing.",
    role: "The search integration, the AI image pipeline, the background job and export work, and the database indexing refactor",
    stack: ["WordPress", "PHP", "AI", "SearXNG"],
    liveUrl: "https://turbosubdomains.com/",
    note: "Private repo, commercial plugin",
  },
  {
    id: "blockart",
    title: "BlockArt Blocks",
    metric: "10,000+ installs · 98/100 rating",
    description:
      "A library of Gutenberg blocks with ready-made sections and templates.\n\nEvery setting has to keep rendering the same way on pages built long before the current version.",
    role: "Fixed a vulnerability in the counter block, and made the colour picker offer the theme's own palette",
    stack: ["WordPress", "React", "Gutenberg", "PHP"],
    liveUrl: "https://wordpress.org/plugins/blockart-blocks/",
  },
  {
    id: "magazine-blocks",
    title: "Magazine Blocks",
    metric: "6,000 installs · 98/100 rating",
    description:
      "Blocks for news and magazine sites: post grids, sliders, tickers and an ad system.\n\nAll of them pull posts through WP_Query behind the editor, so the block settings and the query have to stay in step.",
    role: "Block features in both the free and pro plugins, fixes for unescaped output and an insecure nonce, capability checks on editor actions, and I cut the 1.8 release. 81 commits across the two",
    stack: ["WordPress", "React", "Gutenberg", "PHP"],
    liveUrl: "https://wordpress.org/plugins/magazine-blocks/",
  },
  {
    id: "registration-form-fields",
    title: "Registration Form Fields for WooCommerce",
    metric: "Paid extension on WooCommerce.com",
    description:
      "A drag-and-drop builder for the WooCommerce registration form.\n\nCustom fields, validation and admin management, running on stores I never get to see.",
    role: "Built the file upload field end to end, at checkout, in the dashboard user screen and for multiple files, plus the phone field, the first and last name smart tags, PHP 8 fixes and repairs to the email templates. 70 commits",
    stack: ["WooCommerce", "PHP", "React", "Paid"],
    liveUrl: "https://woocommerce.com/products/registration-form-fields/",
    internal: true,
  },
  {
    id: "customize-my-account",
    title: "Customize My Account Page for WooCommerce",
    metric: "Paid on WooCommerce.com, free on WP.org",
    description:
      "Rebuilds the WooCommerce My Account area without touching a theme.\n\nA store owner gets custom endpoints, tabs and groups, different navigation layouts, and a customiser that shows each change as you make it.",
    role: "The colour palette manager, the navigation layout and menu position controls, live previews for every control, support for the older style engine, a warning before you leave with unsaved changes, and the 2.0.1 release. 162 commits",
    stack: ["WooCommerce", "PHP", "React", "Paid"],
    liveUrl: "https://woocommerce.com/products/customize-my-account-page-for-woocommerce/",
    internal: true,
  },
  {
    id: "personal-portfolio",
    title: "This site",
    metric: "Static Next.js · ~85 kB of JavaScript",
    description:
      "One page of static HTML, with two themes from a single set of CSS variables.\n\nNo colour is written into a component, there is no animation library, and all the text lives in one typed file so nothing drifts out of sync.",
    role: "The design, the tokens, the accessibility pass and the words",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/MILAN88888/nextjs-portfolio",
    liveUrl: "https://milanc.com.np/",
  },
];
