import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionHeading } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <section className="container-page pb-8 pt-14 sm:pt-18">
        <div className="max-w-3xl">
          <div className="chip">
            <span className="h-2 w-2 rounded-full bg-brand-600/70" />
            About
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            A community-owned marketplace for Bitcoin-aligned health.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            BHN is a marketplace and community hub, not a healthcare provider.
            We help Bitcoiners find health and wellness providers, tools, and
            discussions that share Bitcoin values or accept Bitcoin. Our team
            curates it; it belongs to the community.
          </p>
        </div>
      </section>

      <Section className="border-t border-slate-200/70 bg-white py-10 dark:border-white/10 dark:bg-transparent sm:py-12">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Mission"
              title="Support financial sovereignty and lasting health."
            />
          </FadeIn>
          <FadeIn delayMs={60}>
            <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
              Healthcare should be rebuilt on sound money: value exchanged
              directly, less administrative waste, and people investing in
              long-term wellness instead of reacting to crisis. We connect
              individuals with aligned providers and Bitcoin-based tools, and
              keep the focus on prevention and education.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section className="border-t border-slate-200/70 bg-slate-50/40 py-10 dark:border-white/10 dark:bg-white/[0.02] sm:py-12">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Reviews"
              title="Reputation, not star ratings."
              description="Reviews are signed by real Nostr identities and weighted by web of trust: you judge the source, not just the score. Not endorsements."
            />
          </FadeIn>
          <FadeIn delayMs={60}>
            <div className="mt-6">
              <ButtonLink href="/reviews" variant="secondary">
                See how reviews work →
              </ButtonLink>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="border-t border-slate-200/70 bg-white py-12 dark:border-white/10 dark:bg-transparent">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Boundaries"
              title="Not medical advice. Not a provider."
              description="BHN is a connection layer only. We curate it; we don't deliver care."
              align="center"
            />
          </FadeIn>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href="/directory" size="lg">
              Start exploring
            </ButtonLink>
            <Link href="/disclaimer" className="link text-sm">
              Read disclaimer
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
