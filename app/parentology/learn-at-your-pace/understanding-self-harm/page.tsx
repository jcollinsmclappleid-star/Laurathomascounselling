import type { Metadata } from "next";
import { WorkshopSelfHarm } from "@/components/parentology/workshop-self-harm";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Understanding self-harm: a workshop for parents",
  description:
    "Understand the scope of Laura Thomas’s self-harm awareness workshop and toolkit, with a clear route to existing Parentology product information.",
  path: "/parentology/learn-at-your-pace/understanding-self-harm/",
});

export default function SelfHarmWorkshopPage() {
  return <WorkshopSelfHarm />;
}
