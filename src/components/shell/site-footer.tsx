import Link from "next/link";
import {
  contactCta,
  primaryNavLinks,
  verifiedCredentials,
} from "@/components/shell/site-nav";

export function SiteFooter() {
  return (
    <footer className="bg-[#102f29] text-[#f4eddd]">
      <div className="mx-auto grid max-w-[var(--content-max)] gap-8 px-5 py-12 sm:px-6 md:grid-cols-2 md:px-10 md:py-14 lg:px-[65px]">
        <div>
          <h2 className="font-serif text-3xl leading-tight tracking-tight md:text-4xl">
            Laura Thomas
          </h2>
          <p className="mt-4 max-w-sm text-xs leading-7">
            Counselling. Parenting. Connection.
          </p>
          <ul className="mt-6 space-y-1 text-[10px] uppercase tracking-[0.14em] text-[#d8e0d4]">
            {verifiedCredentials.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        </div>

        <div className="text-xs leading-7">
          <nav aria-label="Footer">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {primaryNavLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  className="inline-flex min-h-11 items-center underline-offset-4 hover:underline"
                  href={contactCta.href}
                >
                  {contactCta.label}
                </Link>
              </li>
            </ul>
          </nav>
          <p className="mt-6 text-[var(--color-cream)]/80">
            [PLACEHOLDER: contact details — phone and email pending client
            confirmation]
          </p>
          <p className="mt-2">
            <Link
              href="/contact-me/"
              className="inline-flex min-h-11 items-center font-medium underline underline-offset-4"
            >
              Contact
            </Link>
          </p>
        </div>

        <p className="col-span-full border-t border-[#50685b] pt-5 text-[9px] leading-relaxed text-[#c3cbb8]">
          © {new Date().getFullYear()} Laura Thomas Counselling
        </p>
      </div>
    </footer>
  );
}
