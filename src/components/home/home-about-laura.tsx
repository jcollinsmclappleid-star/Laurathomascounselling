import Image from "next/image";
import { HomeCtaPrimary, HomeCtaSecondary } from "@/components/home/home-cta";
import { LauraIntroVideo } from "@/components/home/laura-intro-video";
import { homeWelcomeParagraphs } from "@/lib/home-copy";
import { hrefFromRegistry } from "@/lib/routes";

const aboutHref = hrefFromRegistry("/qualified-counsellor/");
const contactHref = hrefFromRegistry("/contact-me/");

export function HomeAboutLaura() {
  return (
    <section
      className="border-t border-[#c8cbb9]/80 bg-[var(--color-cream)] px-[19px] py-12 md:px-10 lg:px-[65px]"
      aria-labelledby="about-laura-heading"
    >
      <div className="mx-auto grid max-w-[var(--content-max)] gap-10 lg:grid-cols-[minmax(0,0.9fr)_1fr] lg:items-start lg:gap-14">
        <div className="relative mx-auto aspect-[3/4] w-full max-w-[420px] overflow-hidden lg:mx-0 lg:max-w-none">
          <Image
            src="/images/laura-doorway-about.webp"
            alt="Laura Thomas at the entrance to her counselling space in Wixams"
            fill
            className="object-cover object-[50%_22%]"
            sizes="(max-width: 1024px) 420px, 480px"
            priority
          />
        </div>
        <div>
          <p className="text-[9px] uppercase tracking-[0.15em]">About Laura</p>
          <h2
            id="about-laura-heading"
            className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            Welcome, I&apos;m Laura
          </h2>
          <div className="mt-4 max-w-xl space-y-4 text-[15px] leading-relaxed">
            {homeWelcomeParagraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 48)}>{paragraph}</p>
            ))}
          </div>
          <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
            M.Ed · MNCPS (Accred.)
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <HomeCtaSecondary href={aboutHref}>Read more about me</HomeCtaSecondary>
            <HomeCtaPrimary href={contactHref}>Book a free call</HomeCtaPrimary>
          </div>
          <div className="mt-10 max-w-xl">
            <LauraIntroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
