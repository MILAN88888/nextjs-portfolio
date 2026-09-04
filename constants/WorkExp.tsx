import type { Job } from "./types";

export const WORK_EXP: Job[] = [
  {
    id: "themegrill-software-engineer",
    position: "Software Engineer",
    company: "ThemeGrill Pvt Ltd",
    companyUrl: "https://themegrill.com",
    period: "Mar 2023 — Present",
    summary:
      "Building and maintaining WordPress and WooCommerce products used across a large production install base.",
    highlights: [
      "Ship features across PHP back-ends and React-based admin interfaces for User Registration & Membership and Everest Forms",
      "Work on transactional email delivery in Smart SMTP and on WooCommerce account and registration extensions",
      "Maintain backwards compatibility and performance for sites already running these plugins",
      "Use AI assistants (ChatGPT, Claude, DeepSeek) for prompt-driven scaffolding, refactors, test cases and faster root-cause analysis",
    ],
    links: [
      { title: "User Registration",         url: "https://wordpress.org/plugins/user-registration/" },
      { title: "Everest Forms",             url: "https://wordpress.org/plugins/everest-forms/" },
      { title: "Smart SMTP",                url: "https://wordpress.org/plugins/smart-smtp/" },
      { title: "Customize My Account Page", url: "https://wordpress.org/plugins/customize-my-account-page/" },
      { title: "Registration Form Fields",  url: "https://woocommerce.com/products/registration-form-fields/" },
    ],
  },
  {
    id: "themegrill-intern",
    position: "Intern Plugin PHP Developer",
    company: "ThemeGrill Pvt Ltd",
    companyUrl: "https://themegrill.com",
    period: "Jan 2023 — Mar 2023",
    summary: "Learned WordPress plugin development from the ground up.",
    highlights: [
      "Started with plugin fundamentals, then moved on to fixing issues on the live User Registration plugin",
      "Sharpened both coding practice and day-to-day team communication",
    ],
  },
  {
    id: "idea-foundation-intern",
    position: "Intern PHP Developer",
    company: "Idea Foundation",
    companyUrl: "http://www.ideafoundation.co.in",
    period: "Jul 2022 — Oct 2022",
    summary: "Backend developer on Oxole, an online book-exchange platform.",
    highlights: [
      "Implemented user registration, book listing, search, exchange requests and user profiles",
      "Worked in MVC with core PHP, jQuery/Ajax, Twig templates and SQL queries",
    ],
  },
];
