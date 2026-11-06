import { hrefFromRegistry } from "@/lib/routes";

export const parentologyHome = hrefFromRegistry("/parentology/");

export const parentologyNav = [
  {
    label: "Find support",
    href: hrefFromRegistry("/parentology/support-for-you/"),
  },
  {
    label: "In-Touch",
    href: hrefFromRegistry("/parentology/ongoing-guidance/"),
  },
  {
    label: "RESET",
    href: hrefFromRegistry("/parentology/responding-with-reset/"),
  },
  {
    label: "Tools",
    href: hrefFromRegistry("/parentology/practical-tools/"),
  },
  {
    label: "Workshops",
    href: hrefFromRegistry("/parentology/learn-at-your-pace/"),
  },
] as const;

export const parentingSectionLinks = {
  home: parentologyHome,
  support: hrefFromRegistry("/parentology/support-for-you/"),
  inTouch: hrefFromRegistry("/parentology/ongoing-guidance/"),
  reset: hrefFromRegistry("/parentology/responding-with-reset/"),
  tools: hrefFromRegistry("/parentology/practical-tools/"),
  workshops: hrefFromRegistry("/parentology/learn-at-your-pace/"),
  overwhelm: hrefFromRegistry(
    "/parentology/learn-at-your-pace/when-parenting-feels-too-much/",
  ),
  selfHarm: hrefFromRegistry(
    "/parentology/learn-at-your-pace/understanding-self-harm/",
  ),
  books: hrefFromRegistry("/books/"),
  girls: hrefFromRegistry("/books/parenting-unstoppable-girls/"),
  boys: hrefFromRegistry("/books/parenting-teen-boys-with-confidence/"),
  counselling: hrefFromRegistry("/counselling/"),
  services: hrefFromRegistry("/services/"),
  couples: hrefFromRegistry("/couples-counselling/"),
  family: hrefFromRegistry("/family-therapy-2/"),
  youngPeople: hrefFromRegistry("/counselling-for-young-people/"),
  familySupport: hrefFromRegistry("/parenting-and-family-support/"),
  parentingTeens: hrefFromRegistry("/parenting-teens/"),
  contact: hrefFromRegistry("/contact-me/"),
} as const;
