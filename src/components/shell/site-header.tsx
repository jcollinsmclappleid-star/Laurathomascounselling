"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { contactCta, primaryNavLinks } from "@/components/shell/site-nav";

export function SiteHeader() {
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

  return (
    <header className="sticky top-0 z-50 border-b border-[#b7bda9] bg-[var(--color-cream)] text-[var(--color-forest)]">
      <div className="mx-auto flex h-16 max-w-[var(--content-max)] items-center justify-between gap-4 px-[18px] md:h-[100px] md:px-10 lg:px-[65px]">
        <Link
          href="/"
          className="relative block h-[60px] w-[193px] shrink-0 md:h-[88px] md:w-[245px]"
        >
          <Image
            src="/brand/original-00-00.png"
            alt="Laura Thomas Counselling"
            fill
            className="object-contain object-left"
            sizes="(max-width: 768px) 193px, 245px"
            priority
          />
        </Link>

        <nav
          className="hidden items-center gap-8 text-xs md:flex lg:gap-9"
          aria-label="Primary"
        >
          {primaryNavLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-h-[44px] py-3 leading-none transition hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={contactCta.href}
            className="inline-flex min-h-[44px] items-center gap-1.5 border border-[#657a69]/80 px-[22px] py-3 text-xs font-medium transition hover:border-[var(--color-forest)] hover:bg-[var(--soft-surface)]"
          >
            {contactCta.label}
            <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.8} />
          </Link>
        </nav>

        <button
          ref={menuButtonRef}
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 text-xs md:hidden"
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
          "border-t border-[#b7bda9] bg-[var(--color-cream)] md:hidden",
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
          <Link
            href={contactCta.href}
            className="mt-3 inline-flex min-h-11 items-center justify-center gap-2 border border-[#657a69]/80 px-5 py-3 text-sm font-medium"
            onClick={closeMenu}
          >
            {contactCta.label}
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
