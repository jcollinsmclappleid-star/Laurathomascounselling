# A parenting experience designed inside counselling

Revision 2 • 6 November 2026

## Design objective

Build Parentology into Laura Thomas Counselling as a substantial, coherent parenting section. The visitor stays on the counselling domain while choosing support, understanding Laura's approach, reading about her books and discovering useful learning. Parentology branding supplies recognition and credibility; its existing transaction and protected-resource journeys remain clearly labelled onward options.

This is a new information experience. Changing a URL, colour or headline does not by itself make duplicated main content distinctive. Rewritten_Page_Content.md/JSON supplies original initial copy; the component and linking changes below give that copy a different job within the counselling practice.

## Navigation and identity

- Main navigation: **Counselling · Parenting & teenagers · About Laura · Books · Contact**. Retain existing counselling destinations and the agreed site logo. Use a compact menu at widths where those labels do not fit comfortably.
- Parenting section identity: **Parentology / with Laura Thomas** alongside the page's clear reader-facing heading. Use the existing Parentology logo without distorting its proportions. The navigation destination is `/parenting/`.
- Parenting subnavigation: **Find support · In-Touch · RESET · Tools · Workshops**. Links land locally. Conditional topic pages are omitted until complete; topic previews can link to useful sections in the hub meanwhile.
- Breadcrumbs show the real local hierarchy. A workshop is beneath Learn at your pace; a developed topic is beneath Understanding your teenager. Navigation labels can be shorter than H1s.
- External actions state the destination and purpose: **View workshop on Parentology ↗**, rather than a vague **Continue**. Normal internal navigation remains in the same tab. If an external action opens a new tab, disclose that accessibly.

## Visual system

Keep the approved cream, deep green and warm clay palette. Counselling remains calmer; the parenting section adds a restrained clay accent and more layered family/editorial imagery. A shared header, body font, button family and treatment of Laura connect the two.

Preserve the approved cinematic homepage composition and source project art direction when implementing. The PDF layout studies explain revised content placement and reader choices within that direction. Carry the existing image quality, depth and motion through the enhanced components.

Use an editorial display face for a short headline, with a clear sans serif for body copy, labels and controls. Proposed sizes: body 17–18px with approximately 1.55 line-height; desktop H1 42–52px; mobile H1 30–36px; section headings 26–32px desktop and 24–28px mobile. Use roughly 60–70 characters per body line. Headings should support the content rather than occupy most of a screen. Follow existing project fonts where they already deliver the agreed design.

Use real source assets selectively: IMG006/IMG013 for approved Laura portraits; IMG010 Parentology branding; IMG077 In-Touch artwork; IMG007/IMG009 book composites. Other people and stock imagery require identity/rights confirmation. Do not imply stock subjects are Laura's clients. Pair human imagery with useful text, rather than covering text with a busy photograph.

## Homepage doorway: both choices on the first mobile screen

Keep the agreed two-world concept. The first screen identifies Laura, then shows **Counselling** and **Parenting & teenagers** as equally clear local choices. Both labels and actions are available without animation or hover. On a typical 390px-wide mobile screen, use compact, stacked photographic cards instead of a cropped desktop split screen. On very short screens allow ordinary scrolling; do not shrink text or trap the viewport to force a visual fit.

The parenting card arrives at `/parenting/`. The counselling card retains the agreed local counselling destination. Cinematic selection can enhance that journey, but local navigation works immediately with reduced motion, keyboard input and direct search entry. External Parentology links belong within the subsequent content, not as the hero's primary destination.

## Parent hub template

Desktop: a readable text-led hero occupies roughly 55% width, with a layered Laura/family image occupying the remainder. The headline is **Support for you. Understanding for your teenager.** Show a small Parentology identity, a two-sentence standfirst and one primary support action. A secondary link leads to practical tools.

Immediately below, present three needs: **Support for me as a parent**, **Guidance as things happen**, **Understanding and tools**. Each has a short explanation and a specific local destination. A separate quiet link explains **Looking for counselling for your teenager?** so that parent coaching is not mistaken for therapy for a child.

Continue with Laura's introduction and click-to-load welcome video; approved topic previews; a two-book editorial feature; and a single enquiry panel. Do not introduce an oversized carousel or a long testimonial wall before explaining the offer.

Mobile: identity, heading and concise standfirst first; primary action then the first support choices; imagery follows or sits within a compact card. Keep text outside the image. Book covers sit as two clearly labelled items when width allows, then stack without losing purchase/detail labels. The first meaningful choices should not be pushed below a full-screen portrait.

## Support comparison template

Use clear cards for **Practical parent coaching**, **Counselling for you**, and **Support for your teenager**. Explain the audience, purpose and next step in plain language. In-Touch and a confirmed strategy session appear as formats within parent support, not as implied replacements for clinical services.

On mobile, stack the full cards; no horizontal-only comparison table. A compact list of jump links helps readers find the relevant explanation. Keep one enquiry action after the comparison, with contextual links into the retained counselling service pages. Do not make readers complete a symptom quiz to navigate.

## In-Touch service template

Open with the new headline and a compact **For parents · Messaging-led guidance** label. Follow with **How the arrangement works**, a three-step explanation: discuss suitability; agree contact and boundaries; use the agreed guidance arrangement. A beside/underneath facts card displays approved format, availability and enquiry details only when confirmed.

Show the service boundaries next to the service description, before the main enquiry action. Do not bury them in an accordion or animate them away. FAQs can answer genuine practical questions once Laura's current terms are known. Omit Core/Plus pricing cards until the products have been confirmed.

## RESET template

Use five consistently sized step cards with a number, exact approved step label and short new explanation. A vertical stack works without swiping on mobile. Add one Laura-reviewed example only when supplied. Link the framework to relevant support and reading; do not portray it as a diagnostic or guaranteed treatment tool.

## Tools and workshop templates

Give resource records topic, format and access labels. Filter controls can offer **All · Read · Watch · Learn**, with topic filters when there are enough real items to justify them. Use proper buttons with a visible selected state; preserve a useful list when JavaScript is unavailable. A small catalogue does not need elaborate search or a new backend.

Each card shows title, one-sentence relevance, format, access type and an explicit destination. No automatic public file import. Video posters reserve their aspect ratio and load third-party playback only on request. Captions, text alternatives and actual access are checked, not inferred from a source label.

Workshop details use a compact editorial hero, **Who this is for**, **Format and materials**, **Scope**, and **Access through Parentology**. Show only current approved commercial facts. Keep any purchase action beside access information. Educational workshop pages do not solicit clinical case histories.

## Book and topic connections

Use a shared book feature containing real covers, exact titles and links into the counselling site's book pages. An optional caption explains the relationship to Laura's work without inventing a chapter or quotation. Topic pages place a useful book/resource connection beside the relevant explanation, not as an unrelated banner.

For each complete topic page: a clear parent question; a short orientation; Laura's approved contextual explanation; related questions; a checked source/resource; and a proportionate next step. Use a small author panel linked to the shared biography. Related pages should explain their relevance, not merely repeat keywords.

## Interaction and accessibility

Use ordinary links for routes and buttons for UI changes. Aim for touch targets of at least 44px, visible focus, readable contrast and a logical heading order. Avoid sticky mobile controls that obscure the article or keyboard. An unobtrusive enquiry action may follow the reader after the first choice, provided it can never cover content.

Motion is restrained: a subtle image emphasis, short card reveal and optional local page transition. No mandatory scroll-jacking, automatic video, long entrance delay or perspective on reading text. Reduced motion receives a direct transition. Assess with actual devices and the existing Next.js repository before declaring performance or accessibility complete.

## Acceptance criteria

1. Two local homepage choices work at desktop and mobile widths without animation.
2. Every P1 page has the matching rewritten draft, clear audience and real next step.
3. All new destinations use the revised `/parenting/` registry; existing counselling URLs are unchanged.
4. Support types, providers and external delivery are understandable before an enquiry or purchase.
5. Only approved resources, claims and media appear; unpublished P2 pages have no dead-end cards.
6. Body copy remains prominent and comfortable to read at 320px, 390px, tablet and desktop, including zoom and short viewports.
7. Layout studies are design references, not evidence that a production build or responsive QA has been completed.
