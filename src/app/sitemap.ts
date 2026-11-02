import type { MetadataRoute } from "next";
import { site } from "@/data/site";
import { projects } from "@/data/projects";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!site.url) return [];
  return [
    { url: site.url, priority: 1 },
    ...projects.map((p) => ({
      url: `${site.url}/projects/${p.slug}`,
      priority: 0.7,
    })),
  ];
}
