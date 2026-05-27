import "@/styles/globals.css";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import { ThemeContext } from "@/components/ThemeContext";
import { TopBar } from "@/components/TopBar";
import { Footer } from "@/components/Footer";
import { AppMetaData } from "@/components/AppMetaData";
import Loading from "./loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: any = { ...AppMetaData };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <ThemeContext>
          <TopBar />
          <div className="desktop-bg">
            <div className="desktop-grid" aria-hidden="true" />
            <div className="relative z-10 flex flex-col min-h-screen">
              <main className="flex-1">
                <Suspense fallback={<Loading />}>{children}</Suspense>
              </main>
              <div className="flex justify-center px-4">
                <Footer />
              </div>
            </div>
          </div>
        </ThemeContext>
      </body>
    </html>
  );
}
