import { hrefFromRegistry } from "@/lib/routes";

export type ToolFormat = "Read" | "Watch" | "Learn";

export type ParentologyTool = {
  id: string;
  title: string;
  summary: string;
  format: ToolFormat;
  access: string;
  href: string;
  external: boolean;
};

/** Public catalogue only. Prices, membership files and Drive downloads stay off this list. */
export const parentologyTools: ParentologyTool[] = [
  {
    id: "girls-book",
    title: "Parenting Unstoppable Girls",
    summary:
      "Laura’s book for parents of teenage girls. The book page holds the publication details.",
    format: "Read",
    access: "Book page on this site. A shop link is added only when it is confirmed.",
    href: hrefFromRegistry("/books/parenting-unstoppable-girls/"),
    external: false,
  },
  {
    id: "boys-book",
    title: "Parenting Teen Boys with Confidence",
    summary:
      "Laura’s book for parents of teenage boys. The book page holds the publication details.",
    format: "Read",
    access: "Book page on this site. A shop link is added only when it is confirmed.",
    href: hrefFromRegistry("/books/parenting-teen-boys-with-confidence/"),
    external: false,
  },
  {
    id: "yt-anxiety",
    title: "What is anxiety really",
    summary:
      "A public film by Laura Thomas on YouTube. This page has not reviewed the full recording.",
    format: "Watch",
    access:
      "Opens YouTube. Whether Parentology World treats it as free, sign-up or member-only is not confirmed.",
    href: "https://www.youtube.com/watch?v=878QAeVv8Wk",
    external: true,
  },
  {
    id: "yt-brain",
    title: "Psychology - Teenage Brain Explained",
    summary:
      "A public film by Laura Thomas on YouTube. This page has not reviewed the full recording.",
    format: "Watch",
    access:
      "Opens YouTube. Whether Parentology World treats it as free, sign-up or member-only is not confirmed.",
    href: "https://www.youtube.com/watch?v=nCYBW0X-s4Q",
    external: true,
  },
  {
    id: "yt-esteem",
    title: "What is self esteem?",
    summary:
      "A public film by Laura Thomas on YouTube. This page has not reviewed the full recording.",
    format: "Watch",
    access:
      "Opens YouTube. Whether Parentology World treats it as free, sign-up or member-only is not confirmed.",
    href: "https://www.youtube.com/watch?v=2ZsoL3xHAy8",
    external: true,
  },
  {
    id: "yt-adhd",
    title: "ASD and ADHD Live Q&A - Moods and Meltdowns",
    summary:
      "A public film by Laura Thomas on YouTube. This page has not reviewed the full recording.",
    format: "Watch",
    access:
      "Opens YouTube. Whether Parentology World treats it as free, sign-up or member-only is not confirmed.",
    href: "https://www.youtube.com/watch?v=UynmunzC0mQ",
    external: true,
  },
  {
    id: "yt-attitude",
    title: "Attitude or Anxiety? How to Tell What’s Really Going on With Your Teen",
    summary:
      "A public film by Laura Thomas on YouTube. This page has not reviewed the full recording.",
    format: "Watch",
    access:
      "Opens YouTube. Whether Parentology World treats it as free, sign-up or member-only is not confirmed.",
    href: "https://www.youtube.com/watch?v=kqbBZlE19n0",
    external: true,
  },
  {
    id: "workshop-overwhelm",
    title: "When parenting feels too much",
    summary:
      "The Parent Overwhelm Reset: a recorded workshop with an accompanying guide. Read the detail page before the product page.",
    format: "Learn",
    access: "Paid workshop. The price is confirmed on Parentology World, not on this page.",
    href: hrefFromRegistry(
      "/parentology/learn-at-your-pace/when-parenting-feels-too-much/",
    ),
    external: false,
  },
  {
    id: "workshop-self-harm",
    title: "Understanding self-harm: a workshop for parents",
    summary:
      "An educational awareness workshop with a supporting toolkit. Read the detail page before the product page.",
    format: "Learn",
    access: "Paid workshop. The price is confirmed on Parentology World, not on this page.",
    href: hrefFromRegistry(
      "/parentology/learn-at-your-pace/understanding-self-harm/",
    ),
    external: false,
  },
];
