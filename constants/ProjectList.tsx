import type { Project } from "./types";

/**
 * The gateway leads as the one `featured` entry, then the two flagship plugins,
 * then the two products that are mine — SmartSMTP, which I built out, and the
 * snippet plugin I maintain on my own account. Install counts and ratings are
 * checkable on WordPress.org.
 *
 * `role` is written from the commit history, not from memory: what I actually
 * built, named specifically enough that a reviewer could go and look. Most of
 * these are team products, and presenting one as solo work loses their trust.
 */
export const PROJECT_LIST: Project[] = [
  {
    id: "ai-gateway",
    title: "Multi-tenant AI gateway",
    featured: true,
    metric: "Serves AI form generation to a 90,000-install plugin",
    description:
      "A provider key shipped inside a plugin leaks the first time somebody downloads the folder, and it puts every site on one unbounded budget. So the plugins call a gateway instead — FastAPI in front of a LiteLLM router, on Docker with Postgres and Redis. A site proves it owns its domain before it is issued a token; that token is stored only as a hash and expires if it goes unused; and every request clears licence, rate and spend limits before a model sees it. What comes back is checked against the product's own field schema before WordPress touches it, and because plugins ask for an alias rather than a model name, changing provider is a config change on the server instead of a release to tens of thousands of sites.",
    role: "My design and my code at both ends — the gateway, the per-product prompt modules, and the WordPress side that stores credentials and turns model JSON into a working form",
    stack: ["Python", "FastAPI", "LiteLLM", "PostgreSQL", "Redis", "Docker", "PHP"],
    note: "Closed source — built for my employer; the feature it powers ships in Everest Forms",
  },
  {
    id: "everest-forms",
    title: "Everest Forms",
    metric: "90,000 active installs · 98/100 from 375 reviews",
    description:
      "A form builder for WordPress: drag-and-drop fields, payment and quiz forms, and an add-on API a whole pro tier hangs off. The React builder talks to a PHP field API that has to keep accepting forms built years ago.",
    role: "Field types — the divider field, lookup field styling, range slider and single-item support in calculations — admin features across free and pro, and the AI form generation integration end to end",
    stack: ["WordPress", "PHP", "React", "AI"],
    repoUrl: "https://github.com/wpeverest/everest-forms",
    liveUrl: "https://wordpress.org/plugins/everest-forms/",
  },
  {
    id: "user-registration",
    title: "User Registration & Membership",
    metric: "50,000+ active installs · 96/100 from 828 reviews",
    description:
      "Registration, login and membership for WordPress: a form builder for custom fields and roles, content restriction, tiered plans, and a payment system with Stripe, PayPal and bank transfer — plus the whole account email lifecycle.",
    role: "Membership upgrade flows, the content-drip module, LMS compatibility in content restriction, and the payment add-ons — Authorize.Net webhook signature verification, Mollie renewal retries, Stripe payment details",
    stack: ["WordPress", "PHP", "React", "Payments"],
    repoUrl: "https://github.com/wpeverest/user-registration",
    liveUrl: "https://wordpress.org/plugins/user-registration/",
  },
  {
    id: "smart-smtp",
    title: "SmartSMTP",
    metric: "2,000 active installs · over 90% of its commits are mine",
    description:
      "Transactional email for WordPress that fails loudly instead of silently. A primary connection with a fallback behind it, provider setup for the common mailers, a test-mail flow that works before anything is configured, and a delivery log a site owner can actually read.",
    role: "Built it out through its first releases: the connection and fallback model, provider setup, test mail, attachment handling, delivery logging and the User Registration hand-off",
    stack: ["WordPress", "PHP", "React", "Email"],
    liveUrl: "https://wordpress.org/plugins/smart-smtp/",
  },
  {
    id: "snippets-manager",
    title: "Custom Code Snippets Manager",
    metric: "My own plugin — designed and built solo",
    description:
      "Run PHP, JavaScript, CSS and HTML snippets in WordPress without touching a theme file: CodeMirror editor, syntax checked on the server and in the browser, per-snippet scopes, JSON import and export. A fatal from a user's PHP is caught and that snippet deactivated, so a bad snippet can't take the site down.",
    role: "Everything: architecture, admin interface, the safety model and the build pipeline",
    stack: ["WordPress", "PHP", "TypeScript", "CodeMirror"],
    note: "Pre-release — not yet in the plugin directory",
  },
  {
    id: "blockart",
    title: "BlockArt Blocks",
    metric: "10,000+ active installs · 98/100 from 16 reviews",
    description:
      "A Gutenberg block library with a section and template library on top — blocks whose settings have to keep rendering identically on pages built years before the current version.",
    role: "Fixed a vulnerability in the counter block, and added theme-palette support to the colour picker",
    stack: ["WordPress", "React", "Gutenberg", "PHP"],
    liveUrl: "https://wordpress.org/plugins/blockart-blocks/",
  },
  {
    id: "magazine-blocks",
    title: "Magazine Blocks",
    metric: "6,000 active installs · 98/100 from 9 reviews",
    description:
      "A magazine and news site builder: post grids, sliders, tickers and an advertisement system, all as blocks driven by WP_Query behind the editor.",
    role: "Block features across free and pro, editor capability checks, and cutting the 1.8 release",
    stack: ["WordPress", "React", "Gutenberg", "PHP"],
    liveUrl: "https://wordpress.org/plugins/magazine-blocks/",
  },
  {
    id: "registration-form-fields",
    title: "Registration Form Fields for WooCommerce",
    metric: "Commercial extension, sold on WooCommerce.com",
    description:
      "A drag-and-drop builder for the WooCommerce registration form — custom fields, validation and admin-side management, on stores it has never seen.",
    role: "Built the file-upload field end to end (checkout, dashboard and multi-file), the phone-field component and first/last-name smart tags, plus PHP 8 compatibility and the email-template fixes",
    stack: ["WooCommerce", "PHP", "React", "Commercial"],
    liveUrl: "https://woocommerce.com/products/registration-form-fields/",
    internal: true,
  },
  {
    id: "customize-my-account",
    title: "Customize My Account Page for WooCommerce",
    metric: "Commercial on WooCommerce.com · free edition on WordPress.org",
    description:
      "Rebuilds the WooCommerce My Account area without a child theme: custom endpoints, tabs and groups, navigation layouts, and a customizer that previews every control as you change it.",
    role: "The colour-palette manager (create, save, reorder, delete), navigation layout and menu-position controls, live previews for every control, legacy-style support, unsaved-change tracking, and the 2.0.1 release",
    stack: ["WooCommerce", "PHP", "React", "Commercial"],
    liveUrl: "https://woocommerce.com/products/customize-my-account-page-for-woocommerce/",
    internal: true,
  },
  {
    id: "personal-portfolio",
    title: "This site",
    metric: "Static Next.js, ~85 kB of JS on first load",
    description:
      "One statically rendered page on a design system of CSS custom properties: two themes from one token set, no colour hardcoded in a component, no animation library, and every word of content in a typed constants layer.",
    role: "Design, tokens, accessibility pass and content",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    repoUrl: "https://github.com/MILAN88888/nextjs-portfolio",
    liveUrl: "https://milanc.com.np/",
  },
];
