import type { Stat as StatShape } from "@/constants";

/**
 * One figure from the hero proof strip. The note is not decoration — a number
 * without the context that makes it checkable is worth less than no number.
 */
export const Stat = ({ value, label, note }: StatShape) => (
  <div>
    <p className="font-display text-h3 font-semibold tracking-tight text-ink">{value}</p>

    <p className="mt-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-muted">
      {label}
    </p>

    {note && <p className="mt-2.5 text-xs leading-relaxed text-ink-faint">{note}</p>}
  </div>
);
