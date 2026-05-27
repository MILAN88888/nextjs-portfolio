'use client';
import Link from "next/link";
import Image from "next/image";
import { VscSourceControl } from "react-icons/vsc";
import { FiExternalLink } from "react-icons/fi";
import { PROJECT_LIST } from "@/constants/";
import { useState } from "react";

export function ProjectItem() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex flex-col">
      {PROJECT_LIST.map((item, i) => {
        const num = String(i + 1).padStart(2, "0");
        const isHovered = hovered === item.id + i;

        return (
          <div
            key={item.id + i}
            className="project-row group"
            onMouseEnter={() => setHovered(item.id + i)}
            onMouseLeave={() => setHovered(null)}
          >
            <div
              className="flex flex-col lg:flex-row items-start lg:items-center gap-6 py-10 transition-all duration-300"
              style={{
                background: isHovered
                  ? "color-mix(in srgb, var(--accent) 4%, transparent)"
                  : "transparent",
                borderRadius: "20px",
                padding: "2rem 1.5rem",
                margin: "0 -1.5rem",
              }}
            >
              {/* Index number */}
              <span
                className="font-black text-6xl lg:text-7xl leading-none select-none transition-all duration-300 flex-shrink-0 min-w-[3.5rem]"
                style={{
                  background: "var(--grad-text)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  opacity: isHovered ? 1 : 0.2,
                }}
              >
                {num}
              </span>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                  <h3
                    className="text-xl lg:text-2xl font-bold title transition-colors duration-200"
                    style={{ color: isHovered ? "var(--fg)" : "color-mix(in srgb, var(--fg) 80%, transparent)" }}
                  >
                    {item.title}
                  </h3>
                  {/* Stack tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.stack.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full transition-all duration-200"
                        style={{
                          background: isHovered
                            ? "color-mix(in srgb, var(--accent) 15%, transparent)"
                            : "color-mix(in srgb, var(--fg) 6%, transparent)",
                          color: isHovered ? "var(--accent)" : "var(--muted)",
                          border: "1px solid",
                          borderColor: isHovered
                            ? "color-mix(in srgb, var(--accent) 30%, transparent)"
                            : "var(--border)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p
                  className="text-sm leading-relaxed line-clamp-2 mb-4"
                  style={{ color: "var(--muted)" }}
                >
                  {item.description}
                </p>

                {/* Links */}
                <div className="flex gap-2">
                  {item.repoUrl && (
                    <Link
                      href={item.repoUrl}
                      target="_blank"
                      className="icon-link-btn"
                      title="GitHub"
                      onClick={e => e.stopPropagation()}
                    >
                      <VscSourceControl />
                    </Link>
                  )}
                  {item.liveUrl && (
                    <Link
                      href={item.liveUrl}
                      target="_blank"
                      className="icon-link-btn"
                      title="Live demo"
                      onClick={e => e.stopPropagation()}
                    >
                      <FiExternalLink />
                    </Link>
                  )}
                </div>
              </div>

              {/* Image with 3D tilt */}
              <div
                className="flex-shrink-0 overflow-hidden rounded-xl transition-all duration-500"
                style={{
                  width: "clamp(160px, 22vw, 220px)",
                  height: "130px",
                  transform: isHovered
                    ? "perspective(800px) rotateY(-6deg) rotateX(3deg) scale(1.03)"
                    : "perspective(800px) rotateY(0deg) rotateX(0deg) scale(1)",
                  boxShadow: isHovered ? "var(--shadow-lg)" : "var(--shadow)",
                  border: "1px solid var(--border)",
                }}
              >
                <Image
                  src={item.images}
                  alt={item.title}
                  width={220}
                  height={130}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: isHovered ? "scale(1.08)" : "scale(1)" }}
                />
              </div>
            </div>

            {/* Divider */}
            {i < PROJECT_LIST.length - 1 && (
              <div className="w-full h-px" style={{ background: "var(--border)" }} />
            )}
          </div>
        );
      })}
    </div>
  );
}
