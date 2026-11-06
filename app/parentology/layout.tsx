import type { ReactNode } from "react";
import { ParentologySubnav } from "@/components/parentology/parentology-subnav";

export default function ParentologyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="bg-[var(--color-cream)] text-[var(--color-forest)]">
      <ParentologySubnav />
      {children}
    </div>
  );
}
