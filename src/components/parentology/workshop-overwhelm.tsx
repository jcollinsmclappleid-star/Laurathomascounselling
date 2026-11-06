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

export function WorkshopOverwhelm() {
  return (
    <article>
      <ParentologyMain>
        <ParentologyBreadcrumb
          items={[
            { label: "Parenting & teenagers", href: parentingSectionLinks.home },
            { label: "Learn at your pace", href: parentingSectionLinks.workshops },
            { label: "When parenting feels too much" },
          ]}
        />
        <ParentologyIdentity />
        <p className="mt-6 text-[11px] uppercase tracking-[0.16em]">
          Recorded workshop · Paid
        </p>
        <h1 className="mt-3 max-w-[16ch] font-serif text-[clamp(32px,5vw,52px)] leading-[1.05] tracking-[-0.8px]">
          When parenting feels too much
        </h1>
        <p className="mt-4 max-w-[62ch] text-[17px] leading-[1.55]">
          An introduction to the Parent Overwhelm Reset: a recorded workshop
          for parents who want to make space to consider their own experience
          of overwhelm.
        </p>

        <section aria-labelledby="who-heading" className="mt-12">
          <h2 id="who-heading" className={proseHeading}>
            Who this is for
          </h2>
          <p className={proseBody}>
            Parenting can involve holding many things in mind at once. This
            workshop turns attention towards the parent, offering a focused
            place to engage with Laura’s educational material away from the
            pace of everyday interactions.
          </p>
        </section>

        <section aria-labelledby="format-heading" className="mt-12">
          <h2 id="format-heading" className={proseHeading}>
            Format and materials
          </h2>
          <p className={proseBody}>
            The existing Parent Overwhelm Reset brings together a recorded
            presentation and an accompanying guide. This page helps you
            understand the format before you open the Parentology product page.
          </p>
          <p className={proseBody}>
            It is a self-paced learning resource. It does not include an
            individual assessment, a personal response to your circumstances or
            ongoing contact unless separately agreed through a service.
          </p>
        </section>

        <section aria-labelledby="scope-heading" className="mt-12">
          <h2 id="scope-heading" className={proseHeading}>
            Scope
          </h2>
          <p className={proseBody}>
            You can explore the{" "}
            <Link
              href={parentingSectionLinks.reset}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              RESET introduction
            </Link>{" "}
            and related parenting resources here. If you want to talk about
            your own situation,{" "}
            <Link
              href={parentingSectionLinks.support}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              parent coaching
            </Link>{" "}
            and{" "}
            <Link
              href={parentingSectionLinks.inTouch}
              className="underline decoration-[var(--color-forest)]/40 underline-offset-4"
            >
              In-Touch
            </Link>{" "}
            have separate explanations so you can compare the options.
          </p>
        </section>

        <section aria-labelledby="access-heading" className="mt-12">
          <h2 id="access-heading" className={proseHeading}>
            Access through Parentology
          </h2>
          <p className={proseBody}>
            Before purchase, check the confirmed materials, price, access
            arrangements and terms on the existing Parentology product page.
            Purchasing and delivery stay within that established system. The
            price is not published here until Laura confirms it.
          </p>
          <p className={proseBody}>
            No payment or account details are collected on this information
            page.
          </p>
          <div className="mt-6">
            <NamedExternalLink href="https://www.parentologyworld.com/overwhelmreset/p/parentsupport">
              View the workshop on Parentology
            </NamedExternalLink>
          </div>
        </section>
      </ParentologyMain>
    </article>
  );
}
