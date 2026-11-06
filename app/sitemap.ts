import type { MetadataRoute } from "next";
import { isSiteIndexable } from "@/lib/site-indexable";
import { absoluteUrl } from "@/lib/site";

/** Empty until SITE_INDEXABLE=true and routes are ready for launch (RULE A). */
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isSiteIndexable()) {
    return [];
  }

  return [
    {
      url: absoluteUrl("/"),
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
