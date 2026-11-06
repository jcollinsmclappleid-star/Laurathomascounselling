"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import {
  useAffordancePulse,
  usePrefersReducedMotion,
} from "@/components/home/affordance-pulse";
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

function WorldPanel({
  href,
  panelId,
  imageSrc,
  imageAlt,
  objectPosition,
  kicker,
  title,
  description,
  ctaLabel,
  variant,
  expanding,
  onSelect,
  reduced,
  ready,
}: {
  href: string;
  panelId: string;
  imageSrc: string;
  imageAlt: string;
  objectPosition: string;
  kicker: string;
  title: string;
  description: string;
  ctaLabel: string;
  variant: "counselling" | "parentology";
  expanding: string | null;
  onSelect: (id: string, href: string) => void;
  reduced: boolean;
  ready: boolean;
}) {
  const isExpanding = expanding === panelId;
  const drift = !reduced && ready ? kenBurns : undefined;
  const { ref, pulseClass } = useAffordancePulse<HTMLAnchorElement>(!isExpanding);

  return (
    <motion.div
      layout
      className={cn(
        "relative min-h-[210px] min-w-0 flex-none overflow-hidden lg:min-h-0 lg:flex-1",
        isExpanding && "fixed inset-0 z-[70]",
      )}
      animate={
        isExpanding && !reduced
          ? { scale: 1.02, opacity: 1 }
          : { scale: 1, opacity: 1 }
      }
      transition={{ layout: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } }}
    >
      <Link
        ref={ref}
        href={href}
        className={cn(
          "group relative flex h-full min-h-[210px] w-full flex-col text-[#fff8ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white/90 active:opacity-95 lg:min-h-0",
          pulseClass,
        )}
        onClick={(event) => {
          if (expanding) {
            event.preventDefault();
            return;
          }
          if (!reduced) {
            event.preventDefault();
            onSelect(panelId, href);
          }
        }}
      >
        <motion.div className="absolute inset-0 min-h-0" {...drift}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className={cn("object-cover", objectPosition)}
            sizes="(max-width: 1024px) 50vw, 25vw"
          />
        </motion.div>
        <div
          className={cn(
            "absolute inset-0",
            variant === "parentology"
              ? "bg-gradient-to-r from-[#72372cd9] to-[#72372c12]"
              : "bg-gradient-to-r from-[#123b32c7] to-[#123b3215]",
          )}
          aria-hidden="true"
        />
        <div className="relative z-[1] flex h-full flex-col justify-between p-3 pb-2 sm:p-[18px] md:p-4 lg:p-6 lg:pt-8">
          <div className="pr-10 lg:pt-1">
            <p className="text-[8px] uppercase tracking-[0.15em] sm:text-[9px] lg:text-[10px] lg:tracking-[0.24em]">
              {kicker}
            </p>
            <h2 className="mt-1 font-serif text-[clamp(26px,6.5vw,36px)] leading-none tracking-[-0.6px] md:text-[38px] lg:mt-2 lg:text-[52px] lg:tracking-[-1px]">
              {title}
            </h2>
            <p className="mt-1 max-w-[calc(100%-1rem)] text-[10px] leading-snug sm:text-[11px] md:max-w-[240px] lg:text-[11px]">
              {description}
            </p>
          </div>
          <div className="mt-2 flex items-end justify-between gap-2">
            <span className="inline-flex min-h-9 items-center rounded-full border border-white/75 bg-white/12 px-3 py-1.5 text-[10px] uppercase tracking-[0.1em] backdrop-blur-sm transition group-hover:bg-white/22 group-active:scale-[0.98] sm:px-4 sm:text-[11px]">
              {ctaLabel}
            </span>
            <motion.span
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/70 text-lg sm:h-11 sm:w-11 md:text-xl"
              aria-hidden="true"
              animate={
                reduced || !ready
                  ? undefined
                  : {
                      x: [0, 3, 0],
                      y: [0, -3, 0],
                    }
              }
              transition={{
                duration: 2.4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              ↗
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function HomeEntry() {
  const router = useRouter();
  const reduced = usePrefersReducedMotion();
  const ready = useMotionReady();
  const [expanding, setExpanding] = useState<string | null>(null);

  const handleWorldSelect = useCallback(
    (panelId: string, href: string) => {
      setExpanding(panelId);
      window.setTimeout(() => {
        router.push(href);
      }, 560);
    },
    [router],
  );

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
    <>
      <section
        className="relative flex w-full flex-col bg-[#102f2c] lg:grid lg:h-[100svh] lg:min-h-0 lg:grid-cols-2 lg:grid-rows-2 lg:overflow-hidden"
        aria-label="Choose your path"
      >
        <motion.div
          className="relative flex flex-col text-[#fff8e9] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:h-full lg:min-h-0"
          {...containerMotion}
        >
          <div className="relative z-[1] flex flex-col lg:h-full lg:min-h-0 lg:flex-1 lg:px-[65px] lg:pb-6 lg:pt-[4.375rem]">
            <div className="flex flex-col lg:grid lg:h-full lg:min-h-0 lg:flex-1 lg:grid-cols-2 lg:grid-rows-1 lg:items-stretch lg:gap-x-8">
              <p className="shrink-0 bg-[#102f2c] px-[19px] pb-3 pt-[4.5rem] text-[9px] uppercase tracking-[0.14em] leading-snug sm:px-6 lg:hidden">
                {homeEyebrow}
              </p>

              <motion.div
                className="relative h-[42svh] w-full shrink-0 overflow-hidden lg:col-start-2 lg:row-start-1 lg:h-full lg:min-h-0"
                {...itemMotion}
              >
                <Image
                  src={DOORWAY_HERO.src}
                  alt={DOORWAY_HERO.alt}
                  fill
                  priority
                  className="object-cover object-[50%_8%] lg:object-[48%_20%]"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div
                  className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#102f2c]/25 to-transparent lg:block"
                  aria-hidden="true"
                />
              </motion.div>

              <motion.div
                className="shrink-0 bg-[#102f2c] px-[19px] pb-4 pt-4 sm:px-6 lg:col-start-1 lg:row-start-1 lg:self-center lg:px-0 lg:pb-0 lg:pt-0"
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
                <p className="mt-3 max-w-full whitespace-pre-line text-xs leading-snug lg:max-w-[475px] lg:text-sm lg:leading-[1.8]">
                  <span className="lg:hidden">{homeHeroIntroMobile}</span>
                  <span className="hidden lg:inline">{homeHeroIntroDesktop}</span>
                </p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.12em] text-[#fff8e9]/90 lg:mt-4">
                  Choose where to begin
                </p>
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
          </div>
        </motion.div>

        <div className="flex flex-col lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:h-full lg:min-h-0 lg:pt-16 xl:pt-[4.5rem]">
          <WorldPanel
            panelId="counselling"
            href={counsellingHref}
            imageSrc="/images/room.webp"
            imageAlt="A calm counselling room with an armchair by the window"
            objectPosition="object-[65%_40%]"
            kicker="Counselling & therapeutic support"
            title="A space for you."
            description="Individual, couples, family and young-person counselling."
            ctaLabel="Explore counselling"
            variant="counselling"
            expanding={expanding}
            onSelect={handleWorldSelect}
            reduced={reduced}
            ready={ready}
          />
          <WorldPanel
            panelId="parentology"
            href={parentologyHref}
            imageSrc="/images/family.webp"
            imageAlt="A mother and daughter talking together at a kitchen table"
            objectPosition="object-[52%_30%]"
            kicker="Parentology · Parents & teenagers"
            title="Growing together."
            description="Specialist guidance for the changing years of family life."
            ctaLabel="Explore Parentology"
            variant="parentology"
            expanding={expanding}
            onSelect={handleWorldSelect}
            reduced={reduced}
            ready={ready}
          />
        </div>
      </section>

      <ul className="flex flex-wrap items-center justify-center gap-2 border-t border-[#c8cbb9]/80 px-5 py-3 md:px-10 md:py-4">
        {["M.Ed", "MNCPS (Accred.)"].map((pill) => (
          <li
            key={pill}
            className="rounded-full border border-[#173e35]/15 bg-[var(--color-sage)] px-3 py-1 text-[10px] uppercase tracking-[0.12em] text-[var(--color-forest)]"
          >
            {pill}
          </li>
        ))}
      </ul>
    </>
  );
}
