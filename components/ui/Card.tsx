import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  /** Adds hover lift and border highlight. Use for cards that link somewhere. */
  interactive?: boolean;
  className?: string;
}

export const Card = ({ children, interactive = false, className = "" }: CardProps) => (
  <div
    className={[
      "rounded-lg border border-line bg-surface",
      interactive &&
        "transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-lift",
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </div>
);
