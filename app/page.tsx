import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/home-page-content";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Counselling in Bedford - Laura Thomas Counselling",
  description:
    "Therapy and support for individuals, couples, parents and families in Bedford and online. Practical counselling with Laura Thomas in Wixams.",
  path: "/",
});

export default function HomePage() {
  return <HomePageContent />;
}
