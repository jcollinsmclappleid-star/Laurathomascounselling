export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        Batch 0
      </p>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--text)] md:text-5xl">
        Laura Thomas Counselling
      </h1>
      <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
        Infrastructure stub only. Layout shell, homepage, and routes arrive in
        later Composer batches per{" "}
        <code className="text-sm">COMPOSER_BATCHES.md</code>.
      </p>
      <ul className="mt-8 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-muted)]">
        <li>Next.js App Router + TypeScript base repurposed from donor tooling</li>
        <li>Design tokens wired in global CSS; local fonts in Batch 1</li>
        <li>
          Reference pack stays in{" "}
          <code className="text-sm">docs/reference/</code> — not public
        </li>
      </ul>
    </div>
  );
}
