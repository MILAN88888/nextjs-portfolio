export const author = "Milan Chaudhary";
const description =
  "Software developer from Nepal, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management, Web developement, PHP web application, Laravel application, wordpress site or code from scratch using React and Next.js";
import type { Metadata } from "next";

const url = "https://milankumarchaudhary.com.np";
export const AppMetaData: Metadata = {
  metadataBase: new URL("https://milankumarchaudhary.com.np"),
  title: {
    default: `Portfolio | ${author}`,
    template: `%s | ${author}`
  },
  description: description,
  icons: {
    icon: "/images/icon/milan.ico"
  },
  keywords: [
	"Milan",
	"Milan Kumar",
    "Milan Kumar Chaudhary",
    "Milan Chaudhary",
    "Milan Chaudhary - software developer",
    "Milan kumar Chaudhary - software developer",
    "Milan - software developer",
    "Backend developer",
    "PHP developer",
    "Wordpress developer",
    "Laravel developer",
    "Portfolio website",
    "Frontend Developer Portfolio"
  ],
  creator: author,
  authors: [{ name: author, url: url }],
  colorScheme: "dark",
  openGraph: {
    title: `${author} | Portfolio`,
    description: description,
    url: url,
    siteName: `${author} | Portfolio`,
    images: [
      {
        url: "https://milankumarchaudhary.com.np/screenshot.webp",
        width: 800,
        height: 600,
        alt: "My personal portfolio website"
      },
      {
        url: "https://milankumarchaudhary.com.np/screenshot.webp",
        width: 1800,
        height: 1600,
        alt: "My personal portfolio website"
      }
    ],
    locale: "en-US",
    type: "website"
  }
};
