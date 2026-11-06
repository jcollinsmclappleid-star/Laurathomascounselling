"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { parentologyHome, parentologyNav } from "@/lib/parentology-nav";
import { cn } from "@/lib/utils";

function normalize(path: string) {
  if (!path || path === "/") {
    return "/";
  }
  return path.endsWith("/") ? path : `${path}/`;
}

export function ParentologySubnav() {
  const pathname = normalize(usePathname() ?? "/");
  const onHub = pathname === parentologyHome;

  return (
    <nav
      aria-label="Parenting"
      className="sticky top-16 z-40 border-b border-[#c8cbb9]/80 bg-[var(--color-cream)]/95 backdrop-blur-sm md:top-[100px]"
    >
      <div className="mx-auto flex max-w-[var(--content-max)] flex-wrap items-center gap-x-1 gap-y-1 px-[19px] py-2 md:px-10 lg:px-[65px]">
        <Link
          href={parentologyHome}
          aria-current={onHub ? "page" : undefined}
          className={cn(
            "inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium",
            onHub
              ? "bg-[var(--color-forest)] text-[#fff8e9]"
              : "text-[var(--color-forest)] hover:bg-[var(--color-sage)]",
          )}
        >
          Parenting &amp; teenagers
        </Link>
        {parentologyNav.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active ? "page" : undefined}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full px-3 text-sm",
                active
                  ? "bg-[var(--color-clay)] font-medium text-[var(--color-forest)]"
                  : "text-[var(--color-forest)] hover:bg-[var(--color-sage)]",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
