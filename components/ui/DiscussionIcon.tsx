import type { DiscussionIcon } from "@/lib/discussions";
import { cx } from "@/components/ui/cx";

const PATHS: Record<DiscussionIcon, string> = {
  spark: "M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18",
  coin: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v10M9.5 9.2h3.2a1.6 1.6 0 0 1 0 3.2H9.5m0 0h3.6a1.7 1.7 0 0 1 0 3.4H9.5",
  heart: "M12 20s-7-4.4-7-10a4.2 4.2 0 0 1 7-3 4.2 4.2 0 0 1 7 3c0 5.6-7 10-7 10Z",
  shield: "M12 3l7 3v6c0 5-3.2 8.4-7 9-3.8-.6-7-4-7-9V6l7-3ZM9 12l2 2 4-4",
  handshake: "M6 11 3 8M18 11l3-3M6 11l3.5-3.5a2 2 0 0 1 2.8 0L14 9M6 11l4 4 2-2 2 2 4-4M18 11l-4 4",
  compass: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3.5 2",
  key: "M15.5 8.5a4 4 0 1 1-2.9 6.8L11 17H9v2H7v2H4v-3l5.2-5.2A4 4 0 0 1 15.5 8.5ZM16 11.5h.01",
  chart: "M4 20h16M7 20v-6M12 20V8M17 20v-9",
  chat: "M5 6h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H9l-4 3v-3H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
};

const TONES: Record<DiscussionIcon, string> = {
  spark: "bg-brand-600",
  coin: "bg-brand-500",
  heart: "bg-rose-500",
  shield: "bg-accent-600",
  handshake: "bg-emerald-600",
  compass: "bg-slate-800 dark:bg-slate-700",
  clock: "bg-accent-500",
  key: "bg-nostr-600",
  chart: "bg-emerald-500",
  chat: "bg-nostr-500"
};

export function DiscussionIconBox({
  icon,
  className
}: {
  icon: DiscussionIcon;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "grid shrink-0 place-items-center rounded-xl text-white",
        TONES[icon],
        className ?? "h-11 w-11"
      )}
    >
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d={PATHS[icon]}
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
