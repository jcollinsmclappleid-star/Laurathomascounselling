import type { Metadata } from "next";
import { RespondingWithReset } from "@/components/parentology/responding-with-reset";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "A more considered response, with RESET",
  description:
    "An introduction to Laura Thomas’s RESET parenting approach, its five steps and its connection to parent guidance, books and resources.",
  path: "/parentology/responding-with-reset/",
});

export default function ResetPage() {
  return <RespondingWithReset />;
}
