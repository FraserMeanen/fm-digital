import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website, App & SEO Services",
  description:
    "FM Digital provides website development, landing pages, mobile apps, web apps and SEO-focused digital content for businesses across the UK.",
  openGraph: {
    title: "Website, App & SEO Services | FM Digital",
    description:
      "Website development, landing pages, mobile apps, web apps and SEO-focused digital content for businesses across the UK.",
    url: "https://www.fm-digital.co.uk/services",
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}