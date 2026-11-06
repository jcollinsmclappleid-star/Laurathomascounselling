import Image from "next/image";
import { HomeCtaPrimary, HomeCtaSecondary } from "@/components/home/home-cta";
import { homeParentologyWorld } from "@/lib/home-copy";
import { hrefFromRegistry } from "@/lib/routes";

const parentologyHref = hrefFromRegistry("/parentology/");
const contactHref = hrefFromRegistry("/contact-me/");

export function HomeParentologySection() {
  return (
    <section
      className="border-t border-[#c8cbb9]/80 bg-[var(--color-clay)] px-[19px] py-12 md:px-10 lg:px-[65px]"
      aria-labelledby="parentology-world-heading"
    >
      <div className="mx-auto grid max-w-[var(--content-max)] gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative aspect-[16/10] overflow-hidden lg:order-2">
          <Image
            src="/images/parentology/parentology-hero.webp"
            alt="Parentology World — parenting teens together"
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        </div>
        <div className="lg:order-1">
          <Image
            src="/images/parentology/parentology-logo.webp"
            alt="Parentology World"
            width={220}
            height={80}
            className="h-auto w-[min(220px,70%)] object-contain object-left"
          />
          <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-[var(--color-terracotta)]">
            {homeParentologyWorld.strap}
          </p>
          <h2
            id="parentology-world-heading"
            className="mt-3 font-serif text-[clamp(32px,8vw,48px)] leading-[1.05] tracking-[-0.6px]"
          >
            {homeParentologyWorld.headline}
          </h2>
          <p className="mt-3 font-serif text-xl tracking-[-0.3px] text-[var(--text-muted)]">
            {homeParentologyWorld.subline}
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed">
            {homeParentologyWorld.body}
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed">
            {homeParentologyWorld.detail}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <HomeCtaPrimary href={parentologyHref}>
              Visit Parentology gateway
            </HomeCtaPrimary>
            <HomeCtaSecondary href={contactHref} tone="cream">
              Book a free call
            </HomeCtaSecondary>
          </div>
        </div>
      </div>
    </section>
  );
}
