import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { hrefFromRegistry } from "@/lib/routes";

const aboutHref = hrefFromRegistry("/qualified-counsellor/");
const counsellingHref = hrefFromRegistry("/services/");
const parentologyHref = hrefFromRegistry("/parentology/");
const booksHref = hrefFromRegistry("/books/");
const girlsBookHref = hrefFromRegistry("/books/parenting-unstoppable-girls/");
const boysBookHref = hrefFromRegistry(
  "/books/parenting-teen-boys-with-confidence/",
);
const contactHref = hrefFromRegistry("/contact-me/");

function RoutePanel({
  href,
  imageSrc,
  imageAlt,
  imagePosition,
  kicker,
  title,
  description,
  cta,
  variant,
}: {
  href: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
  kicker: string;
  title: string;
  description: string;
  cta: string;
  variant: "counselling" | "parentology";
}) {
  return (
    <Link
      href={href}
      className="group relative block min-h-[200px] overflow-hidden text-[#fff8ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)] sm:min-h-[240px]"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={`object-cover ${imagePosition} transition duration-700 group-hover:scale-[1.02] group-active:scale-[0.99]`}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div
        className={
          variant === "parentology"
            ? "absolute inset-0 bg-gradient-to-r from-[#72372cd9] to-[#72372c18]"
            : "absolute inset-0 bg-gradient-to-r from-[#123b32c7] to-[#123b3218]"
        }
        aria-hidden="true"
      />
      <div className="relative z-[1] flex h-full min-h-[200px] flex-col justify-between p-5 sm:min-h-[240px] sm:p-7">
        <div>
          <p className="text-[9px] uppercase tracking-[0.15em]">{kicker}</p>
          <h2 className="mt-2 font-serif text-[clamp(32px,8vw,52px)] leading-none tracking-[-0.6px]">
            {title}
          </h2>
          <p className="mt-2 max-w-md text-sm leading-snug">{description}</p>
        </div>
        <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.12em] backdrop-blur-sm transition group-hover:bg-white/20 group-active:scale-[0.98]">
          {cta}
          <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
        </span>
      </div>
    </Link>
  );
}

export function HomeBelowFold() {
  return (
    <div className="bg-[var(--color-cream)]">
      <section
        className="border-t border-[#c8cbb9]/80 px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="meet-laura-heading"
      >
        <div className="mx-auto grid max-w-[var(--content-max)] gap-8 md:grid-cols-[minmax(0,0.85fr)_1fr] md:items-center md:gap-12">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden md:mx-0 md:max-w-none">
            <Image
              src="/images/laura.webp"
              alt="Laura Thomas, counsellor and parenting specialist"
              fill
              className="object-cover object-[50%_22%]"
              sizes="(max-width: 768px) 340px, 360px"
            />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.15em]">
              Meet Laura Thomas
            </p>
            <h2
              id="meet-laura-heading"
              className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
            >
              Counselling and parenting support in one connected practice.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed">
              Short placeholder — individual, couples and family counselling,
              with specialist Parentology guidance for parents and teenagers.
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
              M.Ed · MNCPS (Accred.)
            </p>
            <Link
              href={aboutHref}
              className="mt-6 inline-flex min-h-11 items-center gap-2 border border-[#7e8b72] px-5 py-3 text-sm transition hover:bg-[var(--soft-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)] active:scale-[0.99]"
            >
              About Laura Thomas
              <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
            </Link>
          </div>
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
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed">
            Short placeholder — two published books on raising teenage daughters
            and sons.
          </p>
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
              <Link
                href={girlsBookHref}
                className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm underline decoration-[#7e8b72] underline-offset-4"
              >
                View book details
                <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
              </Link>
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
              <Link
                href={boysBookHref}
                className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm underline decoration-[#7e8b72] underline-offset-4"
              >
                View book details
                <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
              </Link>
            </article>
          </div>
          <Link
            href={booksHref}
            className="mt-8 inline-flex min-h-11 items-center gap-2 border border-[#7e8b72] px-5 py-3 text-sm"
          >
            Explore all books
            <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
          </Link>
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
            <RoutePanel
              href={counsellingHref}
              imageSrc="/images/room.webp"
              imageAlt="Concept counselling interior"
              imagePosition="object-[65%_40%]"
              kicker="Counselling & therapeutic support"
              title="A space for you."
              description="Individual, couples, family and young-person counselling."
              cta="Explore counselling"
              variant="counselling"
            />
            <RoutePanel
              href={parentologyHref}
              imageSrc="/images/family.webp"
              imageAlt="Concept family photograph"
              imagePosition="object-[55%_35%]"
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
        className="border-t border-[#c8cbb9] bg-[var(--color-forest)] px-[19px] py-5 text-[#f4eddd] md:px-10 lg:px-[65px]"
        aria-label="Key information"
      >
        <div className="mx-auto flex max-w-[var(--content-max)] flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] uppercase tracking-[0.14em]">
            Wixams, Bedford &amp; online
          </p>
          <Link
            href={contactHref}
            className="inline-flex min-h-11 items-center gap-2 border border-[#e8dbc0]/80 px-5 py-3 text-sm transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff8e9] active:scale-[0.99]"
          >
            Start a conversation
            <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>
    </div>
  );
}
