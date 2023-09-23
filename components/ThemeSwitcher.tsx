"use client";
import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FaSun, FaMoon } from "react-icons/fa";

export const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Theme Switcher">
      {currentTheme === "dark" ? <FaSun /> : <FaMoon />}
    </button>
  );
};
