import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design, Software & App Development Projects",

  description:
    "Explore web design, website development, software and mobile app projects by FM Digital, a Glasgow-based digital development studio working across Scotland and the UK.",

  keywords: [
    "FM Digital projects",
    "web design Glasgow",
    "website development Glasgow",
    "software development Glasgow",
    "app development Glasgow",
    "mobile app development Glasgow",
    "web design Scotland",
    "software development Scotland",
    "custom software development",
    "website design projects",
    "software development projects",
    "mobile app projects",
  ],

  alternates: {
    canonical: "/project",
  },

  openGraph: {
    title:
      "Web Design, Software & App Development Projects | FM Digital",
    description:
      "Explore websites, custom software and mobile app projects built by FM Digital for businesses across Scotland and the UK.",
    url: "https://www.fm-digital.co.uk/project",
    siteName: "FM Digital",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FM Digital web design, software and app development projects",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Web Design, Software & App Development Projects | FM Digital",
    description:
      "Explore websites, custom software and mobile app projects built by FM Digital.",
    images: ["/logo.png"],
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}