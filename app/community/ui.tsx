"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import {
  finalizeEvent,
  generateSecretKey,
  getPublicKey,
  type EventTemplate
} from "nostr-tools/pure";
import * as nip19 from "nostr-tools/nip19";
import { SimplePool } from "nostr-tools/pool";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cx } from "@/components/ui/cx";
import { BRAND } from "@/lib/brand";

/* -------------------------------------------------------------------------- */
/*  Types                                                                      */
/* -------------------------------------------------------------------------- */

type LocalSigner = { kind: "local"; sk: Uint8Array; pubkey: string };
type ExtensionSigner = { kind: "extension"; pubkey: string };
type Signer = LocalSigner | ExtensionSigner;

type NostrExtension = {
  getPublicKey(): Promise<string>;
  signEvent(e: EventTemplate & { pubkey?: string }): Promise<
    EventTemplate & { id: string; sig: string; pubkey: string }
  >;
};

declare global {
  interface Window {
    nostr?: NostrExtension;
  }
}

const NPUB_STORAGE_KEY = "bhn:community:npub";

// When the real Pyramid relay is live it's the only source of truth. Before
// then, read/write the preview against a few reliable public relays so the
// #bitcoinhealth conversation renders.
const READ_RELAYS = BRAND.pyramidLive
  ? [BRAND.pyramidRelay]
  : [BRAND.pyramidRelay, "wss://nos.lol", "wss://relay.primal.net"];
const WRITE_RELAYS = BRAND.pyramidLive ? [BRAND.pyramidRelay] : READ_RELAYS;

/* -------------------------------------------------------------------------- */
/*  Small helpers                                                              */
/* -------------------------------------------------------------------------- */

function short(id: string, head = 10, tail = 6) {
  if (id.length <= head + tail + 1) return id;
  return `${id.slice(0, head)}…${id.slice(-tail)}`;
}

function useCopy() {
  const [copied, setCopied] = useState<string | null>(null);
  const copy = useCallback(async (label: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(label);
      setTimeout(() => setCopied((c) => (c === label ? null : c)), 1600);
    } catch {
      /* clipboard blocked, ignore */
    }
  }, []);
  return { copied, copy };
}

/* -------------------------------------------------------------------------- */
/*  Identity panel                                                             */
/* -------------------------------------------------------------------------- */

function IdentityPanel({
  signer,
  onSigner
}: {
  signer: Signer | null;
  onSigner: (s: Signer | null) => void;
}) {
  const [sk, setSk] = useState<Uint8Array | null>(null);
  const [revealed, setRevealed] = useState(false);
  const [ack, setAck] = useState(false);
  const [hasExtension, setHasExtension] = useState(false);
  const [savedNpub, setSavedNpub] = useState<string | null>(null);
  const { copied, copy } = useCopy();

  useEffect(() => {
    setHasExtension(typeof window !== "undefined" && !!window.nostr);
    try {
      setSavedNpub(window.localStorage.getItem(NPUB_STORAGE_KEY));
    } catch {
      /* storage blocked */
    }
  }, []);

  const npub = useMemo(() => {
    if (signer) return nip19.npubEncode(signer.pubkey);
    return null;
  }, [signer]);

  const nsec = useMemo(() => (sk ? nip19.nsecEncode(sk) : null), [sk]);

  const generate = useCallback(() => {
    const next = generateSecretKey();
    const pubkey = getPublicKey(next);
    setSk(next);
    setRevealed(false);
    setAck(false);
    onSigner({ kind: "local", sk: next, pubkey });
    try {
      window.localStorage.setItem(NPUB_STORAGE_KEY, nip19.npubEncode(pubkey));
      setSavedNpub(nip19.npubEncode(pubkey));
    } catch {
      /* storage blocked */
    }
  }, [onSigner]);

  const connectExtension = useCallback(async () => {
    if (!window.nostr) return;
    const pubkey = await window.nostr.getPublicKey();
    setSk(null);
    onSigner({ kind: "extension", pubkey });
    try {
      window.localStorage.setItem(NPUB_STORAGE_KEY, nip19.npubEncode(pubkey));
      setSavedNpub(nip19.npubEncode(pubkey));
    } catch {
      /* storage blocked */
    }
  }, [onSigner]);

  const reset = useCallback(() => {
    setSk(null);
    setRevealed(false);
    setAck(false);
    onSigner(null);
  }, [onSigner]);

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-slate-900 dark:text-white">
            Your Nostr identity
          </div>
          <p className="mt-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
            Everything on the community runs on Nostr. Your identity is a
            cryptographic keypair, a public <span className="font-medium">npub</span>{" "}
            you share, and a secret <span className="font-medium">nsec</span> that
            proves it&rsquo;s you.
          </p>
        </div>
        <Badge tone={signer ? "success" : "neutral"}>
          {signer ? "Ready" : "Not set"}
        </Badge>
      </div>

      {!signer ? (
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Button type="button" onClick={generate} className="w-full">
            Generate a new identity
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={connectExtension}
            disabled={!hasExtension}
            className="w-full"
          >
            {hasExtension ? "Use browser extension" : "No extension detected"}
          </Button>
          {savedNpub ? (
            <p className="sm:col-span-2 text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Last used on this device:{" "}
              <span className="font-mono">{short(savedNpub)}</span>. Your secret
              key is never stored. Generate again or reconnect your extension to
              continue.
            </p>
          ) : null}
        </div>
      ) : (
        <div className="mt-5 space-y-4">
          {/* npub */}
          <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                Public key (npub), safe to share
              </div>
              <button
                type="button"
                onClick={() => npub && copy("npub", npub)}
                className="text-xs font-medium text-brand-700 hover:underline dark:text-brand-300"
              >
                {copied === "npub" ? "Copied" : "Copy"}
              </button>
            </div>
            <div className="mt-2 break-all font-mono text-sm text-slate-900 dark:text-slate-100">
              {npub}
            </div>
          </div>

          {/* nsec, only for freshly generated local keys */}
          {signer.kind === "local" && nsec ? (
            <div className="rounded-2xl border-2 border-brand-300 bg-brand-50/60 p-4 dark:border-brand-400/40 dark:bg-brand-500/10">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-brand-800 dark:text-brand-200">
                  Secret key (nsec), never share this
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setRevealed((v) => !v)}
                    className="text-xs font-medium text-brand-800 hover:underline dark:text-brand-200"
                  >
                    {revealed ? "Hide" : "Reveal"}
                  </button>
                  <button
                    type="button"
                    onClick={() => copy("nsec", nsec)}
                    className="text-xs font-medium text-brand-800 hover:underline dark:text-brand-200"
                  >
                    {copied === "nsec" ? "Copied" : "Copy"}
                  </button>
                </div>
              </div>
              <div
                className={cx(
                  "mt-2 break-all font-mono text-sm text-slate-900 dark:text-slate-100",
                  !revealed && "select-none blur-sm"
                )}
              >
                {revealed ? nsec : "nsec1" + "•".repeat(52)}
              </div>

              <div className="mt-4 rounded-xl bg-white/70 p-3 text-xs leading-relaxed text-slate-700 dark:bg-black/20 dark:text-slate-300">
                <p className="font-semibold text-slate-900 dark:text-white">
                  This is the only copy.
                </p>
                <p className="mt-1">
                  Save your nsec in a password manager now. There is no
                  &ldquo;forgot password&rdquo;. If you lose it, no one (not BHN,
                  not the relay operators) can recover your identity or restore
                  your access to the community. Anyone who gets it can post as
                  you.
                </p>
              </div>

              <label className="mt-3 flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                <input
                  type="checkbox"
                  checked={ack}
                  onChange={(e) => setAck(e.target.checked)}
                  className="mt-0.5"
                />
                I&rsquo;ve saved my nsec somewhere safe.
              </label>
              {!ack ? (
                <p className="mt-1 text-[11px] text-brand-800/80 dark:text-brand-200/80">
                  Confirm this before you rely on this identity.
                </p>
              ) : null}
            </div>
          ) : null}

          {signer.kind === "extension" ? (
            <p className="text-xs leading-relaxed text-slate-500 dark:text-slate-400">
              Signing with your browser extension. Your secret key stays inside
              the extension and never reaches this page.
            </p>
          ) : null}

          <button
            type="button"
            onClick={reset}
            className="text-xs font-medium text-slate-500 hover:underline dark:text-slate-400"
          >
            Start over
          </button>
        </div>
      )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Request to join panel                                                      */
/* -------------------------------------------------------------------------- */

function RequestToJoinPanel({ signer }: { signer: Signer | null }) {
  const npub = signer ? nip19.npubEncode(signer.pubkey) : null;

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between gap-3">
        <div className="text-sm font-semibold text-slate-900 dark:text-white">
          Request to join the community
        </div>
        <Badge tone="accent">Invite-only</Badge>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        The community is a private, invite-only Nostr relay running{" "}
        <Link
          href="https://github.com/fiatjaf/pyramid"
          target="_blank"
          rel="noreferrer"
          className="link"
        >
          Khatru&nbsp;Pyramid
        </Link>
        . Membership works as a pyramid: every member can invite a limited number
        of people, and each inviter stays accountable for who they bring in. You
        can also sign in on the relay&rsquo;s page and post a public request, and
        an existing member then approves or denies it.
      </p>

      <ol className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        <li className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
          Set up your Nostr identity above (or connect an extension).
        </li>
        <li className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
          Open the community relay and sign in with that identity.
        </li>
        <li className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
          Submit a join request, or paste an invite code from a member.
        </li>
      </ol>

      {npub ? (
        <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50/60 p-3 text-xs text-slate-600 dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-400">
          You&rsquo;ll request access as{" "}
          <span className="font-mono text-slate-900 dark:text-slate-200">
            {short(npub)}
          </span>
          .
        </div>
      ) : null}

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        <a
          href={BRAND.pyramidUrl}
          target="_blank"
          rel="noreferrer"
          className={cx(
            "inline-flex h-11 items-center justify-center rounded-xl bg-nostr-600 px-5 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-[1px] hover:bg-nostr-700 dark:bg-nostr-500 dark:hover:bg-nostr-600",
            !signer && "pointer-events-none opacity-50"
          )}
          aria-disabled={!signer}
        >
          Open the community relay →
        </a>
        {!signer ? (
          <span className="self-center text-xs text-slate-500 dark:text-slate-400">
            Set up an identity first.
          </span>
        ) : null}
      </div>

      {!BRAND.pyramidLive ? (
        <p className="mt-3 text-[11px] leading-relaxed text-slate-400 dark:text-slate-500">
          Note: <span className="font-mono">{BRAND.pyramidUrl}</span> is a
          placeholder relay for now. It will point to the BHN Pyramid instance
          once it&rsquo;s deployed.
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Discussion panel (read + post)                                             */
/* -------------------------------------------------------------------------- */

type ChatNote = {
  id: string;
  pubkey: string;
  content: string;
  created_at: number;
};

function DiscussionPanel({
  signer,
  topic
}: {
  signer: Signer | null;
  topic?: string;
}) {
  const [notes, setNotes] = useState<ChatNote[]>([]);
  const [status, setStatus] = useState<"connecting" | "live" | "idle" | "error">(
    "connecting"
  );
  const [draft, setDraft] = useState("");
  const [posting, setPosting] = useState(false);
  const [postError, setPostError] = useState<string | null>(null);
  const poolRef = useRef<SimplePool | null>(null);

  const feedTag = topic ?? BRAND.communityTag;

  useEffect(() => {
    const pool = new SimplePool();
    poolRef.current = pool;
    setNotes([]);
    setStatus("connecting");
    const seen = new Set<string>();
    let settleTimer: ReturnType<typeof setTimeout>;

    // A topic feed always scopes by its tag. The general feed on the real
    // members-only relay shows every member post; on demo relays it scopes to
    // the community hashtag.
    const filter =
      topic || !BRAND.pyramidLive
        ? { kinds: [1], "#t": [feedTag], limit: 30 }
        : { kinds: [1], limit: 50 };

    const sub = pool.subscribeMany(
      READ_RELAYS,
      filter,
      {
        onevent(ev) {
          if (seen.has(ev.id)) return;
          seen.add(ev.id);
          setStatus("live");
          setNotes((prev) =>
            [
              ...prev,
              {
                id: ev.id,
                pubkey: ev.pubkey,
                content: ev.content,
                created_at: ev.created_at
              }
            ]
              .sort((a, b) => b.created_at - a.created_at)
              .slice(0, 40)
          );
        },
        oneose() {
          settleTimer = setTimeout(
            () => setStatus((s) => (s === "live" ? s : "idle")),
            500
          );
        }
      }
    );

    const failTimer = setTimeout(
      () => setStatus((s) => (s === "connecting" ? "idle" : s)),
      6000
    );

    return () => {
      clearTimeout(settleTimer);
      clearTimeout(failTimer);
      sub.close();
      pool.close(READ_RELAYS);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [feedTag, topic]);

  const post = useCallback(async () => {
    if (!signer || !draft.trim() || !poolRef.current) return;
    setPosting(true);
    setPostError(null);
    const tags = topic
      ? [["t", BRAND.communityTag], ["t", topic]]
      : [["t", BRAND.communityTag]];
    const template: EventTemplate = {
      kind: 1,
      created_at: Math.floor(Date.now() / 1000),
      tags,
      content: draft.trim()
    };
    try {
      let signed;
      if (signer.kind === "local") {
        signed = finalizeEvent(template, signer.sk);
      } else {
        if (!window.nostr) throw new Error("Extension unavailable");
        signed = await window.nostr.signEvent(template);
      }
      await Promise.any([...poolRef.current.publish(WRITE_RELAYS, signed)]);
      setNotes((prev) =>
        [
          {
            id: signed.id,
            pubkey: signed.pubkey,
            content: signed.content,
            created_at: signed.created_at
          },
          ...prev
        ].slice(0, 40)
      );
      setDraft("");
    } catch {
      setPostError(
        "Couldn't publish to the relay. On the real Pyramid relay, only approved members can post."
      );
    } finally {
      setPosting(false);
    }
  }, [signer, draft]);

  return (
    <div className="card p-6">
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-slate-900 dark:text-white">
          Live discussion feed
        </div>
        <span
          className={cx(
            "inline-flex items-center gap-1.5 text-xs font-medium",
            status === "live"
              ? "text-emerald-600 dark:text-emerald-400"
              : status === "error"
                ? "text-rose-600 dark:text-rose-400"
                : "text-slate-500 dark:text-slate-400"
          )}
        >
          <span
            className={cx(
              "h-1.5 w-1.5 rounded-full",
              status === "live"
                ? "bg-emerald-500"
                : status === "connecting"
                  ? "bg-amber-400"
                  : "bg-slate-400"
            )}
          />
          {status === "live"
            ? "Live"
            : status === "connecting"
              ? "Connecting…"
              : status === "error"
                ? "Offline"
                : "No recent messages"}
        </span>
      </div>

      {!BRAND.pyramidLive ? (
        <p className="mt-2 text-[11px] leading-relaxed text-slate-400 dark:text-slate-500">
          Previewing <span className="font-mono">#{feedTag}</span> from public
          demo relays. Swap in the BHN Pyramid relay to make this the
          members-only room.
        </p>
      ) : null}

      <div className="mt-4 max-h-80 space-y-3 overflow-y-auto pr-1">
        {notes.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white/60 p-6 text-center text-sm text-slate-500 dark:border-white/15 dark:bg-white/[0.03] dark:text-slate-400">
            {status === "connecting"
              ? "Loading recent messages…"
              : "No messages yet. Be the first to post."}
          </div>
        ) : (
          notes.map((n) => (
            <div
              key={n.id}
              className="rounded-2xl border border-slate-200 bg-white p-3 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs text-brand-700 dark:text-brand-300">
                  {short(nip19.npubEncode(n.pubkey), 12, 6)}
                </span>
                <span className="text-[11px] text-slate-400 dark:text-slate-500">
                  {new Date(n.created_at * 1000).toLocaleString()}
                </span>
              </div>
              <p className="mt-1.5 whitespace-pre-wrap break-words text-sm leading-relaxed text-slate-700 dark:text-slate-200">
                {n.content}
              </p>
            </div>
          ))
        )}
      </div>

      <div className="mt-4 border-t border-slate-200/70 pt-4 dark:border-white/10">
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          rows={3}
          disabled={!signer}
          placeholder={
            signer
              ? "Write something to the community…"
              : "Set up your identity above to post."
          }
          className="w-full resize-none rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-900 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-brand-300 focus:ring-2 focus:ring-brand-200 disabled:opacity-60 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-brand-400/40 dark:focus:ring-brand-400/20"
        />
        <div className="mt-2 flex items-center justify-between gap-3">
          <span className="text-xs text-slate-400 dark:text-slate-500">
            Signed by your key, tagged <span className="font-mono">#{feedTag}</span>.
          </span>
          <Button
            type="button"
            size="sm"
            onClick={post}
            disabled={!signer || !draft.trim() || posting}
          >
            {posting ? "Posting…" : "Post"}
          </Button>
        </div>
        {postError ? (
          <p className="mt-2 text-xs text-rose-600 dark:text-rose-400">
            {postError}
          </p>
        ) : null}
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*  Composed client                                                            */
/* -------------------------------------------------------------------------- */

/** Identity + request-to-join, shared signer state. No feed. */
export function CommunityJoin() {
  const [signer, setSigner] = useState<Signer | null>(null);

  return (
    <div className="space-y-6">
      <IdentityPanel signer={signer} onSigner={setSigner} />
      <RequestToJoinPanel signer={signer} />
    </div>
  );
}

/** Per-topic feed used on discussion detail pages. */
export function TopicFeed({ topic }: { topic: string }) {
  const [signer, setSigner] = useState<Signer | null>(null);

  return (
    <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
      <div className="lg:col-span-5">
        <IdentityPanel signer={signer} onSigner={setSigner} />
      </div>
      <div className="lg:col-span-7">
        <DiscussionPanel signer={signer} topic={topic} />
      </div>
    </div>
  );
}
