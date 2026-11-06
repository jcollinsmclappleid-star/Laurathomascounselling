import Link from "next/link";
import { HomeCtaSecondary } from "@/components/home/home-cta";
import { homeRecentBlogs, homeRecentBlogsIntro } from "@/lib/home-copy";
import { hrefFromRegistry } from "@/lib/routes";

const blogHref = hrefFromRegistry("/counselling-blog/");

export function HomeRecentBlogs() {
  return (
    <section
      className="border-t border-[#c8cbb9]/80 bg-[var(--color-cream)] px-[19px] py-12 md:px-10 lg:px-[65px]"
      aria-labelledby="recent-blogs-heading"
    >
      <div className="mx-auto max-w-[var(--content-max)]">
        <p className="text-[9px] uppercase tracking-[0.15em]">Blog</p>
        <h2
          id="recent-blogs-heading"
          className="mt-3 font-serif text-[clamp(36px,9vw,56px)] leading-[1.02] tracking-[-1px]"
        >
          Recent blogs
        </h2>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed">
          {homeRecentBlogsIntro}
        </p>
        <ol className="mt-10 divide-y divide-[#c8cbb9]/80 border-y border-[#c8cbb9]/80">
          {homeRecentBlogs.map((post) => {
            const href = hrefFromRegistry(post.path);
            return (
              <li key={post.path} className="py-6">
                <h3 className="font-serif text-[clamp(26px,5vw,34px)] leading-[1.1] tracking-[-0.4px]">
                  <Link
                    href={href}
                    className="underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-forest)]"
                  >
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-[var(--text-muted)]">
                  {post.excerpt}
                </p>
              </li>
            );
          })}
        </ol>
        <HomeCtaSecondary href={blogHref} className="mt-8">
          Read blogs
        </HomeCtaSecondary>
      </div>
    </section>
  );
}
