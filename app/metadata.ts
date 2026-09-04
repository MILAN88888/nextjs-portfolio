import type { Metadata } from "next";
import { PROFILE } from "@/constants/Profile";

const description =
  "Portfolio of Milan Chaudhary, a software engineer in Nepal building WordPress products, PHP back-ends and React front-ends.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(PROFILE.siteUrl),
  title: {
    default: `${PROFILE.name} — ${PROFILE.role}`,
    template: `%s | ${PROFILE.name}`,
  },
  description,
  applicationName: `${PROFILE.name} Portfolio`,
  authors: [{ name: PROFILE.name, url: PROFILE.siteUrl }],
  creator: PROFILE.name,
  keywords: [
    "Milan Chaudhary",
    "Milan Kumar Chaudhary",
    "software engineer Nepal",
    "WordPress plugin developer",
    "PHP developer",
    "Laravel developer",
    "React developer",
    "Next.js developer",
    "ThemeGrill",
  ],
  icons: { icon: "/images/icon/milan.ico" },
  colorScheme: "dark light",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fbfaf8" },
    { media: "(prefers-color-scheme: dark)", color: "#101218" },
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: PROFILE.siteUrl,
    siteName: `${PROFILE.name} — Portfolio`,
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description,
    images: [
      {
        url: "/screenshot.webp",
        width: 1200,
        height: 630,
        alt: `${PROFILE.name}'s portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PROFILE.name} — ${PROFILE.role}`,
    description,
    images: ["/screenshot.webp"],
  },
};

/** JSON-LD, injected in the root layout so search engines get structured data. */
export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.fullName,
  alternateName: PROFILE.name,
  url: PROFILE.siteUrl,
  jobTitle: PROFILE.role,
  email: `mailto:${PROFILE.email}`,
  worksFor: { "@type": "Organization", name: PROFILE.company, url: PROFILE.companyUrl },
  address: { "@type": "PostalAddress", addressCountry: "NP", addressLocality: "Nawalparasi" },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Sambhram Institute of Technology",
    url: "https://sambhramit.com/",
  },
  sameAs: [
    "https://github.com/MILAN88888",
    "https://www.linkedin.com/in/milan-c",
    "https://twitter.com/i_am_mkr",
  ],
};
