import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Education"
};

function VideoPlaceholder({ label, source }: { label: string; source: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03]">
      <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 dark:from-ink-800 dark:to-ink-900">
        <span className="absolute inset-0 grid place-items-center">
          <span className="grid h-12 w-12 place-items-center rounded-full bg-white/90 shadow-md dark:bg-white/10">
            <svg viewBox="0 0 24 24" className="h-5 w-5 translate-x-0.5 text-brand-600 dark:text-brand-400" aria-hidden="true">
              <path d="M8 5v14l11-7z" fill="currentColor" />
            </svg>
          </span>
        </span>
        <span className="absolute left-3 top-3 rounded-md bg-black/60 px-2 py-0.5 text-[11px] font-medium text-white">
          Coming soon
        </span>
      </div>
      <div className="p-4">
        <div className="text-sm font-semibold text-slate-900 dark:text-white">{label}</div>
        <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">{source}</div>
      </div>
    </div>
  );
}

export default function EducationPage() {
  return (
    <>
      <section className="container-page pb-8 pt-14 sm:pt-18">
        <div className="max-w-3xl">
          <div className="chip">
            <span className="h-2 w-2 rounded-full bg-brand-600/70" />
            Education
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            An open-discussion health education course.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            A discussion-based curriculum on health, wellness, and sound money.
            No lectures. Prompts, readings, and videos worked through in the{" "}
            <Link href="/community" className="link">
              discussions
            </Link>
            .
          </p>
        </div>
      </section>

      {/* DGA: lead partner, up front */}
      <Section className="border-t border-slate-200/70 bg-white py-10 dark:border-white/10 dark:bg-transparent sm:py-12">
        <div className="container-page">
          <FadeIn>
            <div className="rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-50 to-white p-6 shadow-card dark:border-brand-400/20 dark:from-brand-500/10 dark:to-transparent sm:p-8">
              <Badge tone="brand">Lead education partner</Badge>
              <h2 className="mt-3 text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                Dreamgrad Academy (DGA)
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Start here. Beginner-friendly Bitcoin education and personal
                development. It&rsquo;s the clearest on-ramp to the
                &ldquo;why&rdquo; behind {BRAND.shortName}.
              </p>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href={BRAND.dgaUrl} target="_blank" rel="noreferrer">
                  Visit Dreamgrad Academy →
                </ButtonLink>
                <ButtonLink href="/community" variant="secondary">
                  Discuss it
                </ButtonLink>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Watch & learn */}
      <Section className="border-t border-slate-200/70 bg-slate-50/40 py-10 dark:border-white/10 dark:bg-white/[0.02] sm:py-12">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Watch & learn"
              title="Talks and explainers."
              description="Placeholders for now. Each video seeds a thread in the community."
            />
          </FadeIn>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <FadeIn delayMs={40}>
              <VideoPlaceholder
                label="Health autonomy and informed consent"
                source="Dr. Andrew Kaufman · YouTube"
              />
            </FadeIn>
            <FadeIn delayMs={90}>
              <VideoPlaceholder
                label="Terrain, prevention, and long-term thinking"
                source="Dr. Andrew Kaufman · YouTube"
              />
            </FadeIn>
            <FadeIn delayMs={140}>
              <VideoPlaceholder
                label="Sound money and the incentives behind care"
                source="Community pick · YouTube"
              />
            </FadeIn>
          </div>

          <FadeIn delayMs={160}>
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              Want a video added? Suggest it in the{" "}
              <Link href="/community" className="link">
                discussions
              </Link>
              . Videos are references for conversation, not medical advice or
              endorsements.
            </p>
          </FadeIn>
        </div>
      </Section>

      {/* The course */}
      <Section className="border-t border-slate-200/70 bg-white py-10 dark:border-white/10 dark:bg-transparent sm:py-12">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="The course"
              title="An open discussion, not a lecture series."
              description="A shared outline the group works through together. Still a draft."
            />
          </FadeIn>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { unit: "1", title: "Why money and health rhyme" },
              { unit: "2", title: "Sovereignty, end to end" },
              { unit: "3", title: "Prevention over crisis" },
              { unit: "4", title: "Evaluating providers" },
              { unit: "5", title: "Paying directly" },
              { unit: "6", title: "Open floor: member questions" }
            ].map((u) => (
              <div
                key={u.title}
                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <span className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-brand-50 text-xs font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
                  {u.unit}
                </span>
                <span className="text-sm font-medium text-slate-900 dark:text-white">
                  {u.title}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            Also on offer via partners: private 1:1 education, partner programs,
            and practitioner-led workshops.
          </p>
        </div>
      </Section>

      {/* Disclaimer */}
      <Section className="border-t border-slate-200/70 bg-slate-50/40 py-10 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-page max-w-3xl">
          <FadeIn>
            <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-5 dark:border-amber-400/40 dark:bg-amber-500/10">
              <div className="text-sm font-semibold text-amber-900 dark:text-amber-100">
                Education is not medical advice
              </div>
              <p className="mt-1.5 text-sm leading-relaxed text-amber-800/90 dark:text-amber-100/80">
                Nothing on this page (courses, videos, partners, discussion) is
                diagnosis, treatment, or a substitute for licensed care.{" "}
                <Link href="/disclaimer" className="font-medium underline underline-offset-4">
                  Read the disclaimer
                </Link>
                .
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
