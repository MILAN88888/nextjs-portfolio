"use client";
import React, { useState, useEffect } from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { MENU_OPTIONS } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState<string | null>(null);
  const pathname                = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const match = MENU_OPTIONS.find(m => m.url === pathname || pathname.startsWith(m.url.replace("/#", "/")));
    setActive(match?.id ?? null);
  }, [pathname]);

  return (
    /* visible only on mobile */
    <header
      className="md:hidden sticky top-0 z-50 w-full transition-all duration-300"
      style={{
        background: scrolled ? "color-mix(in srgb, var(--bg) 82%, transparent)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <div className="w-full px-5 py-3 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" onClick={() => setActive(null)} className="flex items-center gap-2 group">
          <span
            className="font-bold text-lg tracking-tight transition-opacity duration-200 group-hover:opacity-70"
            style={{ color: "var(--fg)" }}
          >
            @milan
          </span>
          <Image
            src="/images/np_flag.gif"
            alt="Nepal"
            width={20}
            height={12}
            priority
            className="rounded-sm"
          />
        </Link>

        {/* Right: nav pills + theme */}
        <div className="flex items-center gap-1">
          <nav className="flex items-center">
            {MENU_OPTIONS.map(item => {
              const isActive = active === item.id;
              return (
                <Link
                  key={item.id}
                  href={item.url}
                  onClick={() => setActive(item.id)}
                  className="px-3 py-1.5 text-xs font-medium rounded-full transition-all duration-200"
                  style={{
                    color: isActive ? "var(--accent)" : "var(--muted)",
                    background: isActive
                      ? "color-mix(in srgb, var(--accent) 10%, transparent)"
                      : "transparent",
                  }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div
            className="w-8 h-8 flex items-center justify-center rounded-full transition-all duration-200"
            style={{ color: "var(--muted)" }}
          >
            <ThemeSwitcher />
          </div>
        </div>

      </div>
    </header>
  );
};
