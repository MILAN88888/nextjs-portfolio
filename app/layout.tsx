import "@/styles/globals.css";
import { DM_Sans, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ThemeContext } from "@/components/ThemeContext";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { siteMetadata, personJsonLd } from "./metadata";

const sans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = siteMetadata;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <body>
        <ThemeContext>
          <a href="#main" className="skip-link">
            Skip to content
          </a>

          <div className="flex min-h-screen flex-col">
            <SiteHeader />

            <main id="main" className="flex-1">
              {children}
            </main>

            <SiteFooter />
          </div>
        </ThemeContext>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
