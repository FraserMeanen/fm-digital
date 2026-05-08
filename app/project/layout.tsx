import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website & App Projects",
  description:
    "View FM Digital website, app and digital design projects, including business websites, landing pages and SEO-ready builds.",
  openGraph: {
    title: "Website & App Projects | FM Digital",
    description:
      "View FM Digital website, app and digital design projects, including business websites, landing pages and SEO-ready builds.",
    url: "https://www.fm-digital.co.uk/project",
  },
};

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}