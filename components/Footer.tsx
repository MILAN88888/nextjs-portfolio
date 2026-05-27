"use client";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer
      className="w-full max-w-screen-xl py-5"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 px-1">
        <p
          className="text-xs"
          style={{
            fontFamily: "var(--font-mono,'JetBrains Mono',monospace)",
            color: "var(--muted)",
          }}
        >
          © {new Date().getFullYear()}{" "}
          <span className="gradient-text font-semibold">@milan</span>
          {" · "}
          <span style={{ color: "var(--muted)" }}>Built with Next.js</span>
        </p>
        <div className="flex items-center gap-1">
          {["PHP", "React", "Next.js", "TypeScript"].map(tag => (
            <span key={tag} className="tech-tag">{tag}</span>
          ))}
        </div>
      </div>
    </footer>
  );
};
