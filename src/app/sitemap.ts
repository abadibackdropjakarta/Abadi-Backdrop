import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://abadi-backdrop.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://abadi-backdrop.com/services",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://abadi-backdrop.com/projects",
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
