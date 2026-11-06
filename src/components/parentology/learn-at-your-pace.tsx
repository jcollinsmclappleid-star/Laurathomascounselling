import Link from "next/link";
import {
  EnquiryPanel,
  ParentologyBreadcrumb,
  ParentologyIdentity,
  ParentologyMain,
  proseBody,
  proseHeading,
} from "@/components/parentology/parentology-frame";
import { parentingSectionLinks } from "@/lib/parentology-nav";

const workshops = [
  {
    href: parentingSectionLinks.overwhelm,
    title: "When parenting feels too much",
    format: "Recorded workshop",
    access: "Paid. Price confirmed on Parentology World.",
    body: "Discover the Parent Overwhelm Reset, a recorded workshop with accompanying material.",
  },
  {
    href: parentingSectionLinks.selfHarm,
    title: "Understanding self-harm",
    format: "Educational workshop",
    access: "Paid. Price confirmed on Parentology World.",
    body: "Explore an educational awareness workshop for parents, with a supporting toolkit.",
  },
] as const;

export function LearnAtYourPace() {
  return (
    <article>
      <ParentologyMain>
        <ParentologyBreadcrumb
          items={[
            { label: "Parenting & teenagers", href: parentingSectionLinks.home },
            { label: "Learn at your pace" },
          ]}
        />
        <ParentologyIdentity />
        <h1 className="mt-6 max-w-[16ch] font-serif text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.8px]">
          Make room to understand, in your own time
        </h1>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.55]">
          A workshop can give you a focused introduction to a subject you want
          to understand better, with space to watch and reflect at a time that
          works for you.
        </p>

        <section aria-labelledby="choose-heading" className="mt-12">
          <h2 id="choose-heading" className={proseHeading}>
            Choose the subject that matters now
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            {workshops.map((workshop) => (
              <article
                key={workshop.href}
                className="flex flex-col rounded-[18px] bg-[var(--color-clay)] p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.14em]">
                  {workshop.format}
                </p>
                <h3 className="mt-2 font-serif text-[28px] leading-tight">
                  {workshop.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.55]">{workshop.body}</p>
                <p className="mt-3 text-sm leading-relaxed">{workshop.access}</p>
                <Link
                  href={workshop.href}
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-medium underline decoration-[var(--color-forest)]/40 underline-offset-4"
                >
                  Read the workshop details
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="detail-heading" className="mt-12">
          <h2 id="detail-heading" className={proseHeading}>
            See the detail before you decide
          </h2>
          <p className={proseBody}>
            Workshop cards identify the subject, format and access type. Open a
            detail page to understand the intended audience and included
            materials before continuing to a purchase or access destination.
          </p>
          <p className={proseBody}>
            A paid workshop is different from a free replay or a commissioned
            talk. Those formats are labelled separately so you can choose
            deliberately. Prices are not repeated here until Laura confirms
            them.
          </p>
        </section>

        <section aria-labelledby="connected-heading" className="mt-12">
          <h2 id="connected-heading" className={proseHeading}>
            Learning connected to Laura’s work
          </h2>
          <p className={proseBody}>
            These workshops sit alongside my{" "}
            <Link
              href={parentingSectionLinks.support}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              parenting support
            </Link>
            ,{" "}
            <Link
              href={parentingSectionLinks.reset}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              RESET introduction
            </Link>{" "}
            and published books. They provide educational material; they do not
            establish a counselling relationship or provide an individual
            assessment.
          </p>
          <p className={proseBody}>
            Schools and parent groups can enquire about a talk or workshop.
            That is a separate conversation about audience, subject and format,
            rather than a place in an on-demand product.{" "}
            <Link
              href={parentingSectionLinks.contact}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              Contact Laura
            </Link>{" "}
            to ask.
          </p>
        </section>

        <EnquiryPanel
          heading="Access through Parentology"
          body="Where an existing Parentology product supplies the recording and materials, purchase and access continue through that service. Each workshop page names that link. This site does not take payment."
        />
      </ParentologyMain>
    </article>
  );
}
