import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Design, Software & App Development Services",

  description:
    "FM Digital provides web design, website development, custom software, web apps, mobile app development and SEO services from Glasgow for businesses across Scotland and the UK.",

  keywords: [
    "web design Glasgow",
    "web designer Glasgow",
    "website development Glasgow",
    "web development Glasgow",
    "software development Glasgow",
    "software developer Glasgow",
    "custom software Glasgow",
    "bespoke software Glasgow",
    "web app development Glasgow",
    "app development Glasgow",
    "mobile app development Glasgow",
    "web design Aberdeen",
    "software development Aberdeen",
    "app development Aberdeen",
    "web design Scotland",
    "software development Scotland",
    "custom software development",
    "business software",
    "web applications",
    "mobile app development",
    "SEO Glasgow",
    "local SEO",
  ],

  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title:
      "Web Design, Software & App Development Services | FM Digital",
    description:
      "Web design, custom software, web apps, mobile apps and SEO services from a Glasgow-based digital development studio working across Scotland and the UK.",
    url: "https://www.fm-digital.co.uk/services",
    siteName: "FM Digital",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FM Digital web design, software and app development services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Web Design, Software & App Development Services | FM Digital",
    description:
      "Web design, custom software, web apps, mobile apps and SEO services from Glasgow for businesses across Scotland and the UK.",
    images: ["/logo.png"],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}