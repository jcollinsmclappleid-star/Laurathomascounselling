import type { Metadata } from "next";
import { HomePageContent } from "@/components/home/home-page-content";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Counselling in Bedford - Laura Thomas Counselling",
  description:
    "Counselling based in Bedford for adults, families, couples and young people. Anxiety, depression, self-esteem, identity, relationships.",
  path: "/",
});

export default function HomePage() {
  return <HomePageContent />;
}
