import type { Metadata } from "next";
import { isSiteIndexable, siteRobotsMetadata } from "@/lib/site-indexable";

export const siteConfig = {
  name: "Laura Thomas Counselling",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "[PLACEHOLDER: marketing description — Bedford & online counselling context pending client confirmation]",
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const url = absoluteUrl(path);
  const indexable = isSiteIndexable();

  return {
    title,
    description,
    robots: siteRobotsMetadata(),
    ...(indexable
      ? {
          alternates: {
            canonical: url,
          },
        }
      : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
