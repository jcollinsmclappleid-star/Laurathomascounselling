import type { Metadata } from "next";
import { PracticalTools } from "@/components/parentology/practical-tools";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Something useful for the moment you are in",
  description:
    "Find Laura Thomas’s parenting books, guides, videos and workshops by topic and format, with clear information about resource access.",
  path: "/parentology/practical-tools/",
});

export default function PracticalToolsPage() {
  return <PracticalTools />;
}
