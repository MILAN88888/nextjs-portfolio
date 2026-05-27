"use client";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { FiActivity, FiCpu } from "react-icons/fi";

const TABS = [
  { num: 1, label: "home",   href: "#ws-1"  },
  { num: 2, label: "work",   href: "#ws-2"  },
  { num: 3, label: "edu",    href: "#ws-3"  },
  { num: 4, label: "git",    href: "#ws-4"  },
  { num: 5, label: "term",   href: "#ws-5"  },
  { num: 6, label: "proj",   href: "#ws-6"  },
  { num: 7, label: "skills", href: "#ws-7"  },
];

export const TopBar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div className="topbar">
      <div
        className="flex items-center justify-between px-3 py-1.5 font-mono text-xs"
        style={{ color: "var(--muted-foreground)" }}
      >
        {/* Left: brand + workspace tabs */}
        <div className="flex items-center gap-1">
          {/* Brand badge */}
          <div
            className="flex items-center gap-1.5 px-2 py-1 rounded"
            style={{ background: "oklch(28% .03 280 / .6)" }}
          >
            <FiCpu size={12} style={{ color: "var(--mauve)" }} />
            <span className="font-semibold" style={{ color: "var(--foreground)" }}>milan</span>
            <span style={{ color: "var(--muted-foreground)" }}>@</span>
            <span style={{ color: "var(--foreground)" }}>portfolio</span>
          </div>

          {/* Workspace tabs */}
          <div className="flex items-center gap-0.5 ml-2">
            {TABS.map(tab => (
              <a
                key={tab.num}
                href={isHome ? tab.href : `/${tab.href}`}
                className={`ws-tab${isHome && tab.num === 1 ? " active" : ""}`}
              >
                {tab.num}:{tab.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right: status */}
        <div className="hidden md:flex items-center gap-2">
          <FiActivity size={12} style={{ color: "var(--green)" }} />
          <span>cpu 12%</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span>mem 4.2G</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <span style={{ color: "var(--green)" }}>●</span>
          <span>available for work</span>
          <span style={{ color: "var(--border)" }}>|</span>
          <div style={{ color: "var(--muted-foreground)" }}>
            <ThemeSwitcher />
          </div>
        </div>

        {/* Mobile: just theme */}
        <div className="flex md:hidden items-center gap-2">
          <span style={{ color: "var(--green)" }}>●</span>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};
