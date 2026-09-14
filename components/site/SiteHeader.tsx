"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { NAV, type NavItem } from "@/lib/nav";
import { cx } from "@/components/ui/cx";
import { ButtonLink } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { Logo } from "@/components/ui/Logo";
import { IconNostr } from "@/components/ui/Icon";

function markActive(pathname: string, href: string) {
  const base = href.split("#")[0];
  if (base === "/") return pathname === "/";
  return pathname === base || pathname.startsWith(`${base}/`);
}

const linkBase =
  "rounded-xl px-3 py-2 text-sm font-medium transition-colors";
const linkActive =
  "bg-brand-50 text-slate-900 ring-1 ring-brand-200 dark:bg-brand-500/15 dark:text-white dark:ring-brand-400/30";
const linkIdle =
  "text-slate-700 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white";

function NavEntry({ item, pathname }: { item: NavItem; pathname: string }) {
  const [open, setOpen] = useState(false);
  const active = markActive(pathname, item.href);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cx(linkBase, active ? linkActive : linkIdle)}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href}
        className={cx(
          linkBase,
          "inline-flex items-center gap-1",
          active ? linkActive : linkIdle
        )}
        onFocus={() => setOpen(true)}
        aria-expanded={open}
      >
        {item.label}
        <svg viewBox="0 0 12 12" className="h-3 w-3 opacity-60" aria-hidden="true">
          <path
            d="M3 4.5 6 8l3-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <div
        className={cx(
          "absolute left-0 top-full z-[80] w-72 pt-2 transition",
          open
            ? "pointer-events-auto opacity-100 translate-y-0"
            : "pointer-events-none opacity-0 -translate-y-1"
        )}
      >
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-white/10 dark:bg-ink-900">
          {item.children.map((c) => (
            <Link
              key={c.href}
              href={c.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-3 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {c.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur dark:border-white/10 dark:bg-ink-950/80">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link href="/" className="group inline-flex items-center">
          <Logo descriptor="A community health network" />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <NavEntry key={item.label} item={item} pathname={pathname} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href="/community" variant="nostr">
            <IconNostr className="h-4 w-4" />
            <span className="hidden sm:inline">Join community</span>
            <span className="sm:hidden">Discuss</span>
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
