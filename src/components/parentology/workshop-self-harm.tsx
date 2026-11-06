import Link from "next/link";
import {
  NamedExternalLink,
  ParentologyBreadcrumb,
  ParentologyIdentity,
  ParentologyMain,
  proseBody,
  proseHeading,
} from "@/components/parentology/parentology-frame";
import { parentingSectionLinks } from "@/lib/parentology-nav";

export function WorkshopSelfHarm() {
  return (
    <article>
      <ParentologyMain>
        <ParentologyBreadcrumb
          items={[
            { label: "Parenting & teenagers", href: parentingSectionLinks.home },
            { label: "Learn at your pace", href: parentingSectionLinks.workshops },
            { label: "Understanding self-harm" },
          ]}
        />
        <ParentologyIdentity />
        <p className="mt-6 text-[11px] uppercase tracking-[0.16em]">
          Educational workshop · Paid
        </p>
        <h1 className="mt-3 max-w-[18ch] font-serif text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.8px]">
          Understanding self-harm: a workshop for parents
        </h1>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.55]">
          An educational workshop for parents who want to understand the
          subject of self-harm and the scope of the support material Laura has
          created.
        </p>

        <section
          aria-labelledby="scope-heading"
          className="mt-10 rounded-[18px] bg-[var(--color-sage)] p-5 md:p-7"
        >
          <h2 id="scope-heading" className={proseHeading}>
            Understand the scope first
          </h2>
          <p className={proseBody}>
            This is the existing Self-Harm and Suicide Awareness Workshop. The
            purpose of this page is to explain the resource clearly and help
            you decide whether to read its full product information. It is not
            a screening tool or a personal assessment.
          </p>
          <p className={proseBody}>
            A recording cannot assess a young person’s circumstances or provide
            an emergency response. Viewing or purchasing it does not arrange
            clinical care.
          </p>
        </section>

        <section aria-labelledby="who-heading" className="mt-12">
          <h2 id="who-heading" className={proseHeading}>
            Who this is for
          </h2>
          <p className={proseBody}>
            Parents who want an educational introduction to the subject, and
            who will read the product information before deciding. If your
            enquiry is about counselling for a young person or support for you
            as a parent, use the relevant service page.
          </p>
          <ul className="mt-4 space-y-2 text-[17px] leading-[1.55]">
            <li>
              <Link
                href={parentingSectionLinks.youngPeople}
                className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
              >
                Counselling for young people
              </Link>
            </li>
            <li>
              <Link
                href={parentingSectionLinks.support}
                className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
              >
                Support for you
              </Link>
            </li>
          </ul>
        </section>

        <section aria-labelledby="format-heading" className="mt-12">
          <h2 id="format-heading" className={proseHeading}>
            Format and materials
          </h2>
          <p className={proseBody}>
            The existing product brings together workshop material and a
            printable supporting toolkit. Read the product information to
            understand the recording, included files and access arrangements
            before making a purchase. Runtime and file lists are not repeated
            here until they are confirmed.
          </p>
        </section>

        <section aria-labelledby="access-heading" className="mt-12">
          <h2 id="access-heading" className={proseHeading}>
            Access through Parentology
          </h2>
          <p className={proseBody}>
            The workshop is supplied through the existing Parentology product
            journey. The next link opens that website, where you can check
            current product details and terms. There is no new checkout or
            member area on this page. The price is not published here until
            Laura confirms it.
          </p>
          <p className={proseBody}>
            Related books and parent guidance can sit alongside this workshop
            as further information. They are not a promise of prevention or an
            outcome for an individual family. Return to{" "}
            <Link
              href={parentingSectionLinks.workshops}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              Learn at your pace
            </Link>{" "}
            for the other workshop.
          </p>
          <div className="mt-6">
            <NamedExternalLink href="https://www.parentologyworld.com/overwhelmreset/p/self-harm-and-suicide-awareness-workshop">
              Read the Parentology workshop details
            </NamedExternalLink>
          </div>
        </section>
      </ParentologyMain>
    </article>
  );
}
