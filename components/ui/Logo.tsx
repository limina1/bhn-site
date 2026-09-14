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
      {/* hand-drawn ₿ (vector, not a text glyph, so it renders identically everywhere) */}
      <g transform="translate(29.3 35)">
        <path
          d="M17.4 9.6h3.1c1.9 0 3.2 1 3.2 2.7 0 1.2-.7 2-1.7 2.3 1.3.3 2.1 1.2 2.1 2.6 0 1.9-1.4 3-3.6 3h-3.1V9.6Zm2 2v2.3h1c.9 0 1.4-.4 1.4-1.15 0-.72-.5-1.15-1.4-1.15h-1Zm0 4.1v2.5h1.1c1 0 1.6-.47 1.6-1.25 0-.8-.6-1.25-1.6-1.25h-1.1Z"
          fill="#ffffff"
        />
        <path
          d="M19.1 7.9v2M21.1 7.9v2M19.1 20.2v2M21.1 20.2v2"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
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
