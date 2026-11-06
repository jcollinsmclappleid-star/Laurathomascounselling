/**
 * Launch gate: default false so previews never compete with the live WordPress site.
 * Set SITE_INDEXABLE=true only when Joshua approves production indexing.
 */
export function isSiteIndexable(): boolean {
  return process.env.SITE_INDEXABLE === "true";
}

export function siteRobotsMetadata(): {
  index: boolean;
  follow: boolean;
} {
  if (isSiteIndexable()) {
    return { index: true, follow: true };
  }
  return { index: false, follow: false };
}
