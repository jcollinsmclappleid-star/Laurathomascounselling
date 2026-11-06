import type { Metadata } from "next";
import { ParentologyHub } from "@/components/parentology/parentology-hub";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Support for you. Understanding for your teenager.",
  description:
    "Explore parenting support with Laura Thomas: counselling, parent guidance, In-Touch, RESET, books and practical resources for the teenage years.",
  path: "/parentology/",
});

export default function ParentologyHubPage() {
  return <ParentologyHub />;
}
