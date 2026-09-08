# Bitcoin Health Network (Website)

A multi-page website for Bitcoin Health Network: a community-owned marketplace
connecting Bitcoiners with health and wellness providers, tools, services, and
discussions. The network is maintained and curated by our team but is meant to
belong to the community. It starts on Nostr and grows over time.

## Stack

- Next.js (App Router) + React + TypeScript
- Tailwind CSS (Bitcoin-orange `brand`, `accent` blue, `nostr` purple palettes)
- Class-based dark mode with a header toggle (persisted to `localStorage`,
  no-flash via an inline `<head>` script in `app/layout.tsx`)

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Pages

- `app/page.tsx` (Home)
- `app/directory/page.tsx` (Directory with filters)
- `app/education/page.tsx` (Education, DGA partner, course outline)
- `app/community/page.tsx` (Discussions: the invite-only Nostr layer)
- `app/community/[slug]/page.tsx` (One discussion thread + its live feed)
- `app/reviews/page.tsx` (Web-of-trust reviews explainer)
- `app/about/page.tsx` (About and mission)
- `app/disclaimer/page.tsx` (Disclaimer and legal boundaries)
- `app/profile/[slug]/page.tsx` (Sample listing detail)

## Editing content

- Directory sample listings: `lib/data.ts` (all samples except Zaprana, which is
  the one real sponsored listing)
- Discussion topics and primers: `lib/discussions.ts`
- Branding, tagline, contact email, partner and relay URLs: `lib/brand.ts`
- Navigation: `lib/nav.ts`

## Nostr / community relay

The Discussions section talks to a Khatru Pyramid relay
([`fiatjaf/pyramid`](https://github.com/fiatjaf/pyramid)). Configure it with
`NEXT_PUBLIC_PYRAMID_URL`, `NEXT_PUBLIC_PYRAMID_RELAY`, and
`NEXT_PUBLIC_PYRAMID_LIVE` (see `lib/brand.ts`). With no env set, the page
previews against public demo relays.

This project uses sample listings to communicate structure and tone without
making medical claims.
