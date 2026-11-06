import Image from "next/image";
import Link from "next/link";
import { HeartHandshake, User, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { HomeCtaPrimary, HomeCtaSecondary } from "@/components/home/home-cta";
import { HomeParentologySection } from "@/components/home/home-parentology-section";
import { HomeRoutePanel } from "@/components/home/home-route-panel";
import {
  homeFaq,
  homeHowICanHelp,
  homeLocation,
  homeOverwhelm,
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

function ServiceTitle({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) {
  return (
    <h3 className="flex items-start gap-3 font-serif text-[clamp(28px,6vw,36px)] leading-[1.05] tracking-[-0.5px]">
      <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#a3ad95]/90 bg-[var(--soft-surface)] text-[var(--color-forest)]">
        <Icon aria-hidden size={20} strokeWidth={1.5} />
      </span>
      <span>{title}</span>
    </h3>
  );
}

export function HomeBelowFold() {
  return (
    <div className="bg-[var(--color-cream)]" id="home-main-content">
      <section
        className="border-t border-[#c8cbb9]/80 px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="how-i-can-help-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <p className="text-[9px] uppercase tracking-[0.15em]">
            {homeHowICanHelp.title}
          </p>
          <h2
            id="how-i-can-help-heading"
            className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            {homeHowICanHelp.intro[0]}
          </h2>
          <div className="mt-4 max-w-2xl space-y-4 text-[15px] leading-relaxed">
            {homeHowICanHelp.intro.slice(1).map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-2 md:gap-10">
            <article className="border-t border-[#a3ad95] pt-6">
              <div className="relative mb-4 aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/counselling-space.webp"
                  alt="Laura Thomas's counselling room in Wixams"
                  fill
                  className="object-cover object-[50%_45%]"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <ServiceTitle
                icon={User}
                title={homeHowICanHelp.services.individual.title}
              />
              <p className="mt-3 text-[15px] leading-relaxed">
                {homeHowICanHelp.services.individual.body}
              </p>
              <HomeCtaSecondary
                href={individualHref}
                className="mt-4"
                showArrow
              >
                Find out more
              </HomeCtaSecondary>
            </article>
            <article className="border-t border-[#a3ad95] pt-6">
              <div className="relative mb-4 aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/couples-support.webp"
                  alt="Couple sitting together — couples and family counselling"
                  fill
                  className="object-cover object-[50%_40%]"
                  sizes="(max-width: 768px) 100vw, 320px"
                />
              </div>
              <ServiceTitle
                icon={Users}
                title={homeHowICanHelp.services.couplesFamily.title}
              />
              <p className="mt-3 text-[15px] leading-relaxed">
                {homeHowICanHelp.services.couplesFamily.body}
              </p>
              <HomeCtaSecondary
                href={couplesFamilyHref}
                className="mt-4"
                showArrow
              >
                Find out more
              </HomeCtaSecondary>
            </article>
          </div>
          <div className="mt-8 grid items-stretch gap-8 border-t border-[#c4a08e]/70 pt-8 lg:grid-cols-2 lg:gap-10">
            <article>
              <div className="relative mb-4 aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/teen-parent-support.webp"
                  alt="Laura Thomas — counselling for young people and parents"
                  fill
                  className="object-cover object-[50%_22%]"
                  sizes="(max-width: 1024px) 100vw, 480px"
                />
              </div>
              <ServiceTitle
                icon={HeartHandshake}
                title={homeHowICanHelp.services.teenParent.title}
              />
              <p className="mt-3 text-[15px] leading-relaxed">
                {homeHowICanHelp.services.teenParent.body}
              </p>
              <HomeCtaSecondary href={parentologyHref} className="mt-4" showArrow>
                Visit Parentology
              </HomeCtaSecondary>
            </article>
            <HomeParentologySection />
          </div>
          <HomeCtaSecondary href={counsellingHref} className="mt-8">
            Explore all counselling services
          </HomeCtaSecondary>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9]/80 bg-[var(--color-sage)] px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="overwhelm-heading"
      >
        <div className="mx-auto grid max-w-[var(--content-max)] gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.85fr)] lg:items-center">
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
          <div className="relative aspect-[4/3] overflow-hidden lg:aspect-[5/4]">
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
            <div className="mt-4 max-w-2xl space-y-4 text-[15px] leading-relaxed">
              {homeLocation.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <HomeCtaPrimary href={contactHref} className="mt-6">
              Book a free call
            </HomeCtaPrimary>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden">
            <Image
              src="/images/wixams-practice.webp"
              alt="Exterior of Laura Thomas Counselling in Wixams, near Bedford"
              fill
              className="object-cover object-[50%_45%]"
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
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
            {homeFaq.intro}
          </p>
          <ul className="mt-6 max-w-xl space-y-2 text-[15px] leading-relaxed text-[var(--text-muted)]">
            {homeFaq.samples.map((q) => (
              <li key={q}>{q}</li>
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
            className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            Parenting books for real family conversations.
          </h2>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <article className="flex flex-col">
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
            <article className="flex flex-col">
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
        className="border-t border-[#c8cbb9]/80 px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="routes-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <p className="text-[9px] uppercase tracking-[0.15em]">
            Two connected worlds
          </p>
          <h2
            id="routes-heading"
            className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            Choose counselling or Parentology support.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2">
            <HomeRoutePanel
              href={counsellingHref}
              imageSrc="/images/room.webp"
              imageAlt="A calm counselling room with an armchair by the window"
              imagePosition="object-[65%_40%]"
              kicker="Counselling & therapeutic support"
              title="A space for you."
              description="Individual, couples, family and young-person counselling."
              cta="Explore counselling"
              variant="counselling"
            />
            <HomeRoutePanel
              href={parentologyHref}
              imageSrc="/images/family.webp"
              imageAlt="A mother and daughter talking together at a kitchen table"
              imagePosition="object-[52%_30%]"
              kicker="Parentology · Parents & teenagers"
              title="Growing together."
              description="Specialist guidance for the changing years of family life."
              cta="Explore Parentology"
              variant="parentology"
            />
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9] bg-[var(--color-forest)] px-[19px] py-10 text-[#f4eddd] md:px-10 lg:px-[65px]"
        aria-labelledby="book-call-heading"
      >
        <div className="mx-auto flex max-w-[var(--content-max)] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.14em]">
              Wixams, Bedford &amp; online
            </p>
            <h2
              id="book-call-heading"
              className="mt-2 font-serif text-[clamp(32px,8vw,48px)] leading-[1.02] tracking-[-0.6px]"
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
    </div>
  );
}
