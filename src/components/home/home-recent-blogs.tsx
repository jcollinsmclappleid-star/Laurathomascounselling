import Link from "next/link";
import { HomeCtaSecondary } from "@/components/home/home-cta";
import { homeRecentBlogs } from "@/lib/home-copy";
import { hrefFromRegistry } from "@/lib/routes";

const blogHref = hrefFromRegistry("/counselling-blog/");

export function HomeRecentBlogs() {
  return (
    <section
      className="border-t border-[#c8cbb9]/80 bg-[var(--color-cream)] px-[19px] py-8 md:px-10 lg:px-[65px]"
      aria-labelledby="recent-blogs-heading"
    >
      <div className="mx-auto flex max-w-[var(--content-max)] flex-col gap-4 md:flex-row md:items-start md:justify-between md:gap-10">
        <h2
          id="recent-blogs-heading"
          className="shrink-0 font-serif text-2xl tracking-[-0.3px]"
        >
          Recent blogs
        </h2>
        <ul className="min-w-0 flex-1 space-y-2 text-[15px] leading-snug">
          {homeRecentBlogs.map((post) => (
            <li key={post.path}>
              <Link
                href={hrefFromRegistry(post.path)}
                className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
        <HomeCtaSecondary href={blogHref} className="shrink-0">
          Read blogs
        </HomeCtaSecondary>
      </div>
    </section>
  );
}
