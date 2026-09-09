import type { ReactNode } from "react";
import { SECTIONS, getSection } from "@/constants";
import { Reveal } from "./Reveal";
import { Container } from "./Container";

interface SectionProps {
  /** Must match an id in constants/Sections.tsx — that's where the nav reads from. */
  id: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, children, className = "" }: SectionProps) => {
  const { label } = getSection(id);

  /**
   * Sections alternate between the page background and the subtle one, which
   * is what separates them now — the hairline top border did the job on a dark
   * page and all but vanished on a light one. Derived from the registry order,
   * so nothing at the call site has to know its own position.
   */
  const tinted = SECTIONS.findIndex(section => section.id === id) % 2 === 0;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`py-20 md:py-28 ${tinted ? "bg-bg-subtle" : "bg-bg"} ${className}`}
    >
      <Container>
        <Reveal>
          {/* A short accent rule in place of the old numbered kicker. */}
          <span className="block h-1 w-12 rounded-full bg-accent" aria-hidden="true" />

          <h2
            id={`${id}-heading`}
            className="mt-6 font-display text-h2 font-semibold text-ink"
          >
            {label}
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-12">{children}</div>
      </Container>
    </section>
  );
};
