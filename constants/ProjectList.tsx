import type { Project } from "./types";

/**
 * Products first, ordered by install base. Install counts and ratings are
 * checkable on WordPress.org; `role` says what my part was, because these are
 * team products and presenting one as solo work is the fastest way to lose a
 * reviewer's trust. The AI gateway is not here — it has its own section.
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
    id: "customize-my-account",
    title: "Customize My Account Page",
    metric: "400 active installs · WooCommerce",
    description:
      "Lets store owners restructure the WooCommerce My Account area — custom endpoints, sections and templates — without a child theme or a line of PHP.",
    role: "Endpoint and template handling",
    stack: ["WooCommerce", "PHP", "Extension"],
    liveUrl: "https://wordpress.org/plugins/customize-my-account-page/",
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
