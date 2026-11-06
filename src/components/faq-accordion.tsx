export type FaqItem = {
  question: string;
  answer: string;
};

type FAQAccordionProps = {
  items: FaqItem[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="divide-y divide-[var(--line)] rounded-lg border border-[var(--line)] bg-[var(--color-cream)]">
      {items.map((item) => (
        <details key={item.question} className="group p-6">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-base font-semibold text-[var(--text)]">
            {item.question}
            <span className="flex size-7 shrink-0 items-center justify-center rounded border border-[var(--line)] text-[var(--accent)] transition group-open:rotate-45">
              +
            </span>
          </summary>
          <p className="text-muted mt-4 max-w-3xl text-sm leading-7">
            {item.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
