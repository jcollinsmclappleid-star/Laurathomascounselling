import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** Stub sitemap — expand in Batch 9 as routes are built. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
