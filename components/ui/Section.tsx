import type { ReactNode } from "react";
import { getSection } from "@/constants";
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

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`border-t border-line py-20 md:py-28 ${className}`}
    >
      <Container>
        <Reveal>
          {/* A short accent rule in place of the old numbered kicker. */}
          <span className="block h-px w-10 bg-accent" aria-hidden="true" />

          <h2
            id={`${id}-heading`}
            className="mt-6 font-display text-h2 font-semibold tracking-tight text-ink"
          >
            {label}
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-12">{children}</div>
      </Container>
    </section>
  );
};
