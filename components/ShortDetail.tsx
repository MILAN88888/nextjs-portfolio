"use client";
import React from "react";
import { ExtraMediaConnect } from "@/components/ExtraMediaConnect";
import { BsDownload } from "react-icons/bs";
import Link from "next/link";

export const ShortDetail: React.FC = () => {
  return (
    <div className="flex flex-col gap-6 p-8 rounded-2xl" style={{ background: "var(--card)", border: "1px solid var(--border)" }}>
      <div>
        <h2 className="text-2xl md:text-3xl font-bold title" style={{ color: "var(--foreground)" }}>
          Milan Kumar Chaudhary
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--accent)" }}>
          Software Developer
        </p>
      </div>

      <div className="flex flex-col gap-1 text-sm" style={{ color: "var(--muted)" }}>
        <span>Sarawal-6, Nawalparasi</span>
        <a
          href="mailto:chaudharymilan996@gmail.com"
          className="transition-colors duration-150"
          style={{ color: "var(--muted)" }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
        >
          chaudharymilan996@gmail.com
        </a>
        <span>+977-9807445408</span>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--muted)" }}>
          Connect
        </p>
        <ExtraMediaConnect />
      </div>

      <Link
        href="/file/milan-cv.pdf"
        className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
        style={{ background: "var(--accent)", color: "#fff" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--accent-hover)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--accent)")}
      >
        <BsDownload />
        Download CV
      </Link>
    </div>
  );
};
