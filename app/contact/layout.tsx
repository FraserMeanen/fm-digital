import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact FM Digital",
  description:
    "Contact FM Digital to discuss a website, landing page, mobile app, web app or SEO-focused digital project.",
  openGraph: {
    title: "Contact FM Digital | FM Digital",
    description:
      "Get in touch with FM Digital to discuss websites, apps, SEO and digital projects.",
    url: "https://www.fm-digital.co.uk/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}