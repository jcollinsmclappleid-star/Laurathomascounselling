# Cursor instructions for embedding Parentology in Laura Thomas Counselling

Revision 2: this is an original-content and UI/UX implementation plan, not permission to deploy. It supersedes older instructions that limited Parentology to a small promotional gateway. Substantive local parent-service pages are now required. Do not run older conflicting prompts alongside this one.

## Initial assessment prompt

```text
Read README.md, Rewritten_Page_Content.json, UI_UX_Design_Brief.md,
Implementation_Plan.md, Page_Briefs.md and all registers before
changing the application. This task expands Laura Thomas Counselling with a full
Parentology content section while leaving the separate Parentology site operating.
The source site is https://www.parentologyworld.com/. Do not import its blog posts,
article index or article taxonomy pages. Do not redesign or mutate that live site.

Inspect AGENTS.md and the current application's framework, routes, content models,
components, image pipeline, SEO and tests. Reuse the repository; don't create a
second application or force a framework migration. Preserve unrelated features.

All new parenting URLs are on the counselling domain. Eight P1 routes are the
first-release candidate; nine P2 routes are conditional expansion, not empty stubs.
Check for path collisions and overlapping existing counselling reader intent.
Keep existing counselling URLs and shared book/profile/young-person pages.

Use the supplied original rewritten P1 copy as the starting point, with Laura's
review. Preserve her voice, accurate service/book names and verified facts. Do not
copy entire source pages, perform sentence-by-sentence synonym substitution or
publish old source headlines under new URLs. New slugs and design are navigation
choices, not protection against duplicate main content. Every local page needs
its own useful purpose and substantive explanation. Use the differentiation map.
P2 introductions are development drafts, not completed public topic pages.

Use only the revised /parenting/ route registry. The earlier unbuilt /parentology/
proposal is superseded. Do not redirect or rename existing counselling URLs, or
change the live Parentology site. Route_Changes_Not_Redirects.csv is a planning
mapping, not a live redirect file. Keep all source evidence URLs unchanged.

Track exact source evidence, proposed original copy, Laura's edits, changed facts
and approval. Exclude source menus, cookie/footer copy, article recommendations
and template filler. Do not fetch private content or import blog bodies. Do not
use cross-domain canonicals to disguise copied pages or automatically favour
Parentology over the new counselling content. Review genuinely duplicate intent
before indexing; self-canonicals are appropriate for complete distinct pages,
not a guarantee of independent Google indexing.

Propose a reusable content structure for service, framework, resource, workshop,
video and topic pages. Resource records require explicit access level and delivery
owner; media records require source/rights and verification status. Do not publish
unapproved prices, response times, qualifications, testimonials or clinical claims.
Keep unknown fields visibly flagged in the review surface and out of public copy.

Retain the current approved deep-green counselling and warm Parentology art
direction, real branding and Laura imagery. The Image_Register and contact sheet
provide source-derived candidates; not all are automatically approved. Don't
present another practitioner as Laura or stock subjects as real clients.
Preserve the approved cinematic homepage composition and existing project design
quality. The PDF studies communicate the revised content hierarchy and choices;
integrate those into the approved art direction and responsive components.

Implement the welcome/player concept only from the verified source provider ID.
Other videos are link discoveries, not reviewed transcripts or approved public
embeds. Confirm source availability/access/captions before publishing. Don't
rehost YouTube files or expose member resources. Keep current external checkout,
private resource delivery and practitioner-referral systems intact.

Report: existing repository findings, eight launch route mappings, source decisions,
content/asset readiness, reusable component plan and Batch 1 changes proposed.
Do not deploy or change DNS, production canonicals, payment products or booking.
Stop for the implementation batch instruction, not for routine design choices.
```

## Batch 1 Hub and structures

Build the shared Parentology shell, breadcrumbs, navigation, reusable templates and main parent hub. Preserve the two local homepage paths and mobile first-screen choice. Use the matching rewritten copy, original support-choice layout, shared book links and approved imagery. Follow UI_UX_Design_Brief.md for actual component and responsive behaviour. Add a reusable video component with poster, click-to-load behaviour, provider ID and direct watch fallback. A player is not marked complete until actually checked.

Acceptance: routes are real; direct entry and keyboard/mobile use work; no empty topic pages are linked; source/disposition references remain attached to content records; no existing counselling functionality regresses.

## Batch 2 Support and RESET content

Build `/parenting/support-for-you/`, `/parenting/ongoing-guidance/` and `/parenting/responding-with-reset/` from the page briefs. Use the rewritten drafts, then record source facts and Laura’s edits through the ledger. Keep one facts record for each agreed service; do not merge conflicting offers. Parent strategy sessions remain a section or unpublished route until their distinct scope is confirmed. Link teen therapy to the existing young-person counselling page rather than duplicating it.

Acceptance: professional and commercial facts match Laura's approved version; copy is an original local explanation in her reviewed first-person voice; all changes can be compared with their sources; no implied emergency availability, invented credentials or outcome guarantees.

## Batch 3 Resources and workshops

Build `/parenting/practical-tools/`, `/parenting/learn-at-your-pace/` and the two P1 workshop-detail routes. Import structured catalogue records from the registers. Clearly distinguish free, sign-up, paid and member-only access. Use existing authorised purchase/delivery destinations. Do not build payment processing, customer accounts, video streaming, a membership system or an AI assistant in this batch.

Acceptance: source-backed catalogues, approved player/access statuses, correct product links, no private file in the public asset bundle, no blog-post import. Where confirmation is outstanding, show only the public description and a verified existing access destination rather than publishing the file itself.

## Batch 4 Shared authority and topic clusters

Enhance the shared book, biography/qualification and media/publication pages. Develop only the P2 routes with current service details and sufficient Laura-approved original content. Reuse genuine source topics and resource relationships; don't manufacture book chapters or near-duplicate pages. Leave unfinished routes unpublished and remove their live links. Do not import the separate therapist network as Laura's staff.

Acceptance: distinctive reader need per page, useful contextual explanation, source-backed author identity and relevant internal links. Professional content is reviewed; blog bodies remain excluded. One shared Book/Person identity is reused rather than duplicated under Parentology.

## Batch 5 Search media and launch QA

Check page titles/descriptions, canonicals, server-rendered main content, source-to-route coverage, structured data, sitemap inclusion and actual CTA destinations. Parentology World remains unchanged; cross-domain redirects/canonical changes are a separately authorised decision. Don't imply Service schema creates a special AI result.

Test all launch routes at 320, 390, 768 and 1440px; short screens; 200% zoom;
keyboard, focus, reduced motion and direct entry. Check image dimensions, contrast,
video fallback/captions, privacy loading and working enquiry routing. Run repository
checks. Provide actual screenshots, the route/content ledger, approved/incomplete
item list and release/rollback instructions. Do not submit live bookings, purchases
or enquiries while checking links. Do not deploy before the agreed launch approval.

## Content schema minimum

- Common: id, slug, title, audience, sourceUrls, checkedAt, adaptationStatus,
  approvalStatus, ownerEntityId, metadata, mediaIds, relatedRouteIds and ctaId.
- Service: whoFor, format, inclusions, boundaries, availability, currentTermsStatus.
- Resource: type, accessLevel, destinationUrl, deliveryOwner, rightsStatus.
- Workshop: learningScope, includedMaterials, deliveryFormat, purchaseDestination,
  verifiedPrice, priceCheckedAt and commercialApprovalStatus.
- Video: provider, providerId, sourceUrl, posterAssetId, publicAccessStatus,
  embeddingRightsStatus, playbackVerifiedAt, captionsStatus and transcriptStatus.
- Copy ledger: source URL/block, original wording, revised wording, reason,
  changedFactIds, approver and approval date.

Imported HTML must be sanitised; do not execute scripts or source-site custom code.
Keep credentials out of source files. Topic clusters need not use a blog/CMS model.
No CMS/editor backend is built from scratch as part of this integration.
