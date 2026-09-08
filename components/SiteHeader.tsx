"use client";
import { useCallback, useEffect, useState } from "react";
import { FiGithub, FiMenu, FiX } from "react-icons/fi";
import { ThemeToggle } from "./ThemeToggle";
import { PROFILE, SECTIONS } from "@/constants";

export const SiteHeader = () => {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll-spy: the active link reflects the section actually in view.
  useEffect(() => {
    const elements = SECTIONS
      .map(section => document.getElementById(section.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0 || typeof IntersectionObserver === "undefined") return;

    const visible = new Set<string>();

    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        }
        // Of everything on screen, highlight the one earliest in the page.
        const current = SECTIONS.find(section => visible.has(section.id));
        setActiveId(current?.id ?? null);
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 },
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Escape closes the mobile menu.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <header className="header-surface sticky top-0 z-50">
      <div className="mx-auto flex h-header max-w-content items-center justify-between gap-4 px-5 md:px-8">
        <a
          href="#top"
          onClick={closeMenu}
          className="font-mono text-sm font-medium text-ink"
        >
          {PROFILE.handle}
          <span className="text-accent">.</span>
        </a>

        <nav aria-label="Sections" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {SECTIONS.map(section => {
              const isActive = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={`rounded-full px-3 py-2 text-sm transition-colors duration-200 ${
                      isActive
                        ? "text-accent"
                        : "text-ink-muted hover:text-ink"
                    }`}
                  >
                    {section.navLabel ?? section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="hidden items-center gap-2 rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors duration-200 hover:border-line-strong hover:bg-surface-hover sm:inline-flex"
          >
            <FiGithub size={14} aria-hidden="true" /> GitHub
          </a>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen(open => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="inline-grid h-9 w-9 place-items-center rounded-full border border-line text-ink-muted transition-colors duration-200 hover:text-ink lg:hidden"
          >
            {menuOpen ? <FiX size={16} /> : <FiMenu size={16} />}
          </button>
        </div>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Sections"
        hidden={!menuOpen}
        className="border-t border-line bg-bg lg:hidden"
      >
        <ul className="mx-auto max-w-content px-5 py-3">
          {SECTIONS.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={closeMenu}
                aria-current={activeId === section.id ? "true" : undefined}
                className={`block rounded-sm px-2 py-2.5 text-sm transition-colors ${
                  activeId === section.id ? "text-accent" : "text-ink-muted"
                }`}
              >
                {section.navLabel ?? section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
