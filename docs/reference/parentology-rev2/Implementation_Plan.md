# Parentology integration assessment and implementation plan

Prepared for Therapist Website Studio • 6 November 2026

## Recommendation

Build Parentology into Laura Thomas Counselling as a substantial parenting section at `/parenting/`, with a distinct editorial structure, original rewritten content and enhanced UI/UX. This is not a like-for-like mirror. Use Laura's voice and verified source facts while changing the narrative, reader choices, section hierarchy and contextual links.

Revision 2 supplies eight full initial P1 page drafts and nine P2 rewritten introductions/development structures in Rewritten_Page_Content.md/JSON. P2 pages remain unpublished until their offers and substantive explanations are complete. The eight-page PDF includes responsive design studies; UI_UX_Design_Brief.md defines templates and interactions. The studies are references, not an implemented website.

All 17 new parenting destinations use a revised local `/parenting/` hierarchy. Keep the current counselling URLs unchanged. The previous `/parentology/` routes were an unbuilt proposal; replace their references without creating live redirects. Keep source evidence URLs intact. Parentology, In-Touch, RESET and exact book titles remain recognisable brands/entities rather than being renamed just to appear different.

Parentology World remains a separate connected site, retaining its existing booking, purchase and resource-delivery systems. Local content can explain the substantive offer while clearly identifying an external transaction. Neither live website has been changed. No new payment, membership or automated-advice system is included.

Changing a slug or design alone does not make duplicate main content independently useful. The Content_Differentiation_Map records a distinct role for each local destination. Where a local page cannot offer meaningful additional context, consolidate its purpose rather than publish a copy merely for search coverage. No percentage of rewritten words is presented as an SEO guarantee.

## What was inspected

- The current XML sitemap contains 113 URLs. All 20 article URLs, 39 article taxonomy URLs and the article index were excluded: 60 blog-related URLs in total. No Parentology blog post bodies were fetched for this audit.
- 53 non-blog sitemap URLs, the root homepage and one additional internal directory link were assessed: 55 URL checks. After retrying initial network timeouts, 54 returned HTTP 200; the discovered `/teen-therapists` link returned HTTP 404. Temporary fetch errors were not reported as broken live pages.
- The review captured main-page text and headings, conversion links, public resource destinations, image elements, header branding and video-link/embed metadata. It did not log in, submit forms, book appointments, buy products, download linked vault documents or watch the videos.
- 128 unique content/header image URLs were registered; 24 reference renditions were downloaded and visually inspected in the contact sheet. This is not an exhaustive CSS-background or media-library export. Original source URLs remain recorded.
- Six distinct YouTube IDs were located. Nineteen unique Google Drive resource destinations were catalogued, not opened. File titles and video descriptions are source labels, not verified contents or transcripts.
- This is a public content/markup and asset assessment, not a complete functional, screen-reader or device-layout test. Those checks belong to implementation QA.

## What the source site actually contains

| Content family | Findings | Treatment in the counselling website |
|---|---|---|
| Main introduction | A human, parent-focused opening, Laura’s portrait, a welcome video, support choices and books | Build an original `/parenting/` introduction with support choices, practice context and selected media |
| Parent support | Practical coaching, parent counselling, messaging support and strategy-session explanations | A clear parent-support page, with explicit links into existing counselling services |
| In-Touch | Several sales-page versions, a detailed FAQ, a messaging-led offer and variants mentioning Core/Plus | One substantive local page, populated from the confirmed version rather than a mixture of all variants |
| RESET | A five-step explanation on About and a different version on a discovery-call page | One framework page and one approved step definition reused everywhere |
| Workshops | Two existing paid products, a broader resource index and related campaign pages | Local discovery/detail pages; existing Parentology purchase and delivery links |
| Exam support | Two overlapping campaign pages and dedicated session calendars | One evergreen local destination if Laura confirms that the offer continues |
| Resource vault | Guides, journals, scripts and replay links; public, sign-up and membership contexts overlap | A curated catalogue with explicit access levels; no automatic release of everything as free |
| Practitioner network | Named other practitioners, profile variants and a directory collection with filler | Keep separate from Laura’s own practice team; link out only if the network is current and approved |
| Authority | Biography, professional training references, book links, research, speaking topics and media/award links | Strengthen existing author/qualification pages and a shared media/publications page |
| Legacy campaigns | Older packages, newsletter forms, generic-template text and duplicated page families | Consolidate useful facts; do not reproduce every sitemap entry |

## Decisions that prevent an inaccurate migration

These are content decisions, not reasons to stop layout and component work.

1. **Which In-Touch version is current?** `/intouch` and `/intouchsupport` have identical extracted main text. `/intouch-1`, `/new-page` and `/new-page-1` differ. The last includes Core £499/month and Plus £699/month. Those prices are observed on a variant, not established as the current approved public tariff.
2. **What is the response commitment?** `/intouch` describes weekday handling with a 7pm cut-off. Older `/intensive` and `/change` material mentions different weekday/weekend response promises. Do not combine these into a stronger service promise or imply overnight/crisis availability from the emotive late-night opening.
3. **What is a strategy session?** `/parents` describes 90 minutes; the In-Touch starting session is 60 minutes; `/power` describes two hours. They may be different offers, not necessarily an error. Ask Laura to define the current products and distinguish them.
4. **Which RESET wording is authoritative?** `/about` uses Recognise, Empathise, Say what matters, Emotionally regulate together, Take action with confidence. `/free-support-1` uses an alternative final step. Use the About wording provisionally, with Laura’s confirmation, not a hybrid.
5. **Which older packages still exist?** `/power`, `/education`, `/intensive` and `/change` expose commercial offers. The 12-week page also varies the membership duration within its own copy. Hold these package details out of the new public offer pending confirmation.
6. **Are seasonal exam terms current?** `/exam-support` and `/examhelp` contain availability through July. No year/current availability was established for the new release. Remove dated scarcity and reapprove session prices and calendars.
7. **What is free, sign-up-only, member-only or paid?** A publicly fetchable vault page does not prove the linked files were intended to be freely republished. Catalogue first; confirm the status of each resource before moving files or embedding replays.
8. **Who provides teen support?** Other practitioners are listed across several locations. Do not describe them as Laura’s employed counselling team or manufacture local offices. Retain the counselling site’s own young-person service as its primary therapy destination.
9. **Which claims and policies can transfer?** Confirm current memberships, training wording, testimonial reuse, image rights, book claims and the practice-location relationship. The safeguarding policy contains legal assertions that this audit has not validated; it needs professional/legal review before reuse.
10. **Which calendar and email should each CTA use?** Multiple Google booking URLs and contact addresses occur across the source pages. They are recorded in CTA_Register.json; no booking or payment was tested. Laura selects the appropriate destination for each new journey.

## Proposed hierarchy and priorities

### First release with eight new parenting URLs

| New local route | Job |
|---|---|
| `/parenting/` | Main parenting doorway and connected Parentology identity |
| `/parenting/support-for-you/` | Explain parent coaching/support and distinguish it from counselling |
| `/parenting/ongoing-guidance/` | Complete description of the confirmed messaging-led parent offer |
| `/parenting/responding-with-reset/` | Consistent explanation of Laura’s approach |
| `/parenting/practical-tools/` | Curated resources, books and approved video entry points |
| `/parenting/learn-at-your-pace/` | Current workshop catalogue with explicit paid/free labels |
| `/parenting/learn-at-your-pace/when-parenting-feels-too-much/` | Local page for the existing Overwhelm product |
| `/parenting/learn-at-your-pace/understanding-self-harm/` | Local page for the existing awareness workshop |

Use topic introductions as useful sections within the first-release hub/resources pages. Do not create empty topic destinations just to increase page count.

### Expansion after the relevant content is complete

Nine further proposed routes cover exam support, a topic hub, five substantive topic pages, commissioned talks and a conditional standalone strategy-session page. Every route has its source pages, intended audience, page sections, imagery, video IDs, next step and internal links in Proposed_Routes.json and Page_Briefs.md.

The five learning clusters are communication and boundaries; anxiety and overwhelm; school avoidance; confidence/self-esteem/identity; and neurodivergence. Exam stress is a sixth related need with its own service/resource destination. Teenage brain development, peer relationships and digital life can begin as sections in the relevant clusters, drawing on Laura-approved material rather than copied member lessons.

These are proposed evergreen hub/support pages, not a migration of Parentology’s blog. Some topic needs are present in the source as short descriptions only. Laura’s substantive material is still needed before those become complete standalone pages.

### Shared pages rather than duplicate branches

- Keep `/counselling-for-young-people/` as the counselling destination for therapy for a young person. A parenting-hub section explains the difference and links there.
- Enhance `/qualified-counsellor/` and `/fully-qualified/` using approved biography and credentials. Do not create a second competing About page for Parentology inside the same domain.
- Use one `/books/` showcase and two individual book pages: `/books/parenting-unstoppable-girls/` and `/books/parenting-teen-boys-with-confidence/`. Parenting pages link to these shared destinations.
- A proposed `/media-and-publications/` page can combine the existing media enquiry themes, properly attributed coverage, research and exact award recognition. A GHP winner page corroborates the 2026 Parentology award; it does not validate clinical outcomes or make the books bestsellers.
- Preserve the existing counselling contact path `/contact-me/`. Confirm whether local enquiries should use it, an existing calendar or a relevant Parentology mailbox. Do not invent a new booking system.

## Reader needs and internal connections

| Reader’s question | Owning page or cluster | Connected evidence/resource | Appropriate onward route |
|---|---|---|---|
| What help is available for me as a parent? | Parent support | Laura’s background and support-format explanation | In-Touch, confirmed strategy session or parent counselling |
| How does ongoing parent guidance work? | In-Touch | Confirmed availability, process and FAQ | Introductory call; existing teen-counselling route where relevant |
| What is RESET? | Framework page | Laura-approved method explanation and example | Related workshops, books and parent support |
| Where can I find a guide or replay? | Resource hub | Source-labelled resource/video record and access status | Approved access destination, not an exposed private file |
| What can I do when I feel overwhelmed? | Anxiety/overwhelm cluster | Source workshop and approved education | Resource, paid workshop detail or parent support |
| How do I handle communication or confidence questions? | Relevant evergreen topic | Book themes, selected journal/script and approved explanation | Shared book page and suitable support |
| Is this exam support or tutoring? | Exam support | Current format and source-backed practical description | Confirmed session calendar; do not imply tuition or grade guarantees |

This follows the studio’s Recommendation Reconstruction method: map the request and related needs; preserve Laura’s reasoning and context; connect the explanation to its named author, source and appropriate next step. Google’s query fan-out is a reason to cover related reader needs coherently, not evidence that a particular invented list of subqueries is what Google ran.

## Copy treatment and preserving Laura’s voice

Use Rewritten_Page_Content.md/JSON as the initial editorial draft, not the old source page body. Eight P1 pages have rewritten headings, introductions, body sections and action labels; nine P2 pages have original introductions and development structures. All are proposed wording for Laura's review, not quotations or final clinical advice attributed to her.

Preserve accurate facts, human warmth and practical language. Keep legitimate names and approved framework labels stable. Reorganise around the reader's decision: what help is for me, what differs between services, what can I learn, and what happens next. The local support comparison, resource access labels and shared counselling links are part of this change, not decoration around the same main content.

Source_Page_Register records short source phrases as evidence only. Copy_Ledger_Template.csv includes actual source-to-new-opening examples and rows for Laura's subsequent edits. Each section retains its source references, changed facts and approval status. No wholesale source prose is bundled as public-ready copy.

Do not invent qualifications, book chapters, testimonials, service hours, media rights or treatment outcomes to make a draft feel complete. Omit unresolved terms from public copy. Topic development requires Laura-approved contextual explanations and genuine resource relevance; it is not an invitation to mass-produce variations of the same question.

## Images and video treatment

Image_Register.csv/JSON gives each discovered image a stable ID and original URL. Twenty-four 1200px-or-smaller reference renditions are supplied, not original production master files. Use the contact sheet to choose imagery intentionally. Some pictures show Laura; some are stock, product composites or people whose identity has not been confirmed. Appearance on her site is not proof of cross-domain rights or client-model consent.

Suggested visual roles are recorded per route. IMG006 and IMG013 match Laura’s current portrait identity; IMG007/IMG009 are existing book composites; IMG010 is the existing Parentology brand artwork; IMG077 is In-Touch artwork. Other portrait candidates need confirmation. Do not present IMG003 as a client or teenager without identifying the subject and permission. Brand/cover proportions must remain intact. Use Laura’s existing approved assets over new generated imagery where suitable.

The main welcome video is identified as YouTube ID YJPXSzILdv4. Other IDs are source-linked replays/resource entry points. Their titles come from source labels, not watched/transcribed content. Do not invent runtime, captions, chapters, quotes or a transcript. Verify player availability, cross-domain embedding permission, audience/access status and captions before launch. The paid workshop recording itself was not recovered; its sales description and public purchase record are all that is included here.

Build a reusable click-to-load player with a poster, descriptive title, accessible controls, reserved aspect ratio and a direct watch link. Explain third-party loading in the privacy/cookie setup; do not autoplay or load every third-party player on initial render. Provide an approved text summary; a transcript requires the actual recording/caption source. Keep existing hosted video delivery initially rather than downloading YouTube media or building a streaming platform.

## Technical architecture and search foundations

### Observed source metadata

Metadata_and_Discovery_Register.csv records fetched HTML for all 55 URL checks. Of the 54 successful pages, 52 expose WebSite structured data alone in the parsed JSON-LD; the two product records also expose Product/Offer. This is an opportunity to describe the author, books and services more explicitly where appropriate, not evidence that the existing markup is invalid. The snapshot is not Google's rendered interpretation or a rich-result validation.

H1 counts vary across the source pages, including minimal/empty and directory/template pages. Review headings in context rather than treating every count as a ranking defect. Source_Internal_Links.csv records 622 observed non-blog main/header link relationships; this is the reference for replacing source links with the correct local destination during adaptation. Neither register includes a crawl of blog bodies.

Use the existing project’s framework and conventions. Add structured service, resource, workshop, framework and topic records; reusable templates should implement the page briefs. Parentology branding is a scoped visual variant inside the same site shell. The two homepage doors, breadcrumbs, ordinary navigation and direct search entry all reach real local content without relying on animation.

Each content record needs a stable content ID, local slug, source URLs, source-check date, copied/adapted/new status, approval state, audience, media IDs, CTA ID, related route IDs, canonical policy and metadata. Resources additionally need type, delivery owner, access level, price status and destination. Video records need actual provider ID, poster, source page, access status, caption/transcript status and playback verification.

Use server-rendered meaningful content; distinct titles/descriptions and H1s; self-consistent canonicals and breadcrumbs; image dimensions and responsive delivery. Reuse Laura’s Person identity across Book, Article or relevant creative-work records. Distinguish counselling practice and Parentology business/service responsibility in Organisation/Service records. Add VideoObject only when required video details are verified and match the visible page. Do not manufacture Offer prices, review ratings, medical credentials or AI-specific schema.

These are new URLs on the counselling domain, not a whole-domain move. Do not redirect Parentology URLs, change its canonicals or retire its site in this batch. Prefer a condensed original adaptation on counselling with a distinct purpose, rather than publishing two unchanged sales pages. If Laura later elects to move ownership of a specific page, map and authorise that URL’s redirect/canonical strategy separately. Preserve all existing counselling URLs. Compare new clusters with existing counselling pages to avoid competing intent; reading Parentology blog bodies remains outside this batch.

## Controlled implementation batches

### Batch 0 Source decisions and content selection

Deliver a current route registry, source-to-section mapping and decision log. Confirm the current In-Touch variant, strategy-session distinction, RESET wording, access labels, workshop terms, selected calendars, credentials and image permissions. Reconcile the 55-row source register and the six video IDs. Keep unresolved details out of public copy; implement the layout with neutral enquiry CTAs meanwhile.

Acceptance: every proposed launch section has a source and status; no old package or private resource is silently promoted; no production service changes occur.

### Batch 1 Shared templates and parenting hub

Implement scoped Parentology tokens, navigation, breadcrumbs and responsive templates; build `/parenting/` and its parent-support choices. Connect shared books/profile pages and the existing young-person counselling route. Use the verified source welcome-video ID through the reusable player, subject to embedding/access checks. Match the agreed warm editorial design and first-screen mobile doorway.

Acceptance: both homepage paths arrive locally, keyboard/mobile/direct-entry work, no draft destination cards exist, and existing counselling routes remain intact.

### Batch 2 Services and framework

Build the parent-support, In-Touch and RESET pages. Use the rewritten page drafts and copy ledger, preserve Laura’s voice, consolidate repeated campaigns and use one approved facts record for availability and booking. Keep standalone strategy sessions conditional until its distinction is agreed.

Acceptance: Laura can check original/revised text; service types and response commitments are consistent; clinical and commercial claims are approved; links identify the actual provider.

### Batch 3 Resources workshops and embedded media

Build the resource hub, workshop index and two local workshop details. Import catalogue records and source-linked media IDs, with free/sign-up/member/paid status explicit. Existing checkout, video fulfilment and member delivery remain in place. Do not expose Drive files through a new public directory by default.

Acceptance: approved media plays, all cards have a real destination, purchase links retain the correct product, no private recordings/downloads are copied into public assets, and no new payment/account system was introduced.

### Batch 4 Authority and substantive topic expansion

Enhance shared biography, qualification, book and media pages. Implement the evergreen exam page only when current; develop the topic hub and cluster pages when sufficient Laura-approved source material is ready. Build only complete useful pages; otherwise keep a useful section within the hub until ready.

Acceptance: each page has a distinct reader need, original approved explanation and meaningful connections; no Parentology blog bodies were imported; no other practitioner is represented as Laura’s employee.

### Batch 5 QA and release preparation

Crawl all new routes and test retained counselling URLs. Check contact/calendar/product destinations without submitting live bookings or purchases. Verify metadata, canonical/sitemap inclusion, structured data, media visibility, keyboard navigation, short mobile viewports, reduced motion, 200% zoom, contrast and performance. Run relevant repository checks and keep a rollback path.

Acceptance: no critical route, public-copy, media-access or enquiry issue remains. Report unresolved source items and exact complete/incomplete pages. Laura approves the release candidate before production launch. No claim of SEO or AI-search performance is made from a successful build test.

## Suggested six-week allocation

Week 1: source decisions and first-release content selection. Week 2: hub/templates and desktop/mobile approval. Weeks 3–4: service/framework and resource/workshop builds, plus shared book/authority work. Week 5: Laura’s consolidated review and content corrections. Week 6: QA, publishing handover and approved launch. Topic expansion follows the amount of approved content available; it is not an automatic commitment to publish all 17 proposed URLs within six weeks.

## Files for implementation

- Rewritten_Page_Content.md/JSON: eight original P1 page drafts plus nine P2 introductions/development structures.
- UI_UX_Design_Brief.md: actual template, navigation, hierarchy and responsive behaviour.
- Content_Differentiation_Map.csv and Route_Changes_Not_Redirects.csv: page purpose and replacement planning routes; no live redirect instructions.

- Proposed_Routes.csv/JSON: 17 new parenting destinations, eight P1 launch pages, section and media assignments.
- Page_Briefs.md: individual page outlines with sources and acceptance conditions.
- Content_Facts_and_Decisions.md: professional, service, product and authority source facts with confirmation status.
- Laura_Review_Decisions.csv and Copy_Ledger_Template.csv: practical approval questions and source-to-revision tracking.
- Source_Internal_Links.csv and Metadata_and_Discovery_Register.csv: observed non-blog link relationships and fetched HTML search metadata.
- Source_Page_Register.csv/JSON: all 55 audited non-blog URLs and proposed treatment.
- Content_Section_Map.csv: destination sections and source/editorial instructions.
- CTA_Register.json: observed business links, with purpose/verification status.
- Image_Register.csv/JSON, assets/ and Image_Contact_Sheet.jpg: media catalogue and selected visual references.
- Video_Register.json and Resource_Link_Register.json: provider IDs, original links and access status.
- Cursor_Assessment_and_Implementation_Batches.md: controlled execution instructions.
- Audit_Summary.json: counts and explicit coverage.

## Principal sources

https://www.parentologyworld.com/sitemap.xml
https://www.parentologyworld.com/
https://www.parentologyworld.com/about
https://www.parentologyworld.com/parents
https://www.parentologyworld.com/intouch
https://www.parentologyworld.com/resources
https://www.parentologyworld.com/overwhelm
https://www.parentologyworld.com/overwhelmreset
https://www.parentologyworld.com/exam-support
https://www.parentologyworld.com/media
https://ghpnews.digital/winners/parentology-world/
https://developers.google.com/search/docs/appearance/ai-features

All source-page mappings and media URLs are recorded in the accompanying registers. Inventory evidence is a dated snapshot, not a complete private CMS export or a promise that every link, price or page remains current.
