"use client";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

/**
 * Light by default, and deliberately not `enableSystem`: the page is written to
 * be read on a light background, so a visitor whose OS happens to be in dark
 * mode still lands on the readable one. The toggle in the header switches it
 * either way and the choice is remembered.
 */
export const ThemeContext = ({ children }: { children: ReactNode }) => (
  <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem={false}>
    {children}
  </ThemeProvider>
);
