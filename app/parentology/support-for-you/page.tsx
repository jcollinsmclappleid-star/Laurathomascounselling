import type { Metadata } from "next";
import { SupportForYou } from "@/components/parentology/support-for-you";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Find the support that fits your family",
  description:
    "Compare parent coaching, counselling and ongoing guidance with Laura Thomas, and find a suitable route into support for you or your family.",
  path: "/parentology/support-for-you/",
});

export default function SupportForYouPage() {
  return <SupportForYou />;
}
