import type { Metadata } from "next";
import { LearnAtYourPace } from "@/components/parentology/learn-at-your-pace";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Make room to understand, in your own time",
  description:
    "Explore Laura Thomas’s parenting workshops, understand the available formats and find clear details before continuing to Parentology access or purchase.",
  path: "/parentology/learn-at-your-pace/",
});

export default function LearnAtYourPacePage() {
  return <LearnAtYourPace />;
}
