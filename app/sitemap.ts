import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.fm-digital.co.uk";

  return [
    {
      url: baseUrl,
      lastModified: "2026-09-11",
    },
    {
      url: `${baseUrl}/services`,
      lastModified: "2026-09-11",
    },
    {
      url: `${baseUrl}/project`,
      lastModified: "2026-09-11",
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: "2026-09-11",
    },
  ];
}