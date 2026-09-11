import type { SVGProps } from "react";
import { cx } from "@/components/ui/cx";

const PETALS: { rotate: number; color: string }[] = [
  { rotate: 0, color: "#3aa65a" }, // top: brain / mind (green)
  { rotate: 72, color: "#f0876b" }, // upper right: nutrition (coral)
  { rotate: 144, color: "#8e5fc9" }, // lower right: calm / meditation (purple)
  { rotate: 216, color: "#e8695f" }, // lower left: vitality (red-coral)
  { rotate: 288, color: "#4ba3d9" } // left: movement (blue)
];

/**
 * BHN logo mark: five wellness petals (mind, nutrition, calm, vitality,
 * movement) around a Bitcoin-orange center, sound money at the heart of
 * sovereign health.
 */
export function LogoMark({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={cx("shrink-0", className)}
      {...props}
    >
      {PETALS.map((p) => (
        <path
          key={p.rotate}
          d="M50 50 C37 39 34 14 50 5 C66 14 63 39 50 50 Z"
          fill={p.color}
          transform={`rotate(${p.rotate} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="17" fill="#f7931a" />
      <text
        x="50"
        y="51"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="19"
        fontWeight="700"
        fontFamily="Arial, Helvetica, sans-serif"
        fill="#ffffff"
      >
        ₿
      </text>
    </svg>
  );
}

/** Full lockup: mark + wordmark. `compact` hides the descriptor line. */
export function Logo({
  className,
  descriptor,
  markClassName
}: {
  className?: string;
  descriptor?: string;
  markClassName?: string;
}) {
  return (
    <span className={cx("inline-flex items-center gap-3", className)}>
      <LogoMark
        className={cx(
          "h-9 w-9 drop-shadow-sm transition-transform group-hover:-translate-y-px",
          markClassName
        )}
      />
      <span className="leading-tight">
        <span className="block text-sm font-semibold tracking-tight text-slate-900 dark:text-white">
          Bitcoin Health Network
        </span>
        {descriptor ? (
          <span className="hidden text-xs text-slate-600 dark:text-slate-400 sm:block">
            {descriptor}
          </span>
        ) : null}
      </span>
    </span>
  );
}
