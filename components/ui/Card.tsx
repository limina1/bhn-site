import type { ReactNode } from "react";
import { cx } from "@/components/ui/cx";

export function Card({
  children,
  className
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "card p-6 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-soft dark:hover:border-white/20 motion-reduce:transform-none",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children }: { children: ReactNode }) {
  return (
    <div className="text-base font-semibold text-slate-900 dark:text-white">
      {children}
    </div>
  );
}

export function CardText({ children }: { children: ReactNode }) {
  return (
    <div className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
      {children}
    </div>
  );
}

