export const primaryNavLinks = [
  { label: "Counselling", href: "/services/" },
  { label: "Parenting & teenagers", href: "/parentology/" },
  { label: "About Laura", href: "/qualified-counsellor/" },
  { label: "Books", href: "/books/" },
  { label: "Contact", href: "/contact-me/" },
] as const;

export const contactCta = {
  label: "Contact",
  href: "/contact-me/",
} as const;

/** Location and authorship only. Qualification lines stay off the page until Laura confirms them. */
export const verifiedCredentials = [
  "Published parenting author",
  "Wixams, Bedford & online",
] as const;
