"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { cx } from "@/components/ui/cx";
import { DiscussionIconBox } from "@/components/ui/DiscussionIcon";
import {
  DISCUSSIONS,
  DISCUSSION_CATEGORIES,
  type DiscussionCategory
} from "@/lib/discussions";

export function DiscussionIndex() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<DiscussionCategory | null>(null);

  const results = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return DISCUSSIONS.filter((d) => {
      if (cat && d.category !== cat) return false;
      if (!needle) return true;
      return (
        d.title.toLowerCase().includes(needle) ||
        d.summary.toLowerCase().includes(needle) ||
        d.category.toLowerCase().includes(needle)
      );
    });
  }, [q, cat]);

  return (
    <div>
      {/* Search */}
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
          fill="none"
          aria-hidden="true"
        >
          <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="1.8" />
          <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search discussions, e.g. “direct pay”, “time preference”, “records”"
          className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-12 pr-4 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:ring-2 focus:ring-brand-200 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-brand-400/40 dark:focus:ring-brand-400/20"
        />
      </div>

      {/* Category chips */}
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-xs text-slate-500 dark:text-slate-400">Filter:</span>
        <button
          type="button"
          onClick={() => setCat(null)}
          className={cx(
            "rounded-full px-3 py-1 text-xs font-medium transition-colors",
            cat === null
              ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/15"
          )}
        >
          All
        </button>
        {DISCUSSION_CATEGORIES.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCat((cur) => (cur === c ? null : c))}
            className={cx(
              "rounded-full px-3 py-1 text-xs font-medium transition-colors",
              cat === c
                ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-white/10 dark:text-slate-300 dark:hover:bg-white/15"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      {/* List */}
      <div className="mt-5 space-y-3">
        {results.map((d) => (
          <Link
            key={d.slug}
            href={`/community/${d.slug}`}
            className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-px hover:border-brand-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-brand-400/40"
          >
            <DiscussionIconBox icon={d.icon} className="mt-0.5 h-11 w-11" />
            <div className="min-w-0 flex-1">
              <div className="text-[15px] font-semibold leading-snug text-slate-900 group-hover:text-brand-700 dark:text-white dark:group-hover:text-brand-300">
                {d.title}
              </div>
              <p className="mt-1 line-clamp-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {d.summary}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                <span className="rounded-md bg-accent-50 px-2 py-0.5 font-medium text-accent-700 ring-1 ring-accent-200 dark:bg-accent-500/15 dark:text-accent-300 dark:ring-accent-400/30">
                  {d.category}
                </span>
                <span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400">
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" aria-hidden="true">
                    <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {d.readMins} min
                </span>
                <span className="text-slate-500 dark:text-slate-400">
                  {d.replies} in discussion
                </span>
              </div>
            </div>
            <svg
              viewBox="0 0 24 24"
              className="mt-3 h-4 w-4 shrink-0 text-slate-300 transition-transform group-hover:translate-x-0.5 group-hover:text-brand-500 dark:text-slate-600"
              fill="none"
              aria-hidden="true"
            >
              <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        ))}

        {results.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-8 text-center text-sm text-slate-500 dark:border-white/15 dark:bg-white/[0.03] dark:text-slate-400">
            No discussions match that. Try a broader term or clear the filter.
          </div>
        ) : null}
      </div>
    </div>
  );
}
