# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev     # next dev on http://localhost:3000
npm run build   # production build — also the only real typecheck (tsconfig is noEmit)
npm run start   # serve the production build (PORT=3100 npm run start to avoid a clash)
npm run lint    # next lint (eslint-config-next / core-web-vitals)
```

Node >= 20 (`.nvmrc` pins 20). There is no test suite, so `npm run build` + `npm run lint` are the verification gate.

**Never run `npm run build` while `npm run dev` is running** — they share `.next/`, and the build replaces the chunks the dev server is serving, so the running page starts returning 500s for its own `webpack.js` and `layout.css` (which looks exactly like a hydration bug: every `.reveal` stays hidden). Stop dev first, or `rm -rf .next` and restart it afterwards.

**`next/font` fetches DM Sans, Space Grotesk and JetBrains Mono from Google at build time**, so `npm run build` fails without network access. If a sandbox blocks `fonts.gstatic.com`, the build must run unsandboxed.

## Architecture

Next.js 13.4 **App Router** portfolio for Milan Chaudhary (milanc.com.np). A **single static page** — `/` — assembled from section components. TypeScript strict, Tailwind, no backend, no client-side data fetching.

`app/page.tsx` is a thin server component that composes `components/sections/*` in order: `Hero`, `About`, `Projects`, `Skills`, `Experience`, `Education`, `Contact`. Almost everything is a server component; the only client components are `SiteHeader`, `ThemeToggle`, `ThemeContext`, `ui/Reveal` and `app/error.tsx` (which React requires to be one).

No component renders an image — `next/image` is unused, and the only assets the page references are the favicon and OG `screenshot.webp` declared in `app/metadata.ts`. `public/images/` still holds pre-redesign project shots that nothing imports. Icons are exclusively Feather via `react-icons/fi`; don't mix in a second icon set.

### Design tokens are the contract

`styles/globals.css` defines every color, the fluid type scale, radii and shadows as CSS custom properties — **once on `:root` (dark) and again under `[data-theme="light"]`**. `tailwind.config.ts` maps those tokens onto utilities. Two rules follow from this:

1. **Never hardcode a color in a component.** Use `bg-surface`, `text-ink-muted`, `border-line`, `text-accent`. A raw `oklch()`/hex in a component is a light-mode bug waiting to happen — that was the main defect in the previous design.
2. **A new token must be added to both theme blocks.** One defined only on `:root` silently renders its dark value in light mode.

Token naming deliberately separates ink from paint so neither can be misused for the other:

| purpose | tokens | utilities |
|---|---|---|
| page/panel backgrounds | `--bg`, `--bg-subtle`, `--surface`, `--surface-hover` | `bg-bg`, `bg-surface`, `hover:bg-surface-hover` |
| text | `--text`, `--text-muted`, `--text-faint` | `text-ink`, `text-ink-muted`, `text-ink-faint` |
| borders | `--border`, `--border-strong` | `border-line`, `border-line-strong` |
| accent | `--accent`, `--accent-fg`, `--accent-subtle`, `--ring` | `text-accent`, `bg-accent`, `bg-accent-subtle` |
| raised panels | `--surface-raised` | `bg-surface-raised` |

`--header-h` and `--grid-cell` are layout tokens, not colors: `--header-h` feeds both `h-header` and `html`'s `scroll-padding-top`, `--grid-cell` sizes the hero's `.hairline-grid`. They are defined once on `:root` — unlike colors, they don't need a light-mode override.

The `--step--2 … --step-6` fluid scale is not used directly in components either; `tailwind.config.ts` binds it to named utilities — `text-display-1/2/3` and `text-h2/h3/h4`, each carrying its own line-height and tracking. Headings use those, so `Section`'s `text-h2` and the hero's `text-display-1` are the only sizes a new section should need. Body copy keeps Tailwind's default scale.

Type is three families: `font-sans` (DM Sans) for body, `font-display` (Space Grotesk) for the h1 and section headings, `font-mono` (JetBrains Mono) for kickers, tags and metadata.

There is a single accent — amber, `oklch(83% .17 88)` in dark. It carries section kickers, the primary button, links and the experience rail. Light mode darkens it to `oklch(52% .13 70)`, because the dark-mode amber is unreadable on white. There is no secondary hue palette; components should contain **no** inline `style={{ color }}` at all.

Every text token is verified at ≥4.5:1 against both `--bg` and `--surface` in both themes. If you change a color token, re-check contrast (see Verification below) — `--text-faint` and light-mode `--accent` (which sits on `--bg` in every section kicker) have almost no headroom.

Tailwind opacity modifiers do **not** work on these tokens (`bg-accent/10` produces invalid CSS, because the custom properties hold complete `oklch()` colors rather than bare channels). Where alpha is needed, write a class in `globals.css` using `color-mix()` — `.header-surface` (translucent sticky header) and `.hero-glow` (amber radial wash) are the existing examples; `--accent-subtle` is itself a `color-mix()` of the accent.

### Content lives in `constants/`, never in components

Components render; `constants/` supplies. `constants/index.tsx` is the barrel (`@/constants`), and `constants/types.ts` types every shape.

- `Profile.tsx` — the single source for name, role, tagline, contact details, CV path and `siteUrl`. `app/metadata.ts`, `app/sitemap.ts` and `app/robots.ts` all read `siteUrl` from here, which is what keeps the domain from drifting. Import it as `@/constants/Profile` in those files, not through the barrel, to keep `react-icons` out of their module graph.
- `Sections.tsx` — the section registry (`id`, `num`, `label`, `navLabel?`, `title`). **This one array drives the desktop nav, the mobile nav, the scroll-spy, and every section's `01 — ABOUT` kicker and heading** — section headings are not written in the section components. Adding a section means adding an entry here *and* rendering it in `app/page.tsx`; the nav then follows automatically. `getSection()` throws on an unknown id, so a mismatch fails the build rather than rendering a broken nav. `SECTION_KICKERS` overrides the kicker where it should differ from the nav label (`Projects` → `FEATURED PROJECTS`), and `navLabel` shortens a label for the header only (`AI Platform` → `AI`).

  The desktop nav appears at `lg`, not `md`. Six labels plus the wordmark and header actions measure 675px, and a 768px viewport only offers 704px inside the container — 29px of slack is not enough to trust across font loading, so the hamburger holds until `lg`. Adding a section means shortening labels with `navLabel`, not lowering that breakpoint.
- `ProjectList.tsx`, `WorkExp.tsx`, `EduExp.tsx`, `TechList.tsx`, `SocialMedia.tsx` — the content lists. `Job.period` and `School.period` are free text (`"Mar 2023 — Present"`), not parsed dates.
- `EXPERIENCE_YEARS` in `Profile.tsx` is **derived** from `CAREER_START` (15 July 2022) at build time, not hardcoded — the previous design carried a stale "3+ years" for three years. Don't replace it with a literal.
- `HERO_STATS` is the hero proof strip: install base, products shipped, average rating, years shipping. **Every figure needs a `note` that makes it checkable** (which install base, weighted how) — a bare number with no baseline is the thing hiring reviewers discount first. Keep the four labels short enough to hold one line at `lg`; they sit in a four-column grid and a wrapped label misaligns the notes beneath it. The rating is review-count weighted across the four rated plugins (98/375, 96/828, 98/16, 98/9 → 97 across 1,228), so recompute it, don't nudge it.
- `PROFILE.installBase` is the single source for the combined WordPress.org install figure — currently `150,000+` (Everest Forms 90,000, User Registration 50,000, BlockArt 10,000, Magazine Blocks 6,000, SmartSMTP 2,000, Customize My Account 400). It is quoted in the hero, the bio and the experience summary, so re-check it against the plugin API before changing any of them:
  `curl -s "https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=everest-forms"`
- `Project.role` ("my part") is not optional in spirit: most of these are team products, and presenting one as solo work is the fastest way to lose a reviewer. `Project.internal` renders a "Closed source" note instead of a dead Code link; `Project.note` renders free text there instead, for a product that has neither yet (the snippet plugin is pre-release).
- **The snippet plugin is built, not shipped.** It is not in the plugin directory and its repo is private, so no copy anywhere may say "shipped", "published" or "live" about it — `metric` says "designed and built solo" and `note` says "pre-release". `HERO_STATS`'s "7 products shipped" counts only the published ones and deliberately excludes it.
- **Exactly one entry carries `featured: true`** — the AI gateway. It renders full width at the top of the grid, and its `highlights` are the engineering decisions a reviewer actually reads. `Projects.tsx` has two render paths (`FeaturedProject`, `GridProject`) sharing the same small parts; keep new fields flowing through both.
- **Keep one product in the grid that is Milan's own.** A page made entirely of an employer's plugins doesn't answer what he builds on his own account, which is why Custom Code Snippets Manager sits third, ahead of larger install numbers. Its repo (`MILAN88888/snippet-master`) is private and it is not in the plugin directory yet — when either changes, swap the `note` for real links.
- **The AI gateway is one featured project, not a theme running through the page.** It earns one clause in the hero subtitle, one bio paragraph, one experience bullet, and its own featured card; the depth lives in that card's `highlights`. There is deliberately **no AI figure in `HERO_STATS`** and no separate AI section — both existed and both over-weighted a single system. If a copy change adds a second mention anywhere, cut it.
- **Employer framing:** the work is Milan's, the employer is context. `ThemeGrill` appears only in the two experience entries, `PROFILE.company` and the About facts — never in the hero, the bio or the case study heading.
- Skills group **capabilities, not tool badges** — "LLM gateway design", "Rate & budget control", not a list of model names. Listing AI products as skills reads as unverified.

### Component layers

- **`components/ui/`** — primitives, imported via `@/components/ui`. `Section` (kicker + heading + anchor), `Container`, `Card`, `Tag`, `Stat`, `Button`, `IconLink`, `TextLink`, `Reveal`. Reach for these before writing new markup.
  - `Section` renders a **full-bleed** `<section>` (so the top divider and the hero grid reach the viewport edges) and wraps its body in `Container`. `main` deliberately applies no max-width — anything rendered outside a `Section` must bring its own `Container`.
  - `Tag` has two variants: `mono` (outlined pill, project stacks) and `solid` (filled chip, skills grid).
- **`components/sections/`** — one component per page section, imported via `@/components/sections`.
- **`components/`** root — page chrome: `SiteHeader`, `SiteFooter`, `ThemeToggle`, `ThemeContext`.

Hover and focus styling belongs in CSS or Tailwind variants on these primitives, never in `onMouseEnter`/`onMouseLeave` handlers. `globals.css` sets one `:focus-visible` ring for every interactive element, so anything built from the primitives is keyboard-accessible by default. `IconLink` and `Button` also bake in `rel="noreferrer noopener"` so no call site can forget it.

### Motion

CSS only — there is no animation library. `ui/Reveal` is a client component that sets `data-revealed` via `IntersectionObserver`; the `.reveal` class in `globals.css` does the fade-up, with `--reveal-delay` for staggering. A single `@media (prefers-reduced-motion: reduce)` block at the end of `globals.css` disables all of it and forces `.reveal` visible — so **never gate content visibility on anything but `.reveal`**, or reduced-motion users will lose it.

### Theming

`next-themes` via `components/ThemeContext.tsx`: `attribute="data-theme"`, `defaultTheme="dark"`, `enableSystem`. Tailwind's `darkMode` is `['class', '[data-theme="dark"]']` to match. `ThemeToggle` renders a fixed-size button on the server pass and swaps only the icon after mount — don't make it return `null` before hydration, which shifts the header.

### Routing and metadata

`/` is the only route. `/projects`, `/tech` and `/about` are **308 redirects declared in `next.config.js`** pointing at `/#projects`, `/#skills` and `/#about` — they're pre-redesign URLs kept alive. Prefer config redirects over a page that calls `redirect()`: the latter prerenders as a 200 with a client-side hop.

`app/metadata.ts` holds the typed `Metadata` object plus `personJsonLd` (injected in the root layout). `app/sitemap.ts` and `app/robots.ts` are Next metadata routes that replaced the old `public/robots.txt` and `public/sitemap.xml` — don't reintroduce either static file, since it would shadow the route.

`error.tsx`, `loading.tsx` and `not-found.tsx` render outside any `Section`, so each carries its own `mx-auto max-w-content px-5 md:px-8` width. `Container` would be the tidier choice if one of them is touched.

Anchor offsets come from `scroll-padding-top` on `html`, derived from the `--header-h` token. Don't add per-section `scroll-mt-*`. The hero is the one section not in the `SECTIONS` registry: it carries `id="top"` (the header wordmark links to it) and renders no kicker or heading, which is why it composes `Container` + `Reveal` directly instead of using `Section`.

## Verification

Beyond `build` and `lint`, the checks that actually catch regressions here:

- **Screenshot both themes.** Light-mode token bugs are invisible in dark mode. Toggle the theme (`localStorage.setItem('theme','light')` then reload) and compare at 360px / 390px / 768px / 1024px / 1440px. 768 and 1024 both matter now that the nav switches at `lg`.
- **Scroll the whole page before a full-page screenshot.** `IntersectionObserver` never fires for sections a stitched capture didn't actually scroll through, so `.reveal` content photographs as blank space. Step down the page first, then assert nothing is left hidden:
  `[...document.querySelectorAll('.reveal')].filter(e => e.dataset.revealed !== 'true').length` must be `0`.
- **Re-check contrast after any color change.** Sample every `--text-*` and accent token against `--bg`, `--surface` and `--surface-raised` in both themes. The canvas `fillStyle` trick does **not** work here — Chrome leaves `oklch()` unparsed and it silently returns ratios near 1.0. Convert OKLCh to sRGB in the page instead (OKLab → LMS → linear sRGB, then the WCAG formula). Current floor is 4.62:1 (`--text-faint` on `--surface-raised`, dark); light-mode `--accent` on `--surface-raised` is 4.81:1, so it has the least room to move.
- **Test with reduced motion on.** Confirm all `.reveal` elements report `opacity: 1` without scrolling.
- **Tab through the page.** First Tab must reveal the skip link; every visible link and button needs a ring.

`changelog.txt` follows `= X.Y.Z - YYYY-MM-DD` / `* entry`; bump `version` in `package.json` alongside it. Both now read `2.0.0` (2026-09-04, the redesign plus the AI platform repositioning) after sitting out of step for two years — keep them in step.
