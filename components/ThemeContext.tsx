"use client";
import { ThemeProvider } from "next-themes";
export const ThemeContext: React.FC = (props: any) => {
  return <ThemeProvider>{props.children}</ThemeProvider>;
};
