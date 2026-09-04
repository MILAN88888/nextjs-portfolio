import type { ReactNode } from "react";

interface TagProps {
  children: ReactNode;
  /**
   * `mono` — outlined monospace pill, used for project stacks.
   * `solid` — filled rounded chip, used for the skills grid.
   */
  variant?: "mono" | "solid";
  className?: string;
}

const VARIANTS = {
  mono: "rounded-full border border-line px-2.5 py-1 font-mono text-[0.69rem] text-ink-muted",
  solid: "rounded-sm border border-line bg-surface-raised px-3 py-1.5 text-sm text-ink",
} as const;

export const Tag = ({ children, variant = "mono", className = "" }: TagProps) => (
  <span className={`inline-flex items-center gap-1.5 ${VARIANTS[variant]} ${className}`}>
    {children}
  </span>
);
