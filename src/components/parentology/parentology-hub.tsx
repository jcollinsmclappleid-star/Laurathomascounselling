import Image from "next/image";
import Link from "next/link";
import { HomeCtaPrimary, HomeCtaSecondary } from "@/components/home/home-cta";
import { ClickToLoadVideo } from "@/components/parentology/click-to-load-video";
import {
  BookPair,
  EnquiryPanel,
  NamedExternalLink,
  ParentologyBreadcrumb,
  ParentologyIdentity,
  ParentologyMain,
  proseBody,
  proseHeading,
} from "@/components/parentology/parentology-frame";
import { parentingSectionLinks } from "@/lib/parentology-nav";

const needs = [
  {
    href: parentingSectionLinks.support,
    title: "Support for you",
    body: "Explore parent coaching, counselling and focused conversations about your family.",
  },
  {
    href: parentingSectionLinks.inTouch,
    title: "Ongoing guidance",
    body: "Discover In-Touch, my messaging-led parent support, and see how it works.",
  },
  {
    href: parentingSectionLinks.tools,
    title: "Understanding and tools",
    body: "Explore RESET, my books, learning resources and workshops.",
  },
] as const;

export function ParentologyHub() {
  return (
    <article>
      <ParentologyMain>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center">
          <div>
            <ParentologyBreadcrumb items={[{ label: "Parenting & teenagers" }]} />
            <ParentologyIdentity />
            <h1 className="mt-6 max-w-[18ch] font-serif text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.8px]">
              Support for you. Understanding for your teenager.
            </h1>
            <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.55]">
              Parenting a teenager can leave you carrying questions you never
              expected. Explore practical guidance, space for yourself and a
              clearer route into support.
            </p>
            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap">
              <HomeCtaPrimary href={parentingSectionLinks.support}>
                Explore support for you
              </HomeCtaPrimary>
              <HomeCtaSecondary href={parentingSectionLinks.tools}>
                Practical tools
              </HomeCtaSecondary>
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

        <section aria-labelledby="arrive-heading" className="mt-12">
          <h2 id="arrive-heading" className={proseHeading}>
            You do not have to arrive with the answer
          </h2>
          <p className={proseBody}>
            Perhaps everyday conversations have become difficult. Perhaps
            school, emotions or family relationships are taking up more of your
            thoughts than you can comfortably manage. You may want help with a
            particular situation, or simply somewhere to begin.
          </p>
          <p className={proseBody}>
            This part of my counselling website brings my parenting work
            together in one place. You can understand the different ways I
            work, get to know Parentology and choose what feels relevant to
            your family.
          </p>
        </section>

        <section aria-labelledby="needs-heading" className="mt-12">
          <h2 id="needs-heading" className={proseHeading}>
            Start with what you need
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {needs.map((need) => (
              <Link
                key={need.href}
                href={need.href}
                className="flex min-h-11 flex-col rounded-[18px] bg-[var(--color-clay)] p-5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
              >
                <h3 className="font-serif text-[26px] leading-tight">{need.title}</h3>
                <p className="mt-3 text-[17px] leading-[1.55]">{need.body}</p>
              </Link>
            ))}
          </div>
          <p className={proseBody}>
            <Link
              href={parentingSectionLinks.youngPeople}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4 hover:decoration-[var(--color-forest)]"
            >
              Looking for counselling for your teenager?
            </Link>{" "}
            That is a separate pathway from parent coaching.
          </p>
        </section>

        <section aria-labelledby="one-person-heading" className="mt-12">
          <h2 id="one-person-heading" className={proseHeading}>
            One person behind both parts of the work
          </h2>
          <p className={proseBody}>
            I am Laura Thomas, a psychotherapist, parenting coach and author.
            Parentology is the part of my work focused on supporting parents
            through the teenage years. Bringing it into this website makes the
            relationship between parenting support and counselling easier to
            understand, while keeping their different purposes clear.
          </p>
          <div className="mt-6">
            <ClickToLoadVideo
              providerId="YJPXSzILdv4"
              title="Welcome to Parentology"
              posterSrc="/images/parentology/welcome-video-poster.jpg"
            />
          </div>
        </section>

        <section
          aria-labelledby="different-jobs-heading"
          className="mt-12 rounded-[18px] bg-[var(--color-sage)] p-5 md:p-7"
        >
          <h2 id="different-jobs-heading" className="font-serif text-[26px] leading-tight">
            Different pages, different jobs
          </h2>
          <p className="mt-3 max-w-[68ch] text-[15px] leading-relaxed">
            This section is parent guidance: how to choose support, In-Touch,
            RESET, books and learning. It does not replace the existing
            counselling pages, and it does not repeat them.
          </p>
          <ul className="mt-4 space-y-3 text-[15px] leading-snug">
            <li>
              <Link
                href={parentingSectionLinks.familySupport}
                className="inline-flex min-h-11 items-center underline decoration-[var(--color-forest)]/40 underline-offset-4"
              >
                Parenting and Family Support
              </Link>
              <span className="block text-[13px]">
                Existing counselling page, kept at its own address.
              </span>
            </li>
            <li>
              <Link
                href={parentingSectionLinks.parentingTeens}
                className="inline-flex min-h-11 items-center underline decoration-[var(--color-forest)]/40 underline-offset-4"
              >
                Parenting Teens
              </Link>
              <span className="block text-[13px]">
                Existing counselling page, kept at its own address.
              </span>
            </li>
          </ul>
        </section>

        <section aria-labelledby="approach-heading" className="mt-12">
          <h2 id="approach-heading" className={proseHeading}>
            Get to know my approach
          </h2>
          <p className={proseBody}>
            Watch the introduction above,{" "}
            <Link
              href={parentingSectionLinks.reset}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              read about RESET
            </Link>{" "}
            or explore my two parenting books. You can start with information
            before deciding whether you would like to talk.
          </p>
          <BookPair />
          <p className={proseBody}>
            Parentology World remains a connected part of my work, including
            its existing workshop and resource-access journeys. Where a next
            step opens that website, it is labelled.
          </p>
          <div className="mt-6">
            <NamedExternalLink href="https://www.parentologyworld.com/">
              Visit Parentology World
            </NamedExternalLink>
          </div>
        </section>

        <EnquiryPanel />
      </ParentologyMain>
    </article>
  );
}
