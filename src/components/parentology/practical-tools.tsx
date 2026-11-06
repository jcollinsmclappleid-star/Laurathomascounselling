import Link from "next/link";
import {
  EnquiryPanel,
  ParentologyBreadcrumb,
  ParentologyIdentity,
  ParentologyMain,
  proseBody,
  proseHeading,
} from "@/components/parentology/parentology-frame";
import { ToolCatalogue } from "@/components/parentology/tool-catalogue";
import { parentingSectionLinks } from "@/lib/parentology-nav";
import { parentologyTools } from "@/lib/parentology-tools";

export function PracticalTools() {
  return (
    <article>
      <ParentologyMain>
        <ParentologyBreadcrumb
          items={[
            { label: "Parenting & teenagers", href: parentingSectionLinks.home },
            { label: "Practical tools" },
          ]}
        />
        <ParentologyIdentity />
        <h1 className="mt-6 max-w-[16ch] font-serif text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.8px]">
          Something useful for the moment you are in
        </h1>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.55]">
          You may want something to read, a conversation to watch or a resource
          to return to later. Start with the question on your mind, then choose
          a format that suits you.
        </p>

        <section aria-labelledby="start-heading" className="mt-12">
          <h2 id="start-heading" className={proseHeading}>
            Find your starting point
          </h2>
          <p className={proseBody}>
            Browse resources around communication, emotional overwhelm,
            confidence, school experiences and the teenage years. These
            groupings help you find relevant material without needing to know
            the name of a particular guide.
          </p>
          <p className={proseBody}>
            Some items may be freely available; others may require sign-up,
            membership or purchase. The label beside each item says what is
            known. Where access is not confirmed, the card says so before you
            leave this page. Files from a member area are not copied onto this
            site.
          </p>
        </section>

        <section aria-labelledby="catalogue-heading" className="mt-12">
          <h2 id="catalogue-heading" className={proseHeading}>
            Browse practical tools
          </h2>
          <div className="mt-6">
            <ToolCatalogue items={parentologyTools} />
          </div>
        </section>

        <section aria-labelledby="books-note" className="mt-12">
          <h2 id="books-note" className={proseHeading}>
            Read
          </h2>
          <p className={proseBody}>
            Explore Parenting Unstoppable Girls and Parenting Teen Boys with
            Confidence. Book pages bring the publication information together.
            Topic links reflect relevant themes; they do not claim to reproduce
            a chapter or replace reading the book.
          </p>
          <p className={proseBody}>
            <Link
              href={parentingSectionLinks.books}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              Explore the books
            </Link>
            . Workshops are explained on{" "}
            <Link
              href={parentingSectionLinks.workshops}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              Learn at your pace
            </Link>
            .{" "}
            <Link
              href={parentingSectionLinks.reset}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              RESET
            </Link>{" "}
            is the framework behind much of this material.
          </p>
        </section>

        <section aria-labelledby="not-enough" className="mt-12">
          <h2 id="not-enough" className={proseHeading}>
            When a resource is not enough
          </h2>
          <p className={proseBody}>
            If you would rather discuss what is happening in your own family,{" "}
            <Link
              href={parentingSectionLinks.support}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              explore parent support
            </Link>{" "}
            or make an enquiry. You can return to the tools alongside suitable
            support, rather than having to work everything out from a download.
          </p>
        </section>

        <EnquiryPanel
          heading="Talk it through"
          body="A resource is not a counselling relationship. If you want to discuss your own family, contact Laura. This page does not take payment or open a member account."
        />
      </ParentologyMain>
    </article>
  );
}
