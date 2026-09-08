import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card, CardText, CardTitle } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Disclaimer"
};

export default function DisclaimerPage() {
  return (
    <>
      <section className="container-page pb-10 pt-14 sm:pb-14 sm:pt-18">
        <div className="max-w-3xl">
          <div className="chip">
            <span className="h-2 w-2 rounded-full bg-brand-600/70" />
            Disclaimer and boundaries
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Informational directory only.
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Bitcoin Health Network is a curated discovery and connection layer. We do not provide
            medical advice, diagnosis, treatment, or medical services.
          </p>
        </div>
      </section>

      <Section className="border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-transparent">
        <div className="container-page">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Not a healthcare provider",
                tag: "Boundary",
                text: "Bitcoin Health Network does not practice medicine and does not replace a licensed clinician or emergency services."
              },
              {
                title: "No medical advice",
                tag: "Boundary",
                text: "Content and listings are informational. Always consult qualified professionals for personal medical decisions."
              },
              {
                title: "No endorsements",
                tag: "Important",
                text: "Listings and inclusion do not constitute endorsements or guarantees. Users are responsible for evaluating fit, quality, and safety."
              }
            ].map((x, i) => (
              <FadeIn key={x.title} delayMs={40 + i * 60}>
                <Card>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle>{x.title}</CardTitle>
                    <Badge tone={x.tag === "Important" ? "neutral" : "brand"}>{x.tag}</Badge>
                  </div>
                  <CardText>{x.text}</CardText>
                </Card>
              </FadeIn>
            ))}
          </div>

          <FadeIn delayMs={140}>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">Bitcoin payments</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                Some listings may note that they accept Bitcoin. Bitcoin payment and pricing may
                involve volatility and user responsibility. Always confirm terms directly with the
                provider or organization.
              </p>
            </div>
          </FadeIn>

          <FadeIn delayMs={180}>
            <div className="mt-8 text-sm text-slate-600">
              Looking for the directory?{" "}
              <Link href="/directory" className="link">
                Explore the directory
              </Link>
              .
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}

