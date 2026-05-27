"use client";
import React, { useState } from "react";
import { TECH_LIST } from "@/constants";

const CATEGORY_GRAD: Record<string, string> = {
  Frontend:      "linear-gradient(135deg, #6366f1, #06b6d4)",
  Backend:       "linear-gradient(135deg, #a78bfa, #ec4899)",
  "Other tools": "linear-gradient(135deg, #22d3ee, #10b981)",
};

export const Tech: React.FC = () => {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-16">
      {TECH_LIST.map(tech => (
        <div key={tech.category}>

          {/* Category header */}
          <div className="flex items-center gap-3 mb-8">
            <span className="w-7 h-0.5 rounded-full" style={{ background: CATEGORY_GRAD[tech.category] }} />
            <h2 className="text-[11px] font-bold uppercase tracking-widest" style={{ color: "var(--muted)" }}>
              {tech.category}
            </h2>
            <span className="flex-1 h-px" style={{ background: "var(--border)" }} />
            <span
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: "color-mix(in srgb, var(--accent) 10%, transparent)",
                color: "var(--muted)",
                border: "1px solid var(--border)",
              }}
            >
              {tech.items.length} tools
            </span>
          </div>

          {/* Cards */}
          <div className="flex flex-wrap gap-3">
            {tech.items.map(item => {
              const id = `${tech.category}-${item.name}`;
              const isHov = hovered === id;
              return (
                <div
                  key={item.name}
                  className="glass flex flex-col items-center justify-center gap-2.5 cursor-default select-none transition-all duration-250"
                  style={{
                    width: "92px",
                    height: "92px",
                    borderRadius: "18px",
                    transform: isHov ? "translateY(-5px) scale(1.05)" : "none",
                    boxShadow: isHov ? `0 12px 32px ${item.color}30` : "none",
                    borderColor: isHov ? `${item.color}60` : "var(--border)",
                    background: isHov
                      ? `color-mix(in srgb, ${item.color} 8%, var(--card))`
                      : "var(--card)",
                  }}
                  onMouseEnter={() => setHovered(id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <span
                    className="text-3xl flex items-center justify-center transition-all duration-250"
                    style={{ color: isHov ? item.color : "var(--muted)" }}
                  >
                    {item.icon}
                  </span>
                  <span
                    className="text-[11px] font-semibold text-center leading-tight px-1"
                    style={{ color: isHov ? "var(--fg)" : "var(--muted)" }}
                  >
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};
