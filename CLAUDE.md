# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal CV / portfolio site for Dimitar Slavkov Dimitrov, plus a printable
`/cv` page and a printable cover-letter page, built with Next.js (App Router) and
TypeScript. The current design is a white-background, Bricolage Grotesque + Inter,
olive-accent "street-brutalist" look (see "Design source" below).

## Commands

- `npm run dev` — start the dev server (Turbopack) at http://localhost:3000
- `npm run build` — production build (also runs the TypeScript check)
- `npm run start` — serve the production build
- `npm run lint` — ESLint (flat config via `eslint.config.mjs`)

There is no test suite.

## Architecture

- **`app/page.tsx`** — the résumé page (route `/`). Composes `Nav`, `Hero`, `Statement`,
  `Profile`, `Experience`, `Skills`, `Manifesto`, `Contact`, and `Footer`, in that order.
- **`app/cv/page.tsx`** — the print-ready CV (route `/cv`), a single A4-ish white "page" on
  a dark backdrop (`CV.module.css`), with a `PrintButton` toolbar. Renders `person`,
  `experience` (using `entry.cvBullets ?? entry.bullets`), and `cvSkillChips` from
  `data/resume.ts`. This is what all "Download CV" links point to (Save as PDF via
  `window.print()`; `@page { size: A4; margin: 14mm; }`).
- **`app/cover-letter/page.tsx`** — the cover-letter page (route `/cover-letter`), a
  self-contained "sheet" with print styles (`CoverLetter.module.css`, `@page { margin: 16mm; }`)
  and the same `PrintButton` client component.
- **`app/layout.tsx`** — root layout; loads `Bricolage Grotesque` (weight 800 only) and
  `Inter` via `next/font/google` and exposes them as `--font-display` / `--font-sans`.
- **`app/globals.css`** — design tokens (`--concrete`, `--concrete-2`, `--ink`, `--ink-soft`,
  `--accent`, `--accent-deep`, `--metal`, `--rule`, `--rule-2`, `--container: 1240px`,
  `--gutter`, `--display`, `--sans`), a minimal reset (no italics anywhere, white page
  background, `::selection` in `--accent`), and the `.sheet` container class used by every
  section. Section-specific styles live in their own CSS Modules.
- **`data/resume.ts`** — typed content shared across `/`, `/cv`, and `/cover-letter`:
  `person` (name, role, location, availability, email, LinkedIn), `experience:
  ExperienceEntry[]` (4 roles, with optional `roleSuffix`, `cvBullets` override, and
  `tags`), `skillColumns` (the 4 résumé skill groups), `cvSkillChips` (flat skill-chip list
  for `/cv`), `manifesto` (the "How I think" lines), and `nav` (links + the `/cv` CTA).
  Page-specific prose (hero subhead, profile paragraphs, cover-letter body, etc.) stays
  inlined in each component/page.
- **`components/Nav.tsx`** + `MobileMenuToggle.tsx` — sticky pill nav rendering `nav.links`
  and the `/cv` CTA from `data/resume.ts`; `MobileMenuToggle` (`"use client"`) owns the
  hamburger open/close state for the mobile dropdown.
- **`components/Statement.tsx`** (`"use client"`) — full-bleed `/assets/wall-green.jpg`
  panel with a single `IntersectionObserver`-driven scroll-in (`.anim`/`.in` classes,
  gated by `prefers-reduced-motion`; the no-JS/reduced-motion state is fully visible by
  default).
- **`components/SectionHead.tsx`** — shared numbered section heading (`number`, `heading`,
  `note?`), used by `Profile`, `Experience`, and `Skills`.
- **`components/Manifesto.tsx`** — `/assets/wood.jpg` background + scrim, renders
  `manifesto.lines`.
- **`components/PrintButton.tsx`** (`"use client"`) — generic `window.print()` button,
  reused unchanged by `/cv` and `/cover-letter`.

## Design source

The original v1/v2 handoff in `design_handoff_resume_site/` (`README.md` + `CHANGES.md` +
`Resume.html`/`Cover-Letter.html` prototypes) covers the prior dark "card stack" design and
is kept for historical reference only. The current white/Bricolage/olive-accent design
(including the `/cv` page) has no separate spec doc — `data/resume.ts`, `app/globals.css`,
and the component/page files under `app/` and `components/` are the source of truth.

## Assets

- `public/assets/wall-green.jpg`, `public/assets/wood.jpg` — full-bleed textures used by
  `Statement` and `Manifesto`.
- The CV is no longer a static PDF in `public/`; the nav "Download CV" button and footer/
  contact "Download CV (PDF)" links all point to the `/cv` page (Save as PDF via the
  browser print dialog).
