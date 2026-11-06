import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  fullMobile?: boolean;
};

export function PrimaryButton({
  href,
  children,
  className,
  fullMobile,
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const classes = cn(
    "inline-flex h-12 min-h-[44px] items-center justify-center gap-2 rounded-lg px-5 text-sm font-semibold shadow-sm transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]",
    "border border-[var(--color-forest)] bg-[var(--color-forest)] text-[var(--color-cream)] hover:border-[var(--accent)] hover:bg-[#1f4d42]",
    fullMobile && "w-full sm:w-auto",
    className,
  );

  if (isExternal) {
    return (
      <a className={classes} href={href}>
        {children}
        <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
      <ArrowRight aria-hidden="true" size={16} strokeWidth={1.8} />
    </Link>
  );
}

export function SecondaryButton({
  href,
  children,
  className,
  fullMobile,
}: ButtonProps) {
  const isExternal = href.startsWith("http") || href.startsWith("mailto:");

  const classes = cn(
    "inline-flex h-12 min-h-[44px] items-center justify-center rounded-lg border px-5 text-sm font-semibold transition duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 focus:ring-offset-[var(--surface)]",
    "border-[var(--color-forest)]/25 bg-[var(--color-cream)] text-[var(--color-forest)] hover:border-[var(--color-forest)]/45 hover:bg-[var(--soft-surface)]",
    fullMobile && "w-full sm:w-auto",
    className,
  );

  if (isExternal) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <Link className={classes} href={href}>
      {children}
    </Link>
  );
}
