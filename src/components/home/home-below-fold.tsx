import Image from "next/image";
import Link from "next/link";
import { BookOpen, Compass, GraduationCap, HandHeart, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HomeCtaPrimary, HomeCtaSecondary } from "@/components/home/home-cta";
import {
  homeBooks,
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
const youngPeopleHref = hrefFromRegistry("/counselling-for-young-people/");
const parentologyHref = hrefFromRegistry("/parentology/");
const booksHref = hrefFromRegistry("/books/");
const girlsBookHref = hrefFromRegistry("/books/parenting-unstoppable-girls/");
const boysBookHref = hrefFromRegistry(
  "/books/parenting-teen-boys-with-confidence/",
);
const faqHref = hrefFromRegistry("/faq-and-fees/");
const contactHref = hrefFromRegistry("/contact-me/");

const counsellingOptions = [
  {
    href: individualHref,
    title: homeHowICanHelp.services.individual.title,
    body: homeHowICanHelp.services.individual.body,
    image: "/images/individual-support.webp",
    alt: "A quiet corner of the counselling room, with a lamp and flowers",
    position: "object-[50%_45%]",
  },
  {
    href: couplesFamilyHref,
    title: homeHowICanHelp.services.couplesFamily.title,
    body: homeHowICanHelp.services.couplesFamily.body,
    image: "/images/couples-support.webp",
    alt: "A couple sitting together",
    position: "object-[50%_40%]",
  },
  {
    href: youngPeopleHref,
    title: homeHowICanHelp.services.youngPeople.title,
    body: homeHowICanHelp.services.youngPeople.body,
    image: "/images/young-people-support.webp",
    alt: "A teenager talking with an adult in a quiet room",
    position: "object-[62%_40%]",
  },
] as const;

const parentologyInsights: {
  icon: LucideIcon;
  label: string;
  insight: string;
  href: string;
}[] = [
  {
    icon: HandHeart,
    label: "Find support",
    insight:
      "Help with what is happening at home, or room to understand what it is bringing up for you.",
    href: hrefFromRegistry("/parentology/support-for-you/"),
  },
  {
    icon: MessageCircle,
    label: "In-Touch",
    insight:
      "Messaging-led guidance for parents, once you have agreed how contact works.",
    href: hrefFromRegistry("/parentology/ongoing-guidance/"),
  },
  {
    icon: Compass,
    label: "RESET",
    insight:
      "Recognise what is happening, empathise, say what matters, regulate together, then respond.",
    href: hrefFromRegistry("/parentology/responding-with-reset/"),
  },
  {
    icon: BookOpen,
    label: "Tools",
    insight: "Something to read, watch or return to for the moment you are in.",
    href: hrefFromRegistry("/parentology/practical-tools/"),
  },
  {
    icon: GraduationCap,
    label: "Workshops",
    insight: "Recorded learning you can take at your own pace.",
    href: hrefFromRegistry("/parentology/learn-at-your-pace/"),
  },
];

export function HomeBelowFold() {
  return (
    <div className="bg-[var(--color-cream)]" id="home-main-content">
      <section
        className="border-t border-[#c8cbb9]/80 px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="how-i-can-help-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <div className="max-w-2xl">
            <p className="text-[9px] uppercase tracking-[0.15em]">
              {homeHowICanHelp.title}
            </p>
            <h2
              id="how-i-can-help-heading"
              className="mt-3 font-serif text-[clamp(36px,8vw,56px)] leading-[1.02] tracking-[-1px]"
            >
              Choose counselling or specialist parenting support.
            </h2>
          </div>
          <div className="mt-6 grid items-center gap-8 lg:grid-cols-[minmax(240px,0.7fr)_minmax(0,1.3fr)]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[18px] sm:max-w-sm">
              <Image
                src="/images/laura-parentology-portrait.webp"
                alt="Laura Thomas"
                fill
                className="object-cover object-[50%_20%]"
                sizes="(max-width: 1024px) 100vw, 360px"
              />
            </div>
            <div className="max-w-2xl space-y-4 text-[15px] leading-relaxed">
              {homeHowICanHelp.intro.map((paragraph) => (
                <p key={paragraph.slice(0, 32)}>{paragraph}</p>
              ))}
              <p>{homeIntroBlocks[6]}</p>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-[10px] uppercase tracking-[0.16em]">Counselling</p>
            <h3 className="mt-2 font-serif text-[clamp(32px,5vw,44px)] leading-none tracking-[-0.6px]">
              A space for you.
            </h3>
            <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {counsellingOptions.map((option) => (
                <article key={option.href}>
                  <div className="relative mb-4 aspect-[16/10] overflow-hidden rounded-[14px]">
                    <Image
                      src={option.image}
                      alt={option.alt}
                      fill
                      className={`object-cover ${option.position}`}
                      sizes="(max-width: 1024px) 100vw, 380px"
                    />
                  </div>
                  <h4 className="font-serif text-2xl tracking-[-0.3px]">
                    {option.title}
                  </h4>
                  <p className="mt-2 text-[15px] leading-relaxed">{option.body}</p>
                  <HomeCtaSecondary href={option.href} className="mt-3" showArrow>
                    Find out more
                  </HomeCtaSecondary>
                </article>
              ))}
            </div>
            <HomeCtaPrimary href={counsellingHref} className="mt-6">
              Explore counselling
            </HomeCtaPrimary>
          </div>
        </div>
      </section>

      <section
        className="relative bg-[var(--color-clay)] px-[19px] py-14 md:px-10 lg:px-[65px]"
        data-world="parentology"
        aria-labelledby="parentology-home-heading"
      >
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[var(--color-cream)] to-transparent"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-[var(--content-max)]">
          <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-terracotta)]">
            Specialist parenting support
          </p>
          <Image
            src="/images/parentology/parentology-logo.webp"
            alt="Parentology World"
            width={1075}
            height={718}
            className="mt-4 h-32 w-auto max-w-full object-contain object-left"
            style={{ width: "auto", height: "8rem" }}
          />
          <h2
            id="parentology-home-heading"
            className="mt-5 max-w-3xl font-serif text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.6px]"
          >
            {homeParentologyWorld.headline}
          </h2>
          <p className="mt-3 font-serif text-[clamp(22px,3vw,30px)] leading-snug">
            {homeParentologyWorld.subline}
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
            {homeParentologyWorld.body} {homeParentologyWorld.detail}
          </p>

          <div className="mt-10 grid items-start gap-8 lg:grid-cols-[minmax(240px,0.38fr)_minmax(0,1fr)]">
            <div className="relative aspect-[4/5] max-w-sm overflow-hidden rounded-[14px]">
              <Image
                src="/images/family.webp"
                alt="A parent and teenager talking together at a kitchen table"
                fill
                className="object-cover object-[52%_30%]"
                sizes="(max-width: 1024px) 100vw, 320px"
              />
            </div>
            <div>
              <h3 className="font-serif text-2xl tracking-[-0.3px]">
                Ways to begin
              </h3>
              <ul className="mt-4 grid gap-3">
                {parentologyInsights.map(({ icon: Icon, label, insight, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="flex gap-3 rounded-2xl bg-[var(--color-cream)]/80 px-4 py-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--color-clay)] text-[var(--color-terracotta)]">
                        <Icon aria-hidden size={18} strokeWidth={1.6} />
                      </span>
                      <span>
                        <span className="block font-medium">{label}</span>
                        <span className="mt-1 block text-[15px] leading-snug">
                          {insight}
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <HomeCtaPrimary href={parentologyHref} className="mt-8">
            Explore Parentology
          </HomeCtaPrimary>
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
            <ul className="mt-8 max-w-xl space-y-3 text-[15px] leading-relaxed">
              {homeOverwhelm.bullets.map((point) => (
                <li key={point} className="flex gap-3">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-forest)]"
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
            <h3 className="mt-10 font-serif text-[clamp(28px,7vw,40px)] leading-[1.05] tracking-[-0.5px]">
              {homeOverwhelm.subheading}
            </h3>
            <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
              {homeOverwhelm.body}
            </p>
            <HomeCtaPrimary href={contactHref} className="mt-6">
              Book a free call
            </HomeCtaPrimary>
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
            <p className="text-[9px] uppercase tracking-[0.15em]">Location</p>
            <h2
              id="location-heading"
              className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
            >
              Wixams, Bedford
            </h2>
            <div className="mt-5 max-w-2xl space-y-4 text-[15px] leading-relaxed">
              {homeLocation.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
            <HomeCtaPrimary href={contactHref} className="mt-6">
              Book a free call
            </HomeCtaPrimary>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[18px]">
            <Image
              src="/images/room.webp"
              alt="A warm, quiet counselling room with a chair by the window"
              fill
              className="object-cover object-[70%_55%]"
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
          <p className="text-[9px] uppercase tracking-[0.15em]">
            Frequently asked questions
          </p>
          <h2
            id="faq-teaser-heading"
            className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            FAQ
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">{homeFaq.intro}</p>
          <ul className="mt-6 max-w-xl space-y-2 text-[15px] leading-relaxed">
            {homeFaq.samples.map((question) => (
              <li key={question}>{question}</li>
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
          <p className="text-[9px] uppercase tracking-[0.15em]">Books</p>
          <h2
            id="books-heading"
            className="mt-4 max-w-3xl font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            {homeBooks.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">{homeBooks.intro}</p>
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
        <div className="mx-auto grid max-w-[var(--content-max)] gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(260px,0.95fr)] lg:items-center">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
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
            <HomeCtaPrimary href={contactHref} tone="onDark" className="shrink-0 self-start sm:self-center">
              Book a free call
            </HomeCtaPrimary>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-[14px]">
            <Image
              src="/images/laura-headphones.webp"
              alt="Laura Thomas"
              fill
              className="object-cover object-[70%_40%]"
              sizes="(max-width: 1024px) 100vw, 480px"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
