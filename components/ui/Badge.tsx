import type { ReactNode } from "react";
import { cx } from "@/components/ui/cx";

export function Badge({
  children,
  tone = "neutral",
  className
}: {
  children: ReactNode;
  tone?: "neutral" | "brand" | "accent" | "success";
  className?: string;
}) {
  const tones: Record<string, string> = {
    neutral:
      "border-slate-200 bg-slate-50 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300",
    brand:
      "border-brand-200 bg-brand-50 text-brand-800 dark:border-brand-400/30 dark:bg-brand-500/15 dark:text-brand-300",
    accent:
      "border-accent-200 bg-accent-50 text-accent-700 dark:border-accent-400/30 dark:bg-accent-500/15 dark:text-accent-300",
    success:
      "border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-500/15 dark:text-emerald-300"
  };

  return (
    <span
      className={cx(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

