import type { Stat as StatShape } from "@/constants";
import { Icon } from "./Icon";

/**
 * One figure. The note is not decoration — a number without the context that
 * makes it checkable is worth less than no number — but it stays one short line
 * so the strip can be read at a glance.
 */
export const Stat = ({ value, label, note, icon }: StatShape) => (
  <div>
    <div className="flex items-center gap-2.5">
      {icon && <Icon name={icon} size={17} className="shrink-0 text-accent" />}
      <p className="font-display text-h3 font-semibold tracking-tight text-ink">{value}</p>
    </div>

    <p className="mt-2 font-mono text-label uppercase tracking-[0.16em] text-ink-muted">
      {label}
    </p>

    {note && <p className="mt-2 text-small text-ink-faint">{note}</p>}
  </div>
);
