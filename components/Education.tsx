import React from "react";
import { EDU_EXP } from "@/constants";
import { BiLinkExternal } from "react-icons/bi";

export const Education: React.FC = () => {
  return (
    <div className="flex flex-col gap-7">
      {EDU_EXP.map(item => (
        <div key={item.id} className="timeline-item">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
            <div>
              <h3 className="font-semibold text-sm md:text-base" style={{ color: "var(--fg)" }}>
                {item.position}
              </h3>
              <a
                href={item.linkorg}
                target="_blank"
                className="inline-flex items-center gap-1 text-xs font-medium hover:opacity-75 transition-opacity"
                style={{ color: "var(--accent)" }}
              >
                {item.from}
                <BiLinkExternal />
              </a>
            </div>
            <span
              className="text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap self-start"
              style={{
                background: "color-mix(in srgb, var(--accent) 10%, transparent)",
                color: "var(--muted)",
                border: "1px solid var(--border)",
              }}
            >
              {item.start} – {item.end}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
