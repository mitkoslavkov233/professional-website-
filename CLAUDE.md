# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal CV / portfolio site for Dimitar Slavkov Dimitrov, plus a printable
cover-letter page, built with Next.js (App Router) and TypeScript. Implemented from the design
handoff in `design_handoff_resume_site/` (see "Design source" below).

## Commands

- `npm run dev` — start the dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build (also runs the TypeScript check)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`)

There is no test suite.

## Architecture

- **`app/page.tsx`** — the résumé/CV page (route `/`). Composes `Nav`, `Hero`,
  `CardStack` (wrapped in `FilterProvider`), and `Footer`.
- **`app/cover-letter/page.tsx`** — the cover-letter page (route `/cover-letter`), a
  self-contained "paper sheet" with print styles (`CoverLetter.module.css`) and a
  `PrintButton` client component (`window.print()`).
- **`app/layout.tsx`** — root layout; loads `Playfair Display` and `Hanken Grotesk` via
  `next/font/google` and exposes them as `--font-serif` / `--font-sans`.
- **`app/globals.css`** — design tokens (`--page-bg`, `--page-fg`, `--radius`, `--container`,
  font vars), reset, `.wrap` container, and the **card system** as global classes (`.cards`,
  `.card`, `.card-text`, `.card-date`, `.role-at`, `.bullets`, `.meta`, `.chip`, `.card-link`,
  `.card-visual`, `.matchup` + its sub-classes, the scroll-reveal `cardRise` keyframes, and
  responsive breakpoints at 760px/680px). These are kept as global classes (rather than CSS
  Modules) because they're an interdependent design system driven by per-card inline custom
  properties (`--bg`, `--fg`, `--acc`) and global combinators (`body.anim .card.in`,
  `.card.reverse .card-text`). Everything else (Nav, Hero, Footer, FilterPills, CoverLetter,
  CardArt) uses CSS Modules.
- **`data/cards.ts`** — typed content model. `cards: ResumeCard[]` is the array of standard
  cards (theme colors, date/eyebrow, heading, optional `roleAt`/body/bullets/chips/link, and an
  `art: { motif, accent }` spec). `matchup` holds the separate "What you need / What I bring"
  full-width card content. `filters` defines the filter-pill options.
- **`components/CardStack.tsx`** (client) — interleaves `cards[0]` (Profile), the `MatchupCard`,
  then the rest of `cards` (this is the DOM order from the design). Owns:
  - **Filtering**: reads `activeFilter` from `FilterContext` and hides non-matching cards via
    inline `display: none` (cards stay mounted).
  - **Scroll reveal**: a single `IntersectionObserver` (threshold 0.12, rootMargin
    `0px 0px -8% 0px`) adds each card's id to a `revealed` set, applying the global `.in` class
    (→ `cardRise` animation, transform-only, gated by `prefers-reduced-motion`). Includes the
    handoff's fallbacks: reveal-all if `IntersectionObserver` is unsupported or the page is
    shorter than the viewport, a one-time scroll listener, and a 1.4s safety timeout. Cards are
    always visible regardless of `.in` — only the entrance transform depends on it.
- **`components/FilterContext.tsx`** (client) — tiny context provider for `activeFilter`,
  shared between `FilterPills` (in `Hero`) and `CardStack`.
- **`components/CardArt.tsx`** — generative inline SVG motifs (`rings`, `columns`, `orbit`,
  `arcs`, `checker`, `waves`, `dots`, `nodes`, `bauhaus`), each a pure `(ink, accent) => ReactNode[]`
  function ported from the prototype's `motifs` object. `ink` is the card's `--fg`; `accent`
  comes from `art.accent` in `data/cards.ts`.
- **`components/css-vars.ts`** — `CSSVars` type alias for setting CSS custom properties
  (`--bg`, `--fg`, `--acc`) via the `style` prop in TSX.

## Design source

`design_handoff_resume_site/` contains the original handoff and is kept for reference:
`README.md` (v1 spec — layout, tokens, card content/order, scroll-reveal behavior),
`CHANGES.md` (v2 delta — **source of truth where it conflicts with the README**: real
experience content, the matchup card, the generative SVG art system, the cover-letter page,
and finalized contact details), and the `Resume.html` / `Cover-Letter.html` prototypes. When
extending the site (new cards, copy changes, new motifs), check these against the current
implementation in `data/cards.ts` and `components/CardArt.tsx`.

## Assets

- `public/dimitar-slavkov-dimitrov-resume.pdf` — the downloadable CV, linked from the nav
  "Download CV" button and the footer "Download CV (PDF)" link (both with a `download`
  attribute).
