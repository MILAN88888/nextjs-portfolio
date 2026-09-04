"use client";
import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

export const ThemeContext = ({ children }: { children: ReactNode }) => (
  <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem>
    {children}
  </ThemeProvider>
);
