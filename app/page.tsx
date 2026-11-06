import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/home-page-content";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Laura Thomas Counselling",
  description:
    "Counselling in Bedford and online, with specialist parenting support from Laura Thomas.",
  path: "/",
});

export default function HomePage() {
  return <HomePageContent />;
}
