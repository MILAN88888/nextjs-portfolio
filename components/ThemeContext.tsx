"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

export const ThemeContext = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="data-theme" defaultTheme="dark" enableSystem={false}>
      {children}
    </ThemeProvider>
  );
};
