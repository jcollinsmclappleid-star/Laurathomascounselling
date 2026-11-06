import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { hrefFromRegistry } from "@/lib/routes";
import { cn } from "@/lib/utils";
import { MeetLauraPanelPulse } from "@/components/home/meet-laura-panel-pulse";

const aboutHref = hrefFromRegistry("/qualified-counsellor/");

export function MeetLauraPanel({
  variant = "hero",
}: {
  variant?: "hero" | "cream";
}) {
  const isHero = variant === "hero";

  return (
    <MeetLauraPanelPulse>
      <Link
        href={aboutHref}
        className={cn(
          "group relative flex min-h-[88px] w-full overflow-hidden text-[#fff8ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff8e9]",
          isHero
            ? "bg-gradient-to-r from-[#123b32e8] via-[#123b32d4] to-[#123b32b8] ring-1 ring-white/15"
            : "min-h-[200px] bg-[var(--color-forest)] ring-1 ring-[#c8cbb9]/40 sm:min-h-[240px]",
        )}
      >
        <div
          className={cn(
            "relative shrink-0 overflow-hidden",
            isHero
              ? "w-[88px] sm:w-[100px]"
              : "w-[38%] min-w-[120px] max-w-[200px]",
          )}
        >
          <Image
            src="/images/laura.webp"
            alt=""
            fill
            className="object-cover object-[50%_22%]"
            sizes={isHero ? "100px" : "200px"}
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-transparent to-[#123b32]/55"
            aria-hidden="true"
          />
        </div>
        <div
          className={cn(
            "relative z-[1] flex flex-1 flex-col justify-center",
            isHero ? "px-3 py-2.5 sm:px-4 sm:py-3" : "p-5 sm:p-7",
          )}
        >
          <p className="text-[8px] uppercase tracking-[0.15em] sm:text-[9px] lg:text-[10px]">
            About Laura Thomas
          </p>
          <p
            className={cn(
              "font-serif leading-none tracking-[-0.5px]",
              isHero
                ? "mt-1 text-[22px] sm:text-[26px]"
                : "mt-2 text-[clamp(28px,7vw,40px)]",
            )}
          >
            Laura Thomas
          </p>
          <p
            className={cn(
              "leading-snug text-[#fff8ea]/90",
              isHero
                ? "mt-1 text-[10px] sm:text-[11px]"
                : "mt-2 max-w-md text-sm",
            )}
          >
            Counsellor &amp; parenting specialist · Bedford &amp; online
          </p>
          {!isHero ? (
            <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.12em] backdrop-blur-sm transition group-hover:bg-white/20 group-active:scale-[0.98]">
              Read about Laura
              <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
            </span>
          ) : (
            <span className="mt-2 inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.12em] text-[#fff8e9]/95">
              Meet Laura
              <ArrowUpRight aria-hidden size={12} strokeWidth={1.8} />
            </span>
          )}
        </div>
      </Link>
    </MeetLauraPanelPulse>
  );
}
