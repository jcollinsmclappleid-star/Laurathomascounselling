"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, type Variants } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { hrefFromRegistry } from "@/lib/routes";
import { cn } from "@/lib/utils";

const counsellingHref = hrefFromRegistry("/services/");
const parentologyHref = hrefFromRegistry("/parentology/");
const meetLauraHref = hrefFromRegistry("/qualified-counsellor/");

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

/** Only true when the OS explicitly requests reduced motion (not Motion’s SSR/null heuristic). */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

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

function HeroArt({
  reduced,
  ready,
}: {
  reduced: boolean;
  ready: boolean;
}) {
  const drift = !reduced && ready ? kenBurns : undefined;

  return (
    <div className="absolute inset-0">
      <motion.div className="absolute inset-0 lg:hidden" {...drift}>
        <Image
          src="/images/hero-entry-mobile.webp"
          alt="Concept garden path leading to an open gate"
          fill
          priority
          className="object-cover object-center brightness-[0.52] saturate-[0.85]"
          sizes="100vw"
        />
      </motion.div>
      <motion.div className="absolute inset-0 hidden lg:block" {...drift}>
        <Image
          src="/images/hero-entry-desktop.webp"
          alt="Concept garden path leading to an open gate"
          fill
          priority
          className="object-cover object-center brightness-[0.52] saturate-[0.85]"
          sizes="50vw"
        />
      </motion.div>
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#102f2cf0] via-[#102f2c99] to-transparent to-90%"
        aria-hidden="true"
      />
    </div>
  );
}

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
        href={href}
        className="group relative flex h-full min-h-[44px] w-full flex-col text-[#fff8ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white/90 active:opacity-95"
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
      {/* Concept imagery: room.webp, family.webp, hero-entry-*.webp require client approval. */}
      <section
        className="relative flex h-[100svh] min-h-0 w-full flex-col overflow-hidden bg-[var(--color-forest)] lg:grid lg:grid-cols-2 lg:grid-rows-2"
        aria-label="Choose your path"
      >
        <motion.div
          className="relative min-h-0 flex-[1.12] overflow-hidden text-[#fff8e9] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:flex-none"
          {...containerMotion}
        >
          <HeroArt reduced={reduced} ready={ready} />

          <div className="relative z-[1] flex h-full flex-col justify-end px-[19px] pb-3 pt-[3.75rem] sm:px-6 sm:pt-16 md:px-10 md:pb-8 md:pt-[4.5rem] lg:max-w-3xl lg:justify-end lg:px-[65px] lg:pb-10 lg:pt-[5.5rem]">
            <motion.p
              className="max-w-full text-[9px] uppercase tracking-[0.14em] leading-snug lg:text-[10px] lg:tracking-[0.24em]"
              {...itemMotion}
            >
              Counselling in Bedford · Specialist parenting support
            </motion.p>
            <motion.h1
              className="mt-1.5 font-serif text-[clamp(28px,8.2vw,38px)] leading-[0.98] tracking-[-0.8px] md:max-w-[345px] md:text-[44px] md:tracking-[-1px] lg:mt-4 lg:max-w-[940px] lg:text-[clamp(64px,5.5vw,103px)] lg:tracking-[-2px]"
              {...itemMotion}
            >
              Different journeys.
              <br />
              The right support
              <br />
              <em className="not-italic">for you.</em>
            </motion.h1>
            <motion.p
              className="mt-1.5 max-w-full text-xs leading-snug md:max-w-[330px] md:text-[11px] lg:mt-4 lg:max-w-[475px] lg:text-sm lg:leading-[1.8]"
              {...itemMotion}
            >
              <span className="hidden lg:inline">
                Counselling for yourself, your relationship or your family.
                <br />A connected world of support, with Laura Thomas.
              </span>
              <span className="lg:hidden">
                Counselling and specialist parenting support.
                <br />
                Bedford and online, with Laura Thomas.
              </span>
            </motion.p>
            <motion.p
              className="mt-2 text-[10px] uppercase tracking-[0.12em] text-[#fff8e9]/90 lg:mt-3"
              {...itemMotion}
            >
              Choose where to begin
            </motion.p>
          </div>

          <motion.div className="absolute bottom-3 right-3 z-[2] sm:bottom-4 sm:right-4 lg:bottom-auto lg:right-[78px] lg:top-[168px]" {...itemMotion}>
            <Link
              href={meetLauraHref}
              className="group block w-[88px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff8e9] sm:w-[96px] lg:w-[240px]"
              onClick={(event) => {
                if (expanding) {
                  event.preventDefault();
                }
              }}
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-full shadow-[0_16px_40px_#071e2140] ring-2 ring-[#fff8e9]/40 transition group-hover:ring-white/70 group-active:scale-[0.98] lg:rounded-t-[150px] lg:rounded-b-none lg:shadow-[0_20px_50px_#071e2140]">
                <Image
                  src="/images/laura.webp"
                  alt="Laura Thomas, counsellor"
                  fill
                  className="object-cover object-[50%_25%] lg:object-[50%_30%]"
                  sizes="(max-width: 1024px) 96px, 240px"
                />
              </div>
              <span className="mt-2 block rounded-full border border-white/60 bg-[#102f2c]/55 px-2 py-1 text-center text-[9px] leading-tight tracking-wide backdrop-blur-sm transition group-hover:bg-[#102f2c]/75">
                Meet Laura Thomas
              </span>
            </Link>
          </motion.div>
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
