import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { HomeRoutePanelPulse } from "@/components/home/home-route-panel-pulse";

export function HomeRoutePanel({
  href,
  imageSrc,
  imageAlt,
  imagePosition,
  kicker,
  title,
  description,
  cta,
  variant,
}: {
  href: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
  kicker: string;
  title: string;
  description: string;
  cta: string;
  variant: "counselling" | "parentology";
}) {
  return (
    <HomeRoutePanelPulse>
      <Link
        href={href}
        className="group relative block min-h-[200px] overflow-hidden text-[#fff8ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)] sm:min-h-[240px]"
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={cn(
            "object-cover transition duration-700 group-hover:scale-[1.02] group-active:scale-[0.99]",
            imagePosition,
          )}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className={
            variant === "parentology"
              ? "absolute inset-0 bg-gradient-to-r from-[#72372cd9] to-[#72372c18]"
              : "absolute inset-0 bg-gradient-to-r from-[#123b32c7] to-[#123b3218]"
          }
          aria-hidden="true"
        />
        <div className="relative z-[1] flex h-full min-h-[200px] flex-col justify-between p-5 sm:min-h-[240px] sm:p-7">
          <div>
            <p className="text-[9px] uppercase tracking-[0.15em]">{kicker}</p>
            <h2 className="mt-2 font-serif text-[clamp(32px,8vw,52px)] leading-none tracking-[-0.6px]">
              {title}
            </h2>
            <p className="mt-2 max-w-md text-sm leading-snug">{description}</p>
          </div>
          <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-white/70 bg-white/10 px-4 py-2 text-[11px] uppercase tracking-[0.12em] backdrop-blur-sm transition group-hover:bg-white/20 group-active:scale-[0.98]">
            {cta}
            <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
          </span>
        </div>
      </Link>
    </HomeRoutePanelPulse>
  );
}
