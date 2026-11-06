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

const choices = [
  {
    id: "coaching",
    title: "Practical parent coaching",
    audience: "For you, about situations at home",
    body: "Coaching focuses on situations you want to think through: communication, conflict, school difficulties or uncertainty about how to respond. The conversation centres on understanding your family context and considering practical ways forward.",
    next: {
      href: parentingSectionLinks.inTouch,
      label: "Read about In-Touch",
    },
  },
  {
    id: "counselling",
    title: "Counselling for you",
    audience: "For your own experience",
    body: "You may be feeling stretched, worried or caught between your own needs and those of your family. Counselling offers space to explore your experience, rather than focusing only on a parenting strategy.",
    next: {
      href: parentingSectionLinks.counselling,
      label: "Read about counselling",
    },
  },
  {
    id: "teenager",
    title: "Support for your teenager",
    audience: "A separate route for a young person",
    body: "Looking for help as a parent is different from arranging counselling for a young person. My young-person counselling page explains that separate route. We can discuss which kind of enquiry you are making without treating the two as interchangeable.",
    next: {
      href: parentingSectionLinks.youngPeople,
      label: "Counselling for young people",
    },
  },
] as const;

export function SupportForYou() {
  return (
    <article>
      <ParentologyMain>
        <ParentologyBreadcrumb
          items={[
            { label: "Parenting & teenagers", href: parentingSectionLinks.home },
            { label: "Find support" },
          ]}
        />
        <ParentologyIdentity />
        <h1 className="mt-6 max-w-[16ch] font-serif text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.8px]">
          Find the support that fits your family
        </h1>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.55]">
          Sometimes you need help with what is happening at home. Sometimes you
          need room to understand what it is bringing up for you. We can start
          by working out which support fits.
        </p>
        <nav aria-label="On this page" className="mt-6">
          <ul className="flex flex-wrap gap-2">
            {choices.map((choice) => (
              <li key={choice.id}>
                <a
                  href={`#${choice.id}`}
                  className="inline-flex min-h-11 items-center rounded-full bg-[var(--color-sage)] px-4 text-sm"
                >
                  {choice.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <section aria-labelledby="choice-heading" className="mt-10">
          <h2 id="choice-heading" className={proseHeading}>
            Different needs deserve a clear choice
          </h2>
          <p className={proseBody}>
            Parenting support does not have to mean choosing the same kind of
            help for everyone. This page explains the options so you can
            understand what each is for before making an enquiry.
          </p>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {choices.map((choice) => (
              <section
                key={choice.id}
                id={choice.id}
                aria-labelledby={`${choice.id}-heading`}
                className="scroll-mt-36 rounded-[18px] bg-[var(--color-clay)] p-5"
              >
                <p className="text-[10px] uppercase tracking-[0.14em]">
                  {choice.audience}
                </p>
                <h3
                  id={`${choice.id}-heading`}
                  className="mt-2 font-serif text-[26px] leading-tight"
                >
                  {choice.title}
                </h3>
                <p className="mt-3 text-[17px] leading-[1.55]">{choice.body}</p>
                <Link
                  href={choice.next.href}
                  className="mt-4 inline-flex min-h-11 items-center text-sm font-medium underline decoration-[var(--color-forest)]/40 underline-offset-4"
                >
                  {choice.next.label}
                </Link>
              </section>
            ))}
          </div>
        </section>

        <section aria-labelledby="coaching-more" className="mt-12">
          <h2 id="coaching-more" className={proseHeading}>
            Ways of working within parent support
          </h2>
          <p className={proseBody}>
            If you want continuing contact around everyday situations, read
            about In-Touch. If you want a focused planning conversation, ask
            about the current options when you get in touch. Those details are
            confirmed before you decide.
          </p>
          <p className={proseBody}>
            The counselling section explains the way I work and the services
            available.{" "}
            <Link
              href={parentingSectionLinks.couples}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              Couples
            </Link>{" "}
            and{" "}
            <Link
              href={parentingSectionLinks.family}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              family support
            </Link>{" "}
            have their own pages, so you can consider them in the right
            context.
          </p>
          <p className={proseBody}>
            <Link
              href={parentingSectionLinks.familySupport}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              Parenting and Family Support
            </Link>{" "}
            and{" "}
            <Link
              href={parentingSectionLinks.parentingTeens}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              Parenting Teens
            </Link>{" "}
            stay on their existing addresses. This page does not replace them
            or repeat them.
          </p>
        </section>

        <EnquiryPanel />
      </ParentologyMain>
    </article>
  );
}
