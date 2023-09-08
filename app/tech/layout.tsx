import { AppMetaData } from "@/components/AppMetaData";
import { Metadata } from "next";

const pageName = "Tech"
export const metadata: Metadata = {
  ...AppMetaData,
  title: {
    default: `${pageName}`,
    template: `%s | ${pageName}`
  }
};

export default function TechLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return <section className="tech">{children}</section>;
}
