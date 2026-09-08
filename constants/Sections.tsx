import type { SectionMeta } from "./types";

/**
 * Single source of truth for the page's sections: drives the header nav, the
 * scroll-spy and each section's heading. One plain label per section — no
 * numbering, and no second sentence underneath it.
 */
export const SECTIONS: SectionMeta[] = [
  { id: "about",      label: "About" },
  { id: "projects",   label: "Projects" },
  { id: "skills",     label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education",  label: "Education" },
  { id: "contact",    label: "Contact" },
];

export const getSection = (id: string): SectionMeta => {
  const section = SECTIONS.find(s => s.id === id);
  if (!section) throw new Error(`Unknown section id: ${id}`);
  return section;
};
