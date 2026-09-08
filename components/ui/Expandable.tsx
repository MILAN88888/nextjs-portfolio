import type { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

interface ExpandableProps {
  children: ReactNode;
  /** Names what is behind the toggle, for anyone using a screen reader. */
  label: string;
}

/**
 * An icon-only open/close toggle on a native `<details>`, so it needs no client
 * JavaScript and the hidden text still ships in the HTML. The chevron rotation
 * lives in `.disclosure` in globals.css.
 */
export const Expandable = ({ children, label }: ExpandableProps) => (
  <details className="disclosure">
    <summary className="inline-grid h-7 w-7 place-items-center rounded-full border border-line text-ink-muted transition-colors duration-200 hover:border-accent hover:text-accent">
      <FiChevronDown size={14} aria-hidden="true" className="disclosure-chevron" />
      <span className="sr-only disclosure-more">Show more about {label}</span>
      <span className="sr-only disclosure-less">Show less about {label}</span>
    </summary>

    <div className="mt-4 space-y-4">{children}</div>
  </details>
);
