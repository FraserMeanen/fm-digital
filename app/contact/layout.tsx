import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Contact FM Digital | Web Design & Software Development Glasgow",
  },

  description:
    "Contact FM Digital, a Glasgow-based web design and software development studio building websites, custom software, web apps and mobile apps for businesses across Scotland and the UK.",

  keywords: [
    "contact FM Digital",
    "web design Glasgow",
    "web designer Glasgow",
    "website development Glasgow",
    "software development Glasgow",
    "software developer Glasgow",
    "app development Glasgow",
    "mobile app development Glasgow",
    "custom software Glasgow",
    "web design Scotland",
    "software development Scotland",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact FM Digital | Web Design & Software Development Glasgow",
    description:
      "Get in touch with FM Digital to discuss web design, custom software, web apps, mobile apps or SEO. Based in Glasgow and working with businesses across Scotland and the UK.",
    url: "https://www.fm-digital.co.uk/contact",
    siteName: "FM Digital",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FM Digital web design and software development Glasgow",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact FM Digital | Web Design & Software Development Glasgow",
    description:
      "Contact FM Digital for web design, software development, web apps, mobile apps and SEO services.",
    images: ["/logo.png"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}