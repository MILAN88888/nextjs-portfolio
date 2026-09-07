import type { SectionMeta } from "./types";

/**
 * Single source of truth for the page's sections: drives the header nav,
 * the scroll-spy, and every `01 — ABOUT` section heading. Adding a section
 * here and rendering it in app/page.tsx is all that's required — the nav
 * follows automatically.
 */
export const SECTIONS: SectionMeta[] = [
  { id: "about",      num: "01", label: "About",      title: "Product engineering, with the platform underneath." },
  { id: "projects",   num: "02", label: "Projects",   title: "What I ship, and what I own." },
  { id: "skills",     num: "03", label: "Skills",     title: "The toolkit I reach for." },
  { id: "experience", num: "04", label: "Experience", title: "Where I've been building." },
  { id: "education",  num: "05", label: "Education",  title: "Where I studied." },
  { id: "contact",    num: "06", label: "Contact",    title: "Have a role, a product, or a hard problem? Let's talk." },
];

/** Kicker label, e.g. `FEATURED PROJECTS` for the projects section. */
export const SECTION_KICKERS: Record<string, string> = {
  projects: "Featured Projects",
};

export const getSection = (id: string): SectionMeta => {
  const section = SECTIONS.find(s => s.id === id);
  if (!section) throw new Error(`Unknown section id: ${id}`);
  return section;
};
