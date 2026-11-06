import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

const pillTones = {
  sage: "bg-[var(--color-sage)] text-[var(--color-forest)]",
  forest: "bg-[var(--color-forest)] text-[#fff8e9]",
  cream:
    "border border-[#173e35]/15 bg-[var(--color-cream)] text-[var(--color-forest)]",
  clay: "bg-[var(--color-clay)] text-[var(--color-forest)]",
  outline:
    "border border-[#173e35]/20 bg-transparent text-[var(--color-forest)]",
} as const;

export function DesignPill({
  children,
  icon: Icon,
  tone = "sage",
}: {
  children: ReactNode;
  icon?: LucideIcon;
  tone?: keyof typeof pillTones;
}) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[11px] uppercase tracking-[0.1em] ${pillTones[tone]}`}
    >
      {Icon ? <Icon aria-hidden size={13} strokeWidth={1.7} /> : null}
      {children}
    </span>
  );
}

export function CopyNote({
  icon: Icon,
  children,
  tone = "cream",
}: {
  icon: LucideIcon;
  children: ReactNode;
  tone?: "cream" | "sage";
}) {
  const surface =
    tone === "sage"
      ? "border border-[#173e35]/10 bg-[var(--color-sage)]"
      : "border border-[#173e35]/10 bg-[var(--color-cream)] shadow-[var(--shadow-soft)]";
  const mark = tone === "sage" ? "bg-[var(--color-cream)]" : "bg-[var(--color-sage)]";

  return (
    <div className={`flex items-start gap-3 rounded-2xl px-4 py-4 ${surface}`}>
      <span
        className={`grid h-10 w-10 shrink-0 place-items-center rounded-full text-[var(--color-forest)] ${mark}`}
      >
        <Icon aria-hidden size={18} strokeWidth={1.6} />
      </span>
      <p className="pt-1.5 text-[15px] leading-relaxed">{children}</p>
    </div>
  );
}
