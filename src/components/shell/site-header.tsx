"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { primaryNavLinks } from "@/components/shell/site-nav";

export function SiteHeader() {
  const pathname = usePathname();
  const isHomeOverlay = pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [closeMenu, menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const onForestBar = isHomeOverlay;

  return (
    <header
      className={cn(
        "z-50 w-full",
        onForestBar
          ? "absolute inset-x-0 top-0 border-b border-white/15 bg-[#102f2c]/94 text-[#fff8e9] backdrop-blur-sm md:bg-[#102f2c]/96"
          : "sticky top-0 border-b border-[#b7bda9] bg-[var(--color-cream)] text-[var(--color-forest)]",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-[var(--content-max)] items-center justify-between gap-4 px-[18px] md:px-10 lg:px-[65px]",
          onForestBar ? "h-16" : "h-16 md:h-[100px]",
        )}
      >
        <Link
          href="/"
          className={cn(
            "relative block shrink-0",
            onForestBar
              ? "h-11 w-[145px] md:h-12 md:w-[158px]"
              : "h-12 w-[158px] md:h-14 md:w-[185px]",
          )}
        >
          <Image
            src={
              onForestBar
                ? "/brand/laura-logo-nav-on-green.webp"
                : "/brand/laura-logo-nav-on-cream.webp"
            }
            alt="Laura Thomas Counselling"
            fill
            className="object-contain object-left"
            sizes="185px"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-6 text-xs xl:flex xl:gap-8"
          aria-label="Primary"
        >
          {primaryNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "inline-flex min-h-[44px] items-center py-3 leading-none transition hover:text-[var(--accent)]",
                onForestBar && "hover:text-white",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className={cn(
            "inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 text-xs xl:hidden",
            onForestBar && "text-[#fff8e9]",
          )}
          aria-expanded={menuOpen}
          aria-controls={panelId}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X aria-hidden="true" size={22} strokeWidth={1.8} />
          ) : (
            <>
              <span>Menu</span>
              <Menu aria-hidden="true" size={18} strokeWidth={1.8} />
            </>
          )}
        </button>
      </div>

      <div
        id={panelId}
        className={cn(
          "border-t border-[#b7bda9] bg-[var(--color-cream)] text-[var(--color-forest)] xl:hidden",
          !menuOpen && "hidden",
        )}
      >
        <nav className="flex flex-col px-[18px] py-4" aria-label="Mobile primary">
          {primaryNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex min-h-11 items-center border-b border-[var(--line)] py-3 text-base last:border-b-0"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
