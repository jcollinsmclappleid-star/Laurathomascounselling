import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { verifiedCredentials } from "@/components/shell/site-nav";
import { hrefFromRegistry } from "@/lib/routes";

function PathwayCard({
  href,
  imageSrc,
  imageAlt,
  kicker,
  title,
  description,
  variant,
}: {
  href: string;
  imageSrc: string;
  imageAlt: string;
  kicker: string;
  title: string;
  description: string;
  variant: "counselling" | "parentology";
}) {
  return (
    <Link
      href={href}
      className="group relative block min-h-[120px] overflow-hidden text-[#fff8ea] max-[568px]:min-h-[115px] sm:min-h-[128px] md:min-h-[185px] lg:min-h-[285px]"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        className="object-cover object-[65%_38%] transition duration-700 group-hover:scale-[1.02] md:object-center"
        sizes="(max-width: 768px) 100vw, 50vw"
      />
      <div
        className={`absolute inset-0 ${
          variant === "parentology"
            ? "bg-gradient-to-r from-[#72372cd9] to-[#72372c12]"
            : "bg-gradient-to-r from-[#123b32c7] to-[#123b3215]"
        }`}
        aria-hidden="true"
      />
      <div className="relative z-[1] flex h-full flex-col justify-between p-[13px] pb-0 pr-14 sm:p-[18px] md:inset-0 md:absolute md:p-7 lg:p-9">
        <div>
          <p className="text-[9px] uppercase tracking-[0.15em] sm:text-[9px] md:text-[8px] lg:text-[10px] lg:tracking-[0.24em]">
            {kicker}
          </p>
          <h2 className="mt-1.5 font-serif text-[33px] leading-none tracking-[-0.6px] sm:mt-2 sm:text-4xl md:text-[49px] lg:mt-4 lg:text-[62px] lg:tracking-[-2px]">
            {title}
          </h2>
          <p className="mt-1.5 max-w-[calc(100%-3rem)] text-[11px] leading-snug sm:max-w-[250px] md:max-w-[285px] md:text-[10px] lg:text-[11px]">
            {description}
          </p>
        </div>
        <span
          className="absolute bottom-0 right-0 grid h-[42px] w-[42px] place-items-center rounded-full border border-white/60 text-xl md:h-[46px] md:w-[46px] md:text-[23px]"
          aria-hidden="true"
        >
          ↗
        </span>
      </div>
    </Link>
  );
}

function MobileEditorialSections() {
  return (
    <div className="md:hidden">
      <section className="bg-[var(--color-cream)] px-[23px] py-12">
        <div className="grid gap-8">
          <div className="relative h-[340px] w-full overflow-hidden">
            <Image
              src="/images/laura.webp"
              alt="Laura Thomas"
              fill
              className="object-cover object-[50%_20%]"
              sizes="100vw"
            />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.15em] leading-relaxed">
              Laura Thomas / Counsellor, parenting specialist &amp; author
            </p>
            <h2 className="mt-4 font-serif text-[47px] leading-[1.02] tracking-[-1px]">
              One person.
              <br />
              A connected
              <br />
              professional life.
            </h2>
            <p className="mt-6 max-w-xl text-[15px] leading-relaxed">
              Counselling for individuals, couples and families. Specialist parenting
              insight. Published books that explore the teenage years.
            </p>
            <Link
              href={hrefFromRegistry("/qualified-counsellor/")}
              className="mt-6 inline-flex min-h-12 items-center justify-between gap-10 border border-[#7e8b72] px-[21px] py-3 text-sm"
            >
              About Laura
              <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-sage)] px-[23px] py-12">
        <p className="text-[9px] uppercase tracking-[0.15em]">
          Counselling in Wixams, Bedford &amp; online
        </p>
        <h2 className="mt-4 font-serif text-[47px] leading-[1.02] tracking-[-1px]">
          The support that
          <br />
          fits your situation.
        </h2>
        <div className="mt-9 space-y-9">
          {[
            {
              title: "For you.",
              body: "Individual counselling and online sessions.",
              href: "/counselling/",
              label: "Explore individual counselling",
            },
            {
              title: "For your relationship.",
              body: "Couples counselling and family therapy.",
              href: "/couples-counselling/",
              label: "Explore relationship support",
            },
            {
              title: "For a young person.",
              body: "A clear introduction to counselling for young people.",
              href: "/counselling-for-young-people/",
              label: "Explore young-person counselling",
            },
          ].map((item) => (
            <article key={item.href} className="border-t border-[#a3ad95] pt-6">
              <h3 className="font-serif text-[34px] leading-tight tracking-[-0.7px]">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px]">{item.body}</p>
              <Link
                href={hrefFromRegistry(item.href)}
                className="mt-6 inline-block border-b border-[#a3ad95] pb-3 text-[13px]"
              >
                {item.label} ↗
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[var(--color-forest)] px-[23px] py-12 text-[#fff3dd]">
        <p className="text-[9px] uppercase tracking-[0.15em]">
          The books behind the conversation
        </p>
        <h2 className="mt-4 font-serif text-[47px] leading-[1.02] tracking-[-1px]">
          Published expertise.
          <br />
          Everyday questions.
        </h2>
        <p className="mt-6 max-w-md text-[15px] leading-relaxed">
          Discover Laura&apos;s two parenting books, the ideas they explore and original
          articles that bring her perspective to the questions parents ask.
        </p>
        <Link
          href={hrefFromRegistry("/books/")}
          className="mt-6 inline-flex min-h-12 items-center justify-between gap-10 border border-[#e8dbc0] px-[21px] py-3 text-sm"
        >
          Explore the books
          <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
        </Link>
        <div className="mt-8 flex justify-center gap-8 py-2">
          <Image
            src="/images/book-girls.webp"
            alt="Parenting Unstoppable Girls cover"
            width={133}
            height={200}
            className="-rotate-6 object-contain drop-shadow-lg"
          />
          <Image
            src="/images/book-boys.webp"
            alt="Parenting Teen Boys with Confidence cover"
            width={133}
            height={200}
            className="mt-8 rotate-6 object-contain drop-shadow-lg"
          />
        </div>
      </section>

      <section className="bg-[var(--color-cream)] px-[23px] py-12">
        <p className="text-[9px] uppercase tracking-[0.15em]">
          Original expert insights
        </p>
        <h2 className="mt-4 font-serif text-[47px] leading-[1.02] tracking-[-1px]">
          Questions parents ask.
          <br />A thoughtful place to begin.
        </h2>
        <div className="mt-10 space-y-10">
          <article>
            <div className="relative h-[310px] w-full overflow-hidden">
              <Image
                src="/images/family.webp"
                alt="Concept parent and teenage daughter"
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
            <h3 className="mt-6 font-serif text-[42px] leading-tight">
              How do I reconnect
              <br />
              with my teenage daughter?
            </h3>
            <p className="mt-4 text-[15px]">
              Proposed expert article connecting communication, Laura&apos;s book and
              relevant parent support.
            </p>
            <Link
              href={hrefFromRegistry("/counselling-blog/")}
              className="mt-6 inline-flex min-h-12 items-center justify-between gap-10 border border-[#7e8b72] px-[21px] py-3 text-sm"
            >
              Read the article
              <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
            </Link>
          </article>
          <article>
            <div className="relative h-[310px] w-full overflow-hidden">
              <Image
                src="/images/detail.webp"
                alt="Detail from Laura's existing practice"
                fill
                className="object-cover object-[65%_45%]"
                sizes="100vw"
              />
            </div>
            <h3 className="mt-6 font-serif text-[42px] leading-tight">
              Where can a difficult
              <br />
              conversation begin?
            </h3>
            <p className="mt-4 text-[15px]">
              Explore the RESET framework and the questions it invites parents to
              consider.
            </p>
            <Link
              href={hrefFromRegistry("/parentology/")}
              className="mt-6 inline-flex min-h-12 items-center justify-between gap-10 border border-[#7e8b72] px-[21px] py-3 text-sm"
            >
              Explore RESET
              <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}

export function HomePageContent() {
  return (
    <>
      {/* Concept imagery: room.webp and family.webp require client approval before production. */}
      <section className="relative min-h-[220px] overflow-hidden bg-[var(--color-forest)] text-[#fff8e9] max-[568px]:min-h-[210px] sm:min-h-[280px] md:min-h-[475px] lg:min-h-[670px]">
        <div className="absolute inset-0">
          <Image
            src="/images/room.webp"
            alt="Concept counselling interior"
            fill
            priority
            className="object-cover object-[65%_55%] brightness-[0.48] saturate-[0.7]"
            sizes="100vw"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#102f2cf0] to-transparent to-85%"
            aria-hidden="true"
          />
        </div>

        <div className="relative z-[1] grid lg:grid-cols-[1fr_auto] lg:items-start">
          <div className="px-[19px] pb-3 pt-4 sm:px-6 md:px-10 md:pb-12 md:pt-10 lg:max-w-3xl lg:px-[65px] lg:pb-[42px] lg:pt-[42px]">
            <p className="max-w-full text-[9px] uppercase tracking-[0.14em] leading-snug sm:text-[8px] md:text-[10px] md:tracking-[0.24em]">
              Counselling in Bedford · Specialist parenting support
            </p>
            <h1 className="mt-2.5 font-serif text-[clamp(31px,9.7vw,38px)] leading-[0.98] tracking-[-0.8px] sm:mt-4 md:mt-6 md:max-w-[345px] md:text-[44px] md:tracking-[-1px] lg:mt-[23px] lg:max-w-[940px] lg:text-[103px] lg:tracking-[-2px]">
              Different journeys.
              <br />
              The right support
              <br />
              <em className="not-italic">for you.</em>
            </h1>
            <p className="mt-2.5 max-w-full text-xs leading-snug md:mt-[18px] md:max-w-[330px] md:text-[11px] lg:mt-[25px] lg:max-w-[475px] lg:text-sm lg:leading-[1.8]">
              <span className="hidden lg:inline">
                Counselling for yourself, your relationship or your family.
                <br />A connected world of support, with Laura Thomas.
              </span>
              <span className="lg:hidden">
                Counselling and specialist parenting support.
                <br />
                Bedford and online, with Laura Thomas.
              </span>
            </p>
            <Link
              href={hrefFromRegistry("/qualified-counsellor/")}
              className="mt-5 hidden items-center gap-11 border-b border-[#e6d7b1] pb-2 text-xs lg:inline-flex"
            >
              Meet Laura
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <div className="relative mx-auto hidden w-[292px] shrink-0 pb-10 lg:absolute lg:right-[78px] lg:top-[172px] lg:block lg:pb-0">
            <div className="relative h-[396px] w-full overflow-hidden rounded-t-[150px] shadow-[0_20px_50px_#071e2140]">
              <Image
                src="/images/laura.webp"
                alt="Laura Thomas"
                fill
                className="object-cover object-[50%_30%]"
                sizes="292px"
              />
            </div>
            <p className="mt-4 text-center text-[9px] tracking-wide">
              Laura Thomas · M.Ed · MNCPS (Accred.)
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-[2] -mt-3 grid grid-cols-1 gap-2.5 px-3 sm:gap-3 md:-mt-[18px] md:grid-cols-2 md:gap-3.5 md:px-6 lg:-mt-[25px] lg:gap-3.5 lg:px-6">
        <PathwayCard
          href={hrefFromRegistry("/services/")}
          imageSrc="/images/room.webp"
          imageAlt="Concept counselling interior"
          kicker="Counselling & therapeutic support"
          title="A space for you."
          description="Individual, couples, family and young-person counselling."
          variant="counselling"
        />
        <PathwayCard
          href={hrefFromRegistry("/parentology/")}
          imageSrc="/images/family.webp"
          imageAlt="Concept family photograph"
          kicker="Parentology · Parents & teenagers"
          title="Growing together."
          description="Specialist guidance for the changing years of family life."
          variant="parentology"
        />
      </section>

      <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-4 text-[9px] uppercase tracking-[0.1em] md:px-10 md:py-6 md:text-[9px] md:tracking-[0.14em] lg:px-[65px]">
        {verifiedCredentials.map((line, index) => (
          <span
            key={line}
            className={index > 0 ? "hidden md:inline" : undefined}
          >
            {line}
          </span>
        ))}
      </div>

      <MobileEditorialSections />
    </>
  );
}
