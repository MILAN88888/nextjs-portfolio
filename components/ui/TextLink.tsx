import type { ReactNode } from "react";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

/** Small inline link with an icon, as used for a project's Code / Live links. */
export const TextLink = ({ href, children, className = "" }: TextLinkProps) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className={`inline-flex items-center gap-1.5 font-mono text-small text-ink-muted transition-colors duration-200 hover:text-accent ${className}`}
  >
    {children}
  </a>
);
