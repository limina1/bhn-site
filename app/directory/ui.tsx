"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { cx } from "@/components/ui/cx";
import { DIRECTORY_LISTINGS, type DirectoryListing } from "@/lib/data";

type Filters = {
  q: string;
  category: string;
  format: string;
  availability: string;
  location: string;
};

const input =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:ring-2 focus:ring-brand-200 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-brand-400/40 dark:focus:ring-brand-400/20";

const select =
  "w-full rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition focus:border-brand-300 focus:ring-2 focus:ring-brand-200 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-100 dark:focus:border-brand-400/40 dark:focus:ring-brand-400/20";

function matches(p: DirectoryListing, f: Filters) {
  const hay = [
    p.name,
    p.headline,
    p.type,
    p.location,
    p.format,
    ...p.categories,
    ...p.tags
  ]
    .join(" ")
    .toLowerCase();

  const qOk = !f.q || hay.includes(f.q.toLowerCase());
  const catOk = !f.category || p.categories.includes(f.category as any);
  const formatOk = !f.format || p.format === (f.format as any);
  const availOk = !f.availability || p.availability === (f.availability as any);
  const locOk = !f.location || p.location === f.location;

  return qOk && catOk && formatOk && availOk && locOk;
}

export function ExploreClient() {
  const [filters, setFilters] = useState<Filters>({
    q: "",
    category: "",
    format: "",
    availability: "",
    location: ""
  });

  const results = useMemo(
    () =>
      DIRECTORY_LISTINGS.filter((p) => matches(p, filters)).sort(
        (a, b) => Number(b.sponsored ?? false) - Number(a.sponsored ?? false)
      ),
    [filters]
  );

  const categories = useMemo(() => {
    const set = new Set<string>();
    for (const p of DIRECTORY_LISTINGS) for (const c of p.categories) set.add(c);
    return Array.from(set).sort();
  }, []);

  const locations = useMemo(() => {
    const set = new Set<string>();
    for (const p of DIRECTORY_LISTINGS) set.add(p.location);
    return Array.from(set).sort();
  }, []);

  const reset = () =>
    setFilters({ q: "", category: "", format: "", availability: "", location: "" });

  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
      <FadeIn className="lg:col-span-4">
        <div className="card p-6">
          <div className="text-sm font-semibold text-slate-900 dark:text-white">Filters</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Search by category, location, format, and availability.
          </p>
          <p className="mt-2 rounded-lg bg-slate-50 px-3 py-2 text-xs leading-relaxed text-slate-500 dark:bg-white/[0.04] dark:text-slate-400">
            Every listing here is a <span className="font-medium">sample</span> to
            show the format. The only real entry is Zaprana, marked{" "}
            <span className="font-medium">Sponsored</span>.
          </p>

          <div className="mt-6 space-y-4">
            <label className="block">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Search
              </div>
              <input
                className={input}
                placeholder="Wellness coaches, community spaces, Bitcoin-friendly practitioners…"
                value={filters.q}
                onChange={(e) => setFilters((s) => ({ ...s, q: e.target.value }))}
              />
            </label>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <label className="block">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Category
                </div>
                <select
                  className={select}
                  value={filters.category}
                  onChange={(e) => setFilters((s) => ({ ...s, category: e.target.value }))}
                >
                  <option value="">All</option>
                  {categories.map((c) => (
                    <option key={c} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Format
                </div>
                <select
                  className={select}
                  value={filters.format}
                  onChange={(e) => setFilters((s) => ({ ...s, format: e.target.value }))}
                >
                  <option value="">Any</option>
                  <option value="Remote">Remote</option>
                  <option value="In-person">In-person</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </label>

              <label className="block">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Availability
                </div>
                <select
                  className={select}
                  value={filters.availability}
                  onChange={(e) => setFilters((s) => ({ ...s, availability: e.target.value }))}
                >
                  <option value="">Any</option>
                  <option value="This week">This week</option>
                  <option value="Next week">Next week</option>
                  <option value="Limited">Limited</option>
                  <option value="Waitlist">Waitlist</option>
                </select>
              </label>

              <label className="block">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Location
                </div>
                <select
                  className={select}
                  value={filters.location}
                  onChange={(e) => setFilters((s) => ({ ...s, location: e.target.value }))}
                >
                  <option value="">Any</option>
                  {locations.map((l) => (
                    <option key={l} value={l}>
                      {l}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <div className="flex items-center gap-3">
              <Button variant="secondary" type="button" onClick={reset}>
                Reset
              </Button>
              <div className="text-xs text-slate-500 dark:text-slate-400">
                {results.length} result{results.length === 1 ? "" : "s"}
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      <div className="lg:col-span-8">
        <div className="grid gap-6 md:grid-cols-2">
          {results.map((p, i) => (
            <FadeIn key={p.slug} delayMs={20 + i * 40}>
              <Card
                className={cx(
                  "flex h-full flex-col overflow-hidden p-0",
                  p.sponsored && "ring-1 ring-brand-200 dark:ring-brand-400/30"
                )}
              >
                <div className="accent-bar" />
                {p.sponsored ? (
                  <div className="bg-brand-50 px-6 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-brand-800 dark:bg-brand-500/15 dark:text-brand-300">
                    Sponsored
                  </div>
                ) : (
                  <div className="bg-slate-50 px-6 py-1.5 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-white/[0.04] dark:text-slate-400">
                    Sample listing
                  </div>
                )}

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {p.type}
                      </div>
                      <div className="mt-1.5 text-base font-semibold leading-snug text-slate-900 dark:text-white">
                        {p.name}
                      </div>
                    </div>
                    <Badge tone="neutral">{p.format}</Badge>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.headline}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="pill">{p.categories[0]}</span>
                    <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-800 ring-1 ring-brand-200 dark:bg-brand-500/15 dark:text-brand-300 dark:ring-brand-400/30">
                      {p.paymentBadge}
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-200/70 bg-white px-6 py-4 dark:border-white/10 dark:bg-transparent">
                  <div className="flex items-center justify-between gap-4">
                    <div className="text-xs text-slate-600 dark:text-slate-400">
                      {p.location} ·{" "}
                      <span className="font-medium text-slate-900 dark:text-slate-200">
                        {p.availability}
                      </span>
                    </div>
                    <Link
                      href={
                        p.sponsored && p.externalUrl
                          ? p.externalUrl
                          : `/profile/${p.slug}`
                      }
                      {...(p.sponsored && p.externalUrl
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="text-sm font-medium text-slate-900 underline decoration-slate-200 underline-offset-4 transition-colors hover:decoration-brand-400 dark:text-slate-100 dark:decoration-white/20"
                    >
                      {p.sponsored ? "Visit site" : "View profile"}
                    </Link>
                  </div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        {results.length === 0 ? (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 bg-white/70 p-8 text-center dark:border-white/15 dark:bg-white/[0.03]">
            <div className="text-sm font-semibold text-slate-900 dark:text-white">No matches</div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Try clearing filters or searching for a broader term.
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}

