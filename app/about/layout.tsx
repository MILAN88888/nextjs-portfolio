"use client";
import { AppMetaData } from "@/components/AppMetaData";
import { Metadata } from "next";

const pageName = "About"
export const metadata: Metadata = {
  ...AppMetaData,
  title: {
    default: `${pageName}`,
    template: `%s | ${pageName}`
  }
};

export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <section className="about">{children}</section>;
}
