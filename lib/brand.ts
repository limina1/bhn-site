export const BRAND = {
  name: "Bitcoin Health Network",
  shortName: "BHN",
  // Primary positioning line (sovereignty-first).
  tagline:
    "BHN is the home base for sovereign health and wellness: spaces, practitioners, tools, and communities in one place, built for people who believe health autonomy is non-negotiable.",
  // Shorter descriptor for the header / tight spaces.
  shortDescriptor: "A community wellness network",
  // Where the community actually lives today.
  nostrUrl: "https://primal.net/",
  contactEmail: "hello@bitcoinhealth.network",

  // --- Partners & sponsors ---
  // Dream Grad Academy (DGA), lead education partner.
  dgaUrl: "https://dreamgradacademy.com/",
  dreamgradUrl: "https://dreamgradacademy.com/", // legacy alias
  // Zaprana: sponsor. Appears as a sponsored box and a sponsored directory listing.
  zapranaUrl: "https://zaprana.life/creator/selfishcollective",
  zapranaTagline: "A space for well-being and sovereignty.",
  // Reference YouTube channel surfaced on the education page (no real embeds yet).
  youtube: {
    drSatoshi: "https://www.youtube.com/results?search_query=Dr.+Satoshi"
  },

  // --- Nostr / Pyramid community ---
  // The invite-only community runs on a Khatru Pyramid relay (fiatjaf/pyramid).
  // `pyramidUrl` is the relay's web homepage, where non-members sign in and
  // request to join, and members approve or deny. Replace with the real host
  // once the relay is deployed (e.g. https://discussion.bitcoinhealth.network).
  pyramidUrl:
    process.env.NEXT_PUBLIC_PYRAMID_URL ?? "https://pyramid.fiatjaf.com",
  // WebSocket endpoint of the same relay, used to read/preview the discussion.
  // Falls back to a public demo relay so the preview renders before the real
  // Pyramid relay is live.
  pyramidRelay:
    process.env.NEXT_PUBLIC_PYRAMID_RELAY ?? "wss://relay.damus.io",
  // Whether the Pyramid relay above is the real BHN one yet (vs. a placeholder).
  pyramidLive: process.env.NEXT_PUBLIC_PYRAMID_LIVE === "true",
  // Hashtag that scopes community discussion notes.
  communityTag: "bitcoinhealth"
};
