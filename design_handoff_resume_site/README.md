# Handoff: Résumé / CV Website — Dimitar Dimitrov

> ⚠️ **v2 update available.** If you already implemented this site from v1, read **`CHANGES.md`** first — it lists exactly what changed (new cover-letter page, generative SVG art, "What you need / What I bring" card, real experience content, finalized contact details) so you can patch rather than rebuild. Where `CHANGES.md` conflicts with this README, **CHANGES.md wins.** New implementations can read both, newest-first.

## Overview
A single-page personal CV / portfolio website. It presents a candidate's career as an editorial, magazine-style page: a large serif name as the hero, a set of filter pills, and a vertical stack of big rounded vibrant "cards" — one per role / highlight / section — alternating text and visual sides. The visual language is borrowed from the WeTransfer "What's new" blog (near-black page, oversized serif display type, saturated rounded panels), reinterpreted for a résumé.

It is currently a static, content-complete prototype with placeholder image slots and a few approximate dates.

## About the Design Files
The file in this bundle (`Resume.html`) is a **design reference created in HTML** — a working prototype that shows the intended look, layout, and behavior. It is **not** meant to be shipped as-is or copied verbatim into production.

The task is to **recreate this design in the target codebase's environment** using its established patterns. If there is no existing codebase yet, pick an appropriate stack (Next.js / Astro / plain Vite + React are all good fits for a one-page site) and implement it there. The HTML is self-contained and framework-agnostic, so it ports cleanly to components.

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, radii, and interactions are all specified below and present in the HTML. Recreate the UI to match. The only deliberately unfinished parts are: (1) image placeholders — striped boxes that a real photo/screenshot should replace, and (2) some approximate date ranges flagged with the candidate to confirm.

## Layout System

- **Page background:** `#16181d` (a "Slate" near-black). Text default `#f3f1ec` (warm off-white).
- **Max content width:** the nav and the card stack share a max width of `1168px` (`--container: 1120px` + 48px). Centered, with `24px` horizontal padding.
- **Vertical rhythm:** sticky nav (68px) → hero (centered) → filter pills → card stack (`22px` gap between cards) → footer.
- **Fonts** (Google Fonts):
  - Display / headings: **Playfair Display** (`--serif-display` / `--serif-text`). *(The HTML also ships alternates Libre Caslon Display/Text and DM Serif Display, switchable via a tweak panel — see "Optional / Tweaks".)*
  - Body / UI: **Hanken Grotesk** (`--sans`).
  - Image-placeholder labels: a monospace system stack.

## Screens / Views

There is one view (single scrolling page). Its sections:

### 1. Sticky Nav
- **Layout:** flex row, space-between, height 68px, sticky to top, `backdrop-filter: blur(14px)` over a semi-transparent page-bg. Bottom hairline border `rgba(255,255,255,0.06)`.
- **Left:** text links — Experience, About, Approach, Contact. 13px, weight 500, uppercase, letter-spacing `0.06em`, opacity `0.62` → `1` on hover. (These are anchor links to in-page section IDs.)
- **Right:** "Download CV" button — pill, background `#f3f1ec`, text `#16181d` (dark), 13px weight 600, padding `10px 18px`, `border-radius: 999px`, `white-space: nowrap`. Hover: lifts 1px, background `#fff`.
- Nav links hide below 720px.

### 2. Hero
- Centered. Padding `72px 24px 30px`.
- **Eyebrow:** "CURRICULUM VITAE · 2026", 12px, uppercase, letter-spacing `0.22em`, opacity 0.5.
- **Name:** "Dimitar / Dimitrov" — Playfair Display, weight 400, `font-size: clamp(64px, 13vw, 168px)`, `line-height: 0.9`, second name on its own line (`.ln2 { display:block }`).
- **Tagline:** max-width 540px, 17px, line-height 1.5, opacity 0.7. Copy: "Program manager with seven years in digital delivery, now moving toward product. Sofia, Bulgaria — open to relocation and remote."

### 3. Filter Pills
- Flex row, centered, wraps, 10px gap, `40px` top margin.
- Buttons: 14px weight 600, transparent bg, 1px border `rgba(255,255,255,0.16)`, padding `9px 20px`, `border-radius: 999px`.
- **Active** state: background `#f3f1ec`, text `#16181d`, matching border.
- Filters: **All · Experience · Highlights · More**. Clicking filters the card stack by each card's `data-cat`. "All" shows everything.

### 4. Card Stack
The core. Each card is a 2-column grid (`1fr 1fr`), `min-height: 460px`, `border-radius: 30px` (tweakable 10–44px), `overflow: hidden`. Cards alternate which side the text is on via a `.reverse` modifier (swaps grid order). Below 760px the grid collapses to a single column (visual on top, text below).

Each card carries its **own color theme** via three CSS custom properties set inline:
- `--bg` — card background
- `--fg` — card foreground/text
- `--shape` — decorative blob color

**Card text side** (`padding: 56px`, centered vertically):
- **Date/eyebrow** (`.card-date`): 12px, weight 700, uppercase, letter-spacing `0.14em`, opacity 0.62.
- **Heading** (`h2`): Playfair, weight 700, `clamp(30px, 3vw, 40px)`, line-height 1.04. Company name uses a `.role-at` span — italic, weight 400, opacity 0.78 (e.g. "Program Manager · Senior PM *at Athlon*").
- **Body** (`p`): 15.5px, line-height 1.6, max-width 42ch, opacity 0.86.
- **Chips** (`.meta` row of `.chip`): 12.5px weight 600, padding `6px 13px`, pill, bg `color-mix(--fg, transparent 84%)`, subtle border. Used for skills/tags/contact.
- Optional **link** (`.card-link`): inline, underline (1.5px border-bottom currentColor), arrow "→"; hover widens the gap (8px→13px).

**Card visual side** (`.card-visual`):
- One or two **blobs** (`.blob`): absolutely-positioned circles in `--shape` color, partially off-edge, some at reduced opacity. Purely decorative.
- One **placeholder** (`.ph`): a rounded box with a 135° diagonal repeating-stripe background and a centered monospace label (e.g. "Program Overview", "Portrait"). **This is where a real image goes** — replace with `<img>` / `next/image`.

#### The cards, in order (content is final unless noted):

| # | data-cat | Theme (bg / fg / shape) | Date | Heading | Notes |
|---|----------|--------------------------|------|---------|-------|
| 1 About | more | `#aab6ef` / `#15163a` / `#8e9be8` | "About" | "Start with what people are actually trying to do" | has link → #contact |
| 2 Athlon | experience | `#e1613e` / `#fdeee7` / `#c84d2e` | "2018 — Now" | Program Manager · Senior PM *at Athlon* | reverse; chips: Delivery leadership, Stakeholder management, Coaching, Agile |
| 3 Skills programme | highlights | `#e8aa38` / `#3a2705` / `#d6962a` | "Initiative I'm proud of" | "A monthly skills programme for the delivery team" | chips: Workshops, Mentoring, Continuous improvement |
| 4 HP Affiliate | experience | `#2e7d6f` / `#e8f5f0` / `#246357` | "2017 — 2018" | Project Manager *at HP Affiliate* | reverse; chips: Governance, Enterprise process |
| 5 IBM | experience | `#c6d84a` / `#262d05` / `#b3c53a` | "2013 — 2017" | Subject Matter Expert *at IBM* | chips: Global operations, Mentoring |
| 6 Hostway | experience | `#9cbfe9` / `#11233d` / `#84abdd` | "2011 — 2013 · Where it started" | Customer Support *at Hostway* | reverse |
| 7 Why product | highlights | `#7a2722` / `#f6e2dc` / `#641f1b` | "Why product" | "Moving from delivery into product" | chips: Discovery, Prioritisation, Value creation |
| 8 Strengths | more | `#1f6b54` / `#e3f3ec` / `#175442` | "What I bring" | "Skills that travel from delivery into product" | reverse; 6 chips |
| 9 Approach / AI | more | `#c8a8e0` / `#2c1840` / `#b692d6` | "How I work" | "AI in the loop, thinking in the lead" | chips: AI-assisted analysis, Documentation, Planning |
| 10 Contact | more | `#d8c8a4` / `#33270f` / `#c7b48c` | "Contact" | "Let's talk about the problem you're solving" | reverse; chips: email, LinkedIn, location; link mailto |

> **Dates to confirm with the candidate:** the year ranges (cards 2, 4, 5, 6) are approximate and should be verified before launch.
> **Contact details in HTML:** email `mitko.slavkov@gmail.com`, LinkedIn `linkedin.com/in/dimitar-dimitrov`, location "Sofia · relocation open". Confirm these are the ones to publish.

### 5. Footer
- Top hairline border. Padding `56px 24px 40px`.
- 4-column grid (`1.4fr` then three `1fr`): brand blurb + three link columns (Explore / Elsewhere / Contact). Collapses to 2 columns below 720px.
- Brand: "Dimitar Slavkov Dimitrov" in Playfair 30px, with a one-line description.
- Bottom row: copyright left, "Sofia, Bulgaria" right, 13px opacity 0.5.

## Interactions & Behavior
- **Filtering:** clicking a filter pill toggles `display` on cards whose `data-cat` doesn't match; updates the active pill. "All" resets.
- **Scroll reveal:** each card animates in on first scroll into view via `IntersectionObserver` (threshold 0.12, `rootMargin: 0px 0px -8% 0px`), adding an `.in` class.
  - **Important accessibility/robustness detail:** the entrance animation animates **transform only** (a 24px rise), never opacity. Cards are fully visible by default. There are also fallbacks (reveal on first scroll, reveal-all if the page is shorter than the viewport, and a 1.4s safety timeout) so content can *never* get stuck hidden. Preserve this behavior — do not gate visibility on the animation. Wrap motion in `@media (prefers-reduced-motion: no-preference)`.
- **Smooth scroll** to in-page anchors (`html { scroll-behavior: smooth }`).
- **Hovers:** nav links (opacity), Download CV (lift + brighten), card links (arrow gap widen), filter pills (border brighten).
- **Responsive:** see breakpoints noted per section (720px nav/footer, 760px card grid collapse).

## State Management
Minimal. For a component port:
- `activeFilter: 'all' | 'experience' | 'highlights' | 'more'` — drives which cards render/show.
- Card "revealed" state can be handled by an `IntersectionObserver` hook (`useInView`) or a CSS-only approach; keep the transform-only + always-visible guarantee.
- No data fetching. Card data is ideal to model as an array of objects (`{ id, cat, theme:{bg,fg,shape}, date, heading, roleAt, body, chips[], link?, reverse }`) and `.map()` over it.

## Design Tokens

**Page**
- Page bg: `#16181d` · Page fg: `#f3f1ec`
- Card radius: `30px` (range 10–44) · Container: `1120px` (+48 padding)

**Card themes** — see the table above (each card defines `--bg`, `--fg`, `--shape`).

**Typography**
- Display: Playfair Display — hero `clamp(64px,13vw,168px)`/0.9; card h2 `clamp(30px,3vw,40px)`/1.04 weight 700
- Sans: Hanken Grotesk — body 15.5px/1.6; nav 13px; pills 14px; eyebrows 12px
- Letter-spacing: eyebrow `0.22em`, nav `0.06em`, card-date `0.14em`

**Effects**
- Card radius 30px; chip/pill radius 999px; placeholder radius 16px
- Card shadow on placeholders: `0 24px 60px -28px rgba(0,0,0,0.55)`
- Nav blur: `backdrop-filter: blur(14px)`

## Optional / Tweaks
The prototype includes a small **Tweaks panel** (React, mounted into `#tweaks-root`, toggled by the host environment). It lets you switch heading font (Playfair / Caslon / DM Serif), page surface (Ink / Slate / Bone light-mode), and card corner radius, by overriding CSS custom properties on `:root`. **This is a prototyping aid — it does not need to be ported.** The shipped defaults are Playfair + Slate + 30px radius. If you want a light theme, the "Bone" preset is `#f3f1ec` bg / `#1a1a1a` fg.

## Assets
- **Fonts:** Google Fonts — Playfair Display, Hanken Grotesk (and unused alternates Libre Caslon Display/Text, DM Serif Display). Self-host in production for performance/privacy.
- **Images:** none yet. Every `.ph` striped box is a placeholder for a real photo or screenshot (portrait, UI screenshots, workshop deck, etc.). Provide real assets and replace.
- **Icons:** none (arrows are text "→").
- No third-party APIs. The standalone export inlines fonts but is not part of the production path.

## Files
- `Resume.html` — the complete, self-contained prototype (HTML + CSS + JS in one file). Everything described above lives here. The React Tweaks panel is loaded from a `tweaks-panel.jsx` sibling in the original project but is **not required** for the design and is intentionally omitted from this handoff.
