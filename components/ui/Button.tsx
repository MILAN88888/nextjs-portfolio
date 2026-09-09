import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  /** Force a new tab. External http(s) links get this automatically. */
  external?: boolean;
  download?: boolean;
  className?: string;
}

const VARIANTS = {
  primary:
    "bg-accent text-accent-fg border border-transparent hover:brightness-110",
  secondary:
    "bg-transparent text-ink border border-line hover:border-line-strong hover:bg-surface-hover",
} as const;

const SIZES = {
  md: "px-5 py-3 text-small",
  sm: "px-4 py-2 text-label",
} as const;

/** Anything that isn't an in-app route: protocol links, hashes, downloads. */
const isPlainAnchor = (href: string) =>
  /^(https?:|mailto:|tel:)/.test(href) || href.startsWith("#");

export const Button = ({
  href,
  children,
  variant = "primary",
  size = "md",
  external,
  download = false,
  className = "",
}: ButtonProps) => {
  const classes = `inline-flex items-center gap-2 rounded-full font-medium transition-all duration-200 ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const newTab = external ?? href.startsWith("http");

  if (download || isPlainAnchor(href)) {
    return (
      <a
        href={href}
        className={classes}
        {...(newTab && { target: "_blank", rel: "noreferrer noopener" })}
        {...(download && { download: true })}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
};
