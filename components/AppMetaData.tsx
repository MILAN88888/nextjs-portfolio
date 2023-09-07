const author = "Milan Kumar Chaudhary";
const description =
	"Software developer from Nepal, Republic of, who loves to develop beautiful websites, single page applications, customer relationship management, Web developement, PHP web application, Laravel application, wordpress site or code from scratch using React and Next.js";
const url = "https://milanc.netlify.app";
export const AppMetadata = {
	metadataBase: new URL("https://milanc.netlify.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Milan Kumar Chaudhary",
		"Milan Chaudhary",
		"Milan Chaudhary - software developer",
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
				url: "https://milanc.netlify.app/screenshot.webp",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://milanc.netlify.app/screenshot.webp",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
