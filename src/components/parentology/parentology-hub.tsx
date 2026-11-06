import Image from "next/image";
import Link from "next/link";
import { HomeCtaPrimary } from "@/components/home/home-cta";
import { hrefFromRegistry } from "@/lib/routes";

const booksHref = hrefFromRegistry("/books/");
const youngPeopleHref = hrefFromRegistry("/counselling-for-young-people/");
const familySupportHref = hrefFromRegistry("/parenting-and-family-support/");
const parentingTeensHref = hrefFromRegistry("/parenting-teens/");

const needs = [
  {
    id: "support-for-you",
    title: "Support for you",
    body: "Explore parent coaching, counselling and focused conversations about your family.",
  },
  {
    id: "ongoing-guidance",
    title: "Ongoing guidance",
    body: "Discover In-Touch, my messaging-led parent support, and see how it works.",
  },
  {
    id: "understanding-and-tools",
    title: "Understanding and tools",
    body: "Explore RESET, my books, learning resources and workshops. If you are looking for therapy for your teenager, there is a separate young-person counselling pathway.",
  },
] as const;

export function ParentologyHub() {
  return (
    <article className="bg-[var(--color-cream)] text-[var(--color-forest)]">
      <header className="border-b border-[#c8cbb9]/80 px-[19px] py-10 md:px-10 md:py-14 lg:px-[65px]">
        <div className="mx-auto grid max-w-[var(--content-max)] gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center">
          <div>
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
                <li aria-hidden="true">/</li>
                <li aria-current="page">Parenting &amp; teenagers</li>
              </ol>
            </nav>
            <div className="mt-4 flex flex-wrap items-end gap-4">
              <Image
                src="/images/parentology/parentology-logo.webp"
                alt="Parentology"
                width={1075}
                height={718}
                className="h-auto w-[min(220px,70%)] object-contain object-left"
              />
              <p className="pb-1 text-sm leading-snug">with Laura Thomas</p>
            </div>
            <h1 className="mt-6 max-w-[18ch] font-serif text-[clamp(32px,5vw,52px)] leading-[1.02] tracking-[-0.8px]">
              Support for you. Understanding for your teenager.
            </h1>
            <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.55]">
              Parenting a teenager can leave you carrying questions you never
              expected. Explore practical guidance, space for yourself and a
              clearer route into support.
            </p>
            <div className="mt-6">
              <HomeCtaPrimary href="#support-for-you">
                Explore support for you
              </HomeCtaPrimary>
            </div>
          </div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-[18px] bg-[var(--color-sage)] lg:aspect-[4/5]">
            <Image
              src="/images/laura-doorway-about.webp"
              alt="Laura Thomas at the entrance to her counselling space"
              fill
              className="object-cover object-[50%_18%]"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-[var(--content-max)] px-[19px] py-12 md:px-10 lg:px-[65px]">
        <section aria-labelledby="arrive-heading" className="max-w-[68ch]">
          <h2
            id="arrive-heading"
            className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-[-0.4px]"
          >
            You do not have to arrive with the answer
          </h2>
          <p className="mt-4 text-[17px] leading-[1.55]">
            Perhaps everyday conversations have become difficult. Perhaps
            school, emotions or family relationships are taking up more of your
            thoughts than you can comfortably manage. You may want help with a
            particular situation, or simply somewhere to begin.
          </p>
          <p className="mt-4 text-[17px] leading-[1.55]">
            This part of my counselling website brings my parenting work
            together in one place. You can understand the different ways I
            work, get to know Parentology and choose what feels relevant to
            your family.
          </p>
        </section>

        <section aria-labelledby="needs-heading" className="mt-12">
          <h2
            id="needs-heading"
            className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-[-0.4px]"
          >
            Start with what you need
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {needs.map((need) => (
              <section
                key={need.id}
                id={need.id}
                aria-labelledby={`${need.id}-heading`}
                className="scroll-mt-24 rounded-[18px] bg-[var(--color-clay)] p-5"
              >
                <h3
                  id={`${need.id}-heading`}
                  className="font-serif text-[26px] leading-tight tracking-[-0.3px]"
                >
                  {need.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.55]">{need.body}</p>
              </section>
            ))}
          </div>
          <p className="mt-4 max-w-[68ch] text-[17px] leading-[1.55]">
            <Link
              href={youngPeopleHref}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4 hover:decoration-[var(--color-forest)]"
            >
              Looking for counselling for your teenager?
            </Link>{" "}
            That is a separate pathway from parent coaching.
          </p>
        </section>

        <section
          aria-labelledby="one-person-heading"
          className="mt-12 grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(240px,0.7fr)] lg:items-start"
        >
          <div className="max-w-[68ch]">
            <h2
              id="one-person-heading"
              className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-[-0.4px]"
            >
              One person behind both parts of the work
            </h2>
            <p className="mt-4 text-[17px] leading-[1.55]">
              I am Laura Thomas, a psychotherapist, parenting coach and author.
              Parentology is the part of my work focused on supporting parents
              through the teenage years. Bringing it into this website makes
              the relationship between parenting support and counselling easier
              to understand, while keeping their different purposes clear.
            </p>
          </div>
          <aside className="rounded-[18px] bg-[var(--color-sage)] p-5">
            <h2 className="font-serif text-[26px] leading-tight">
              Different pages, different jobs
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed">
              This section is parent guidance: how to choose support, In-Touch,
              RESET, books and learning. It does not replace the existing
              counselling pages, and it does not repeat them.
            </p>
            <ul className="mt-4 space-y-3 text-[15px] leading-snug">
              <li>
                <Link
                  href={familySupportHref}
                  className="inline-flex min-h-11 items-center underline decoration-[var(--color-forest)]/40 underline-offset-4 hover:decoration-[var(--color-forest)]"
                >
                  Parenting and Family Support
                </Link>
                <span className="mt-1 block text-[13px] leading-snug">
                  Existing counselling page, kept at its own address.
                </span>
              </li>
              <li>
                <Link
                  href={parentingTeensHref}
                  className="inline-flex min-h-11 items-center underline decoration-[var(--color-forest)]/40 underline-offset-4 hover:decoration-[var(--color-forest)]"
                >
                  Parenting Teens
                </Link>
                <span className="mt-1 block text-[13px] leading-snug">
                  Existing counselling page, kept at its own address.
                </span>
              </li>
            </ul>
          </aside>
        </section>

        <section aria-labelledby="approach-heading" className="mt-12 max-w-[68ch]">
          <h2
            id="approach-heading"
            className="font-serif text-[clamp(28px,4vw,40px)] leading-tight tracking-[-0.4px]"
          >
            Get to know my approach
          </h2>
          <p className="mt-4 text-[17px] leading-[1.55]">
            <Link
              href="/#laura-introduction"
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4 hover:decoration-[var(--color-forest)]"
            >
              Watch my introduction
            </Link>
            , read about RESET or{" "}
            <Link
              href={booksHref}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4 hover:decoration-[var(--color-forest)]"
            >
              explore my two parenting books
            </Link>
            . You can start with information before deciding whether you would
            like to talk.
          </p>
          <p className="mt-4 text-[17px] leading-[1.55]">
            Parentology World remains a connected part of my work, including
            its existing workshop and resource-access journeys. Where a next
            step opens that website, it is labelled.
          </p>
          <div className="mt-6 flex flex-col items-start gap-2">
            <a
              href="https://www.parentologyworld.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-[var(--color-forest)]/35 px-6 py-3 text-sm font-medium text-[var(--color-forest)] transition hover:border-[var(--color-forest)] hover:bg-[var(--soft-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
            >
              Visit Parentology World
              <span className="sr-only">
                {" "}
                (opens parentologyworld.com in a new tab)
              </span>
            </a>
            <p className="text-sm leading-relaxed">
              Opens parentologyworld.com in a new tab. Workshop and resource
              access stay on that site.
            </p>
          </div>
        </section>
      </div>
    </article>
  );
}
