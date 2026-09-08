export type DirectoryCategory =
  | "Healthcare Providers"
  | "Wellness Professionals"
  | "Community Wellness"
  | "Educational Services"
  | "Bitcoin Health Tools"
  | "Preventive Health"
  | "Remote Support";

export type ListingType =
  | "Provider"
  | "Wellness Professional"
  | "Community"
  | "Educational Service"
  | "Organization / Tool";
export type Format = "Remote" | "In-person" | "Hybrid";

export type DirectoryListing = {
  slug: string;
  type: ListingType;
  name: string;
  headline: string;
  /** Sponsored listings are pinned to the top of results and badged. */
  sponsored?: boolean;
  /** Sample listings exist only to show the format. Everything except Zaprana. */
  example?: boolean;
  /** External URL for sponsored / tool listings. */
  externalUrl?: string;
  categories: DirectoryCategory[];
  tags: string[];
  location: string;
  format: Format;
  paymentBadge: "Accepts Bitcoin" | "Bitcoin-friendly" | "Private service" | "Resource network";
  availability: "This week" | "Next week" | "Limited" | "Waitlist" | "Open access";
  verifiedSignals: string[];
  bio: string;
  services: Array<{ name: string; description: string; duration: string }>;
  links: Array<{ label: string; href: string }>;
  reviews: Array<{ name: string; quote: string; rating: 1 | 2 | 3 | 4 | 5 }>;
};

export const DIRECTORY_LISTINGS: DirectoryListing[] = [
  {
    slug: "zaprana",
    type: "Organization / Tool",
    name: "Zaprana",
    headline:
      "A Bitcoin-friendly wellness brand. Shown here as a sponsored listing so you can see how sponsors appear alongside the rest.",
    sponsored: true,
    externalUrl: "https://zaprana.com/",
    categories: ["Bitcoin Health Tools", "Wellness Professionals"],
    tags: ["Bitcoin-friendly"],
    location: "Remote",
    format: "Remote",
    paymentBadge: "Bitcoin-friendly",
    availability: "Open access",
    verifiedSignals: ["Sponsor"],
    bio: "Sponsored results are clearly labelled, still obey the same filters as everything else, and are pinned to the top. They are never mixed in silently.",
    services: [
      {
        name: "Sponsored placement",
        description: "How a sponsor appears in the directory without disrupting search.",
        duration: "n/a"
      }
    ],
    links: [{ label: "Visit zaprana.com", href: "https://zaprana.com/" }],
    reviews: []
  },
  {
    slug: "sample-direct-pay-pt",
    type: "Provider",
    name: "Sample: Direct-Pay Physical Therapy",
    headline:
      "Example of how a direct-pay provider listing would read. Not a real practice.",
    example: true,
    categories: ["Healthcare Providers", "Preventive Health"],
    tags: ["Direct Pay", "Musculoskeletal Health"],
    location: "Austin, TX",
    format: "Hybrid",
    paymentBadge: "Accepts Bitcoin",
    availability: "This week",
    verifiedSignals: ["License signal (placeholder)", "Identity verification (placeholder)"],
    bio: "Sample listing. This is how a direct, patient-centered provider focused on movement and prevention might present. In a real listing you would confirm scope, pricing, and fit directly with the practice.",
    services: [
      {
        name: "Initial assessment",
        description: "History, movement screen, and a prevention-forward plan with next steps.",
        duration: "60 min"
      },
      {
        name: "Follow-up session",
        description: "Progressions, monitoring, and training adjustments.",
        duration: "45 min"
      }
    ],
    links: [{ label: "View profile", href: "/profile/sample-direct-pay-pt" }],
    reviews: [
      { name: "Sample reviewer", quote: "Clear plan, realistic pacing, and measurable progress.", rating: 5 },
      { name: "Sample reviewer", quote: "Practical and calm. The sessions were structured and useful.", rating: 5 }
    ]
  },
  {
    slug: "sample-metabolic-education",
    type: "Educational Service",
    name: "Sample: Metabolic Health Education",
    headline:
      "Example of a private education listing for individuals and small groups. Not a real service.",
    example: true,
    categories: ["Educational Services", "Preventive Health"],
    tags: ["Education", "Metabolic Health"],
    location: "Remote",
    format: "Remote",
    paymentBadge: "Private service",
    availability: "Next week",
    verifiedSignals: ["Reference checks (placeholder)", "Portfolio verification (placeholder)"],
    bio: "Sample listing. Education-focused support to improve understanding, routines, and decision-making. Education is not medical advice or diagnosis.",
    services: [
      {
        name: "Private session",
        description: "Topic selection, baseline audit, and an education plan with clear next steps.",
        duration: "50 min"
      },
      {
        name: "Small group education",
        description: "Structured learning and Q&A for individuals or small teams.",
        duration: "60 to 90 min"
      }
    ],
    links: [{ label: "View profile", href: "/profile/sample-metabolic-education" }],
    reviews: [
      { name: "Sample reviewer", quote: "The process felt structured without being rigid.", rating: 5 }
    ]
  },
  {
    slug: "sample-wellness-resources",
    type: "Organization / Tool",
    name: "Sample: Sound-Money Wellness Resources",
    headline:
      "Example of a resource-hub listing exploring sovereignty and long-term health. Not a real organization.",
    example: true,
    categories: ["Educational Services", "Bitcoin Health Tools"],
    tags: ["Community", "Education"],
    location: "Remote",
    format: "Remote",
    paymentBadge: "Resource network",
    availability: "Open access",
    verifiedSignals: ["Organization verification (placeholder)"],
    bio: "Sample listing. A resource network and program hub for people learning about prevention, sovereignty, and practical health education. In a real listing you would confirm offerings and terms directly.",
    services: [
      {
        name: "Open resources",
        description: "Reading lists, frameworks, and practical guides for long-term wellness.",
        duration: "Self-paced"
      }
    ],
    links: [{ label: "View profile", href: "/profile/sample-wellness-resources" }],
    reviews: [{ name: "Sample reviewer", quote: "Credible tone and useful framing without hype.", rating: 5 }]
  },
  {
    slug: "sample-sovereign-community",
    type: "Community",
    name: "Sample: Sovereign-Health Community",
    headline:
      "Example of a community listing for practitioners, spaces, and Bitcoiners. Not a real group.",
    example: true,
    categories: ["Community Wellness", "Wellness Professionals"],
    tags: ["Community", "Sovereign Health"],
    location: "Global · Nostr",
    format: "Remote",
    paymentBadge: "Resource network",
    availability: "Open access",
    verifiedSignals: ["Web-of-trust signal (placeholder)", "Community-vouched (placeholder)"],
    bio: "Sample listing. An open community where practitioners, wellness spaces, and Bitcoiners gather around health autonomy and sound money.",
    services: [
      {
        name: "Community space",
        description: "Introductions, discussions, and shared resources for sovereign health and wellness.",
        duration: "Ongoing"
      },
      {
        name: "Practitioner circle",
        description: "A place for aligned practitioners and spaces to connect, refer, and collaborate.",
        duration: "Ongoing"
      }
    ],
    links: [{ label: "View profile", href: "/profile/sample-sovereign-community" }],
    reviews: [
      { name: "Sample reviewer", quote: "Found aligned practitioners I'd never have come across otherwise.", rating: 5 }
    ]
  }
];

// Backwards-compat export name.
export const MARKETPLACE_PROFILES = DIRECTORY_LISTINGS;

export type ResearchPost = never;
export const RESEARCH_POSTS: ResearchPost[] = [];
