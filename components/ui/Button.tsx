import Link from "next/link";
import type { ComponentProps } from "react";
import { cx } from "@/components/ui/cx";

type Variant = "primary" | "secondary" | "ghost" | "nostr";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold shadow-sm transition-all duration-200 ease-out hover:-translate-y-[1px] hover:shadow-md motion-reduce:transform-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50 active:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-brand-500 to-brand-600 text-white hover:from-brand-500 hover:to-brand-700 hover:shadow-glow active:to-brand-700",
  secondary:
    "border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 active:bg-slate-100 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10",
  ghost:
    "text-slate-900 hover:bg-slate-100 active:bg-slate-200 dark:text-slate-100 dark:hover:bg-white/10",
  nostr:
    "bg-nostr-600 text-white hover:bg-nostr-700 active:bg-nostr-700 dark:bg-nostr-500 dark:hover:bg-nostr-600"
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base"
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<"button"> & { variant?: Variant; size?: Size }) {
  return (
    <button
      className={cx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; size?: Size }) {
  return (
    <Link
      className={cx(base, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
