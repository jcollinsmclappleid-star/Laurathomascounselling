"use client";

import Image from "next/image";
import { Play } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Click-to-load YouTube player. The iframe is not requested until the
 * visitor asks to play. Captions and a full transcript are not confirmed.
 */
export function ClickToLoadVideo({
  providerId,
  title,
  posterSrc,
  className,
}: {
  providerId: string;
  title: string;
  posterSrc: string;
  className?: string;
}) {
  const [active, setActive] = useState(false);
  const watchUrl = `https://www.youtube.com/watch?v=${providerId}`;
  const embedUrl = `https://www.youtube-nocookie.com/embed/${providerId}?rel=0&autoplay=1`;

  return (
    <figure className={cn("max-w-3xl", className)}>
      <div className="relative aspect-video overflow-hidden rounded-[18px] bg-[#102f2c]">
        {active ? (
          <iframe
            src={embedUrl}
            title={title}
            className="absolute inset-0 h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <>
            <Image
              src={posterSrc}
              alt=""
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            <button
              type="button"
              className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center text-[#fff8e9] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff8e9]"
              onClick={() => setActive(true)}
            >
              <span
                className="absolute inset-0 bg-gradient-to-t from-[#102f2c]/50 via-transparent to-transparent"
                aria-hidden="true"
              />
              <span className="relative grid h-14 w-14 place-items-center rounded-full border border-white/70 bg-[#102f2c]/50">
                <Play aria-hidden size={26} fill="currentColor" className="ml-0.5" />
              </span>
              <span className="relative text-[11px] uppercase tracking-[0.14em]">
                Play {title}
              </span>
            </button>
          </>
        )}
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed">
        <p>{title}. Captions and a transcript have not been confirmed.</p>
        <p className="mt-2">
          <a
            href={watchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center underline decoration-[var(--color-forest)]/40 underline-offset-4 hover:decoration-[var(--color-forest)]"
          >
            Watch on YouTube
            <span className="sr-only"> (opens youtube.com in a new tab)</span>
          </a>
        </p>
        <p>Opens youtube.com in a new tab. The film is not downloaded onto this site.</p>
      </figcaption>
    </figure>
  );
}
