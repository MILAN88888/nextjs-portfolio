import type { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

interface ExpandableProps {
  /** Always visible, and the whole of it is the click target. */
  header: ReactNode;
  children: ReactNode;
  /** Names what is behind the toggle, for anyone using a screen reader. */
  label: string;
}

/**
 * A card header that opens. Built on a native `<details>`, so it needs no
 * client JavaScript and the folded text still ships in the HTML. The chevron
 * rotation and the marker reset live in `.disclosure` in globals.css.
 */
export const Expandable = ({ header, children, label }: ExpandableProps) => (
  <details className="disclosure">
    <summary className="group/sum flex items-start justify-between gap-4">
      <div className="min-w-0">{header}</div>

      <span className="mt-1 inline-grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-ink-muted transition-colors duration-200 group-hover/sum:border-accent group-hover/sum:text-accent">
        <FiChevronDown size={16} aria-hidden="true" className="disclosure-chevron" />
      </span>

      <span className="sr-only disclosure-more">Show more about {label}</span>
      <span className="sr-only disclosure-less">Show less about {label}</span>
    </summary>

    <div className="mt-5 space-y-4 border-t border-line pt-5">{children}</div>
  </details>
);
