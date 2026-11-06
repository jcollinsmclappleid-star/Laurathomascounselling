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

const kenBurns = {
  animate: {
    scale: [1, 1.07, 1],
    x: ["0%", "-1.5%", "0%"],
  },
  transition: {
    duration: 22,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut" as const,
  },
};

function ChoiceCard({
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
      className={cn(
        "flex min-h-[104px] overflow-hidden rounded-[14px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff8e9] active:opacity-95 lg:min-h-0 lg:flex-1 lg:flex-col lg:rounded-none",
        variant === "counselling" && "ring-1 ring-white/30",
      )}
    >
      <div className="relative w-[104px] shrink-0 self-stretch lg:min-h-[180px] lg:w-full lg:flex-1">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={cn("object-cover", objectPosition)}
          sizes="(max-width: 1023px) 104px, 40vw"
        />
      </div>
      <div
        className={cn(
          "flex min-w-0 flex-1 flex-col justify-center px-3 py-3 lg:flex-none lg:px-6 lg:py-5",
          variant === "parentology"
            ? "bg-[#e6cbbb] text-[#173e35]"
            : "bg-[#14352e] text-[#fff8e9]",
        )}
      >
        <p className="text-[10px] uppercase tracking-[0.14em] lg:text-[11px] lg:tracking-[0.18em]">
          {kicker}
        </p>
        <h2 className="mt-1 font-serif text-[22px] leading-none tracking-[-0.4px] lg:text-[40px]">
          {title}
        </h2>
        <p className="mt-1 text-[12px] leading-snug lg:mt-2 lg:max-w-sm lg:text-sm">
          {description}
        </p>
        <span className="mt-1 inline-flex min-h-11 items-center text-[11px] font-medium uppercase tracking-[0.12em] lg:text-xs">
          {ctaLabel}
          <span aria-hidden="true" className="ml-1.5">
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

function DoorwayPhoto({
  reduced,
  ready,
  className,
}: {
  reduced: boolean;
  ready: boolean;
  className?: string;
}) {
  const drift = !reduced && ready ? kenBurns : undefined;

  return (
    <motion.div className={cn("relative overflow-hidden", className)} {...drift}>
      <Image
        src={DOORWAY_HERO.src}
        alt={DOORWAY_HERO.alt}
        fill
        priority
        className="object-cover object-[50%_18%] lg:object-[48%_20%]"
        sizes="(max-width: 1023px) 100vw, 28vw"
      />
    </motion.div>
  );
}

const counsellingChoice = {
  href: counsellingHref,
  imageSrc: "/images/room.webp",
  imageAlt: "A calm counselling room with an armchair by the window",
  objectPosition: "object-[65%_40%]",
  kicker: "On this site",
  title: "Counselling",
  description: "Individual, couples, family and young-person counselling.",
  ctaLabel: "Explore counselling",
  variant: "counselling" as const,
};

const parentingChoice = {
  href: parentologyHref,
  imageSrc: "/images/family.webp",
  imageAlt: "A mother and daughter talking together at a kitchen table",
  objectPosition: "object-[52%_30%]",
  kicker: "Parentology · with Laura Thomas",
  title: "Parenting & teenagers",
  description: "Specialist guidance for the changing years of family life.",
  ctaLabel: "Explore parenting support",
  variant: "parentology" as const,
};

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
      className="relative flex w-full flex-col bg-[#102f2c] text-[#fff8e9] lg:grid lg:h-[100svh] lg:min-h-[720px] lg:grid-cols-2 lg:overflow-hidden"
      aria-label="Choose your path"
    >
      <motion.div
        className="flex flex-col lg:col-start-1 lg:h-full lg:min-h-0"
        {...containerMotion}
      >
        <div className="flex flex-col lg:grid lg:h-full lg:min-h-0 lg:grid-cols-2 lg:items-stretch">
          <p className="shrink-0 px-[19px] pb-2 pt-[4.5rem] text-[9px] uppercase tracking-[0.14em] leading-snug sm:px-6 lg:hidden">
            {homeEyebrow}
          </p>

          <DoorwayPhoto
            reduced={reduced}
            ready={ready}
            className="mx-[19px] h-[148px] shrink-0 sm:mx-6 lg:col-start-2 lg:row-start-1 lg:mx-0 lg:h-full lg:min-h-0"
          />

          <motion.div
            className="shrink-0 px-[19px] pb-4 pt-4 sm:px-6 lg:col-start-1 lg:row-start-1 lg:self-center lg:px-[65px] lg:pb-8 lg:pt-20"
            {...itemMotion}
          >
            <h1 className="font-serif leading-[0.98] tracking-[-0.8px] lg:tracking-[-2px]">
              <span className="mb-1.5 hidden max-w-full font-sans text-[10px] uppercase tracking-[0.24em] leading-snug lg:block">
                {homeEyebrow}
              </span>
              <span className="mt-1.5 block text-[clamp(26px,7.6vw,36px)] md:text-[40px] md:tracking-[-1px] lg:mt-3 lg:text-[clamp(52px,4.2vw,88px)]">
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
            <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-[#fff8e9]/90 lg:mt-4">
              Choose where to begin
            </p>
            <div className="mt-3 flex flex-col gap-2 lg:hidden">
              <ChoiceCard {...counsellingChoice} />
              <ChoiceCard {...parentingChoice} />
            </div>
            <div className="mt-3 flex flex-col gap-3 lg:mt-4">
              <HomeCtaPrimary href={contactHref} tone="onDark">
                Book a free call
              </HomeCtaPrimary>
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap">
                <HomeCtaSecondary href={counsellingHref} tone="onDark">
                  Explore counselling
                </HomeCtaSecondary>
                <HomeCtaSecondary href={meetLauraHref} tone="onDark">
                  Meet Laura Thomas
                </HomeCtaSecondary>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="hidden min-h-0 flex-col lg:col-start-2 lg:flex lg:h-full lg:pt-16">
        <ChoiceCard {...counsellingChoice} />
        <ChoiceCard {...parentingChoice} />
      </div>
    </section>
  );
}
