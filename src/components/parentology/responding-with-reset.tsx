import Link from "next/link";
import {
  BookPair,
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
    title: "Recognise the issue",
    body: "Begin by considering what may be happening in the situation, rather than relying only on the behaviour you first notice.",
  },
  {
    title: "Empathise in the moment",
    body: "The framework makes room for the teenager’s perspective and the experience behind the interaction.",
  },
  {
    title: "Say what matters",
    body: "Consider the important message, value or boundary, and how it can be expressed clearly.",
  },
  {
    title: "Emotionally regulate together",
    body: "This part of the approach focuses on emotional steadiness within the interaction.",
  },
  {
    title: "Take action with confidence",
    body: "The final step concerns a considered response to the situation, informed by what came before.",
  },
] as const;

export function RespondingWithReset() {
  return (
    <article>
      <ParentologyMain>
        <ParentologyBreadcrumb
          items={[
            { label: "Parenting & teenagers", href: parentingSectionLinks.home },
            { label: "RESET" },
          ]}
        />
        <ParentologyIdentity />
        <h1 className="mt-6 max-w-[18ch] font-serif text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.8px]">
          A more considered response, with RESET
        </h1>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.55]">
          RESET is the framework I use to organise a more thoughtful response
          when family interactions feel difficult. Here is an introduction to
          its purpose and the ideas behind it.
        </p>

        <section aria-labelledby="structure-heading" className="mt-12">
          <h2 id="structure-heading" className={proseHeading}>
            A structure for the conversation
          </h2>
          <p className={proseBody}>
            When there is a lot happening at once, it can be hard to decide
            what deserves your attention. RESET brings together noticing the
            situation, understanding emotion, communicating what matters and
            considering a next step. It is an approach to explore in context,
            rather than a script that fits every family.
          </p>
          <ol className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="flex flex-col rounded-[18px] bg-[var(--color-clay)] p-5"
              >
                <p className="font-serif text-3xl leading-none">{index + 1}</p>
                <h3 className="mt-3 font-serif text-[24px] leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed">{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="context-heading" className="mt-12">
          <h2 id="context-heading" className={proseHeading}>
            Explore it with the right context
          </h2>
          <p className={proseBody}>
            The framework does not replace individual assessment or professional
            support when that is needed. It is not a diagnostic tool and it
            does not guarantee an outcome. My parenting services, resources and
            books offer ways to explore related ideas in context.
          </p>
          <ul className="mt-4 max-w-[68ch] space-y-2 text-[17px] leading-[1.55]">
            <li>
              <Link
                href={parentingSectionLinks.support}
                className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
              >
                Explore parent support
              </Link>
            </li>
            <li>
              <Link
                href={parentingSectionLinks.inTouch}
                className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
              >
                In-Touch guidance
              </Link>
            </li>
            <li>
              <Link
                href={parentingSectionLinks.overwhelm}
                className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
              >
                When parenting feels too much
              </Link>
            </li>
          </ul>
          <BookPair />
        </section>

        <EnquiryPanel
          heading="Explore parent support"
          body="RESET is an introduction to an approach. If you want to talk about your own family, contact Laura. This page does not assess a situation or promise a result."
        />
      </ParentologyMain>
    </article>
  );
}
