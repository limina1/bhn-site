import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardText, CardTitle } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { IconShield } from "@/components/ui/Icon";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Reviews"
};

const SAMPLE_REVIEWS = [
  {
    listing: "a direct-pay provider",
    reviewer: "npub1q…7f3k",
    initials: "JP",
    trust: "Followed by 4 people you follow",
    hops: "2 hops away",
    rating: 5,
    quote:
      "Clear plan, realistic pacing, and measurable progress. Direct-pay was simple and transparent."
  },
  {
    listing: "an education service",
    reviewer: "npub1z…a92v",
    initials: "SR",
    trust: "Followed by 2 people you follow",
    hops: "2 hops away",
    rating: 5,
    quote:
      "The education was structured without being rigid. I left with a plan I could actually follow."
  },
  {
    listing: "a community",
    reviewer: "npub1k…d10p",
    initials: "AM",
    trust: "In your extended web of trust",
    hops: "3 hops away",
    rating: 4,
    quote:
      "Found aligned practitioners I'd never have come across otherwise. Genuinely useful community."
  }
];

function Stars({ rating }: { rating: number }) {
  return (
    <div aria-label={`${rating} out of 5`} className="text-sm text-brand-500">
      {"★".repeat(rating)}
      <span className="text-slate-300 dark:text-white/20">{"★".repeat(5 - rating)}</span>
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <section className="container-page pb-10 pt-14 sm:pb-14 sm:pt-18">
        <div className="max-w-3xl">
          <div className="chip">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            Reviews · powered by web of trust
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Reviews you can{" "}
            <span className="bg-gradient-to-r from-brand-500 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              actually trust.
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            On most platforms, anyone can post anonymous stars, so ratings get
            gamed. {BRAND.shortName}{" "}
            builds reviews on Nostr&rsquo;s <span className="font-medium text-slate-900 dark:text-white">web of trust</span>:
            every review is signed by a real identity, and you weigh it by how connected that person
            is to people you already trust.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/directory" size="lg">
              Browse the directory
            </ButtonLink>
            <ButtonLink href="/community" variant="nostr" size="lg">
              Join community
            </ButtonLink>
          </div>
        </div>
      </section>

      <Section className="border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-transparent">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="How it works"
              title="Trust flows through people, not strangers."
              description="The web of trust turns your social graph into a reputation filter. Reviews from inside your circle count; noise from accounts no one vouches for fades away."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "Signed identity",
                tone: "accent" as const,
                text: "Every review is cryptographically signed by a Nostr key. No throwaway anonymous accounts."
              },
              {
                step: "Trust graph",
                tone: "brand" as const,
                text: "We look at who you follow, and who they follow, to see how connected a reviewer is to you."
              },
              {
                step: "Weighted reputation",
                tone: "accent" as const,
                text: "Reviews from inside your web of trust are surfaced first; unconnected spam is filtered out."
              }
            ].map((s, i) => (
              <FadeIn key={s.step} delayMs={40 + i * 60}>
                <div className="card flex h-full flex-col p-6">
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 ring-1 ring-accent-100 dark:bg-accent-500/15 dark:ring-accent-400/30">
                      <IconShield className="h-5 w-5 text-accent-700 dark:text-accent-300" />
                    </div>
                    <Badge tone={s.tone}>Step {i + 1}</Badge>
                  </div>
                  <div className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                    {s.step}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {s.text}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/70 bg-slate-50/40 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Sample reviews"
              title="What a trusted review looks like."
              description="Each review carries the reviewer’s identity and their trust path to you, so you can judge the source, not just the stars."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {SAMPLE_REVIEWS.map((r, i) => (
              <FadeIn key={r.reviewer} delayMs={40 + i * 60}>
                <Card className="flex h-full flex-col">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-accent-500 text-sm font-semibold text-white">
                      {r.initials}
                    </div>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-slate-900 dark:text-white">
                        {r.reviewer}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400">
                        reviewed {r.listing}
                      </div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <Stars rating={r.rating} />
                  </div>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    &ldquo;{r.quote}&rdquo;
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-slate-200/70 pt-4 dark:border-white/10">
                    <Badge tone="accent">{r.hops}</Badge>
                    <span className="text-xs text-slate-500 dark:text-slate-400">{r.trust}</span>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delayMs={200}>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white/70 p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                A note on these reviews
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                These are sample reviews to illustrate the web-of-trust model. Identities, trust
                paths, and ratings are placeholders. Reviews do not constitute endorsements. Always
                confirm scope, pricing, and fit directly with a provider.{" "}
                <Link href="/disclaimer" className="link">
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
