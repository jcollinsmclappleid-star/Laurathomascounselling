export type LegacyRouteKind = "page" | "post";

export type LegacyRoute = {
  /** Public path with leading slash and trailing slash (except root `/`). */
  path: string;
  kind: LegacyRouteKind;
  title: string;
  /**
   * Composer batch that will implement the route, `built` once a page exists,
   * or `registry-only` for posts until migration.
   * `"4a" | "4b" | "4c"` are the Parentology section under `/parentology/`.
   */
  plannedBatch: number | "4a" | "4b" | "4c" | "registry-only" | "built";
};

/** Paths that exist as Next.js pages in this repo (expand as batches land). */
export const builtPagePaths = ["/", "/parentology/"] as const;

/**
 * Explicit legacy URL registry — every public WordPress URL plus planned new routes
 * from the technical build spec. Posts are listed only; not built until migration.
 */
export const legacyRoutes: LegacyRoute[] = [
  { path: "/", kind: "page", title: "Home", plannedBatch: "built" },
  { path: "/services/", kind: "page", title: "Services", plannedBatch: 3 },
  { path: "/counselling/", kind: "page", title: "Counselling", plannedBatch: 3 },
  { path: "/counselling-2/", kind: "page", title: "Counselling", plannedBatch: 3 },
  { path: "/couples-counselling/", kind: "page", title: "Couples", plannedBatch: 3 },
  { path: "/family-therapy-2/", kind: "page", title: "Family Therapy", plannedBatch: 3 },
  {
    path: "/counselling-for-young-people/",
    kind: "page",
    title: "Teenage Counselling",
    plannedBatch: 3,
  },
  { path: "/online-counselling/", kind: "page", title: "Online counselling", plannedBatch: 3 },
  {
    path: "/parenting-and-family-support/",
    kind: "page",
    title: "Parenting and Family Support",
    plannedBatch: 4,
  },
  // Live WordPress 301s /parenting/ to /parenting-and-family-support/.
  // This registry has no redirect entry type, so /parenting/ is not listed here.
  // Keep that redirect at launch. See docs/LIVE_SITE_ASSESSMENT.md.
  { path: "/parenting-teens/", kind: "page", title: "Parenting Teens", plannedBatch: 4 },
  {
    path: "/counselling-for-children/",
    kind: "page",
    title: "Children",
    plannedBatch: 3,
  },
  {
    path: "/parentology/",
    kind: "page",
    title: "Support for you. Understanding for your teenager.",
    plannedBatch: "built",
  },
  {
    path: "/parentology/support-for-you/",
    kind: "page",
    title: "Find the support that fits your family",
    plannedBatch: "4b",
  },
  {
    path: "/parentology/ongoing-guidance/",
    kind: "page",
    title: "A continuing connection through In-Touch",
    plannedBatch: "4b",
  },
  {
    path: "/parentology/responding-with-reset/",
    kind: "page",
    title: "A more considered response, with RESET",
    plannedBatch: "4b",
  },
  {
    path: "/parentology/practical-tools/",
    kind: "page",
    title: "Something useful for the moment you are in",
    plannedBatch: "4c",
  },
  {
    path: "/parentology/learn-at-your-pace/",
    kind: "page",
    title: "Make room to understand, in your own time",
    plannedBatch: "4c",
  },
  {
    path: "/parentology/learn-at-your-pace/when-parenting-feels-too-much/",
    kind: "page",
    title: "When parenting feels too much",
    plannedBatch: "4c",
  },
  {
    path: "/parentology/learn-at-your-pace/understanding-self-harm/",
    kind: "page",
    title: "Understanding self-harm: a workshop for parents",
    plannedBatch: "4c",
  },
  { path: "/books/", kind: "page", title: "Books", plannedBatch: 5 },
  {
    path: "/books/parenting-unstoppable-girls/",
    kind: "page",
    title: "Parenting Unstoppable Girls",
    plannedBatch: 5,
  },
  {
    path: "/books/parenting-teen-boys-with-confidence/",
    kind: "page",
    title: "Parenting Teen Boys with Confidence",
    plannedBatch: 5,
  },
  { path: "/counselling-blog/", kind: "page", title: "Blog", plannedBatch: 6 },
  { path: "/qualified-counsellor/", kind: "page", title: "About me", plannedBatch: 7 },
  { path: "/fully-qualified/", kind: "page", title: "Qualifications", plannedBatch: 7 },
  { path: "/faq-and-fees/", kind: "page", title: "FAQ & Fees", plannedBatch: 7 },
  { path: "/contact-me/", kind: "page", title: "Contact me", plannedBatch: 7 },
  { path: "/testimonies/", kind: "page", title: "Testimonies", plannedBatch: 7 },
  {
    path: "/teen-mental-health-in-crisis-why-parents-are-the-missing-link/",
    kind: "post",
    title: "Teen Mental Health in Crisis: Why Parents Are the Missing Link",
    plannedBatch: "registry-only",
  },
  {
    path: "/the-last-heartbreak-is-the-one-you-feel-youll-never-recover-from/",
    kind: "post",
    title: "The Last Heartbreak – By Kerry Chalmers",
    plannedBatch: "registry-only",
  },
  {
    path: "/managing-the-overwhelm/",
    kind: "post",
    title: "Managing the Overwhelm",
    plannedBatch: "registry-only",
  },
  {
    path: "/the-difference-between-shame-and-guilt/",
    kind: "post",
    title: "Understanding the Difference Between Shame and Guilt",
    plannedBatch: "registry-only",
  },
  {
    path: "/how-summer-can-ease-our-anxieties/",
    kind: "post",
    title: "Why getting out in the sunshine can ease anxiety",
    plannedBatch: "registry-only",
  },
  {
    path: "/how-to-reframe-negative-narrative/",
    kind: "post",
    title: "How to Reframe Negative Thoughts",
    plannedBatch: "registry-only",
  },
  { path: "/push-yourself/", kind: "post", title: "Push yourself", plannedBatch: "registry-only" },
  {
    path: "/toxic-positivity-positive-vibes-only/",
    kind: "post",
    title: "Toxic Positivity “Positive Vibes Only”",
    plannedBatch: "registry-only",
  },
  {
    path: "/the-new-normal/",
    kind: "post",
    title: "The ‘new’, new normal",
    plannedBatch: "registry-only",
  },
  {
    path: "/school-anxiety-6-top-tips-to-support-you-and-your-child/",
    kind: "post",
    title: "School Anxiety – its back! 6 Top Tips to support you and your child",
    plannedBatch: "registry-only",
  },
  {
    path: "/to-repeat-or-not-to-repeat/",
    kind: "post",
    title: "To repeat or not to repeat?",
    plannedBatch: "registry-only",
  },
  {
    path: "/managing-mental-health-during-self-isolation/",
    kind: "post",
    title: "Self-isolation: an opportunity for renewal",
    plannedBatch: "registry-only",
  },
  {
    path: "/social-media-and-teenagers-self-esteem/",
    kind: "post",
    title: "“Selfie-Esteem” The impact social media has on your teenagers’ self-esteem.",
    plannedBatch: "registry-only",
  },
  {
    path: "/the-role-of-the-counsellor/",
    kind: "post",
    title: "The Role of the Counsellor",
    plannedBatch: "registry-only",
  },
  {
    path: "/feel-happier-in-the-winter-months/",
    kind: "post",
    title: "Five Tips to Beat the Winter Blues",
    plannedBatch: "registry-only",
  },
  {
    path: "/myths-of-counselling/",
    kind: "post",
    title: "Five Myths of Counselling – busted!",
    plannedBatch: "registry-only",
  },
];

const registryPathSet = new Set(legacyRoutes.map((route) => route.path));

export function isRegisteredPath(path: string): boolean {
  return registryPathSet.has(path);
}

export function hrefFromRegistry(path: string): string {
  if (!isRegisteredPath(path)) {
    throw new Error(`Unregistered path: ${path}`);
  }
  return path;
}
