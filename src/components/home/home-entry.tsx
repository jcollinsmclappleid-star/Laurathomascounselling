"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";
import { useCallback, useState } from "react";
import { hrefFromRegistry } from "@/lib/routes";
import { cn } from "@/lib/utils";

const counsellingHref = hrefFromRegistry("/services/");
const parentologyHref = hrefFromRegistry("/parentology/");

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

function useEntryMotion() {
  const reduced = useReducedMotion();
  return {
    reduced: Boolean(reduced),
    container: reduced
      ? {}
      : {
          variants: containerVariants,
          initial: "hidden" as const,
          animate: "visible" as const,
        },
    item: reduced
      ? {}
      : {
          variants: fadeUp,
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const },
        },
    imageDrift: reduced
      ? {}
      : {
          initial: { scale: 1.04 },
          animate: { scale: 1 },
          transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] as const },
        },
  };
}

function WorldPanel({
  href,
  panelId,
  imageSrc,
  imageAlt,
  kicker,
  title,
  description,
  variant,
  expanding,
  onSelect,
  reduced,
  motionConfig,
}: {
  href: string;
  panelId: string;
  imageSrc: string;
  imageAlt: string;
  kicker: string;
  title: string;
  description: string;
  variant: "counselling" | "parentology";
  expanding: string | null;
  onSelect: (id: string, href: string) => void;
  reduced: boolean;
  motionConfig: ReturnType<typeof useEntryMotion>;
}) {
  const isExpanding = expanding === panelId;

  return (
    <motion.div
      layout
      className={cn(
        "relative min-h-0 min-w-0 flex-1 overflow-hidden",
        isExpanding && "fixed inset-0 z-[70]",
      )}
      transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
    >
      <Link
        href={href}
        className="group relative block h-full min-h-[44px] w-full text-[#fff8ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white/80"
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
        aria-label={`${title} — ${description}`}
      >
        <motion.div className="absolute inset-0" {...motionConfig.imageDrift}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover object-[65%_38%] md:object-center"
            sizes="(max-width: 1024px) 50vw, 33vw"
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
        <motion.div
          className="relative z-[1] flex h-full flex-col justify-between p-3 pr-14 sm:p-[18px] md:p-5 lg:p-7"
          {...motionConfig.item}
        >
          <div>
            <p className="text-[8px] uppercase tracking-[0.15em] sm:text-[9px] md:text-[8px] lg:text-[10px] lg:tracking-[0.24em]">
              {kicker}
            </p>
            <h2 className="mt-1 font-serif text-[clamp(26px,6.5vw,36px)] leading-none tracking-[-0.6px] sm:mt-1.5 md:text-[42px] lg:mt-3 lg:text-[56px] lg:tracking-[-1.5px]">
              {title}
            </h2>
            <p className="mt-1 max-w-[calc(100%-2.5rem)] text-[10px] leading-snug sm:text-[11px] md:max-w-[240px] md:text-[10px] lg:text-[11px]">
              {description}
            </p>
          </div>
          <span
            className="absolute bottom-0 right-0 grid h-10 w-10 place-items-center rounded-full border border-white/60 text-lg md:h-[46px] md:w-[46px] md:text-[23px]"
            aria-hidden="true"
          >
            ↗
          </span>
        </motion.div>
      </Link>
    </motion.div>
  );
}

export function HomeEntry() {
  const router = useRouter();
  const motionConfig = useEntryMotion();
  const [expanding, setExpanding] = useState<string | null>(null);

  const handleWorldSelect = useCallback(
    (panelId: string, href: string) => {
      setExpanding(panelId);
      window.setTimeout(() => {
        router.push(href);
      }, 480);
    },
    [router],
  );

  const containerProps = motionConfig.container;

  return (
    <>
      {/* Concept imagery: room.webp and family.webp require client approval before production. */}
      <section
        className="relative flex h-[100svh] min-h-0 w-full flex-col overflow-hidden bg-[var(--color-forest)] lg:grid lg:grid-cols-2 lg:grid-rows-2"
        aria-label="Choose your path"
      >
        <motion.div
          className="relative min-h-0 flex-[1.15] overflow-hidden text-[#fff8e9] lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:flex-none"
          {...containerProps}
        >
          <div className="absolute inset-0">
            <motion.div className="absolute inset-0" {...motionConfig.imageDrift}>
              <Image
                src="/images/room.webp"
                alt="Concept counselling interior"
                fill
                priority
                className="object-cover object-[65%_55%] brightness-[0.48] saturate-[0.7]"
                sizes="100vw"
              />
            </motion.div>
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#102f2cf0] to-transparent to-85%"
              aria-hidden="true"
            />
          </div>

          <div className="relative z-[1] flex h-full flex-col justify-end px-[19px] pb-4 pt-16 sm:px-6 md:justify-center md:px-10 md:pb-10 md:pt-24 lg:max-w-3xl lg:justify-end lg:px-[65px] lg:pb-[42px] lg:pt-[120px]">
            <motion.p
              className="max-w-full text-[9px] uppercase tracking-[0.14em] leading-snug sm:text-[8px] md:text-[10px] md:tracking-[0.24em]"
              {...motionConfig.item}
            >
              Counselling in Bedford · Specialist parenting support
            </motion.p>
            <motion.h1
              className="mt-2 font-serif text-[clamp(28px,8.2vw,38px)] leading-[0.98] tracking-[-0.8px] sm:mt-2.5 md:mt-6 md:max-w-[345px] md:text-[44px] md:tracking-[-1px] lg:mt-[23px] lg:max-w-[940px] lg:text-[clamp(64px,5.5vw,103px)] lg:tracking-[-2px]"
              {...motionConfig.item}
            >
              Different journeys.
              <br />
              The right support
              <br />
              <em className="not-italic">for you.</em>
            </motion.h1>
            <motion.p
              className="mt-2 max-w-full text-xs leading-snug md:mt-[18px] md:max-w-[330px] md:text-[11px] lg:mt-[25px] lg:max-w-[475px] lg:text-sm lg:leading-[1.8]"
              {...motionConfig.item}
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
          </div>

          <motion.div
            className="pointer-events-none absolute bottom-3 right-3 z-[2] w-[88px] sm:bottom-4 sm:right-4 sm:w-[96px] md:w-[108px] lg:bottom-auto lg:right-[78px] lg:top-[172px] lg:w-[292px]"
            {...motionConfig.item}
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden rounded-full shadow-[0_16px_40px_#071e2140] ring-2 ring-[#fff8e9]/35 lg:rounded-t-[150px] lg:rounded-b-none lg:shadow-[0_20px_50px_#071e2140] lg:ring-0">
              <Image
                src="/images/laura.webp"
                alt="Laura Thomas, counsellor"
                fill
                className="object-cover object-[50%_25%] lg:object-[50%_30%]"
                sizes="(max-width: 1024px) 96px, 292px"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="flex min-h-0 flex-1 flex-col lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:flex lg:flex-col">
          <WorldPanel
            panelId="counselling"
            href={counsellingHref}
            imageSrc="/images/room.webp"
            imageAlt="Concept counselling interior"
            kicker="Counselling & therapeutic support"
            title="A space for you."
            description="Individual, couples, family and young-person counselling."
            variant="counselling"
            expanding={expanding}
            onSelect={handleWorldSelect}
            reduced={motionConfig.reduced}
            motionConfig={motionConfig}
          />
          <WorldPanel
            panelId="parentology"
            href={parentologyHref}
            imageSrc="/images/family.webp"
            imageAlt="Concept family photograph"
            kicker="Parentology · Parents & teenagers"
            title="Growing together."
            description="Specialist guidance for the changing years of family life."
            variant="parentology"
            expanding={expanding}
            onSelect={handleWorldSelect}
            reduced={motionConfig.reduced}
            motionConfig={motionConfig}
          />
        </div>
      </section>

      <p className="border-t border-[#c8cbb9]/80 px-5 py-3 text-center text-[9px] uppercase tracking-[0.14em] text-[var(--color-forest)] md:px-10 md:py-4">
        M.Ed · MNCPS (Accred.)
      </p>
    </>
  );
}
