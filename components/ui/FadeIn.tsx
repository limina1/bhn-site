"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import { cx } from "@/components/ui/cx";

export function FadeIn({
  children,
  className,
  delayMs = 0
}: {
  children: ReactNode;
  className?: string;
  delayMs?: number;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
            break;
          }
        }
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cx(
        "transition-all duration-500 ease-out motion-reduce:transition-none",
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-2 opacity-0 motion-reduce:opacity-100 motion-reduce:translate-y-0",
        className
      )}
      style={delayMs ? ({ transitionDelay: `${delayMs}ms` } as const) : undefined}
    >
      {children}
    </div>
  );
}

