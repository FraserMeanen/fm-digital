import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fm-digital.co.uk"),

  title: {
    default: "FM Digital | Websites, Apps & SEO-Focused Digital Content",
    template: "%s | FM Digital",
  },

  description:
    "FM Digital builds websites, landing pages, mobile apps, web apps and SEO-focused digital content for businesses across the UK.",

  keywords: [
    "FM Digital",
    "websites",
    "landing pages",
    "mobile apps",
    "web apps",
    "SEO",
    "digital content",
    "web development",
    "app development",
    "website design UK",
  ],

  authors: [{ name: "FM Digital" }],
  creator: "FM Digital",
  publisher: "FM Digital",

  openGraph: {
    title: "FM Digital | Websites, Apps & SEO-Focused Digital Content",
    description:
      "Websites, landing pages, mobile apps, web apps and SEO-focused digital content for businesses across the UK.",
    url: "https://www.fm-digital.co.uk",
    siteName: "FM Digital",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FM Digital website, app and SEO services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FM Digital | Websites, Apps & SEO-Focused Digital Content",
    description:
      "Websites, landing pages, mobile apps, web apps and SEO-focused digital content for businesses across the UK.",
    images: ["/logo.png"],
  },

  alternates: {
    canonical: "https://www.fm-digital.co.uk",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">{children}</body>
    </html>
  );
}