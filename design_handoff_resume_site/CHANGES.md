# CHANGES — v2 update

> **Read this first.** The coding agent already implemented **v1** of this site from `README.md`.
> This file is the **delta**: what changed in v2, so you can **patch the existing implementation**
> rather than rebuild it. Where this file conflicts with `README.md`, **this file wins.**
> The updated reference files are `Resume.html` and the new `Cover-Letter.html` in this folder.

## TL;DR of what changed
1. **Positioning reframed** from "program manager moving into product" → **Senior Project / Program Manager**. Copy across hero, cards, and footer changed accordingly.
2. **Real employer content** in all experience cards, now as **bullet lists** (not paragraphs): Athlon, HP Affiliate, IBM, US Hosting Company.
3. **New full-width "What you need. What I bring." card** (a 2-column comparison table on a light "paper" card).
4. **Placeholder image boxes replaced** with a **generative SVG art system** — one motif per card, color-matched to that card's palette.
5. **New page: `Cover-Letter.html`** — a reusable, printable cover letter. Linked from nav + contact card.
6. **Nav item** "Approach" → **"Cover Letter"** (links to the new page).
7. **Contact details finalized**: email, full LinkedIn URL, availability.

---

## 1. Copy / positioning changes

- **Hero tagline** is now:
  "Senior project & program manager — seven years owning multi-client delivery, remote teams, and the people who make it work. Sofia, Bulgaria · open to relocation & remote."
- **Page `<title>`**: "Dimitar Slavkov Dimitrov — Senior Project Manager".
- **Footer blurb**: "Senior project & program manager. Sofia, Bulgaria."
- The old **"Why product / Moving into product"** highlight card has been **removed**.

## 2. Experience cards → real content + bullet lists

Experience cards now use a **bulleted list** (`<ul class="bullets">`) above the chips, instead of a paragraph. The bullet style: custom disc (a 7px circle in `currentColor` at 0.5 opacity) on the left, 15px text, 11px gap between items.

The four experience cards (unchanged colors/order), with final content:

| Card | Date eyebrow | Heading | Bullets (summary) | Chips |
|---|---|---|---|---|
| **Athlon** (`#e1613e`) | "2018 — Present · Athlon · Digital Agency" | Program Manager / Senior PM | client-contact ownership · led delivery calls/retros/scope · built monthly skills programme · owned full lifecycle | Jira, Confluence, Scrum, Remote teams |
| **HP Affiliate** (`#2e7d6f`) | "2017 — 2018 · HP Affiliate Company" | Project Manager | first structured PM practice outside agency · governance/accountability in a large corporate | Governance, Enterprise process |
| **IBM** (`#c6d84a`) | "2013 — 2017 · IBM" | Subject Matter Expert / Operations | advanced to SME · enterprise-process depth · mentored juniors, quality standards | Global operations, Mentoring |
| **US Hosting Co.** (`#9cbfe9`) | "2011 — 2013 · US Hosting Company · Where it started" | Customer Support Agent | customer-first communication · product fluency, upsell through relevance | Customer empathy, Product fluency |

> Dates are still **approximate** — confirm exact months before launch. (The candidate has flagged availability is **1–2 months**, not immediate — see §7.)

The **Profile** card (lavender `#aab6ef`) heading is now "A decade making delivery actually work" with updated body copy. The **Skills** card (green `#1f6b54`) now lists the full skill set as chips. The **How I work** (AI, lilac `#c8a8e0`) card is retained.

## 3. New component — "Matchup" card (`.card.matchup`)

A **full-width** card (spans both grid columns; `display:block`) that breaks the colorful rhythm with a light "paper" background.

- Colors: `--bg:#ece7db; --fg:#1c1a17; --acc:#cf522c` (coral accent).
- Structure: a header (`.mh` with eyebrow "FIT AT A GLANCE" + h2 "What you need. What I bring.") then `.mrows` containing:
  - a header row (`.mhead-row`): two labels — "What you need" (muted) / "What I bring" (accent color).
  - four `.mrow`s, each a 2-column grid (`1fr 1.25fr`, 36px gap, 1px top divider): left `.need` (muted, 15px) → right `.bring` (600 weight, 16.5px).
- The four pairs:
  1. Owns client relationships end-to-end → "Seven years as primary point of contact for multiple enterprise clients at once — no escalation required."
  2. Delivery across distributed remote teams → "Managed remote and hybrid teams across time zones — sprint cadences, retros and stakeholder comms running in parallel across accounts."
  3. A PM who grows the team → "Built and ran a monthly coaching programme for junior PMs, producers and QA — from scratch."
  4. Agile that works in practice → "Not just familiar with Scrum — facilitating it daily for seven years across diverse client environments."
- **Responsive (≤680px):** hide the `.mhead-row`; stack each row to one column; render the `.need` as a small uppercase label above the `.bring`.
- `data-cat="highlights"` so it participates in the filter.

## 4. Generative SVG art system (replaces the striped placeholders)

Each card's visual side now contains `<div class="art" data-art="MOTIF" data-accent="#HEX"></div>` instead of the old `.blob` + `.ph` boxes. A small vanilla-JS module (at the bottom of `Resume.html`, in the last `<script>`) renders an inline `<svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">` into each `.art`, using:
- **ink** = that card's `--fg` (read via `getComputedStyle`),
- **accent** = the element's `data-accent`.

**Implementation guidance for a component port:** make this an `<CardArt motif accent />` component that returns inline SVG. Don't depend on `getComputedStyle` in a framework — pass `ink` (the card's fg color) and `accent` as props. The motif functions are pure `(ink, accent) => svgString`; copy them verbatim from the `motifs` object in `Resume.html`.

Motif → card assignment:
| Motif | Card | `data-accent` |
|---|---|---|
| `rings` (concentric circles + dot) | Profile | `#2f3a8f` |
| `columns` (bar chart) | Athlon | `#f4c84d` |
| `orbit` (ring + satellites) | Skills programme | `#1f6b54` |
| `arcs` (nested corner arcs) | HP Affiliate | `#ffd66b` |
| `checker` (offset squares) | IBM | `#2e7d6f` |
| `waves` (stacked sine lines) | US Hosting | `#f3f8ff` |
| `dots` (dot matrix) | Skills | `#c6d84a` |
| `nodes` (network graph) | How I work | `#ffffff` |
| `bauhaus` (square+circle+triangle+bar) | Contact | `#7a2722` |

> The Profile card's `rings` motif is the **portrait slot** — when a real headshot is available, swap that one `.art` for an `<img>`/`next/image` and keep the rest as art.

CSS for the art container:
```css
.card-visual .art { position: absolute; inset: 0; z-index: 1; }
.card-visual .art svg { width: 100%; height: 100%; display: block; }
```

## 5. New page — `Cover-Letter.html`

A standalone, **reusable** cover letter (self-contained HTML, no React). Implement as its own route/page (e.g. `/cover-letter`).
- **Theme:** same Slate page bg `#16181d`; a centered "paper" sheet (`#f4f0e8`, ink `#1c1a17`, coral accent `#cf522c`, radius 22px, soft shadow), max-width 820px.
- **Top bar:** "← Back to CV" link + a "Save as PDF" button (`window.print()`).
- **Letterhead:** name (Playfair), role line "Cover Letter · Senior Project Manager" (accent, uppercase), meta line "Sofia, Bulgaria · Available within 1–2 months · email".
- **Body:** salutation + 6 paragraphs. Three have bold accent lead-ins: **Client ownership.** / **Remote delivery.** / **Growing the team.**
- **Reusability hook:** one phrase ("this role") is wrapped in `.editable` (dashed underline) as the single spot to personalize per application. It is intentionally **not** company-specific.
- **Print styles** (`@media print`): hide the top bar, drop the sheet shadow/radius, white background, `@page { margin: 18mm }` — so "Save as PDF" yields a clean one-page letter.

## 6. Nav change
Replace nav item **"Approach"** with **"Cover Letter"** → links to `Cover-Letter.html` (or your route). Add `white-space: nowrap` to nav links. Other nav items (Experience, About, Contact) unchanged. Footer "Explore" column likewise swaps the Approach link for "Cover letter".

## 7. Finalized contact details (apply everywhere)
- **Email:** `mitko.slavkov@gmail.com`
- **LinkedIn:** `https://www.linkedin.com/in/dimitar-dimitrov-77460396/` (display text: `linkedin.com/in/dimitar-dimitrov-77460396`)
- **Availability:** **"Available within 1–2 months"** (was "immediately"). Appears in the contact card chip, the résumé footer, and the cover-letter letterhead + footer.
- **Location:** Sofia, Bulgaria.

---

## How to apply this (suggested agent prompt)
> "Read `CHANGES.md`. The repo already implements v1 of this site. Apply the v2 deltas as a focused update to the existing components — don't rebuild from scratch. Use the updated `Resume.html` and the new `Cover-Letter.html` as the source of truth for markup, copy, and the SVG art motifs. Keep the existing project structure, styling approach, and conventions."
