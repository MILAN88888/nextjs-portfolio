import type { ReactNode } from "react";
import { getSection, SECTION_KICKERS } from "@/constants";
import { Reveal } from "./Reveal";
import { Container } from "./Container";

interface SectionProps {
  /** Must match an id in constants/Sections.tsx — that's where the nav reads from. */
  id: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, children, className = "" }: SectionProps) => {
  const { num, label, title } = getSection(id);
  const kicker = SECTION_KICKERS[id] ?? label;

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`border-t border-line py-20 md:py-28 ${className}`}
    >
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {num} &mdash; {kicker}
          </p>

          <h2
            id={`${id}-heading`}
            className="mt-5 max-w-3xl font-display text-h2 font-semibold text-ink"
          >
            {title}
          </h2>
        </Reveal>

        <div className="mt-10 md:mt-12">{children}</div>
      </Container>
    </section>
  );
};
