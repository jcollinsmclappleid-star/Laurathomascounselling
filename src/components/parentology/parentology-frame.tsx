import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { HomeCtaPrimary, HomeCtaSecondary } from "@/components/home/home-cta";
import { parentingSectionLinks } from "@/lib/parentology-nav";

export function ParentologyBreadcrumb({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-xs">
      <ol className="flex flex-wrap items-center gap-2">
        <li>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
          >
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.label} className="flex items-center gap-2">
            <span aria-hidden="true">/</span>
            {item.href ? (
              <Link
                href={item.href}
                className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="inline-flex min-h-11 items-center">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export function ParentologyIdentity() {
  return (
    <div className="mt-4 flex flex-wrap items-end gap-4">
      <Image
        src="/images/parentology/parentology-logo.webp"
        alt="Parentology"
        width={1075}
        height={718}
        className="h-auto w-[min(200px,68%)] object-contain object-left"
      />
      <p className="pb-1 text-sm leading-snug">with Laura Thomas</p>
    </div>
  );
}

export function NamedExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const host = new URL(href).hostname.replace(/^www\./, "");

  return (
    <div className="flex flex-col items-start gap-2">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--color-forest)]/35 px-6 py-3 text-sm font-medium text-[var(--color-forest)] transition hover:border-[var(--color-forest)] hover:bg-[var(--soft-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
      >
        {children}
        <span className="sr-only"> (opens {host} in a new tab)</span>
      </a>
      <p className="text-sm leading-relaxed">Opens {host} in a new tab.</p>
    </div>
  );
}

export function EnquiryPanel({
  heading = "An enquiry is a place to begin",
  body = "Tell me briefly what you would like help with. You do not need to send your family’s full story through a website form. We can discuss the next step before you decide.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section
      aria-labelledby="enquiry-heading"
      className="mt-12 rounded-[18px] bg-[var(--color-forest)] px-5 py-8 text-[#fff8e9] md:px-8"
    >
      <h2
        id="enquiry-heading"
        className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-[-0.4px]"
      >
        {heading}
      </h2>
      <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.55] text-[#fff8e9]/90">
        {body}
      </p>
      <div className="mt-6">
        <HomeCtaPrimary href={parentingSectionLinks.contact} tone="onDark">
          Contact
        </HomeCtaPrimary>
      </div>
    </section>
  );
}

export function RelatedOnThisSite({
  links,
}: {
  links: { href: string; label: string; note: string }[];
}) {
  return (
    <aside className="mt-12 rounded-[18px] bg-[var(--color-sage)] p-5">
      <h2 className="font-serif text-[26px] leading-tight">Related on this site</h2>
      <ul className="mt-4 space-y-3 text-[15px] leading-snug">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="inline-flex min-h-11 items-center underline decoration-[var(--color-forest)]/40 underline-offset-4 hover:decoration-[var(--color-forest)]"
            >
              {link.label}
            </Link>
            <span className="mt-1 block text-[13px] leading-snug">{link.note}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function BookPair() {
  const books = [
    {
      href: parentingSectionLinks.girls,
      src: "/images/book-girls.webp",
      title: "Parenting Unstoppable Girls",
      alt: "Cover: Parenting Unstoppable Girls",
    },
    {
      href: parentingSectionLinks.boys,
      src: "/images/book-boys.webp",
      title: "Parenting Teen Boys with Confidence",
      alt: "Cover: Parenting Teen Boys with Confidence",
    },
  ] as const;

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      {books.map((book) => (
        <article
          key={book.href}
          className="rounded-[18px] bg-[var(--color-cream)] p-4 shadow-[var(--shadow-soft)]"
        >
          <Link
            href={book.href}
            className="relative mx-auto block aspect-[2/3] w-full max-w-[160px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
          >
            <Image
              src={book.src}
              alt={book.alt}
              fill
              className="object-contain"
              sizes="160px"
            />
          </Link>
          <h3 className="mt-4 font-serif text-2xl leading-tight">{book.title}</h3>
          <HomeCtaSecondary href={book.href} className="mt-3">
            View book details
          </HomeCtaSecondary>
        </article>
      ))}
    </div>
  );
}

export function ParentologyMain({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto max-w-[var(--content-max)] px-[19px] py-10 md:px-10 md:py-14 lg:px-[65px]">
      {children}
    </div>
  );
}

export const proseHeading =
  "font-serif text-[clamp(26px,4vw,36px)] leading-tight tracking-[-0.4px]";

export const proseBody = "mt-4 max-w-[68ch] text-[17px] leading-[1.55]";
