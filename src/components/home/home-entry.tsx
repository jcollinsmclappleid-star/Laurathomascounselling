"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants } from "motion/react";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/components/home/affordance-pulse";
import { HomeCtaPrimary, HomeCtaSecondary } from "@/components/home/home-cta";
import {
  homeEyebrow,
  homeHeroHeadline,
  homeHeroIntroDesktop,
  homeHeroIntroMobile,
} from "@/lib/home-copy";
import { hrefFromRegistry } from "@/lib/routes";
import { cn } from "@/lib/utils";

const counsellingHref = hrefFromRegistry("/services/");
const parentologyHref = hrefFromRegistry("/parentology/");
const meetLauraHref = hrefFromRegistry("/qualified-counsellor/");
const contactHref = hrefFromRegistry("/contact-me/");

const DOORWAY_HERO = {
  src: "/images/laura-doorway-hero.webp",
  alt: "Laura Thomas at the entrance to her counselling space",
} as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.06 },
  },
};

function useMotionReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);
  return ready;
}

function WorldPanel({
  href,
  imageSrc,
  imageAlt,
  objectPosition,
  kicker,
  title,
  description,
  ctaLabel,
  variant,
}: {
  href: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition: string;
  kicker: string;
  title: string;
  description: string;
  ctaLabel: string;
  variant: "counselling" | "parentology";
}) {
  return (
    <Link
      href={href}
      className="route-pulse group relative flex min-h-[210px] flex-1 overflow-hidden text-[#fff8ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white/90 active:opacity-95"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className={cn("object-cover", objectPosition)}
        sizes="(max-width: 1023px) 100vw, 50vw"
      />
      <div
        className={cn(
          "absolute inset-0",
          variant === "parentology"
            ? "bg-gradient-to-r from-[#72372cd9] to-[#72372c12]"
            : "bg-gradient-to-r from-[#123b32c7] to-[#123b3215]",
        )}
        aria-hidden="true"
      />
      <div className="relative z-[1] flex h-full flex-col justify-between p-4 sm:p-5 lg:p-6 lg:pt-8">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] lg:text-[11px] lg:tracking-[0.24em]">
            {kicker}
          </p>
          <h2 className="mt-1 font-serif text-[clamp(32px,8vw,52px)] leading-none tracking-[-0.6px]">
            {title}
          </h2>
          <p className="mt-2 max-w-sm text-[12px] leading-snug lg:text-sm">
            {description}
          </p>
        </div>
        <span className="mt-4 inline-flex min-h-11 items-center self-start rounded-full border border-white/75 bg-white/12 px-4 text-[11px] uppercase tracking-[0.12em] backdrop-blur-sm">
          {ctaLabel}
          <span aria-hidden="true" className="ml-1.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

export function HomeEntry() {
  const reduced = usePrefersReducedMotion();
  const ready = useMotionReady();

  const motionPhase = ready && !reduced ? "visible" : "hidden";
  const containerMotion =
    reduced || !ready
      ? {}
      : {
          variants: containerVariants,
          initial: "hidden" as const,
          animate: motionPhase,
        };

  const itemMotion =
    reduced || !ready
      ? {}
      : {
          variants: fadeUp,
        };

  return (
    <section
      className="relative flex w-full flex-col bg-[#102f2c] text-[#fff8e9] lg:grid lg:h-[100svh] lg:min-h-[720px] lg:grid-cols-2 lg:grid-rows-2 lg:overflow-hidden"
      aria-label="Choose your path"
    >
      <motion.div
        className="flex flex-col lg:col-start-1 lg:row-span-2 lg:h-full lg:min-h-0"
        {...containerMotion}
      >
        <div className="flex flex-col lg:grid lg:h-full lg:min-h-0 lg:grid-cols-2 lg:grid-rows-1 lg:items-stretch">
          <p className="shrink-0 bg-[#102f2c] px-[19px] pb-3 pt-[4.5rem] text-[9px] uppercase tracking-[0.14em] leading-snug sm:px-6 lg:hidden">
            {homeEyebrow}
          </p>

          <div className="relative h-[42svh] w-full shrink-0 overflow-hidden lg:col-start-2 lg:row-start-1 lg:h-full lg:min-h-0">
            <Image
              src={DOORWAY_HERO.src}
              alt={DOORWAY_HERO.alt}
              fill
              priority
              className="object-cover object-[50%_8%] lg:object-[48%_20%]"
              sizes="(max-width: 1023px) 100vw, 28vw"
            />
          </div>

          <motion.div
            className="shrink-0 bg-[#102f2c] px-[19px] pb-4 pt-4 sm:px-6 lg:col-start-1 lg:row-start-1 lg:self-center lg:px-8 lg:pb-8 lg:pt-20 xl:px-12"
            {...itemMotion}
          >
            <h1 className="font-serif leading-[0.98] tracking-[-0.8px] lg:tracking-[-2px]">
              <span className="mb-1.5 hidden max-w-full font-sans text-[10px] uppercase tracking-[0.24em] leading-snug lg:block">
                {homeEyebrow}
              </span>
              <span className="mt-1.5 block text-[clamp(26px,7.6vw,36px)] md:text-[40px] md:tracking-[-1px] lg:mt-3 lg:text-[clamp(44px,3.4vw,72px)]">
                {homeHeroHeadline.line1}
                <br />
                {homeHeroHeadline.line2}
                <br />
                <em className="not-italic">{homeHeroHeadline.line3}</em>
              </span>
            </h1>
            <p className="mt-3 max-w-full whitespace-pre-line text-xs leading-snug lg:max-w-[420px] lg:text-sm lg:leading-[1.8]">
              <span className="lg:hidden">{homeHeroIntroMobile}</span>
              <span className="hidden lg:inline">{homeHeroIntroDesktop}</span>
            </p>
            <div className="mt-4 flex flex-col gap-3 lg:mt-5">
              <HomeCtaPrimary href={contactHref} tone="onDark">
                Book a free call
              </HomeCtaPrimary>
              <HomeCtaSecondary href={meetLauraHref} tone="onDark">
                Meet Laura Thomas
              </HomeCtaSecondary>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="flex min-h-0 flex-col lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-full lg:pt-16">
        <WorldPanel
          href={counsellingHref}
          imageSrc="/images/room.webp"
          imageAlt="A calm counselling room with an armchair by the window"
          objectPosition="object-[65%_40%]"
          kicker="Counselling & therapeutic support"
          title="A space for you."
          description="Individual, couples, family and young-person counselling."
          ctaLabel="Explore counselling"
          variant="counselling"
        />
        <WorldPanel
          href={parentologyHref}
          imageSrc="/images/family.webp"
          imageAlt="A mother and daughter talking together at a kitchen table"
          objectPosition="object-[52%_30%]"
          kicker="Parentology · Parents & teenagers"
          title="Growing together."
          description="Specialist guidance for the changing years of family life."
          ctaLabel="Explore Parentology"
          variant="parentology"
        />
      </div>
    </section>
  );
}
