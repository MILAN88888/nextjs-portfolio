"use client";
import { Window } from "@/components/Window";
import { ProjectItem } from "@/components/ProjectItem";

export default function Projects() {
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-5 py-4 pb-10">
      <Window title="~/projects.list">
        <p className="section-label">Portfolio</p>
        <h1 className="text-2xl md:text-3xl font-bold title mb-1.5" style={{ color: "var(--fg)" }}>
          Recent Projects
        </h1>
        <p className="text-sm mb-6" style={{ color: "var(--muted)" }}>
          A selection of things I&apos;ve designed and built.
        </p>
        <div className="w-full h-px mb-8" style={{ background: "var(--border)" }} />
        <ProjectItem />
      </Window>
    </div>
  );
}
