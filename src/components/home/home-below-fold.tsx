import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Brain,
  CircleHelp,
  Cloud,
  Compass,
  HandHeart,
  HeartPulse,
  House,
  MapPin,
  Moon,
  Phone,
  Route,
  User,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CopyNote, DesignPill } from "@/components/home/copy-note";
import { HomeCtaPrimary, HomeCtaSecondary } from "@/components/home/home-cta";
import { HomeRecentBlogs } from "@/components/home/home-recent-blogs";
import {
  homeFaq,
  homeHowICanHelp,
  homeIntroBlocks,
  homeLocation,
  homeOverwhelm,
  homeParentologyWorld,
} from "@/lib/home-copy";
import { hrefFromRegistry } from "@/lib/routes";

const counsellingHref = hrefFromRegistry("/services/");
const individualHref = hrefFromRegistry("/counselling/");
const couplesFamilyHref = hrefFromRegistry("/couples-counselling/");
const parentologyHref = hrefFromRegistry("/parentology/");
const booksHref = hrefFromRegistry("/books/");
const girlsBookHref = hrefFromRegistry("/books/parenting-unstoppable-girls/");
const boysBookHref = hrefFromRegistry(
  "/books/parenting-teen-boys-with-confidence/",
);
const faqHref = hrefFromRegistry("/faq-and-fees/");
const contactHref = hrefFromRegistry("/contact-me/");

const overwhelmItems: { icon: LucideIcon; text: string }[] = [
  { icon: Brain, text: homeOverwhelm.bullets[0] },
  { icon: Moon, text: homeOverwhelm.bullets[1] },
  { icon: HeartPulse, text: homeOverwhelm.bullets[2] },
  { icon: Users, text: homeOverwhelm.bullets[3] },
  { icon: House, text: homeOverwhelm.bullets[4] },
  { icon: Compass, text: homeOverwhelm.bullets[5] },
];

const locationPills = [
  "Wixams",
  "4 miles south of Bedford",
  "M1",
  "A421",
  "A6",
] as const;

const helpIntroNotes: { icon: LucideIcon; text: string }[] = [
  { icon: HandHeart, text: homeHowICanHelp.intro[0] },
  { icon: Cloud, text: homeHowICanHelp.intro[1] },
  { icon: Compass, text: homeHowICanHelp.intro[2] },
];

const locationNotes: { icon: LucideIcon; text: string }[] = [
  { icon: MapPin, text: homeLocation.paragraphs[0] },
  { icon: House, text: homeLocation.paragraphs[1] },
  { icon: Phone, text: homeLocation.paragraphs[2] },
];

const parentologyPills = homeParentologyWorld.strap.split(" · ");
const parentologySignals = homeParentologyWorld.subline
  .split(". ")
  .map((part) => part.replace(/\.$/, ""));

export function HomeBelowFold() {
  return (
    <div className="bg-[var(--color-cream)]" id="home-main-content">
      <section
        className="border-t border-[#c8cbb9]/80 px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="how-i-can-help-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <DesignPill icon={HandHeart}>{homeHowICanHelp.title}</DesignPill>
              <h2
                id="how-i-can-help-heading"
                className="mt-3 font-serif text-[clamp(36px,8vw,56px)] leading-[1.02] tracking-[-1px]"
              >
                Choose counselling or specialist parenting support.
              </h2>
            </div>
            <Image
              src="/brand/laura-logo-nav-on-cream.webp"
              alt="Laura Thomas Counselling"
              width={1278}
              height={387}
              className="h-12 w-auto shrink-0 sm:h-14"
            />
          </div>
          <div className="mt-6 grid gap-3 lg:grid-cols-3">
            {helpIntroNotes.map(({ icon, text }) => (
              <CopyNote key={text.slice(0, 28)} icon={icon} tone="sage">
                {text}
              </CopyNote>
            ))}
          </div>
          <div className="mt-3">
            <CopyNote icon={Users} tone="sage">
              {homeIntroBlocks[6]}
            </CopyNote>
          </div>

          <div className="mt-10 grid items-stretch gap-5 lg:grid-cols-2">
            <article className="flex flex-col overflow-hidden border border-[#173e35]/15 bg-[var(--color-cream)]">
              <div className="relative min-h-[240px] flex-1 sm:min-h-[280px]">
                <Image
                  src="/images/room.webp"
                  alt="A calm counselling room with an armchair by the window"
                  fill
                  className="object-cover object-[65%_40%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#102f2c]/80 via-[#102f2c]/25 to-[#102f2c]/10"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-[#fff8e9]">
                  <p className="text-[10px] uppercase tracking-[0.16em]">
                    01 · Counselling
                  </p>
                  <h3 className="mt-2 font-serif text-[clamp(32px,5vw,44px)] leading-none tracking-[-0.6px]">
                    A space for you.
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <ul className="flex flex-wrap gap-2">
                  {["Individual", "Couples", "Family", "Young people"].map(
                    (pill) => (
                      <li key={pill}>
                        <DesignPill tone="sage">{pill}</DesignPill>
                      </li>
                    ),
                  )}
                </ul>
                <div className="rounded-2xl bg-[var(--color-sage)] p-4">
                  <h4 className="flex items-center gap-2 font-serif text-2xl tracking-[-0.3px]">
                    <User aria-hidden size={18} strokeWidth={1.6} />
                    {homeHowICanHelp.services.individual.title}
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed">
                    {homeHowICanHelp.services.individual.body}
                  </p>
                  <HomeCtaSecondary
                    href={individualHref}
                    className="mt-3"
                    showArrow
                  >
                    Find out more
                  </HomeCtaSecondary>
                </div>
                <div className="rounded-2xl bg-[var(--color-sage)] p-4">
                  <h4 className="flex items-center gap-2 font-serif text-2xl tracking-[-0.3px]">
                    <Users aria-hidden size={18} strokeWidth={1.6} />
                    {homeHowICanHelp.services.couplesFamily.title}
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed">
                    {homeHowICanHelp.services.couplesFamily.body}
                  </p>
                  <HomeCtaSecondary
                    href={couplesFamilyHref}
                    className="mt-3"
                    showArrow
                  >
                    Find out more
                  </HomeCtaSecondary>
                </div>
                <HomeCtaPrimary href={counsellingHref} className="mt-2">
                  Explore counselling
                </HomeCtaPrimary>
              </div>
            </article>

            <article
              className="flex flex-col overflow-hidden bg-[var(--color-clay)]"
              data-world="parentology"
            >
              <div className="relative min-h-[240px] flex-1 sm:min-h-[280px]">
                <Image
                  src="/images/family.webp"
                  alt="A mother and daughter talking together at a kitchen table"
                  fill
                  className="object-cover object-[52%_30%]"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#72372c]/85 via-[#72372c]/30 to-[#72372c]/10"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 text-[#fff8e9]">
                  <p className="text-[10px] uppercase tracking-[0.16em]">
                    02 · Specialist parenting support
                  </p>
                  <h3 className="mt-2 font-serif text-[clamp(32px,5vw,44px)] leading-none tracking-[-0.6px]">
                    Growing together.
                  </h3>
                </div>
              </div>
              <div className="flex flex-col gap-4 p-6">
                <Image
                  src="/images/parentology/parentology-logo.webp"
                  alt="Parentology World"
                  width={1075}
                  height={718}
                  className="h-auto w-[min(200px,70%)] object-contain object-left"
                />
                <ul className="flex flex-wrap gap-2">
                  {parentologyPills.map((pill) => (
                    <li key={pill}>
                      <DesignPill tone="cream">{pill}</DesignPill>
                    </li>
                  ))}
                </ul>
                <p className="font-serif text-[clamp(22px,3vw,28px)] leading-snug tracking-[-0.3px]">
                  {homeParentologyWorld.headline}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {parentologySignals.map((pill) => (
                    <li key={pill}>
                      <DesignPill tone="forest">{pill}</DesignPill>
                    </li>
                  ))}
                </ul>
                <CopyNote icon={House}>{homeHowICanHelp.services.teenParent.body}</CopyNote>
                <CopyNote icon={Compass}>{homeParentologyWorld.body}</CopyNote>
                <CopyNote icon={Route}>{homeParentologyWorld.detail}</CopyNote>
                <HomeCtaPrimary href={parentologyHref} className="mt-2">
                  Parenting &amp; teenagers
                </HomeCtaPrimary>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9]/80 bg-[var(--color-sage)] px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="overwhelm-heading"
      >
        <div className="mx-auto grid max-w-[var(--content-max)] gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center">
          <div>
            <h2
              id="overwhelm-heading"
              className="font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
            >
              {homeOverwhelm.heading}
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {overwhelmItems.map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-3 rounded-2xl bg-[var(--color-cream)] px-4 py-4 shadow-[var(--shadow-soft)]"
                >
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--color-sage)] text-[var(--color-forest)]">
                    <Icon aria-hidden size={18} strokeWidth={1.6} />
                  </span>
                  <span className="pt-1.5 text-[15px] leading-snug">{text}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-[#173e35]/10 bg-[var(--color-cream)] p-6">
              <h3 className="font-serif text-[clamp(28px,7vw,40px)] leading-[1.05] tracking-[-0.5px]">
                {homeOverwhelm.subheading}
              </h3>
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
                {homeOverwhelm.body}
              </p>
              <HomeCtaPrimary href={contactHref} className="mt-6">
                Book a free call
              </HomeCtaPrimary>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] lg:aspect-[5/4]">
            <Image
              src="/images/counselling-space.webp"
              alt="A calm, private counselling space in Wixams"
              fill
              className="object-cover object-[55%_50%]"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9]/80 bg-[var(--soft-surface)] px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="location-heading"
      >
        <div className="mx-auto grid max-w-[var(--content-max)] gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#173e35]/15 bg-[var(--color-cream)] px-3 py-1 text-[10px] uppercase tracking-[0.14em]">
              <MapPin aria-hidden size={14} strokeWidth={1.7} />
              Location
            </p>
            <h2
              id="location-heading"
              className="mt-4 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
            >
              Wixams, Bedford
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {locationPills.map((pill) => (
                <li key={pill}>
                  <DesignPill tone="forest">{pill}</DesignPill>
                </li>
              ))}
            </ul>
            <div className="mt-6 grid max-w-2xl gap-3">
              {locationNotes.map(({ icon, text }) => (
                <CopyNote key={text.slice(0, 32)} icon={icon}>
                  {text}
                </CopyNote>
              ))}
            </div>
            <HomeCtaPrimary href={contactHref} className="mt-6">
              Book a free call
            </HomeCtaPrimary>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[18px]">
            <Image
              src="/images/laura-doorway-hero.webp"
              alt="Laura Thomas at the doorway of her counselling practice in Wixams"
              fill
              className="object-cover object-[42%_32%]"
              sizes="(max-width: 1024px) 100vw, 560px"
            />
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9]/80 px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="faq-teaser-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#173e35]/15 bg-[var(--color-sage)] px-3 py-1 text-[10px] uppercase tracking-[0.14em]">
            <CircleHelp aria-hidden size={14} strokeWidth={1.7} />
            Frequently asked questions
          </p>
          <h2
            id="faq-teaser-heading"
            className="mt-4 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            FAQ
          </h2>
          <div className="mt-5 max-w-3xl">
            <CopyNote icon={CircleHelp} tone="sage">
              {homeFaq.intro}
            </CopyNote>
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {homeFaq.samples.map((question) => (
              <li
                key={question}
                className="flex items-start gap-3 rounded-2xl border border-[#173e35]/10 bg-[var(--color-sage)]/50 px-4 py-4 text-[15px] leading-snug"
              >
                <CircleHelp
                  aria-hidden
                  size={18}
                  strokeWidth={1.6}
                  className="mt-0.5 shrink-0 text-[var(--color-forest)]"
                />
                {question}
              </li>
            ))}
          </ul>
          <HomeCtaSecondary href={faqHref} className="mt-6">
            Read FAQs &amp; fees
          </HomeCtaSecondary>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9]/80 bg-[var(--color-sage)] px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="books-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#173e35]/15 bg-[var(--color-cream)] px-3 py-1 text-[10px] uppercase tracking-[0.14em]">
            <BookOpen aria-hidden size={14} strokeWidth={1.7} />
            Books
          </p>
          <h2
            id="books-heading"
            className="mt-4 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            Parenting books for real family conversations.
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <article className="flex flex-col rounded-2xl bg-[var(--color-cream)] p-6 shadow-[var(--shadow-soft)]">
              <Link
                href={girlsBookHref}
                className="group relative mx-auto aspect-[2/3] w-full max-w-[200px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
              >
                <Image
                  src="/images/book-girls.webp"
                  alt="Cover: Parenting Unstoppable Girls"
                  fill
                  className="object-contain drop-shadow-lg transition group-hover:scale-[1.02] group-active:scale-[0.99]"
                  sizes="200px"
                />
              </Link>
              <h3 className="mt-5 font-serif text-2xl tracking-[-0.4px]">
                Parenting Unstoppable Girls
              </h3>
              <HomeCtaSecondary href={girlsBookHref} className="mt-3">
                View book details
              </HomeCtaSecondary>
            </article>
            <article className="flex flex-col rounded-2xl bg-[var(--color-cream)] p-6 shadow-[var(--shadow-soft)]">
              <Link
                href={boysBookHref}
                className="group relative mx-auto aspect-[2/3] w-full max-w-[200px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
              >
                <Image
                  src="/images/book-boys.webp"
                  alt="Cover: Parenting Teen Boys with Confidence"
                  fill
                  className="object-contain drop-shadow-lg transition group-hover:scale-[1.02] group-active:scale-[0.99]"
                  sizes="200px"
                />
              </Link>
              <h3 className="mt-5 font-serif text-2xl tracking-[-0.4px]">
                Parenting Teen Boys with Confidence
              </h3>
              <HomeCtaSecondary href={boysBookHref} className="mt-3">
                View book details
              </HomeCtaSecondary>
            </article>
          </div>
          <HomeCtaSecondary href={booksHref} className="mt-8">
            Explore all books
          </HomeCtaSecondary>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9] bg-[var(--color-forest)] px-[19px] py-10 text-[#f4eddd] md:px-10 lg:px-[65px]"
        aria-labelledby="book-call-heading"
      >
        <div className="mx-auto flex max-w-[var(--content-max)] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <ul className="flex flex-wrap gap-2">
              {["Wixams", "Bedford", "Online"].map((pill) => (
                <li
                  key={pill}
                  className="rounded-full border border-white/30 px-3 py-1 text-[10px] uppercase tracking-[0.12em]"
                >
                  {pill}
                </li>
              ))}
            </ul>
            <h2
              id="book-call-heading"
              className="mt-4 font-serif text-[clamp(32px,8vw,48px)] leading-[1.02] tracking-[-0.6px]"
            >
              Book a free call
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#f4eddd]/90">
              {homeLocation.paragraphs[2]}
            </p>
          </div>
          <HomeCtaPrimary href={contactHref} tone="onDark">
            Book a free call
          </HomeCtaPrimary>
        </div>
      </section>
      <HomeRecentBlogs />
    </div>
  );
}
