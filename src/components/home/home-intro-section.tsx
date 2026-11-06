import {
  Cloud,
  Compass,
  MessageCircle,
  Route,
  Sun,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CopyNote, DesignPill } from "@/components/home/copy-note";
import { HomeCtaPrimary, HomeCtaSecondary } from "@/components/home/home-cta";
import { homeIntroBlocks, homeParentologySisterLine } from "@/lib/home-copy";
import { hrefFromRegistry } from "@/lib/routes";

const contactHref = hrefFromRegistry("/contact-me/");
const parentologyHref = hrefFromRegistry("/parentology/");

const introNotes: { icon: LucideIcon; text: string }[] = [
  { icon: Users, text: homeIntroBlocks[2] },
  { icon: Cloud, text: homeIntroBlocks[3] },
  { icon: Compass, text: homeIntroBlocks[4] },
  { icon: Route, text: homeIntroBlocks[5] },
  { icon: Sun, text: homeIntroBlocks[6] },
  { icon: MessageCircle, text: homeIntroBlocks[7] },
];

const introPills = ["Individuals", "Couples", "Parents", "Families"] as const;

export function HomeIntroSection() {
  return (
    <section
      className="border-t border-[#c8cbb9]/80 bg-[var(--color-sage)] px-[19px] py-12 md:px-10 lg:px-[65px]"
      aria-labelledby="home-intro-heading"
    >
      <div className="mx-auto grid max-w-[var(--content-max)] gap-8 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:items-start lg:gap-12">
        <div className="lg:sticky lg:top-24">
          <h2
            id="home-intro-heading"
            className="font-serif text-[clamp(32px,8vw,52px)] leading-[1.05] tracking-[-0.8px]"
          >
            {homeIntroBlocks[0]}
          </h2>
          <p className="mt-4 font-serif text-[clamp(26px,6vw,40px)] leading-[1.05] tracking-[-0.5px] text-[var(--color-terracotta)]">
            {homeIntroBlocks[1]}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2">
            {introPills.map((pill) => (
              <li key={pill}>
                <DesignPill tone="forest">{pill}</DesignPill>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-3">
          {introNotes.map(({ icon, text }) => (
            <CopyNote key={text.slice(0, 36)} icon={icon}>
              {text}
            </CopyNote>
          ))}
          <div className="rounded-2xl bg-[var(--color-clay)] px-4 py-4">
            <p className="text-[15px] leading-relaxed">{homeParentologySisterLine}</p>
            <div className="mt-3">
              <HomeCtaSecondary href={parentologyHref}>
                Explore Parentology
              </HomeCtaSecondary>
            </div>
          </div>
          <div>
            <HomeCtaPrimary href={contactHref}>Book a free call</HomeCtaPrimary>
          </div>
        </div>
      </div>
    </section>
  );
}
