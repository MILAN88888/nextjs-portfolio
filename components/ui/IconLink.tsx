import type { ReactNode } from "react";

interface IconLinkProps {
  href: string;
  /** Accessible name — these buttons have no visible text. */
  label: string;
  children: ReactNode;
  className?: string;
}

/** Square icon button. `rel` is baked in so no call site can forget it. */
export const IconLink = ({ href, label, children, className = "" }: IconLinkProps) => {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      aria-label={label}
      {...(isExternal && { target: "_blank", rel: "noreferrer noopener" })}
      className={`inline-grid h-9 w-9 place-items-center rounded-full border border-line text-ink-muted transition-colors duration-200 hover:border-accent hover:text-accent ${className}`}
    >
      {children}
    </a>
  );
};
