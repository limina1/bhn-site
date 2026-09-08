import type { SVGProps } from "react";
import { cx } from "@/components/ui/cx";

/**
 * BHN logo mark, a rounded shield (trust) in the Bitcoin-orange brand gradient,
 * with a ₿ and a heartbeat blip: sound money meeting health.
 */
export function LogoMark({
  className,
  ...props
}: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
      className={cx("shrink-0", className)}
      {...props}
    >
      <defs>
        <linearGradient id="bhnMark" x1="0" y1="0" x2="40" y2="40">
          <stop offset="0" stopColor="#f7931a" />
          <stop offset="1" stopColor="#ea7a0b" />
        </linearGradient>
      </defs>
      <path
        d="M20 2.5 34 8v11.5c0 8.7-5.6 15.9-14 18C11.6 35.4 6 28.2 6 19.5V8L20 2.5Z"
        fill="url(#bhnMark)"
      />
      {/* heartbeat line */}
      <path
        d="M9 21h4l2.2-5 3.4 9 2.6-6 1.6 2h5.6"
        stroke="#ffffff"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.9"
      />
      {/* bitcoin B */}
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
