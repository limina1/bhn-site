// The BHN discussion index: open questions at the intersection of sound money
// and sovereign health. Each is a discussion starter with a short primer. The
// conversation itself happens on the community relay.

export type DiscussionCategory =
  | "Sound Money"
  | "Sovereign Health"
  | "Direct Care"
  | "Prevention"
  | "Getting Started"
  | "Nostr & Community";

export type DiscussionIcon =
  | "spark"
  | "coin"
  | "heart"
  | "shield"
  | "handshake"
  | "compass"
  | "clock"
  | "key"
  | "chart"
  | "chat";

export type Discussion = {
  slug: string;
  title: string;
  /** One-line teaser for the index list. */
  summary: string;
  category: DiscussionCategory;
  icon: DiscussionIcon;
  /** Rough primer length, minutes. */
  readMins: number;
  /** Mock activity count for the demo. */
  replies: number;
  /** 2 to 3 short paragraphs of primer shown on the detail page. */
  body: string[];
};

export const DISCUSSIONS: Discussion[] = [
  {
    slug: "coincidence-or-connection",
    title: "Bitcoin and health: coincidence, or connection?",
    summary:
      "Is the overlap between Bitcoiners and health-autonomy people cultural, or do sound money and sovereign health share one root idea?",
    category: "Sovereign Health",
    icon: "spark",
    readMins: 4,
    replies: 31,
    body: [
      "It's easy to notice that a lot of people who care about Bitcoin also care about eating real food, lifting heavy things, questioning defaults, and owning their decisions. The question this community keeps coming back to: is that a coincidence of internet subculture, or is there a real through-line?",
      "The case for connection: both are reactions to systems that quietly transfer control away from the individual. One over money, one over the body. Both reward low time preference. Both are suspicious of intermediaries who profit from your dependence.",
      "The case for coincidence: correlation through demographics and vibes, not principle. Bring your strongest version of either side."
    ]
  },
  {
    slug: "money-shapes-care",
    title: "How the money you use shapes the care you get",
    summary:
      "Time preference, inflation, and insurance middlemen, followed from the monetary system into the exam room.",
    category: "Sound Money",
    icon: "coin",
    readMins: 6,
    replies: 24,
    body: [
      "A health system runs on incentives, and incentives run on money. When the unit of account is losing value every year, the rational move for institutions is to extract now and defer costs. That looks a lot like the care many people actually receive.",
      "Third-party payment breaks the price signal between patient and provider. Neither side sees the real number, so neither can shop, compare, or say no. The middle fills with administration.",
      "What would change if more of health spending were direct, denominated in something that holds value? Where does that help, and where does it just shift risk onto patients?"
    ]
  },
  {
    slug: "direct-pay-vs-insurance",
    title: "What direct-pay actually costs vs. insurance",
    summary:
      "Cash-pay prices are often lower than the 'insured' price, but not always. When does paying directly win?",
    category: "Direct Care",
    icon: "chart",
    readMins: 7,
    replies: 18,
    body: [
      "Direct primary care, cash-pay imaging, and transparent surgical centers routinely quote prices well below the billed rate, sometimes below the insured copay. The savings come from cutting billing overhead and prior-auth games.",
      "It's not universal. Catastrophic events, chronic high-cost conditions, and anything needing a hospital still favor real coverage. Many members run a hybrid: direct-pay for routine care, a high-deductible plan for disasters.",
      "Share your own numbers. What did a visit, a scan, or a procedure actually cost you cash vs. through a plan?"
    ]
  },
  {
    slug: "paying-in-bitcoin",
    title: "Paying a practitioner in Bitcoin: volatility, receipts, and taxes",
    summary:
      "The practical side of settling a medical bill in BTC: swings, record-keeping, and what your accountant needs.",
    category: "Direct Care",
    icon: "handshake",
    readMins: 5,
    replies: 12,
    body: [
      "Some providers in the directory accept Bitcoin directly. That removes card fees and chargebacks, but adds volatility between invoice and payment, plus a taxable event if you're spending appreciated coin.",
      "Tactics members use: invoice priced in fiat and settled at spot, stablecoin rails for larger amounts, keeping a small 'spending' balance separate from savings, and exporting a clean transaction log per year.",
      "What's worked for you, and what tripped you up at tax time?"
    ]
  },
  {
    slug: "prevention-over-crisis",
    title: "Prevention over crisis: budgeting health in decades",
    summary:
      "What changes when you plan health spending like a 30-year problem instead of a billing cycle?",
    category: "Prevention",
    icon: "clock",
    readMins: 5,
    replies: 21,
    body: [
      "Insurance-driven care optimizes for the current plan year. Sound-money thinking optimizes for the next thirty. That reframes sleep, strength, dental work, and screening from 'expenses' to 'compounding'.",
      "It also changes which trade-offs feel rational: paying out of pocket now for a better outcome later, or declining an intervention whose main benefit is billable.",
      "How do you actually budget for long-horizon health? Sinking funds, a dedicated stack, an HSA. What's your setup?"
    ]
  },
  {
    slug: "reading-credentials",
    title: "Reading a provider's credentials without a licensing board",
    summary:
      "If you don't outsource trust to a state board or a star rating, how do you evaluate a practitioner yourself?",
    category: "Getting Started",
    icon: "compass",
    readMins: 6,
    replies: 15,
    body: [
      "Licensing tells you someone cleared a bar years ago. It doesn't tell you if they're good now, or aligned with how you want to be treated. Reviews get gamed. So what's left?",
      "Signals members weigh: training and board status as a floor not a ceiling, how a provider explains trade-offs, willingness to say 'I don't know', transparent pricing, and vouches from people already in your web of trust.",
      "Let's build a checklist together. What would you actually ask on a first call?"
    ]
  },
  {
    slug: "web-of-trust-reviews",
    title: "Web-of-trust reviews: how reputation travels on Nostr",
    summary:
      "Anonymous stars are noise. Why a signed review from two hops away beats a hundred from strangers.",
    category: "Nostr & Community",
    icon: "chat",
    readMins: 4,
    replies: 9,
    body: [
      "On Nostr, every review is signed by a real key. Your client can see how connected that key is to people you already follow, so a rating carries a trust path, not just a number.",
      "This kills most review spam: an account no one vouches for simply doesn't surface. It also has failure modes: echo chambers, small graphs, and brigading within a circle.",
      "How should BHN weight and display these without recreating the star-rating trap?"
    ]
  },
  {
    slug: "health-records-self-custody",
    title: "Your health data, your keys: self-custody for medical records",
    summary:
      "Portals lock your records inside someone else's system. What does 'own your data' look like for health?",
    category: "Sovereign Health",
    icon: "key",
    readMins: 7,
    replies: 14,
    body: [
      "Most people's medical history is scattered across portals they can't export from and don't control. If a practice closes or drops your plan, access can just vanish.",
      "Approaches members are trying: routinely requesting full records after every visit, keeping an encrypted personal archive, and using open formats so the data outlives any one provider.",
      "Is there a Nostr-shaped answer here (signed, portable, patient-held records), or is that a decade away?"
    ]
  },
  {
    slug: "low-time-preference-body",
    title: "Low time preference and the gym",
    summary:
      "Sound money rewards patience with capital. Does the same wiring make it easier to train, sleep, and eat for the long game?",
    category: "Sound Money",
    icon: "heart",
    readMins: 3,
    replies: 27,
    body: [
      "The habit of not selling the bottom, not chasing the pump, and thinking in cycles is the same habit that gets you to the gym on a bad day and to bed on time.",
      "Or is that backwards? Maybe people who already have low time preference are drawn to Bitcoin, and the causation runs the other way.",
      "Either way: what practices carried over for you from one domain to the other?"
    ]
  },
  {
    slug: "finding-a-provider",
    title: "Finding a Bitcoin-friendly provider when your city has none",
    summary:
      "The directory is thin outside a few metros. Tactics for building your own aligned care team from scratch.",
    category: "Getting Started",
    icon: "shield",
    readMins: 5,
    replies: 11,
    body: [
      "Most places don't have a visible Bitcoin-accepting clinician. But 'direct-pay and reasonable' is a much larger pool, and many will take Bitcoin if you ask.",
      "Where members have had luck: direct primary care networks, functional and longevity clinics, cash-pay imaging centers, and asking in local Nostr and meetup channels.",
      "Post what you're looking for and where. The community can point you, and good finds get added to the directory."
    ]
  }
];

export function getDiscussion(slug: string) {
  return DISCUSSIONS.find((d) => d.slug === slug);
}

export const DISCUSSION_CATEGORIES: DiscussionCategory[] = [
  "Sound Money",
  "Sovereign Health",
  "Direct Care",
  "Prevention",
  "Getting Started",
  "Nostr & Community"
];
