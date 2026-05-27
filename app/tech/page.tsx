"use client";
import { Window } from "@/components/Window";
import { Tech } from "@/components/Tech";

export default function TechPage() {
  return (
    <div className="max-w-screen-xl mx-auto px-3 md:px-5 py-4 pb-10">
      <Window title="~/skills.list">
        <p className="section-label">Skills</p>
        <h1 className="text-2xl md:text-3xl font-bold title mb-1.5" style={{ color: "var(--fg)" }}>
          Tools &amp; Technologies
        </h1>
        <p className="text-sm mb-8" style={{ color: "var(--muted)" }}>
          Technologies I use regularly to design and build things.
        </p>
        <Tech />
      </Window>
    </div>
  );
}
