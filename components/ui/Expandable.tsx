import type { ReactNode } from "react";
import { FiChevronDown } from "react-icons/fi";

interface ExpandableProps {
  children: ReactNode;
  /** Names what is hidden, for anyone using a screen reader. */
  label: string;
}

/**
 * Show more / show less on a native `<details>`, so this needs no client
 * JavaScript and works with the fold closed if scripting fails. The label swap
 * and the chevron live in `.disclosure` in globals.css.
 */
export const Expandable = ({ children, label }: ExpandableProps) => (
  <details className="disclosure">
    <summary className="inline-flex items-center gap-1.5 font-mono text-xs text-accent transition-opacity hover:opacity-80">
      <span className="disclosure-more">Show more</span>
      <span className="disclosure-less">Show less</span>
      <span className="sr-only"> about {label}</span>
      <FiChevronDown size={12} aria-hidden="true" className="disclosure-chevron" />
    </summary>

    <div className="mt-4 space-y-4">{children}</div>
  </details>
);
