import type { Project } from "./types";

/**
 * Ordered by install base, with one exception: the plugin I own outright sits
 * third, because "what has he built on his own account" is the question a
 * page full of employer products doesn't answer. Install counts and ratings are
 * checkable on WordPress.org; `role` says what my part was, because these are
 * team products and presenting one as solo work loses a reviewer's trust. The
 * AI gateway is not here — it has its own section.
 */
export const PROJECT_LIST: Project[] = [
  {
    id: "everest-forms",
    title: "Everest Forms",
    metric: "90,000 active installs · 98/100 from 375 reviews",
    description:
      "A form builder for WordPress: drag-and-drop fields, payment and quiz forms, and an add-on API a whole pro tier hangs off. The React builder talks to a PHP field API that has to keep accepting forms built years ago.",
    role: "Field types and admin features across free and pro, plus the AI form generation integration end to end",
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
    role: "Features across the form builder, membership plans, payment flows and the email lifecycle",
    stack: ["WordPress", "PHP", "React", "Payments"],
    repoUrl: "https://github.com/wpeverest/user-registration",
    liveUrl: "https://wordpress.org/plugins/user-registration/",
  },
  {
    id: "snippets-manager",
    title: "Custom Code Snippets Manager",
    metric: "My own plugin — designed, built and shipped solo",
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
    id: "smart-smtp",
    title: "SmartSMTP",
    metric: "2,000 active installs",
    description:
      "Transactional email for WordPress that fails loudly instead of silently: SMTP configuration, mailer routing and delivery logging, so a site owner can tell whether the mail left the server.",
    role: "Mailer routing, delivery logging and failure reporting",
    stack: ["WordPress", "PHP", "Email"],
    liveUrl: "https://wordpress.org/plugins/smart-smtp/",
  },
  {
    id: "registration-form-fields",
    title: "Registration Form Fields for WooCommerce",
    metric: "Commercial extension, sold on WooCommerce.com",
    description:
      "Adds validated custom fields to WooCommerce checkout and registration, with admin-side field management — the kind of extension that has to behave on stores it has never seen.",
    role: "Field validation and the admin field manager",
    stack: ["WooCommerce", "PHP", "Commercial"],
    liveUrl: "https://woocommerce.com/products/registration-form-fields/",
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
