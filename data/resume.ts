export const person = {
  name: { line1: "Dimitar", line2: "Dimitrov", full: "Dimitar Slavkov Dimitrov" },
  role: "Senior Project Manager",
  location: "Sofia, Bulgaria",
  availability: "Available within 1 to 2 months",
  availabilityShort: "1 to 2 months",
  email: "mitko.slavkov@gmail.com",
  linkedin: {
    url: "https://www.linkedin.com/in/dimitar-dimitrov-77460396/",
    label: "linkedin.com/in/dimitar-dimitrov-77460396",
  },
};

export interface ExperienceEntry {
  id: string;
  when: string;
  company: string;
  title: string;
  roleSuffix?: string;
  bullets: string[];
  /** Overrides `bullets` on the printable CV when the wording or count differs. */
  cvBullets?: string[];
  tags?: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "athlon",
    when: "2018 to Present",
    company: "Athlon · Digital Agency",
    title: "Program Manager",
    roleSuffix: "Senior PM",
    bullets: [
      "Primary point of contact for multiple enterprise clients simultaneously, owning relationships, expectations and trust without escalation.",
      "Led biweekly and monthly delivery calls: agendas, retrospectives and scope across complex engagements.",
      "Built and ran a monthly skills programme for producers, PMs and QA, from scratch.",
      "Owned the full delivery lifecycle: discovery, scoping, sprint management, client communication and close-out.",
    ],
    cvBullets: [
      "Primary point of contact for multiple enterprise clients simultaneously, owning relationships, expectations and trust without escalation.",
      "Led biweekly and monthly delivery calls: agendas, retrospectives and scope across complex engagements.",
      "Built and ran a monthly skills-development programme for producers, PMs and QA, from scratch.",
      "Owned the full delivery lifecycle: discovery, scoping, sprint management, client communication and close-out.",
    ],
    tags: ["Project management tools", "Confluence", "Scrum", "Google Workspace", "Remote teams"],
  },
  {
    id: "hp-affiliate",
    when: "2017 to 2018",
    company: "HP Affiliate Company",
    title: "Project Manager",
    bullets: [
      "Established a structured PM practice within a large corporate environment.",
      "Hands-on with oversight, governance and accountability at enterprise scale.",
      "Bridged technical teams and business stakeholders on internal delivery initiatives.",
    ],
    cvBullets: [
      "Established a structured PM practice within a large corporate environment.",
      "Hands-on with oversight, governance and accountability at enterprise scale.",
    ],
    tags: ["Governance", "Enterprise process", "Stakeholder management"],
  },
  {
    id: "ibm",
    when: "2013 to 2017",
    company: "IBM",
    title: "Subject Matter Expert",
    roleSuffix: "Operations",
    bullets: [
      "Advanced to SME within a large global operation.",
      "Built deep understanding of how enterprise-scale processes are structured, maintained and improved.",
      "Mentored junior colleagues and contributed to quality standards and documentation.",
    ],
    tags: ["Global operations", "Mentoring", "Quality standards"],
  },
  {
    id: "hosting",
    when: "2011 to 2013",
    company: "US Hosting Company · Where it started",
    title: "Customer Support Agent",
    bullets: [
      "Learned customer-first communication: listening properly and understanding what people actually need.",
      "Developed product fluency across hosting services, upselling through relevance, not pressure.",
    ],
    tags: ["Customer empathy", "Product fluency", "Communication"],
  },
];

export interface SkillColumn {
  index: string;
  title: string;
  items: string[];
}

export const skillColumns: SkillColumn[] = [
  {
    index: "01",
    title: "Delivery",
    items: ["Program management", "Sprint planning", "Retrospectives", "Scope & close-out", "Delivery lifecycle"],
  },
  {
    index: "02",
    title: "Client & Stakeholder",
    items: [
      "Relationship management",
      "Stakeholder communication",
      "Expectation setting",
      "Enterprise accounts",
      "International companies",
    ],
  },
  {
    index: "03",
    title: "Team & Process",
    items: [
      "Agile & Scrum facilitation",
      "Certified Scrum Master",
      "Lean",
      "Team coaching & development",
      "Internal coaching & skill-up programs",
      "Hiring experience",
      "Distributed & remote teams",
    ],
  },
  {
    index: "04",
    title: "Tools & Languages",
    items: ["Scrum boards", "Google Workspace", "AI prompt engineering", "English (fluent)"],
  },
];

/** Flat chip list for the printable CV. Keep in sync with skillColumns when skills change. */
export const cvSkillChips: string[] = [
  "Delivery & program management",
  "Agile & Scrum facilitation",
  "Certified Scrum Master",
  "Lean",
  "Client relationship management",
  "Sprint planning & retrospectives",
  "Team coaching & development",
  "Internal coaching & skill-up programs",
  "Hiring experience",
  "Stakeholder communication",
  "Scope & risk tracking",
  "Jira",
  "AI prompt engineering",
  "Distributed & remote teams",
];

export interface ManifestoLine {
  text: string;
  strong?: string;
  suffix?: string;
}

export const manifesto = {
  idx: "04 / How I think",
  lines: [
    { text: "Trust scales better than ", strong: "control", suffix: "." },
    { text: "Strong teams beat perfect processes." },
    { text: "Delivery is communication." },
    { text: "People remember how problems were handled." },
  ] satisfies ManifestoLine[],
  by: "Dimitar Dimitrov, Program Manager",
};

export const nav = {
  links: [
    { href: "#about", label: "Profile" },
    { href: "#experience", label: "Experience" },
    { href: "#skills", label: "Skills" },
    { href: "#principles", label: "Approach" },
    { href: "#contact", label: "Contact" },
  ],
  cta: { href: "/cv", label: "Download CV" },
};
