import type { ReactNode } from "react";

/**
 * The page's horizontal rhythm. Sections themselves span the full viewport
 * (so dividers and the hero grid can bleed edge to edge) and wrap their
 * content in this.
 */
export const Container = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`mx-auto w-full max-w-content px-5 md:px-8 ${className}`}>
    {children}
  </div>
);
