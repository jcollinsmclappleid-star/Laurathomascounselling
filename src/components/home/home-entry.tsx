"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import {
  useAffordancePulse,
  usePrefersReducedMotion,
} from "@/components/home/affordance-pulse";
import { hrefFromRegistry } from "@/lib/routes";
import { cn } from "@/lib/utils";

const counsellingHref = hrefFromRegistry("/services/");
const parentologyHref = hrefFromRegistry("/parentology/");
const meetLauraHref = hrefFromRegistry("/qualified-counsellor/");

const DOORWAY_HERO = {
  src: "/images/laura-doorway-hero.webp",
  alt: "Laura Thomas at the entrance to her counselling space",
  objectPosition: "object-[48%_20%]",
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
        "relative min-h-0 min-w-0 flex-1 overflow-hidden",
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
          "group relative flex h-full min-h-[44px] w-full flex-col text-[#fff8ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white/90 active:opacity-95",
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
        <div className="relative z-[1] flex h-full flex-col justify-between p-3 pb-2 sm:p-[18px] md:p-4 lg:p-6">
          <div className="pr-10">
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
        className="relative flex h-[100svh] min-h-0 w-full flex-col overflow-hidden bg-[#102f2c] lg:grid lg:grid-cols-2 lg:grid-rows-2"
        aria-label="Choose your path"
      >
        <motion.div
          className="relative flex min-h-0 flex-[1.05] flex-col overflow-hidden text-[#fff8e9] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:flex-none"
          {...containerMotion}
        >
          <div className="relative z-[1] flex min-h-0 flex-1 flex-col px-[19px] pb-2 pt-[3.625rem] sm:px-6 sm:pb-3 sm:pt-[3.875rem] md:px-10 md:pb-4 md:pt-16 lg:px-[65px] lg:pb-6 lg:pt-[4.375rem]">
            <div className="grid min-h-0 flex-1 grid-cols-[minmax(0,1fr)_minmax(108px,34%)] items-start gap-x-3 gap-y-2 sm:grid-cols-[minmax(0,1fr)_minmax(120px,32%)] sm:gap-x-4 lg:grid-cols-2 lg:items-center lg:gap-x-8 lg:gap-y-4">
              <motion.h1
                className="col-span-2 mt-1.5 font-serif leading-[0.98] tracking-[-0.8px] lg:col-span-1 lg:col-start-1 lg:mt-0 lg:tracking-[-2px]"
                {...itemMotion}
              >
                <span className="block max-w-full text-[9px] font-sans uppercase tracking-[0.14em] leading-snug lg:text-[10px] lg:tracking-[0.24em]">
                  Counselling in Bedford · Specialist parenting support
                </span>
                <span className="mt-1.5 block text-[clamp(26px,7.6vw,36px)] md:text-[40px] md:tracking-[-1px] lg:mt-3 lg:text-[clamp(52px,4.2vw,88px)]">
                  Different journeys.
                  <br />
                  The right support
                  <br />
                  <em className="not-italic">for you.</em>
                </span>
              </motion.h1>

              <motion.div
                className="relative col-start-2 row-start-2 row-span-3 aspect-[3/4] w-full min-h-[140px] overflow-hidden sm:min-h-[168px] lg:col-start-2 lg:row-span-4 lg:row-start-1 lg:min-h-0 lg:self-stretch"
                {...itemMotion}
              >
                <Image
                  src={DOORWAY_HERO.src}
                  alt={DOORWAY_HERO.alt}
                  fill
                  priority
                  className={cn("object-cover", DOORWAY_HERO.objectPosition)}
                  sizes="(max-width: 1024px) 34vw, 360px"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#102f2c]/35 lg:bg-gradient-to-r lg:from-[#102f2c]/25 lg:to-transparent"
                  aria-hidden="true"
                />
              </motion.div>

              <motion.div
                className="col-start-1 row-start-2 lg:col-start-1 lg:row-start-2"
                {...itemMotion}
              >
                <p className="max-w-full text-xs leading-snug md:text-[11px] lg:max-w-[475px] lg:text-sm lg:leading-[1.8]">
                  <span className="hidden lg:inline">
                    Counselling for yourself, your relationship or your family.
                    <br />A connected world of support, with Laura Thomas.
                  </span>
                  <span className="lg:hidden">
                    Counselling and specialist parenting support.
                    <br />
                    Bedford and online, with Laura Thomas.
                  </span>
                </p>
              </motion.div>

              <motion.div
                className="col-start-1 row-start-3 flex flex-col gap-2 lg:row-start-3"
                {...itemMotion}
              >
                <p className="text-[10px] uppercase tracking-[0.12em] text-[#fff8e9]/90">
                  Choose where to begin
                </p>
                <Link
                  href={meetLauraHref}
                  className="inline-flex min-h-11 w-fit items-center gap-2 border-b border-[#fff8e9]/70 pb-1 text-[11px] uppercase tracking-[0.12em] transition hover:border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff8e9] active:opacity-90"
                  onClick={(event) => {
                    if (expanding) {
                      event.preventDefault();
                    }
                  }}
                >
                  Meet Laura Thomas
                  <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <div className="flex min-h-0 flex-1 flex-col lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <WorldPanel
            panelId="counselling"
            href={counsellingHref}
            imageSrc="/images/room.webp"
            imageAlt="Concept counselling interior"
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
            imageAlt="Concept family photograph"
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

      <p className="border-t border-[#c8cbb9]/80 px-5 py-3 text-center text-[9px] uppercase tracking-[0.14em] text-[var(--color-forest)] md:px-10 md:py-4">
        M.Ed · MNCPS (Accred.)
      </p>
    </>
  );
}
