export default function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent)]">
        Batch 1
      </p>
      <h1 className="mt-4 font-serif text-4xl leading-tight text-[var(--text)] md:text-5xl">
        Layout shell ready
      </h1>
      <p className="mt-6 text-lg leading-8 text-[var(--text-muted)]">
        Local fonts, brand assets, header, and footer are wired. The Visual
        Direction 02 homepage arrives in Batch 2 per{" "}
        <code className="text-sm">COMPOSER_BATCHES.md</code>.
      </p>
      <ul className="mt-8 list-disc space-y-2 pl-5 text-sm leading-7 text-[var(--text-muted)]">
        <li>Cormorant Garamond and Inter loaded from app/fonts</li>
        <li>Primary navigation matches counselling site routes</li>
        <li>Footer uses verified credentials only; contact details placeholder</li>
      </ul>
    </div>
  );
}
