"use client";
import { ReactNode } from "react";

interface WindowProps {
  title: string;
  icon?: ReactNode;
  ws?: number;
  children: ReactNode;
  focused?: boolean;
  className?: string;
  bodyClassName?: string;
  noPad?: boolean;
  minHeight?: string;
}

export const Window = ({
  title, icon, ws, children,
  focused = false, className = "", bodyClassName = "", noPad = false, minHeight,
}: WindowProps) => {
  const style = minHeight ? { minHeight } : undefined;
  return (
    <section
      className={`window${focused ? " window-focused" : ""} flex flex-col overflow-hidden${className ? ` ${className}` : ""}`}
      style={style}
    >
      {/* Titlebar */}
      <header className="titlebar">
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex items-center gap-1.5 pl-1">
            <span className="size-3 rounded-full" style={{ background: "var(--red)", width: 11, height: 11 }} />
            <span className="size-3 rounded-full" style={{ background: "var(--yellow)", width: 11, height: 11 }} />
            <span className="size-3 rounded-full" style={{ background: "var(--green)", width: 11, height: 11 }} />
          </div>
          {/* Path */}
          <div className="flex items-center gap-1.5 font-mono text-xs" style={{ color: "var(--muted-foreground)" }}>
            {icon && <span style={{ color: "var(--foreground)" }}>{icon}</span>}
            <span className="tracking-tight">{title}</span>
          </div>
        </div>
        {/* ws badge */}
        {ws !== undefined && (
          <div className="flex items-center gap-2 font-mono text-muted-foreground" style={{ fontSize: 10 }}>
            <span
              className="rounded px-1.5 py-0.5"
              style={{ background: "var(--secondary)", color: "var(--muted-foreground)" }}
            >
              ws:{ws}
            </span>
            <span className="hidden sm:inline">tiled</span>
          </div>
        )}
      </header>

      {/* Body */}
      <div className={`flex-1 min-h-0${noPad ? "" : ""}${bodyClassName ? ` ${bodyClassName}` : ""}`}>
        {children}
      </div>
    </section>
  );
};
