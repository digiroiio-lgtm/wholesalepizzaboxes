import type { MetadataRoute } from "next";
import { allPaths } from "@/lib/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return allPaths().map((path) => ({
    url: `https://wholesalepizzaboxes.com${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
