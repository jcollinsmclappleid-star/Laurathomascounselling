import type { Metadata } from "next";
import { SiteFooter } from "@/components/shell/site-footer";
import { SiteHeader } from "@/components/shell/site-header";
import { cormorantGaramond, interLocal } from "./fonts";
import { siteConfig } from "@/lib/site";
import { isSiteIndexable, siteRobotsMetadata } from "@/lib/site-indexable";
import "./globals.css";

const indexable = isSiteIndexable();

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  ...(indexable
    ? {
        alternates: {
          canonical: new URL("/", siteConfig.url).toString(),
        },
      }
    : {}),
  robots: siteRobotsMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${interLocal.variable} ${cormorantGaramond.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col overflow-x-hidden bg-[var(--surface)] text-[var(--text)]">
        <a className="skip-to-content" href="#main-content">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
