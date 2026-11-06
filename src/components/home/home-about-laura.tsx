import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { LauraIntroVideo } from "@/components/home/laura-intro-video";
import { hrefFromRegistry } from "@/lib/routes";

const aboutHref = hrefFromRegistry("/qualified-counsellor/");

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
            Welcome — I&apos;m Laura.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed">
            I offer counselling in Bedford for adults, families, couples and
            young people. My aim is to help you feel more content and at ease in
            your life. I offer long and short-term therapy depending on what you
            would like to get out of our sessions — private counselling offers
            flexibility by working on what you bring, in your own time and at
            your own pace.
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed">
            My interest in human behaviour has been with me for over 22 years.
            After studying Psychology, I began working in mental health and went
            on to work with young people, families and adults across education,
            local authorities and charities. That path led me to train as a
            counsellor and, alongside roles in schools and mental health
            services, I now run my private practice — support that is personal,
            responsive and focused on what actually helps.
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
            M.Ed · MNCPS (Accred.)
          </p>
          <Link
            href={aboutHref}
            className="mt-6 inline-flex min-h-11 items-center gap-2 border border-[#7e8b72] px-5 py-3 text-sm transition hover:bg-[var(--soft-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)] active:scale-[0.99]"
          >
            Read more about me
            <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
          </Link>
          <div className="mt-10 max-w-xl">
            <LauraIntroVideo />
          </div>
        </div>
      </div>
    </section>
  );
}
