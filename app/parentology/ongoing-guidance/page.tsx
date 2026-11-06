import type { Metadata } from "next";
import { OngoingGuidance } from "@/components/parentology/ongoing-guidance";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "A continuing connection through In-Touch",
  description:
    "Understand Laura Thomas’s In-Touch parent guidance: how messaging support works, its boundaries and how to enquire about the current arrangement.",
  path: "/parentology/ongoing-guidance/",
});

export default function OngoingGuidancePage() {
  return <OngoingGuidance />;
}
