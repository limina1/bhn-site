import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section, SectionHeading } from "@/components/ui/Section";
import { BRAND } from "@/lib/brand";
import { DiscussionIndex } from "./discussions-ui";
import { CommunityJoin } from "./ui";

export const metadata: Metadata = {
  title: "Discussions",
  description:
    "Open questions at the intersection of sound money and sovereign health. An invite-only Nostr community for BHN, running on Khatru Pyramid. Not medical advice."
};

function NotMedicalAdvice() {
  return (
    <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 dark:border-amber-400/40 dark:bg-amber-500/10">
      <div className="flex items-start gap-3">
        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-amber-400/30 text-xs font-bold text-amber-800 dark:text-amber-200">
          !
        </span>
        <p className="text-sm leading-relaxed text-amber-800/90 dark:text-amber-100/80">
          <span className="font-semibold text-amber-900 dark:text-amber-100">
            Discussion space, not medical advice.
          </span>{" "}
          Members share opinions and experiences. Nothing here is diagnosis or
          treatment. Confirm anything health-related with a qualified
          professional.{" "}
          <Link href="/disclaimer" className="font-medium underline underline-offset-4">
            Full disclaimer
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default function CommunityPage() {
  return (
    <>
      <section className="container-page pb-8 pt-14 sm:pt-18">
        <div className="max-w-3xl">
          <div className="chip">
            <span className="h-2 w-2 rounded-full bg-nostr-500" />
            Discussions · invite-only on Nostr
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
            Sound money{" "}
            <span className="bg-gradient-to-r from-brand-500 via-brand-500 to-accent-500 bg-clip-text text-transparent">
              meets sovereign health.
            </span>
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
            Open questions the {BRAND.shortName} community works through together.
            Each has a short primer, then a live conversation on the relay.
            Invite-only: members introduce members.
          </p>
        </div>
        <div className="mt-5 max-w-3xl">
          <NotMedicalAdvice />
        </div>
      </section>

      {/* Set up identity + browse the discussions */}
      <Section className="border-t border-slate-200/70 bg-white py-10 dark:border-white/10 dark:bg-transparent sm:py-12">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Get started"
              title="Set up your identity, then pick a thread."
              description="Identity happens in your browser, BHN never sees your secret key. Open a discussion to read its primer and the live feed."
            />
          </FadeIn>

          <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <CommunityJoin />
            </div>
            <div className="lg:col-span-7">
              <DiscussionIndex />
            </div>
          </div>

          <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
            These map to an open-discussion curriculum, see the{" "}
            <Link href="/education" className="link">
              education page
            </Link>
            .
          </p>
        </div>
      </Section>

      {/* How it works, condensed */}
      <Section className="border-t border-slate-200/70 bg-slate-50/40 py-10 dark:border-white/10 dark:bg-white/[0.02] sm:py-12">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="How the pyramid works"
              title="Membership you can trace."
              description="Runs Khatru Pyramid, the invite-tree model used by relays like spatia-arcana.com."
            />
          </FadeIn>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Members invite members", "Each member has a few invites; the link is recorded."],
              ["Requests get approved", "No invite? Sign in and request, a member approves or denies."],
              ["Accountability flows up", "Inviters stay responsible; anyone can leave anytime."]
            ].map(([t, d]) => (
              <div
                key={t}
                className="rounded-xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]"
              >
                <div className="text-sm font-semibold text-slate-900 dark:text-white">{t}</div>
                <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
