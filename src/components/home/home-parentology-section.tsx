import Image from "next/image";
import { HomeCtaPrimary } from "@/components/home/home-cta";
import { homeParentologyWorld } from "@/lib/home-copy";
import { hrefFromRegistry } from "@/lib/routes";

const parentologyHref = hrefFromRegistry("/parentology/");

export function HomeParentologySection() {
  return (
    <section
      className="border-t border-[#c4a08e]/80 bg-[var(--color-clay)] px-[19px] py-12 md:px-10 lg:px-[65px]"
      aria-labelledby="parentology-world-heading"
      data-world="parentology"
    >
      <div className="mx-auto grid max-w-[var(--content-max)] items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.9fr)] lg:gap-14">
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-terracotta)]">
            Parentology World
          </p>
          <Image
            src="/images/parentology/parentology-logo.webp"
            alt="Parentology World"
            width={1075}
            height={718}
            className="mt-4 h-auto w-[min(280px,78%)] object-contain object-left"
          />
          <p className="mt-5 text-[11px] uppercase tracking-[0.14em]">
            {homeParentologyWorld.strap}
          </p>
          <h2
            id="parentology-world-heading"
            className="mt-3 font-serif text-[clamp(32px,8vw,48px)] leading-[1.05] tracking-[-0.6px]"
          >
            {homeParentologyWorld.headline}
          </h2>
          <p className="mt-4 font-serif text-[clamp(22px,5vw,30px)] leading-snug tracking-[-0.3px]">
            {homeParentologyWorld.subline}
          </p>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed">
            {homeParentologyWorld.body}
          </p>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed">
            {homeParentologyWorld.detail}
          </p>
          <div className="mt-8">
            <HomeCtaPrimary href={parentologyHref}>Explore Parentology</HomeCtaPrimary>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="/images/family.webp"
            alt="A mother and daughter talking together at home"
            fill
            className="object-cover object-[52%_30%]"
            sizes="(max-width: 1024px) 100vw, 520px"
          />
        </div>
      </div>
    </section>
  );
}
