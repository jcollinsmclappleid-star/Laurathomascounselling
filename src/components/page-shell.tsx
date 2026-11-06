import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  copy: string;
  className?: string;
};

export function PageHero({ eyebrow, title, copy, className }: PageHeroProps) {
  return (
    <section
      className={cn(
        "section-wash border-b border-[var(--line)] text-[var(--text)]",
        className,
      )}
    >
      <div className="mx-auto max-w-5xl px-5 py-20 sm:px-6 md:py-24 lg:px-8">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] md:text-6xl">
          {title}
        </h1>
        <p className="text-muted mt-6 max-w-3xl text-lg leading-8">{copy}</p>
      </div>
    </section>
  );
}

type ContentBandVariant = "default" | "wash" | "contained";

export function ContentBand({
  children,
  className,
  id,
  variant = "default",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: ContentBandVariant;
}) {
  return (
    <section
      id={id}
      className={cn(
        "px-5 py-16 sm:px-6 md:py-24 lg:px-8",
        variant === "default" && "bg-[var(--surface)]",
        variant === "wash" && "section-wash",
        variant === "contained" && "bg-[var(--surface)]",
        className,
      )}
    >
      <div className="mx-auto max-w-[var(--content-max)]">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  size = "default",
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  size?: "default" | "large";
}) {
  return (
    <div
      className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}
    >
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 font-serif leading-tight text-[var(--text)]",
          size === "large" ? "text-3xl md:text-5xl" : "text-3xl md:text-4xl",
        )}
      >
        {title}
      </h2>
      {copy ? (
        <p className="text-muted mt-5 text-base leading-8 md:text-lg">{copy}</p>
      ) : null}
    </div>
  );
}

export function SectionFrame({
  children,
  className,
  innerClassName,
}: {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div
      className={cn(
        "panel-elevated overflow-hidden rounded-[var(--radius-panel)]",
        className,
      )}
    >
      <div className={cn("p-6 md:p-8", innerClassName)}>{children}</div>
    </div>
  );
}
