export type CardCategory = "experience" | "highlights" | "more";

export type ArtMotif =
  | "rings"
  | "columns"
  | "orbit"
  | "arcs"
  | "checker"
  | "waves"
  | "dots"
  | "nodes"
  | "bauhaus";

export interface CardTheme {
  bg: string;
  fg: string;
}

export interface CardArtSpec {
  motif: ArtMotif;
  accent: string;
}

export interface CardLink {
  href: string;
  label: string;
}

export interface ResumeCard {
  id: string;
  /** Anchor id for in-page nav links, if any. */
  anchorId?: string;
  cat: CardCategory;
  theme: CardTheme;
  /** Small uppercase eyebrow above the heading (date range, "Profile", etc). */
  date: string;
  heading: string;
  /** Italic "/ Senior PM" style suffix rendered after the heading. */
  roleAt?: string;
  body?: string;
  bullets?: string[];
  chips?: string[];
  link?: CardLink;
  art: CardArtSpec;
  /** Swap text/visual sides on wide viewports. */
  reverse?: boolean;
}

export const cards: ResumeCard[] = [
  {
    id: "profile",
    anchorId: "about",
    cat: "more",
    theme: { bg: "#aab6ef", fg: "#15163a" },
    date: "Profile",
    heading: "A decade making delivery actually work",
    body: "I’ve spent the last decade across customer experience, enterprise operations and digital delivery. The common thread: making sure what gets built actually solves the problem — and that the people involved can trust each other the whole way through. Over seven years at Athlon I grew from junior PM into program management, and I’m the person clients call when something needs untangling.",
    link: { href: "#contact", label: "Get in touch →" },
    art: { motif: "rings", accent: "#2f3a8f" },
  },
  {
    id: "athlon",
    anchorId: "work",
    cat: "experience",
    theme: { bg: "#e1613e", fg: "#fdeee7" },
    date: "2018 — Present · Athlon · Digital Agency",
    heading: "Program Manager",
    roleAt: "/ Senior PM",
    bullets: [
      "Primary point of contact for multiple enterprise clients simultaneously — owning relationships, expectations and trust.",
      "Led biweekly and monthly delivery calls: agendas, retrospectives and scope across complex engagements.",
      "Built and ran a monthly skills programme for producers, PMs and QA, from scratch.",
      "Owned the full lifecycle — discovery, scoping, sprint management, client comms and close-out.",
    ],
    chips: ["Jira", "Confluence", "Scrum", "Remote teams"],
    art: { motif: "columns", accent: "#f4c84d" },
    reverse: true,
  },
  {
    id: "skills-programme",
    cat: "highlights",
    theme: { bg: "#e8aa38", fg: "#3a2705" },
    date: "Initiative I’m proud of",
    heading: "A monthly skills programme, built from scratch",
    body: "Every month I pick an agile topic, build a short presentation around it, and the delivery team — producers, PMs and QA — works through it together. It started informal and became a fixture in how the team operates. I believe delivery quality is a team property, not just a PM’s.",
    chips: ["Coaching", "Facilitation", "Team development"],
    art: { motif: "orbit", accent: "#1f6b54" },
  },
  {
    id: "hp-affiliate",
    cat: "experience",
    theme: { bg: "#2e7d6f", fg: "#e8f5f0" },
    date: "2017 — 2018 · HP Affiliate Company",
    heading: "Project Manager",
    bullets: [
      "Established my first structured PM practice outside an agency context.",
      "Hands-on with oversight, governance and accountability inside a large corporate structure.",
    ],
    chips: ["Governance", "Enterprise process"],
    art: { motif: "arcs", accent: "#ffd66b" },
    reverse: true,
  },
  {
    id: "ibm",
    cat: "experience",
    theme: { bg: "#c6d84a", fg: "#262d05" },
    date: "2013 — 2017 · IBM",
    heading: "Subject Matter Expert",
    roleAt: "/ Operations",
    bullets: [
      "Advanced to SME within a large global operation.",
      "Built deep understanding of how enterprise-scale processes are structured, maintained and improved.",
      "Mentored junior colleagues and contributed to quality standards and documentation.",
    ],
    chips: ["Global operations", "Mentoring"],
    art: { motif: "checker", accent: "#2e7d6f" },
  },
  {
    id: "hostway",
    cat: "experience",
    theme: { bg: "#9cbfe9", fg: "#11233d" },
    date: "2011 — 2013 · US Hosting Company · Where it started",
    heading: "Customer Support Agent",
    bullets: [
      "Learned customer-first communication: listening properly and understanding what people actually need.",
      "Developed product fluency across hosting services — upselling through relevance, not pressure.",
    ],
    chips: ["Customer empathy", "Product fluency"],
    art: { motif: "waves", accent: "#f3f8ff" },
    reverse: true,
  },
  {
    id: "skills",
    cat: "more",
    theme: { bg: "#1f6b54", fg: "#e3f3ec" },
    date: "Skills",
    heading: "What I bring to a delivery team",
    chips: [
      "Delivery & program management",
      "Agile & Scrum facilitation",
      "Client relationship management",
      "Sprint planning & retrospectives",
      "Team coaching & development",
      "Stakeholder communication",
      "Scope & risk tracking",
      "Jira · Confluence",
      "Distributed & remote teams",
      "English — fluent",
    ],
    art: { motif: "dots", accent: "#c6d84a" },
  },
  {
    id: "how-i-work",
    anchorId: "approach",
    cat: "more",
    theme: { bg: "#c8a8e0", fg: "#2c1840" },
    date: "How I work",
    heading: "AI in the loop, thinking in the lead",
    body: "I use AI-assisted tools daily — for analysis, documentation, planning and workshop prep, or simply to explore different approaches to a problem. Like any tool, they’re only as good as the thinking behind them; used carefully, they noticeably improve both the quality and the speed of decisions.",
    chips: ["AI-assisted analysis", "Documentation", "Planning"],
    art: { motif: "nodes", accent: "#ffffff" },
    reverse: true,
  },
  {
    id: "contact",
    anchorId: "contact",
    cat: "more",
    theme: { bg: "#d8c8a4", fg: "#33270f" },
    date: "Contact",
    heading: "Let’s talk about your delivery challenge",
    body: "I’m looking for a role where I can own client relationships, keep remote delivery teams aligned, and help the people around me grow. I’d welcome a conversation about how my experience could support your team.",
    chips: [
      "mitko.slavkov@gmail.com",
      "linkedin.com/in/dimitar-dimitrov-77460396",
      "Sofia · available within 1–2 months",
    ],
    link: { href: "/cover-letter", label: "Read my cover letter →" },
    art: { motif: "bauhaus", accent: "#7a2722" },
  },
];

export interface MatchupRow {
  need: string;
  bring: string;
}

export const matchup = {
  cat: "highlights" as CardCategory,
  theme: { bg: "#ece7db", fg: "#1c1a17" },
  accent: "#cf522c",
  eyebrow: "Fit at a glance",
  heading: "What you need. What I bring.",
  rows: [
    {
      need: "Someone who owns client relationships end-to-end",
      bring: "Seven years as primary point of contact for multiple enterprise clients at once — no escalation required.",
    },
    {
      need: "Delivery running across distributed remote teams",
      bring: "Managed remote and hybrid teams across time zones — sprint cadences, retros and stakeholder comms running in parallel across accounts.",
    },
    {
      need: "A PM who grows the team around them",
      bring: "Built and ran a monthly coaching programme for junior PMs, producers and QA — from scratch.",
    },
    {
      need: "Agile delivery that works in practice",
      bring: "Not just familiar with Scrum — facilitating it daily for seven years across diverse client environments.",
    },
  ] satisfies MatchupRow[],
};

export const filters = [
  { key: "all", label: "All" },
  { key: "experience", label: "Experience" },
  { key: "highlights", label: "Highlights" },
  { key: "more", label: "More" },
] as const;

export type FilterKey = (typeof filters)[number]["key"];
