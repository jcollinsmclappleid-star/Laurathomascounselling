import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type HomeCtaProps = {
  href: string;
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
};

export function HomeCtaPrimary({
  href,
  children,
  className,
  showArrow = true,
  tone = "forest",
}: HomeCtaProps & { tone?: "forest" | "onDark" }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.99]",
        tone === "onDark"
          ? "bg-[#fff8e9] text-[var(--color-forest)] hover:bg-white focus-visible:outline-[#fff8e9]"
          : "bg-[var(--color-forest)] text-[#fff8e9] hover:bg-[#1f4d42] focus-visible:outline-[var(--color-forest)]",
        className,
      )}
    >
      {children}
      {showArrow ? (
        <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
      ) : null}
    </Link>
  );
}

export function HomeCtaSecondary({
  href,
  children,
  className,
  showArrow = true,
  tone = "forest",
}: HomeCtaProps & { tone?: "forest" | "onDark" | "cream" }) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 active:scale-[0.99]",
        tone === "onDark" &&
          "border-[#fff8e9]/75 bg-transparent text-[#fff8e9] hover:border-white hover:bg-white/10 focus-visible:outline-[#fff8e9]",
        tone === "cream" &&
          "border-[#7e8b72] bg-[var(--color-cream)] text-[var(--color-forest)] hover:bg-[var(--soft-surface)] focus-visible:outline-[var(--color-forest)]",
        tone === "forest" &&
          "border-[var(--color-forest)]/35 bg-transparent text-[var(--color-forest)] hover:border-[var(--color-forest)] hover:bg-[var(--soft-surface)] focus-visible:outline-[var(--color-forest)]",
        className,
      )}
    >
      {children}
      {showArrow ? (
        <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
      ) : null}
    </Link>
  );
}
