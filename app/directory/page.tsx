import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { ExploreClient } from "./ui";

export const metadata: Metadata = {
  title: "Directory"
};

export default function DirectoryPage() {
  return (
    <>
      <section className="container-page pb-10 pt-14 sm:pb-14 sm:pt-18">
        <div className="max-w-3xl">
          <div className="chip">
            <span className="h-2 w-2 rounded-full bg-brand-600/70" />
            Directory
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Discover health people, communities, and knowledge.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Browse clinicians, researchers, educators, communities, and tools, then connect
            directly. Bitcoin Health Network is a connection layer only and does not provide
            medical advice.
          </p>
        </div>
      </section>

      <Section className="border-t border-slate-200/70 bg-slate-50/40 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-page">
          <ExploreClient />
          <div className="mt-8 rounded-2xl border border-slate-200 bg-white/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Reminder
            </div>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              This directory is a discovery layer. Listings do not constitute endorsements. Confirm
              services, pricing, and scope directly with providers.{" "}
              <a href="/disclaimer" className="link">
                Read disclaimer
              </a>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}

