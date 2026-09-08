import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Card, CardText, CardTitle } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { BRAND } from "@/lib/brand";

export const metadata: Metadata = {
  title: "Vision"
};

export default function VisionPage() {
  return (
    <>
      <section className="container-page pb-10 pt-14 sm:pb-14 sm:pt-18">
        <div className="max-w-3xl">
          <div className="chip">
            <span className="h-2 w-2 rounded-full bg-accent-500" />
            Vision · sovereignty first
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            The home base for{" "}
            <span className="bg-gradient-to-r from-brand-500 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              sovereign health and wellness.
            </span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            {BRAND.shortName} is the home base for sovereign health and wellness: spaces,
            practitioners, tools, and communities in one place, built for people who believe
            health autonomy is non-negotiable.
          </p>
        </div>
      </section>

      {/* Statement 2, "where you belong" */}
      <Section className="border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-transparent">
        <div className="container-page">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-accent-200 bg-gradient-to-br from-accent-50 via-white to-brand-50 p-8 shadow-card dark:border-accent-400/20 dark:from-accent-500/10 dark:via-transparent dark:to-brand-500/10 sm:p-12">
              <div className="max-w-3xl">
                <div className="text-xs font-semibold uppercase tracking-wide text-accent-700 dark:text-accent-300">
                  Where you belong
                </div>
                <p className="mt-4 text-xl font-semibold leading-relaxed tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                  {BRAND.shortName} is where the sovereign health and wellness world comes together.
                  If you are building, offering, or growing something that puts people in charge of
                  their health, this is where you belong.
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <ButtonLink href="/directory" size="lg">
                    Explore the network
                  </ButtonLink>
                  <ButtonLink href="/community" variant="nostr" size="lg">
                    View discussion
                  </ButtonLink>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="border-t border-slate-200/70 bg-slate-50/40 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="What we stand for"
              title="Health autonomy is non-negotiable."
              description="Every part of the network is built around one idea: people should be in charge of their own health, their data, their providers, their money, and their choices."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Sovereign by default",
                tag: "Autonomy",
                tone: "accent" as const,
                text: "Open protocols and direct connections keep you in control. No gatekeepers between you and the people you choose to trust."
              },
              {
                title: "All in one place",
                tag: "Home base",
                tone: "brand" as const,
                text: "Spaces, practitioners, tools, and communities for sovereign health, gathered into a single network instead of scattered across the web."
              },
              {
                title: "For builders and seekers",
                tag: "Belong",
                tone: "accent" as const,
                text: "Whether you're offering care or looking for it, this is a home for people who put health autonomy first."
              }
            ].map((x, i) => (
              <FadeIn key={x.title} delayMs={40 + i * 60}>
                <Card className="h-full">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle>{x.title}</CardTitle>
                    <Badge tone={x.tone}>{x.tag}</Badge>
                  </div>
                  <CardText>{x.text}</CardText>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-transparent">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Current stage"
              title="Currently gathering feedback on the model"
              description="This project is in an early feedback phase as we refine the conceptual model, directory structure, and launch priorities."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Current status",
                tag: "Now",
                text: "Gathering feedback on the conceptual model, taxonomy, and usability."
              },
              {
                title: "This year’s goal",
                tag: "Q4 target",
                text: "Aim to engage ~40 aligned participants, providers, or partners by Q4."
              },
              {
                title: "Scope note",
                tag: "Important",
                text: "A focused home for sovereign health and wellness, aligned with supporting private education partners."
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

          <FadeIn delayMs={220}>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Launch posture
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                For launch, the focus is the directory, the web-of-trust review layer, and education
                connections. Future expansion may include deeper knowledge-sharing and collaboration,
                but it is intentionally not a primary product area right now.
              </p>
              <div className="mt-4 text-sm">
                <Link href="/about" className="link">
                  Read the mission
                </Link>{" "}
                or{" "}
                <Link href="/directory" className="link">
                  explore the directory
                </Link>
                .
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
