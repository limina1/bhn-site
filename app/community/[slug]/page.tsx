import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";
import { DiscussionIconBox } from "@/components/ui/DiscussionIcon";
import { DISCUSSIONS, getDiscussion } from "@/lib/discussions";
import { TopicFeed } from "../ui";

export function generateStaticParams() {
  return DISCUSSIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const d = getDiscussion(slug);
  if (!d) return { title: "Discussion" };
  return { title: d.title, description: d.summary };
}

export default async function DiscussionDetail({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const d = getDiscussion(slug);
  if (!d) notFound();

  return (
    <>
      <section className="container-page pb-8 pt-12 sm:pt-16">
        <Link
          href="/community"
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
        >
          <span aria-hidden="true">&larr;</span> All discussions
        </Link>

        <div className="mt-5 flex items-start gap-4">
          <DiscussionIconBox icon={d.icon} className="h-12 w-12" />
          <div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
              <span className="rounded-md bg-accent-50 px-2 py-0.5 font-medium text-accent-700 ring-1 ring-accent-200 dark:bg-accent-500/15 dark:text-accent-300 dark:ring-accent-400/30">
                {d.category}
              </span>
              <span className="text-slate-500 dark:text-slate-400">{d.readMins} min read</span>
              <span className="text-slate-500 dark:text-slate-400">{d.replies} in discussion</span>
            </div>
            <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-4xl">
              {d.title}
            </h1>
          </div>
        </div>
      </section>

      <Section className="border-t border-slate-200/70 bg-white py-10 dark:border-white/10 dark:bg-transparent">
        <div className="container-page max-w-3xl">
          <FadeIn>
            <div className="space-y-4 text-[15px] leading-relaxed text-slate-700 dark:text-slate-300">
              {d.body.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </FadeIn>

          <FadeIn delayMs={60}>
            <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 text-sm leading-relaxed text-amber-800/90 dark:border-amber-400/40 dark:bg-amber-500/10 dark:text-amber-100/80">
              <span className="font-semibold text-amber-900 dark:text-amber-100">
                Discussion, not medical advice.
              </span>{" "}
              This is a prompt for members to talk through, not diagnosis or
              treatment.{" "}
              <Link href="/disclaimer" className="font-medium underline underline-offset-4">
                Disclaimer
              </Link>
              .
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section className="border-t border-slate-200/70 bg-slate-50/40 py-10 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-page">
          <div className="mb-6 max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300">
              The conversation
            </div>
            <h2 className="mt-2 text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Talk it through on the relay
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Live posts from members, tagged{" "}
              <span className="font-mono">#{d.slug}</span>. Set up an identity to
              join in. It happens in your browser.
            </p>
          </div>
          <TopicFeed topic={d.slug} />
        </div>
      </Section>
    </>
  );
}
