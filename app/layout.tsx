import type { Metadata } from "next";
import type { ReactNode } from "react";
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

const baseUrl = "https://www.fm-digital.co.uk";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),

  applicationName: "FM Digital",

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  title: {
    default: "Web Design Glasgow & Software Development | FM Digital",
    template: "%s | FM Digital",
  },

  description:
    "FM Digital is a Glasgow-based web design and software development studio creating websites, custom software, web apps and mobile apps for businesses across Glasgow, Aberdeen, Scotland and the UK.",

  keywords: [
    "FM Digital",
    "web design Glasgow",
    "web designer Glasgow",
    "website design Glasgow",
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
    "website development Aberdeen",
    "software development Aberdeen",
    "software developer Aberdeen",
    "app development Aberdeen",
    "web design Scotland",
    "software development Scotland",
    "custom software development",
    "business software development",
    "web applications",
    "mobile apps",
    "SEO Glasgow",
    "local SEO",
  ],

  authors: [{ name: "FM Digital" }],
  creator: "FM Digital",
  publisher: "FM Digital",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Web Design Glasgow & Software Development | FM Digital",
    description:
      "Glasgow-based web design, custom software and app development for businesses across Scotland and the UK.",
    url: baseUrl,
    siteName: "FM Digital",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "FM Digital web design, software development and app development",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Web Design Glasgow & Software Development | FM Digital",
    description:
      "Glasgow-based web design, custom software and app development for businesses across Scotland and the UK.",
    images: ["/logo.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FM Digital",
    url: baseUrl,
    logo: `${baseUrl}/logo.png`,
    description:
      "Glasgow-based web design and software development studio creating websites, custom software, web applications and mobile apps for businesses across Scotland and the UK.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Glasgow",
      addressRegion: "Scotland",
      addressCountry: "GB",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Glasgow",
      },
      {
        "@type": "City",
        name: "Aberdeen",
      },
      {
        "@type": "AdministrativeArea",
        name: "Scotland",
      },
      {
        "@type": "Country",
        name: "United Kingdom",
      },
    ],
    sameAs: [
      "https://www.facebook.com/people/FM-Digital/61588982026581/",
      "https://www.instagram.com/fmdigital.uk",
    ],
  };

  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        {children}
      </body>
    </html>
  );
}