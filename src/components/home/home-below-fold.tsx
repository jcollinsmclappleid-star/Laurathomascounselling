import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { HomeRoutePanel } from "@/components/home/home-route-panel";
import { MeetLauraPanel } from "@/components/home/meet-laura-panel";
import { hrefFromRegistry } from "@/lib/routes";

const aboutHref = hrefFromRegistry("/qualified-counsellor/");
const counsellingHref = hrefFromRegistry("/services/");
const individualHref = hrefFromRegistry("/counselling/");
const couplesFamilyHref = hrefFromRegistry("/couples-counselling/");
const parentologyHref = hrefFromRegistry("/parentology/");
const booksHref = hrefFromRegistry("/books/");
const girlsBookHref = hrefFromRegistry("/books/parenting-unstoppable-girls/");
const boysBookHref = hrefFromRegistry(
  "/books/parenting-teen-boys-with-confidence/",
);
const faqHref = hrefFromRegistry("/faq-and-fees/");
const contactHref = hrefFromRegistry("/contact-me/");

const overwhelmPoints = [
  "Constantly overthinking or feeling on edge",
  "Exhausted and overwhelmed by everything going on",
  "Struggling with anxiety, low mood or confidence",
  "Finding relationships difficult or draining",
  "Feeling unsure how to support your child or family",
  "Just feeling stuck and not like yourself",
] as const;

export function HomeBelowFold() {
  return (
    <div className="bg-[var(--color-cream)]" id="home-main-content">
      <section
        className="border-t border-[#c8cbb9]/80 px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="how-i-can-help-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <p className="text-[9px] uppercase tracking-[0.15em]">How I can help</p>
          <h2
            id="how-i-can-help-heading"
            className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            Support when things feel overwhelming or hard to manage.
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
            You might be dealing with anxiety, stress, low mood, relationship
            challenges, or tension at home. It&apos;s not always clear what&apos;s
            driving it or how to change it. This is where we start to make sense
            of it — and find a way forward that works in real life.
          </p>
          <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
            <article className="border-t border-[#a3ad95] pt-6">
              <h3 className="font-serif text-[clamp(28px,6vw,36px)] leading-[1.05] tracking-[-0.5px]">
                Individual Support
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed">
                For when things feel heavy, confusing, or hard to manage on your
                own. You might be dealing with anxiety, low mood, stress, or
                feeling stuck in patterns that don&apos;t seem to shift. At times,
                it can feel like your thoughts are constant or everything feels a
                bit overwhelming. I help you make sense of what&apos;s going on,
                understand the patterns behind it, and find a way forward that
                feels clear and manageable.
              </p>
              <Link
                href={individualHref}
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm underline decoration-[#7e8b72] underline-offset-4"
              >
                Find out more
                <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
              </Link>
            </article>
            <article className="border-t border-[#a3ad95] pt-6">
              <h3 className="font-serif text-[clamp(28px,6vw,36px)] leading-[1.05] tracking-[-0.5px]">
                Couples &amp; Family Support
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed">
                For when communication breaks down and relationships start to feel
                strained. You might be going round in circles, having the same
                arguments, or feeling disconnected from each other. It can feel
                frustrating and exhausting trying to fix it without knowing how.
                We focus on understanding what&apos;s happening between you,
                improving communication, and finding practical ways to move
                forward together.
              </p>
              <Link
                href={couplesFamilyHref}
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm underline decoration-[#7e8b72] underline-offset-4"
              >
                Find out more
                <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
              </Link>
            </article>
            <article className="border-t border-[#a3ad95] pt-6">
              <h3 className="font-serif text-[clamp(28px,6vw,36px)] leading-[1.05] tracking-[-0.5px]">
                Teen &amp; Parent Support
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed">
                For when home life feels tense, unpredictable, or difficult to
                manage. You might be dealing with behaviour changes, emotional
                outbursts, anxiety, or feeling like you&apos;re constantly walking
                on eggshells. It&apos;s not always clear what&apos;s driving it — or
                how to respond. I help you understand what&apos;s really going on
                for your teen and give you clear, practical ways to respond so
                things feel calmer and more manageable at home.
              </p>
              <Link
                href={parentologyHref}
                className="mt-4 inline-flex min-h-11 items-center gap-2 text-sm underline decoration-[#7e8b72] underline-offset-4"
              >
                Visit Parentology
                <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
              </Link>
            </article>
          </div>
          <Link
            href={counsellingHref}
            className="mt-8 inline-flex min-h-11 items-center gap-2 border border-[#7e8b72] px-5 py-3 text-sm"
          >
            Explore all counselling services
            <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9]/80 bg-[var(--color-sage)] px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="overwhelm-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <h2
            id="overwhelm-heading"
            className="font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            Feeling overwhelmed, stuck or unsure what to do next?
          </h2>
          <ul className="mt-8 max-w-xl space-y-3 text-[15px] leading-relaxed">
            {overwhelmPoints.map((point) => (
              <li key={point} className="flex gap-3">
                <span
                  className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-forest)]"
                  aria-hidden="true"
                />
                {point}
              </li>
            ))}
          </ul>
          <h3 className="mt-10 font-serif text-[clamp(28px,7vw,40px)] leading-[1.05] tracking-[-0.5px]">
            You don&apos;t have to figure this out on your own
          </h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
            This isn&apos;t about just talking through your problems. We work
            together to understand what&apos;s going on, create a clear plan and
            support you in actually moving forward, in a way that fits your life.
          </p>
          <Link
            href={contactHref}
            className="mt-6 inline-flex min-h-11 items-center gap-2 border border-[#7e8b72] bg-[var(--color-cream)] px-5 py-3 text-sm transition hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)] active:scale-[0.99]"
          >
            Get started
            <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9]/80 px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="meet-laura-heading"
      >
        <div className="mx-auto grid max-w-[var(--content-max)] gap-8 md:grid-cols-[minmax(0,0.85fr)_1fr] md:items-start md:gap-12">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden md:mx-0 md:max-w-none">
            <Image
              src="/images/laura.webp"
              alt="Laura Thomas, counsellor and parenting specialist"
              fill
              className="object-cover object-[50%_22%]"
              sizes="(max-width: 768px) 340px, 360px"
            />
          </div>
          <div>
            <p className="text-[9px] uppercase tracking-[0.15em]">
              Meet Laura Thomas
            </p>
            <h2
              id="meet-laura-heading"
              className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
            >
              Welcome — I&apos;m Laura.
            </h2>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed">
              I offer counselling in Bedford for adults, families, couples and
              young people. My aim is to help you feel more content and at ease
              in your life. I offer long and short-term therapy depending on what
              you would like to get out of our sessions — private counselling
              offers flexibility by working on what you bring, in your own time
              and at your own pace.
            </p>
            <p className="mt-4 max-w-xl text-[15px] leading-relaxed">
              My interest in human behaviour has been with me for over 22 years.
              After studying Psychology, I began working in mental health and
              went on to work with young people, families and adults across
              education, local authorities and charities. That path led me to
              train as a counsellor and, alongside roles in schools and mental
              health services, I now run my private practice — support that is
              personal, responsive and focused on what actually helps.
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.12em] text-[var(--text-muted)]">
              M.Ed · MNCPS (Accred.)
            </p>
            <Link
              href={aboutHref}
              className="mt-6 inline-flex min-h-11 items-center gap-2 border border-[#7e8b72] px-5 py-3 text-sm transition hover:bg-[var(--soft-surface)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)] active:scale-[0.99]"
            >
              Read more about me
              <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9]/80 bg-[var(--soft-surface)] px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="location-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <p className="text-[9px] uppercase tracking-[0.15em]">Location</p>
          <h2
            id="location-heading"
            className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            Counselling in Wixams, near Bedford
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
            I&apos;m based in the village of Wixams, four miles south of Bedford
            — easily accessible from the M1, A421 and A6. I have a comfortable,
            quiet, separate space away from the house, with online sessions
            available when that suits you better.
          </p>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9]/80 px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="faq-teaser-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <p className="text-[9px] uppercase tracking-[0.15em]">
            Frequently asked questions
          </p>
          <h2
            id="faq-teaser-heading"
            className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            Questions before you get in touch?
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
            Coming to counselling can feel nerve-wracking — it&apos;s
            understandable to wonder what to expect, whether you can open up to
            someone new, or how sessions work for couples and young people. I get
            it.
          </p>
          <ul className="mt-6 max-w-xl space-y-2 text-[15px] leading-relaxed text-[var(--text-muted)]">
            <li>What can I expect?</li>
            <li>I don&apos;t think I can open up to a stranger.</li>
            <li>How does couple counselling work?</li>
            <li>What happens if you are seeing my child?</li>
          </ul>
          <Link
            href={faqHref}
            className="mt-6 inline-flex min-h-11 items-center gap-2 border border-[#7e8b72] px-5 py-3 text-sm"
          >
            Read FAQs &amp; fees
            <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9]/80 bg-[var(--color-sage)] px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="books-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <p className="text-[9px] uppercase tracking-[0.15em]">Books</p>
          <h2
            id="books-heading"
            className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            Parenting books for real family conversations.
          </h2>
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed">
            Take some time out, grab a coffee and browse writing for adults and
            young people — regularly updated on the blog too.
          </p>
          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <article className="flex flex-col">
              <Link
                href={girlsBookHref}
                className="group relative mx-auto aspect-[2/3] w-full max-w-[200px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
              >
                <Image
                  src="/images/book-girls.webp"
                  alt="Cover: Parenting Unstoppable Girls"
                  fill
                  className="object-contain drop-shadow-lg transition group-hover:scale-[1.02] group-active:scale-[0.99]"
                  sizes="200px"
                />
              </Link>
              <h3 className="mt-5 font-serif text-2xl tracking-[-0.4px]">
                Parenting Unstoppable Girls
              </h3>
              <Link
                href={girlsBookHref}
                className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm underline decoration-[#7e8b72] underline-offset-4"
              >
                View book details
                <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
              </Link>
            </article>
            <article className="flex flex-col">
              <Link
                href={boysBookHref}
                className="group relative mx-auto aspect-[2/3] w-full max-w-[200px] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
              >
                <Image
                  src="/images/book-boys.webp"
                  alt="Cover: Parenting Teen Boys with Confidence"
                  fill
                  className="object-contain drop-shadow-lg transition group-hover:scale-[1.02] group-active:scale-[0.99]"
                  sizes="200px"
                />
              </Link>
              <h3 className="mt-5 font-serif text-2xl tracking-[-0.4px]">
                Parenting Teen Boys with Confidence
              </h3>
              <Link
                href={boysBookHref}
                className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm underline decoration-[#7e8b72] underline-offset-4"
              >
                View book details
                <ArrowUpRight aria-hidden size={14} strokeWidth={1.8} />
              </Link>
            </article>
          </div>
          <Link
            href={booksHref}
            className="mt-8 inline-flex min-h-11 items-center gap-2 border border-[#7e8b72] px-5 py-3 text-sm"
          >
            Explore all books
            <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9]/80 px-[19px] py-12 md:px-10 lg:px-[65px]"
        aria-labelledby="routes-heading"
      >
        <div className="mx-auto max-w-[var(--content-max)]">
          <p className="text-[9px] uppercase tracking-[0.15em]">
            Two connected worlds
          </p>
          <h2
            id="routes-heading"
            className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
          >
            Choose counselling, Parentology or meet Laura.
          </h2>
          <div className="mt-8 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            <HomeRoutePanel
              href={counsellingHref}
              imageSrc="/images/room.webp"
              imageAlt="Concept counselling interior"
              imagePosition="object-[65%_40%]"
              kicker="Counselling & therapeutic support"
              title="A space for you."
              description="Individual, couples, family and young-person counselling."
              cta="Explore counselling"
              variant="counselling"
            />
            <HomeRoutePanel
              href={parentologyHref}
              imageSrc="/images/family.webp"
              imageAlt="Concept family photograph"
              imagePosition="object-[55%_35%]"
              kicker="Parentology · Parents & teenagers"
              title="Growing together."
              description="Specialist guidance for the changing years of family life."
              cta="Explore Parentology"
              variant="parentology"
            />
            <div className="md:col-span-2 lg:col-span-1">
              <MeetLauraPanel variant="cream" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-[#c8cbb9] bg-[var(--color-forest)] px-[19px] py-10 text-[#f4eddd] md:px-10 lg:px-[65px]"
        aria-labelledby="book-call-heading"
      >
        <div className="mx-auto flex max-w-[var(--content-max)] flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.14em]">
              Wixams, Bedford &amp; online
            </p>
            <h2
              id="book-call-heading"
              className="mt-2 font-serif text-[clamp(32px,8vw,48px)] leading-[1.02] tracking-[-0.6px]"
            >
              Book a free call
            </h2>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#f4eddd]/90">
              Contact me for a no-obligation chat to explore how counselling can
              help you.
            </p>
          </div>
          <Link
            href={contactHref}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 border border-[#e8dbc0]/80 px-5 py-3 text-sm transition hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff8e9] active:scale-[0.99]"
          >
            Book a free call
            <ArrowUpRight aria-hidden size={16} strokeWidth={1.8} />
          </Link>
        </div>
      </section>
    </div>
  );
}
