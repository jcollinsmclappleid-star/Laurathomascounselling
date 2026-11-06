import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      <div className="mx-auto flex max-w-[var(--content-max)] flex-col gap-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2
            id="recent-blogs-heading"
            className="font-serif text-2xl tracking-[-0.3px]"
          >
            Recent blogs
          </h2>
          <HomeCtaSecondary href={blogHref}>Read blogs</HomeCtaSecondary>
        </div>
        <ul className="flex flex-wrap gap-2">
          {homeRecentBlogs.map((post) => (
            <li key={post.path}>
              <Link
                href={hrefFromRegistry(post.path)}
                className="inline-flex items-center gap-2 rounded-full border border-[#173e35]/15 bg-[var(--color-sage)] px-3 py-2 text-sm leading-snug text-[var(--color-forest)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
              >
                <ArrowUpRight aria-hidden size={14} strokeWidth={1.7} />
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
