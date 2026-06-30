import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://wholesalepizzaboxes.com/sitemap.xml",
    host: "https://wholesalepizzaboxes.com",
  };
}
