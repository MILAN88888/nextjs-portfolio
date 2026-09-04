import type { Project } from "./types";

export const PROJECT_LIST: Project[] = [
  {
    id: "user-registration",
    title: "User Registration & Membership",
    description:
      "ThemeGrill's registration and membership plugin for WordPress: drag-and-drop form builder, custom fields, roles and the full email lifecycle, handled server-side in PHP.",
    stack: ["WordPress", "PHP", "Plugin"],
    repoUrl: "https://github.com/wpeverest/user-registration",
    liveUrl: "https://wordpress.org/plugins/user-registration/",
  },
  {
    id: "everest-forms",
    title: "Everest Forms",
    description:
      "A form builder plugin with a React-powered builder, extensible field API and integrations — used on a large install base where backwards compatibility matters.",
    stack: ["WordPress", "React", "PHP"],
    repoUrl: "https://github.com/wpeverest/everest-forms",
    liveUrl: "https://wordpress.org/plugins/everest-forms/",
  },
  {
    id: "smart-smtp",
    title: "Smart SMTP",
    description:
      "Reliable transactional email for WordPress: SMTP configuration, mailer routing and delivery logging with clear failure reporting.",
    stack: ["WordPress", "PHP", "Email"],
    liveUrl: "https://wordpress.org/plugins/smart-smtp/",
  },
  {
    id: "customize-my-account",
    title: "Customize My Account Page",
    description:
      "WooCommerce extension that lets store owners restructure the My Account area — custom endpoints, sections and templates without touching theme code.",
    stack: ["WooCommerce", "PHP", "Extension"],
    liveUrl: "https://wordpress.org/plugins/customize-my-account-page/",
  },
  {
    id: "registration-form-fields",
    title: "Registration Form Fields for WooCommerce",
    description:
      "A commercial WooCommerce extension adding validated custom fields to checkout and registration, with admin-side field management.",
    stack: ["WooCommerce", "PHP", "Commercial"],
    liveUrl: "https://woocommerce.com/products/registration-form-fields/",
  },
  {
    id: "personal-portfolio",
    title: "Personal Portfolio",
    description:
      "A Next.js + TypeScript portfolio and writing space, built for speed with static rendering and a hand-rolled design system.",
    stack: ["Next.js", "TypeScript", "React"],
    repoUrl: "https://github.com/MILAN88888/nextjs-portfolio",
    liveUrl: "https://milanc.com.np/",
  },
  {
    id: "bookxchange",
    title: "BookXchange",
    description:
      "A Laravel marketplace for students to trade textbooks — listings, search, and messaging, with a responsive front-end interface.",
    stack: ["Laravel", "PHP", "MySQL"],
    repoUrl: "https://github.com/MILAN88888/Laravel-BookXchange",
  },
  {
    id: "js-calculator",
    title: "JS Calculator",
    description:
      "A small, dependency-free calculator focused on keyboard support and clean state handling in vanilla JavaScript.",
    stack: ["JavaScript", "HTML", "CSS"],
    repoUrl: "https://github.com/MILAN88888/Js_calculator",
  },
];
