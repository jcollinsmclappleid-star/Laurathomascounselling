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

const steps = [
  {
    title: "Discuss suitability",
    body: "We start by discussing your family situation and whether this way of working is suitable.",
  },
  {
    title: "Agree contact and boundaries",
    body: "The agreed arrangement sets out how contact works, what is included and when replies are available.",
  },
  {
    title: "Use the agreed guidance",
    body: "Voice or text messages provide a way to bring a situation into the conversation. Guidance relates to the context you share.",
  },
] as const;

export function OngoingGuidance() {
  return (
    <article>
      <ParentologyMain>
        <ParentologyBreadcrumb
          items={[
            { label: "Parenting & teenagers", href: parentingSectionLinks.home },
            { label: "In-Touch" },
          ]}
        />
        <ParentologyIdentity />
        <p className="mt-6 text-[11px] uppercase tracking-[0.16em]">
          For parents · Messaging-led guidance
        </p>
        <h1 className="mt-3 max-w-[16ch] font-serif text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.8px]">
          A continuing connection through In-Touch
        </h1>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.55]">
          In-Touch is my messaging-led support for parents who want a
          continuing conversation about the situations arising in family life.
        </p>

        <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(240px,0.8fr)]">
          <section aria-labelledby="when-heading">
            <h2 id="when-heading" className={proseHeading}>
              When another question comes up
            </h2>
            <p className={proseBody}>
              A difficult conversation does not always happen just before an
              appointment. You might want to reflect on what happened, think
              through a response or return to something we have already
              discussed. In-Touch is designed around that need for continuing
              parent guidance.
            </p>
          </section>
          <aside className="rounded-[18px] border border-[#173e35]/15 bg-[var(--color-cream)] p-5">
            <h2 className="font-serif text-[26px] leading-tight">What is confirmed</h2>
            <dl className="mt-4 space-y-3 text-[15px] leading-snug">
              <div>
                <dt className="font-medium">Format</dt>
                <dd>Messaging-led parent guidance. Not an automated advice tool.</dd>
              </div>
              <div>
                <dt className="font-medium">Availability</dt>
                <dd>
                  Working days, response windows and any session allowance are
                  agreed before support begins. This is not an emergency or
                  continuously monitored service.
                </dd>
              </div>
              <div>
                <dt className="font-medium">Price</dt>
                <dd>Not shown here until Laura confirms the current terms.</dd>
              </div>
            </dl>
          </aside>
        </div>

        <section aria-labelledby="how-heading" className="mt-12">
          <h2 id="how-heading" className={proseHeading}>
            How the arrangement works
          </h2>
          <ol className="mt-6 grid gap-4 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="rounded-[18px] bg-[var(--color-clay)] p-5"
              >
                <p className="font-serif text-3xl leading-none">{index + 1}</p>
                <h3 className="mt-3 font-serif text-[24px] leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
          <p className={proseBody}>
            This is a relationship with a practitioner, not an automated advice
            tool.
          </p>
        </section>

        <section
          aria-labelledby="boundaries-heading"
          className="mt-12 rounded-[18px] bg-[var(--color-sage)] p-5 md:p-7"
        >
          <h2 id="boundaries-heading" className={proseHeading}>
            Clear boundaries matter
          </h2>
          <p className={proseBody}>
            In-Touch is not an emergency or continuously monitored service.
            There is no promise of an immediate reply.
          </p>
          <p className={proseBody}>
            If your main need is your own therapeutic space or counselling for
            a young person, those services have separate explanations and
            enquiry routes.{" "}
            <Link
              href={parentingSectionLinks.youngPeople}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              Counselling for young people
            </Link>{" "}
            and{" "}
            <Link
              href={parentingSectionLinks.support}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              support for you
            </Link>{" "}
            explain those choices.
          </p>
        </section>

        <section aria-labelledby="wider-heading" className="mt-12">
          <h2 id="wider-heading" className={proseHeading}>
            How this connects to the wider work
          </h2>
          <p className={proseBody}>
            You may come across ideas from{" "}
            <Link
              href={parentingSectionLinks.reset}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              RESET
            </Link>
            , a relevant resource or one of my books. They support the
            conversation rather than replacing an understanding of your
            particular circumstances.
          </p>
          <p className={proseBody}>
            An introductory conversation can cover your questions, the current
            format and the practical terms. Current options will be explained
            before you commit. If In-Touch is not suitable, we can discuss a
            more relevant next step.
          </p>
        </section>

        <EnquiryPanel
          heading="Ask about In-Touch"
          body="An introductory conversation can cover your questions and the current format. Prices, working days and response windows are explained before you commit. This page does not take a booking."
        />
      </ParentologyMain>
    </article>
  );
}
