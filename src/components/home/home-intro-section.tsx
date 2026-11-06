import { HomeCtaPrimary, HomeCtaSecondary } from "@/components/home/home-cta";
import { homeIntroBlocks, homeParentologySisterLine } from "@/lib/home-copy";
import { hrefFromRegistry } from "@/lib/routes";

const contactHref = hrefFromRegistry("/contact-me/");
const parentologyHref = hrefFromRegistry("/parentology/");

export function HomeIntroSection() {
  return (
    <section
      className="border-t border-[#c8cbb9]/80 bg-[var(--color-sage)] px-[19px] py-12 md:px-10 lg:px-[65px]"
      aria-labelledby="home-intro-heading"
    >
      <div className="mx-auto grid max-w-[var(--content-max)] gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-16">
        <div>
          <h2
            id="home-intro-heading"
            className="font-serif text-[clamp(32px,8vw,52px)] leading-[1.05] tracking-[-0.8px]"
          >
            {homeIntroBlocks[0]}
          </h2>
          <p className="mt-4 font-serif text-[clamp(26px,6vw,40px)] leading-[1.05] tracking-[-0.5px]">
            {homeIntroBlocks[1]}
          </p>
        </div>
        <div className="border-l border-[var(--color-forest)]/25 pl-5 sm:pl-7">
          <div className="max-w-xl space-y-4 text-[15px] leading-relaxed">
            {homeIntroBlocks.slice(2).map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-6 max-w-xl border-t border-[var(--color-forest)]/15 pt-4 text-[15px] leading-relaxed">
            {homeParentologySisterLine}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <HomeCtaPrimary href={contactHref}>Book a free call</HomeCtaPrimary>
            <HomeCtaSecondary href={parentologyHref}>
              Explore Parentology
            </HomeCtaSecondary>
          </div>
        </div>
      </div>
    </section>
  );
}
