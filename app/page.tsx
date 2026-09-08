import Link from "next/link";
import { ButtonLink } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardText, CardTitle } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { IconSearch, IconNostr } from "@/components/ui/Icon";
import { Section, SectionHeading } from "@/components/ui/Section";
import { BRAND } from "@/lib/brand";
import { DIRECTORY_LISTINGS } from "@/lib/data";

export default function HomePage() {
  const featured = DIRECTORY_LISTINGS.slice(0, 3);

  return (
    <>
      <section className="container-page pb-10 pt-14 sm:pb-14 sm:pt-18">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="chip">
              <span className="h-2 w-2 rounded-full bg-accent-500" />
              A community wellness network · built on Bitcoin &amp; Nostr
            </div>

            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Sovereign health and wellness,{" "}
              <span className="bg-gradient-to-r from-brand-500 via-brand-500 to-accent-500 bg-clip-text text-transparent">
                all in one place.
              </span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300 sm:text-lg">
              {BRAND.shortName} is the home base for sovereign health and wellness: spaces,
              practitioners, tools, and communities in one place, built for people who believe
              health autonomy is non-negotiable. We start where the aligned community already is, on
              Nostr, and grow outward over time.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <ButtonLink href="/directory" size="lg">
                Browse the directory
              </ButtonLink>
              <ButtonLink href="/community" variant="nostr" size="lg">
                <IconNostr className="h-5 w-5" />
                View discussion
              </ButtonLink>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="card-muted p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  What this is
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  An open community wellness network to discover sovereign health and wellness
                  spaces, practitioners, tools, and communities in one place.
                </p>
              </div>
              <div className="card-muted p-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  What this is not
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  Not medical advice and not a healthcare provider. Our team curates and maintains
                  the network, but it belongs to the community.
                </p>
              </div>
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-6 -top-8 -z-10 h-40 w-40 rounded-full bg-gradient-to-br from-brand-400/30 to-accent-400/30 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-8 -left-6 -z-10 h-28 w-28 text-slate-300 opacity-60 dot-grid dark:text-white/10"
            />
            <div className="surface bg-gradient-to-b from-white to-brand-50/40 p-6 ring-1 ring-brand-100/60 dark:from-ink-900 dark:to-ink-900 dark:ring-white/10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Find your match
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-900 dark:text-white">
                    Search by what you&rsquo;re looking for
                  </div>
                </div>
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent-50 ring-1 ring-accent-100 dark:bg-accent-500/15 dark:ring-accent-400/30">
                  <IconSearch className="h-5 w-5 text-accent-700 dark:text-accent-300" />
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="text-xs text-slate-500 dark:text-slate-400">Looking for</div>
                  <div className="mt-1 text-sm text-slate-900 dark:text-slate-100">
                    Bitcoin-friendly wellness coach
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Category</div>
                    <div className="mt-1 text-sm text-slate-900 dark:text-slate-100">Wellness</div>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/[0.03]">
                    <div className="text-xs text-slate-500 dark:text-slate-400">Pays in</div>
                    <div className="mt-1 text-sm text-slate-900 dark:text-slate-100">Bitcoin</div>
                  </div>
                </div>
                <ButtonLink href="/directory" className="w-full">
                  Browse the network
                </ButtonLink>
                <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                  A preview of the discovery experience. Listings shown are early samples.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsored placeholder */}
      <div className="container-page pb-6">
        <a
          href={BRAND.zapranaUrl}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition-colors hover:border-slate-300 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-sm font-bold text-slate-400 ring-1 ring-slate-200 dark:bg-white/10 dark:text-slate-500 dark:ring-white/10">
              Z
            </span>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
                Sponsored
              </div>
              <div className="text-sm font-semibold text-slate-900 dark:text-white">
                Zaprana
              </div>
            </div>
          </div>
          <span className="text-sm text-slate-600 dark:text-slate-300">
            Placeholder sponsor slot. Visit zaprana.com{" "}
            <span aria-hidden="true">&rarr;</span>
          </span>
        </a>
      </div>

      <Section className="border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-transparent">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Why it exists"
              title="A marketplace, a repository, and a community hub."
              description="Bitcoin Health Network brings three things together in one open place, so Bitcoiners can find aligned health and wellness resources without leaving the values (or the money) they already trust."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "An open marketplace",
                tag: "Find",
                text: "Discover health and wellness providers who share Bitcoin values or accept Bitcoin: clinicians, coaches, studios, and services."
              },
              {
                title: "A decentralized repository",
                tag: "Explore",
                text: "A growing, community-curated repository of health and wellness tools, services, and resources, open to all and owned by no one."
              },
              {
                title: "A community hub",
                tag: "Connect",
                text: "A curated place for Bitcoin-and-health discussion. It starts with Bitcoiners and is built to grow globally over time."
              }
            ].map((c, i) => (
              <FadeIn key={c.title} delayMs={40 + i * 60}>
                <Card className="h-full">
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle>{c.title}</CardTitle>
                    <Badge tone="accent">{c.tag}</Badge>
                  </div>
                  <CardText>{c.text}</CardText>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/70 bg-slate-50/40 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Who you’ll find"
              title="Browse the people and resources behind better health."
              description="Discover by who you want to connect with: providers, educators, tools, communities, and the discussions shaping Bitcoin-aligned health."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {([
              {
                title: "Providers & Clinicians",
                text: "Practitioners offering direct, patient-centered care. Many are Bitcoin-friendly.",
                tag: "Care",
                tone: "brand"
              },
              {
                title: "Wellness Professionals",
                text: "Coaches, studios, and wellness pros focused on prevention and longevity.",
                tag: "Wellness",
                tone: "accent"
              },
              {
                title: "Educators & Coaches",
                text: "Learn from wellness educators, coaches, and program leads.",
                tag: "Learn",
                tone: "brand"
              },
              {
                title: "Tools & Services",
                text: "Bitcoin-native and Bitcoin-accepting tools and services for health.",
                tag: "Tools",
                tone: "accent"
              },
              {
                title: "Communities & Discussions",
                text: "Join Nostr conversations and groups working on shared health goals.",
                tag: "Connect",
                tone: "accent"
              },
              {
                title: "Resources & Research",
                text: "Open resources and research at the edge of health and sound money.",
                tag: "Explore",
                tone: "brand"
              }
            ] as const).map((c, i) => (
              <FadeIn key={c.title} delayMs={40 + i * 40}>
                <Link href="/directory" className="group block h-full focus-visible:outline-none">
                  <Card className="h-full group-focus-visible:ring-2 group-focus-visible:ring-brand-300">
                    <div className="flex items-start justify-between gap-3">
                      <CardTitle>{c.title}</CardTitle>
                      <Badge tone={c.tone}>{c.tag}</Badge>
                    </div>
                    <CardText>{c.text}</CardText>
                    <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-brand-700 dark:text-brand-300">
                      Browse
                      <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5">
                        &rarr;
                      </span>
                    </div>
                  </Card>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-transparent">
        <div className="container-page">
          <FadeIn>
            <div className="overflow-hidden rounded-2xl border border-nostr-200 bg-gradient-to-br from-nostr-50 to-white shadow-card dark:border-nostr-400/20 dark:from-nostr-500/10 dark:to-transparent">
              <div className="grid gap-0 lg:grid-cols-12 lg:items-center">
                <div className="p-8 sm:p-10 lg:col-span-8">
                  <div className="inline-flex items-center gap-2 rounded-full border border-nostr-200 bg-white/70 px-3 py-1 text-xs font-semibold text-nostr-700 dark:border-nostr-400/30 dark:bg-white/5 dark:text-nostr-300">
                    <IconNostr className="h-4 w-4" />
                    Why we start on Nostr
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                    The community already lives here.
                  </h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                    Nostr is still niche. Today it&rsquo;s used mostly by Bitcoiners, which makes it
                    the most natural place to build this network first: an aligned, value-for-value
                    community that already shares the principles behind Bitcoin Health Network. We
                    start here, then grow outward as the network matures.
                  </p>
                </div>
                <div className="border-t border-nostr-200/60 p-8 dark:border-white/10 sm:p-10 lg:col-span-4 lg:border-l lg:border-t-0">
                  <ButtonLink
                    href="/community"
                    variant="nostr"
                    size="lg"
                    className="w-full"
                  >
                    <IconNostr className="h-5 w-5" />
                    View discussion
                  </ButtonLink>
                  <p className="mt-3 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                    Invite-only, member-approved. Introduce yourself, suggest categories, or
                    recommend aligned providers.
                  </p>
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
              eyebrow="Featured listings"
              title="Connections, presented clearly."
              description="A preview of how people, services, and communities appear across the network: easy to scan, easy to compare, no hype."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featured.map((p, i) => (
              <FadeIn key={p.slug} delayMs={40 + i * 60}>
                <Card className="overflow-hidden p-0">
                  <div className="accent-bar" />
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                          {p.type}
                        </div>
                        <div className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                          {p.name}
                        </div>
                      </div>
                      <Badge tone="brand">{p.format}</Badge>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {p.headline}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.categories.slice(0, 2).map((c) => (
                        <span key={c} className="pill">
                          {c}
                        </span>
                      ))}
                      <span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs text-brand-800 ring-1 ring-brand-200 dark:bg-brand-500/15 dark:text-brand-300 dark:ring-brand-400/30">
                        {p.paymentBadge}
                      </span>
                    </div>
                  </div>

                  <div className="border-t border-slate-200/70 bg-white px-6 py-4 dark:border-white/10 dark:bg-transparent">
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-xs text-slate-600 dark:text-slate-400">
                        Availability:{" "}
                        <span className="font-medium text-slate-900 dark:text-slate-200">
                          {p.availability}
                        </span>
                      </div>
                      <Link
                        href={`/profile/${p.slug}`}
                        className="text-sm font-medium text-slate-900 underline decoration-slate-200 underline-offset-4 transition-colors hover:decoration-brand-400 dark:text-slate-100 dark:decoration-white/20"
                      >
                        View profile
                      </Link>
                    </div>
                  </div>
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
              eyebrow="How it works"
              title="Discover, explore, connect."
              description="Three simple steps from browsing the network to reaching out directly. You stay in control the whole way."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Discover",
                text: "Browse people, communities, and resources by category, focus, format, and location."
              },
              {
                title: "Explore profiles",
                text: "See focus areas, services, and how each person or community prefers to connect, including Bitcoin-friendly payment notes."
              },
              {
                title: "Connect directly",
                text: "Reach out yourself to learn more, collaborate, or continue the conversation. No middleman."
              }
            ].map((s, i) => (
              <FadeIn key={s.title} delayMs={40 + i * 60}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 dark:border-white/10 dark:bg-white/[0.03]">
                  <div className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300">
                    Step {i + 1}
                  </div>
                  <div className="mt-2 text-base font-semibold text-slate-900 dark:text-white">
                    {s.title}
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
              eyebrow="Community-owned"
              title="Maintained by us, owned by the community."
              description="Our team acts as curator and maintainer, keeping listings useful, trustworthy, and aligned. But the network is meant to belong to the people who use it, and open protocols keep it that way."
              align="center"
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              {
                title: "Curated, not gatekept",
                text: "We organize and verify signals so the network stays credible, without owning your relationships."
              },
              {
                title: "Open protocols",
                text: "Built on Nostr and Bitcoin so the community can participate, fork, and grow freely."
              },
              {
                title: "Starts with Bitcoiners",
                text: "We begin where the aligned community already is, then expand globally over time."
              },
              {
                title: "Web-of-trust reviews",
                text: "Reputation flows through Nostr's web of trust, not anonymous star spam.",
                href: "/reviews"
              }
            ].map((x, i) => (
              <FadeIn key={x.title} delayMs={40 + i * 40}>
                <div className="card flex h-full flex-col p-6">
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">
                    {x.title}
                  </div>
                  <div className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {x.text}
                  </div>
                  {"href" in x && x.href ? (
                    <Link
                      href={x.href}
                      className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-accent-700 dark:text-accent-300"
                    >
                      How trust works
                      <span aria-hidden="true">&rarr;</span>
                    </Link>
                  ) : null}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-transparent">
        <div className="container-page">
          <FadeIn>
            <SectionHeading
              eyebrow="Educational partners"
              title="Learning and private offerings."
              description="Bitcoin Health Network also supports educational partners offering private learning experiences, guidance, and programs related to health, wellness, and Bitcoin-aligned care."
            />
          </FadeIn>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Private education services",
                tag: "1:1",
                text: "Structured learning designed around clear scope and boundaries."
              },
              {
                title: "Partner programs",
                tag: "Program",
                text: "Aligned partner offerings such as short intensives and curricula."
              },
              {
                title: "Workshops and cohorts",
                tag: "Group",
                text: "Practitioner-led workshops, cohort-based learning, and seminars."
              }
            ].map((c, i) => (
              <FadeIn key={c.title} delayMs={40 + i * 60}>
                <Card>
                  <div className="flex items-start justify-between gap-3">
                    <CardTitle>{c.title}</CardTitle>
                    <Badge tone="brand">{c.tag}</Badge>
                  </div>
                  <CardText>{c.text}</CardText>
                  <div className="mt-5 text-sm font-medium text-brand-700 dark:text-brand-300">
                    <Link
                      href="/education"
                      className="underline decoration-brand-200 underline-offset-4 hover:decoration-brand-400 dark:decoration-brand-400/40"
                    >
                      Explore education
                    </Link>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </div>
      </Section>

      <Section className="border-t border-slate-200/70 bg-white dark:border-white/10 dark:bg-transparent">
        <div className="container-page">
          <FadeIn>
            <div className="card overflow-hidden p-0">
              <div className="grid gap-0 lg:grid-cols-12">
                <div className="lg:col-span-7">
                  <div className="p-8 sm:p-10">
                    <div className="text-xs font-semibold uppercase tracking-wide text-brand-700 dark:text-brand-300">
                      Start here
                    </div>
                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                      Find your people and your providers.
                    </h3>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:text-base">
                      Browse Bitcoin-aligned providers, wellness pros, educators, tools, and
                      discussions, then connect directly. Bitcoin Health Network is a community
                      marketplace and connection layer; it does not provide medical advice.
                    </p>
                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                      <ButtonLink href="/directory" size="lg">
                        Browse the directory
                      </ButtonLink>
                      <ButtonLink href="/community" variant="nostr" size="lg">
                        <IconNostr className="h-5 w-5" />
                        View discussion
                      </ButtonLink>
                    </div>
                  </div>
                </div>
                <div className="relative border-t border-slate-200/70 bg-slate-50/60 p-8 dark:border-white/10 dark:bg-white/[0.03] sm:p-10 lg:col-span-5 lg:border-l lg:border-t-0">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Try searching for
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
                    {[
                      "A Bitcoin-friendly clinician for direct, patient-centered care",
                      "A wellness coach who accepts Bitcoin",
                      "An educator for remote, value-for-value learning",
                      "A community or discussion on health and sound money",
                      "Open tools at the edge of health and Bitcoin"
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 rounded-2xl border border-slate-200 bg-white/70 p-4 dark:border-white/10 dark:bg-white/[0.04]">
                    <div className="text-xs font-semibold text-slate-700 dark:text-slate-200">
                      Note
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      This version is intentionally lightweight and includes sample listings to
                      support early feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
