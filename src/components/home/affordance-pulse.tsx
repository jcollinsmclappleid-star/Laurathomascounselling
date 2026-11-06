"use client";

import {
  type ReactElement,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  return reduced;
}

export function useAffordancePulse<T extends HTMLElement = HTMLElement>(
  active = true,
) {
  const ref = useRef<T | null>(null);
  const reduced = usePrefersReducedMotion();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!active || reduced) {
      return;
    }

    const node = ref.current;
    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [active, reduced]);

  const pulseClass = cn(
    "affordance-target rounded-[inherit]",
    !reduced && "motion-safe:transition-[transform,box-shadow] motion-safe:duration-500",
    !reduced &&
      "motion-safe:hover:scale-[1.012] motion-safe:hover:shadow-[0_0_0_3px_rgba(255,248,234,0.38)]",
    inView && !reduced && "affordance-in-view",
  );

  return { ref, pulseClass, reduced };
}

type AffordancePulseProps = {
  children: ReactElement<{ className?: string; ref?: React.Ref<HTMLElement> }>;
  className?: string;
  active?: boolean;
};

export function AffordancePulse({
  children,
  className,
  active = true,
}: AffordancePulseProps) {
  const { ref, pulseClass } = useAffordancePulse(active);

  if (!isValidElement(children)) {
    return children;
  }

  return cloneElement(children, {
    ref,
    className: cn(children.props.className, pulseClass, className),
  });
}
