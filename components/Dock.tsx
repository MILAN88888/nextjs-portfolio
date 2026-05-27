"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { SOCIAL_MEDIA } from "@/constants";
import { FiUser, FiGrid, FiCpu } from "react-icons/fi";

const NAV = [
  { id: "about",    label: "About",    icon: <FiUser  size={17} />, url: "/#about"   },
  { id: "projects", label: "Projects", icon: <FiGrid  size={17} />, url: "/projects" },
  { id: "tech",     label: "Tech",     icon: <FiCpu   size={17} />, url: "/tech"     },
];

export const Dock = () => {
  const [active,  setActive]  = useState<string | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const pathname              = usePathname();

  useEffect(() => {
    if      (pathname === "/projects") setActive("projects");
    else if (pathname === "/tech")     setActive("tech");
    else                               setActive(null);
  }, [pathname]);

  return (
    <aside className="dock-sidebar">

      {/* ── Logo ── */}
      <div className="dock-item" onMouseEnter={() => setHovered("home")} onMouseLeave={() => setHovered(null)}>
        <Link href="/" onClick={() => setActive(null)} className="dock-logo" aria-label="Home">
          <span className="gradient-text font-black text-sm leading-none">@</span>
          <Image
            src="/images/np_flag.gif"
            alt="Nepal"
            width={16}
            height={10}
            className="rounded-sm opacity-90"
          />
        </Link>
        <span className="dock-label">@milan</span>
      </div>

      <div className="dock-divider" />

      {/* ── Nav ── */}
      {NAV.map(item => {
        const isActive = active === item.id;
        return (
          <div
            key={item.id}
            className="dock-item"
            onMouseEnter={() => setHovered(item.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <Link href={item.url} onClick={() => setActive(item.id)}>
              <div className="dock-btn-wrap">
                <div className={`dock-btn${isActive ? " active" : ""}`}>
                  {item.icon}
                </div>
                <span className={`dock-active-dot${isActive ? " visible" : ""}`} />
              </div>
            </Link>
            <span className="dock-label">{item.label}</span>
          </div>
        );
      })}

      <div className="dock-divider" />

      {/* ── Social ── */}
      {SOCIAL_MEDIA.map(item => (
        <div
          key={item.id}
          className="dock-item"
          onMouseEnter={() => setHovered(`s-${item.id}`)}
          onMouseLeave={() => setHovered(null)}
        >
          <a
            href={item.url}
            target="_blank"
            aria-label={item.title}
            className="dock-social"
          >
            {item.icon}
          </a>
          <span className="dock-label">
            {item.title.replace("Visit ", "").replace(" profile", "").replace("Send me an ", "")}
          </span>
        </div>
      ))}

      <div className="dock-divider" />

      {/* ── Theme ── */}
      <div
        className="dock-item"
        onMouseEnter={() => setHovered("theme")}
        onMouseLeave={() => setHovered(null)}
      >
        <div className="dock-social">
          <ThemeSwitcher />
        </div>
        <span className="dock-label">Theme</span>
      </div>

    </aside>
  );
};
