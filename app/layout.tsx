import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ThemeContext } from "@/components/ThemeContext";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AppMetaData, author } from "@/components/AppMetaData";
const inter = Inter({ subsets: ["latin"] });

export const metadata: any = {
  ...AppMetaData,
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeContext>
          <main className="flex min-h-screen flex-col items-center justify-between p-6">
            <Header />
            {children}
            <Footer />
          </main>
        </ThemeContext>
      </body>
    </html>
  );
}
