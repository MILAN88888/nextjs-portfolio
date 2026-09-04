"use client";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Renders at a fixed size on the server pass and only swaps the icon once
 * mounted — returning null before hydration would shift the header.
 */
export const ThemeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} theme` : "Switch theme"}
      className="inline-grid h-9 w-9 place-items-center rounded-full border border-line text-ink-muted transition-colors duration-200 hover:border-line-strong hover:text-ink"
    >
      {/* Fixed-size placeholder keeps layout stable before hydration. */}
      <span className="grid h-4 w-4 place-items-center" aria-hidden="true">
        {mounted && (isDark ? <FiSun size={15} /> : <FiMoon size={15} />)}
      </span>
    </button>
  );
};
