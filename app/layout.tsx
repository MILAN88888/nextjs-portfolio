import "@/styles/globals.css";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import { ThemeContext } from "@/components/ThemeContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppMetaData, author } from "@/components/AppMetaData";
import Loading from "./loading";
const inter = Inter({ subsets: ["latin"] });

export const metadata: any = {
  ...AppMetaData
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeContext>
          <main className="flex min-h-screen flex-col items-center justify-between p-6">
            <Header />
            <Suspense fallback={<Loading />}>{children}</Suspense>
            <Footer />
          </main>
        </ThemeContext>
      </body>
    </html>
  );
}
