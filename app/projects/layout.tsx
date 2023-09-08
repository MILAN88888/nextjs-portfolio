import { AppMetaData } from "@/components/AppMetaData";
import { Metadata } from "next";

const pageName = "Projects"
export const metadata: Metadata = {
  ...AppMetaData,
  title: {
    default: `${pageName}`,
    template: `%s | ${pageName}`
  }
};
export default function ProjectsLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <section className="projects">{children}</section>;
}
