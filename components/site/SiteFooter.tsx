import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/nav";
import { BRAND } from "@/lib/brand";
import { IconNostr } from "@/components/ui/Icon";
import { LogoMark, BetaTag } from "@/components/ui/Logo";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-white dark:bg-ink-950">
      <div className="h-0.5 w-full bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500" />
      <div className="container-page py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <LogoMark className="h-8 w-8" />
              <div className="flex items-center gap-1.5">
                <div className="text-sm font-semibold text-slate-900 dark:text-white">
                  {BRAND.name}
                </div>
                <BetaTag />
              </div>
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              {BRAND.tagline}
            </p>
            <p className="mt-4 max-w-md text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Bitcoin Health Network is a community health network, owned by the community and
              maintained by our team as curators. It is an informational directory only. We do not
              provide medical advice or medical services. Listings do not constitute endorsements. Users are responsible
              for evaluating providers and organizations. Bitcoin payments and pricing may involve
              volatility and user responsibility.
              <span className="ml-1">
                <Link
                  href="/disclaimer"
                  className="underline decoration-slate-200 underline-offset-4 transition-colors hover:text-slate-700 hover:decoration-brand-400 dark:decoration-white/20 dark:hover:text-slate-200"
                >
                  Read disclaimer
                </Link>
                .
              </span>
            </p>
          </div>

          <div className="md:col-span-3 md:col-start-8">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Explore
            </div>
            <ul className="mt-3 space-y-2">
              {FOOTER_LINKS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-slate-700 underline decoration-slate-200 underline-offset-4 transition-colors hover:text-slate-900 hover:decoration-brand-400 dark:text-slate-300 dark:decoration-white/20 dark:hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Join the community
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              The community is a small, invite-only Nostr relay. Members introduce members, and
              conversations stay among people who vouch for each other. Come introduce yourself,
              suggest categories, or recommend aligned providers.
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href="/community"
                className="inline-flex items-center gap-2 text-sm font-medium text-nostr-700 underline decoration-nostr-200 underline-offset-4 transition-colors hover:decoration-nostr-500 dark:text-nostr-300 dark:decoration-nostr-400/40"
              >
                <IconNostr className="h-4 w-4" />
                Join community
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-slate-200/70 pt-6 dark:border-white/10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} {BRAND.name}. Community-owned. All rights reserved.
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-500">
            Built for clarity, calm, and trust.
          </p>
        </div>
      </div>
    </footer>
  );
}
