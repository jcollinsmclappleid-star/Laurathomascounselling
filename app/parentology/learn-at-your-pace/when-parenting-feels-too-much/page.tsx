import type { Metadata } from "next";
import { WorkshopOverwhelm } from "@/components/parentology/workshop-overwhelm";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "When parenting feels too much",
  description:
    "Learn about Laura Thomas’s Parent Overwhelm Reset workshop, its recorded format and accompanying guide before viewing current Parentology product details.",
  path: "/parentology/learn-at-your-pace/when-parenting-feels-too-much/",
});

export default function OverwhelmWorkshopPage() {
  return <WorkshopOverwhelm />;
}
