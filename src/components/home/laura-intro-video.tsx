"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const POSTER = "/images/laura-video-poster.webp";
const VIDEO_SRC = "/media/laura-intro.mp4";

export function LauraIntroVideo({ className }: { className?: string }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <div className={cn("relative aspect-video w-full overflow-hidden bg-[#102f2c]", className)}>
        <video
          className="h-full w-full object-cover"
          controls
          playsInline
          preload="metadata"
          poster={POSTER}
        >
          <source src={VIDEO_SRC} type="video/mp4" />
          Your browser does not support embedded video.
        </video>
      </div>
    );
  }

  return (
    <button
      type="button"
      className={cn(
        "group relative aspect-video w-full overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]",
        className,
      )}
      onClick={() => setActive(true)}
      aria-label="Play video: Laura Thomas introduces her counselling practice"
    >
      <Image
        src={POSTER}
        alt=""
        fill
        className="object-cover object-[50%_35%]"
        sizes="(max-width: 768px) 100vw, 640px"
        aria-hidden
      />
      <span
        className="absolute inset-0 bg-gradient-to-t from-[#102f2c]/55 via-[#102f2c]/15 to-transparent"
        aria-hidden="true"
      />
      <span className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-[#fff8e9]">
        <span className="grid h-14 w-14 place-items-center rounded-full border border-white/70 bg-[#102f2c]/45 backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-[#102f2c]/60">
          <Play aria-hidden size={26} fill="currentColor" className="ml-0.5" />
        </span>
        <span className="text-[11px] uppercase tracking-[0.14em]">
          Watch Laura introduce her practice
        </span>
      </span>
    </button>
  );
}
