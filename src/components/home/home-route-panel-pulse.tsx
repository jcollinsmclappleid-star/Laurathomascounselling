"use client";

import type { ReactElement } from "react";
import { AffordancePulse } from "@/components/home/affordance-pulse";

export function HomeRoutePanelPulse({
  children,
}: {
  children: ReactElement<{ className?: string }>;
}) {
  return <AffordancePulse className="block overflow-hidden">{children}</AffordancePulse>;
}
