"use client";

import type { ReactElement } from "react";
import { AffordancePulse } from "@/components/home/affordance-pulse";

export function MeetLauraPanelPulse({
  children,
}: {
  children: ReactElement<{ className?: string }>;
}) {
  return (
    <AffordancePulse className="block h-full w-full overflow-hidden">
      {children}
    </AffordancePulse>
  );
}
