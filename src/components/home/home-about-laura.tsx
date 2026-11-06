import {
  Award,
  Clock,
  Footprints,
  GraduationCap,
  Landmark,
  Sprout,
  UserRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { CopyNote, DesignPill } from "@/components/home/copy-note";
import { HomeCtaPrimary, HomeCtaSecondary } from "@/components/home/home-cta";
import { LauraIntroVideo } from "@/components/home/laura-intro-video";
import { homeWelcomeParagraphs } from "@/lib/home-copy";
import { hrefFromRegistry } from "@/lib/routes";

const aboutHref = hrefFromRegistry("/qualified-counsellor/");
const contactHref = hrefFromRegistry("/contact-me/");

const welcomeNotes: { icon: LucideIcon; text: string }[] = [
  { icon: Clock, text: homeWelcomeParagraphs[1] },
  { icon: Footprints, text: homeWelcomeParagraphs[2] },
  { icon: Award, text: homeWelcomeParagraphs[3] },
  { icon: GraduationCap, text: homeWelcomeParagraphs[4] },
  { icon: Landmark, text: homeWelcomeParagraphs[5] },
  { icon: Sprout, text: homeWelcomeParagraphs[6] },
];

const welcomePills = [
  "Bedford",
  "Adults",
  "Families",
  "Couples",
  "Young people",
] as const;

export function HomeAboutLaura() {
  return (
    <section
      className="border-t border-[#c8cbb9]/80 bg-[var(--color-cream)] px-[19px] py-12 md:px-10 lg:px-[65px]"
      id="laura-introduction"
      aria-labelledby="about-laura-heading"
    >
      <div className="mx-auto max-w-[var(--content-max)]">
        <DesignPill icon={UserRound}>About Laura</DesignPill>
        <h2
          id="about-laura-heading"
          className="mt-4 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
        >
          Welcome, I&apos;m Laura
        </h2>
        <LauraIntroVideo className="mt-6 max-w-3xl" />

        <div className="mt-8 rounded-2xl border border-[#173e35]/10 bg-[var(--color-sage)] p-5 sm:p-7">
          <p className="max-w-3xl font-serif text-[clamp(22px,3vw,32px)] leading-snug tracking-[-0.3px]">
            {homeWelcomeParagraphs[0]}
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {welcomePills.map((pill) => (
              <li key={pill}>
                <DesignPill tone="forest">{pill}</DesignPill>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {welcomeNotes.map(({ icon, text }) => (
            <CopyNote key={text.slice(0, 32)} icon={icon} tone="sage">
              {text}
            </CopyNote>
          ))}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <HomeCtaSecondary href={aboutHref}>Read more about me</HomeCtaSecondary>
          <HomeCtaPrimary href={contactHref}>Book a free call</HomeCtaPrimary>
        </div>
      </div>
    </section>
  );
}
