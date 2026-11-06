"use client";

import Link from "next/link";
import { useState } from "react";
import type { ParentologyTool, ToolFormat } from "@/lib/parentology-tools";
import { cn } from "@/lib/utils";

const filters = ["All", "Read", "Watch", "Learn"] as const;

export function ToolCatalogue({ items }: { items: ParentologyTool[] }) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const visible =
    filter === "All" ? items : items.filter((item) => item.format === filter);

  return (
    <div>
      <div role="group" aria-label="Filter resources" className="flex flex-wrap gap-2">
        {filters.map((name) => {
          const selected = filter === name;
          return (
            <button
              key={name}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(name)}
              className={cn(
                "inline-flex min-h-11 items-center rounded-full px-4 text-sm",
                selected
                  ? "bg-[var(--color-forest)] text-[#fff8e9]"
                  : "border border-[var(--color-forest)]/25 bg-[var(--color-cream)] text-[var(--color-forest)]",
              )}
            >
              {name}
            </button>
          );
        })}
      </div>
      <ul className="mt-6 grid gap-4">
        {visible.map((item) => (
          <li key={item.id}>
            <ToolCard item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function ToolCard({ item }: { item: ParentologyTool }) {
  const formatLabel: Record<ToolFormat, string> = {
    Read: "Read",
    Watch: "Watch",
    Learn: "Learn",
  };

  const body = (
    <>
      <p className="text-[10px] uppercase tracking-[0.14em]">{formatLabel[item.format]}</p>
      <h3 className="mt-2 font-serif text-[26px] leading-tight">{item.title}</h3>
      <p className="mt-2 text-[15px] leading-relaxed">{item.summary}</p>
      <p className="mt-3 text-sm leading-relaxed">{item.access}</p>
    </>
  );

  if (item.external) {
    const host = new URL(item.href).hostname.replace(/^www\./, "");
    return (
      <article className="rounded-[18px] border border-[#173e35]/10 bg-[var(--color-cream)] p-5">
        {body}
        <a
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex min-h-11 items-center text-sm font-medium underline decoration-[var(--color-forest)]/40 underline-offset-4"
        >
          Watch on YouTube
          <span className="sr-only"> (opens {host} in a new tab)</span>
        </a>
        <p className="text-sm">Opens {host} in a new tab.</p>
      </article>
    );
  }

  return (
    <article className="rounded-[18px] border border-[#173e35]/10 bg-[var(--color-cream)] p-5">
      {body}
      <Link
        href={item.href}
        className="mt-3 inline-flex min-h-11 items-center text-sm font-medium underline decoration-[var(--color-forest)]/40 underline-offset-4"
      >
        Open on this site
      </Link>
    </article>
  );
}
