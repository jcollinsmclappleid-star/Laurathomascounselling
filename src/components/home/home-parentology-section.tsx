import Image from "next/image";
import { HomeCtaPrimary } from "@/components/home/home-cta";
import { homeParentologyWorld } from "@/lib/home-copy";
import { hrefFromRegistry } from "@/lib/routes";

const parentologyHref = hrefFromRegistry("/parentology/");

export function HomeParentologySection() {
  return (
    <section
      className="flex h-full flex-col bg-[var(--color-clay)] px-5 py-6 md:px-8 md:py-8"
      data-world="parentology"
      aria-labelledby="parentology-world-heading"
    >
      <p className="text-[10px] uppercase tracking-[0.16em] text-[var(--color-terracotta)]">
        Parentology World
      </p>
      <Image
        src="/images/parentology/parentology-logo.webp"
        alt="Parentology World"
        width={1075}
        height={718}
        className="mt-4 h-auto w-[min(240px,78%)] object-contain object-left"
      />
      <p className="mt-5 text-[11px] uppercase tracking-[0.14em]">
        {homeParentologyWorld.strap}
      </p>
      <h2
        id="parentology-world-heading"
        className="mt-3 font-serif text-[clamp(28px,4vw,40px)] leading-[1.05] tracking-[-0.5px]"
      >
        {homeParentologyWorld.headline}
      </h2>
      <p className="mt-4 font-serif text-[clamp(20px,3vw,26px)] leading-snug tracking-[-0.3px]">
        {homeParentologyWorld.subline}
      </p>
      <p className="mt-4 text-[15px] leading-relaxed">{homeParentologyWorld.body}</p>
      <p className="mt-3 text-[15px] leading-relaxed">{homeParentologyWorld.detail}</p>
      <div className="mt-6">
        <HomeCtaPrimary href={parentologyHref}>Explore Parentology</HomeCtaPrimary>
      </div>
      <div className="relative mt-6 aspect-[4/3] w-full overflow-hidden">
        <Image
          src="/images/family.webp"
          alt="A mother and daughter talking together at home"
          fill
          className="object-cover object-[52%_30%]"
          sizes="(max-width: 1024px) 100vw, 480px"
        />
      </div>
    </section>
  );
}
