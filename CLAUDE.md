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
- `Sections.tsx` — the section registry (`id`, `label`, `navLabel?`). **This one array drives the desktop nav, the mobile nav, the scroll-spy and each section's heading** — headings are not written in the section components. Adding a section means adding an entry here *and* rendering it in `app/page.tsx`; the nav follows automatically. `getSection()` throws on an unknown id, so a mismatch fails the build rather than rendering a broken nav.

  **One plain heading per section, and nothing above it.** The numbered kicker (`01 — ABOUT`) and the second sentence underneath (`Hi, I'm Milan.`, `What I can show for it`) were both removed at Milan's request: the number labelled nothing and the sentence repeated the label. `Section` now renders a short accent rule and the label alone. Don't reintroduce `num`, `title` or `SECTION_KICKERS`.

  The desktop nav appears at `lg`, not `md`. Six labels plus the wordmark and header actions measure 675px, and a 768px viewport only offers 704px inside the container — 29px of slack is not enough to trust across font loading, so the hamburger holds until `lg`. Adding a section means shortening labels with `navLabel`, not lowering that breakpoint.
- `ProjectList.tsx`, `WorkExp.tsx`, `EduExp.tsx`, `TechList.tsx`, `SocialMedia.tsx` — the content lists. `Job.period` and `School.period` are free text (`"Jan 2023 — Present"`), not parsed dates. There is **one entry per employer**: the ThemeGrill internship is a sentence inside the engineer role, not a second job.
- `EXPERIENCE_YEARS` in `Profile.tsx` is **derived** from `CAREER_START` (15 July 2022) at build time, not hardcoded — the previous design carried a stale "3+ years" for three years. Don't replace it with a literal.
- **The hero intro and the About bio must not overlap.** The intro is the elevator pitch — years, install base, languages, the gateway, the infrastructure under it. About says what the pitch cannot: the constraints of shipping to sites he will never see, what he owns outright, where the week actually goes. If a sentence could sit in either, it belongs in one of them only.
- `HERO_STATS` is the hero proof strip: install base, products shipped, average rating, years shipping. **Every figure needs a `note` that makes it checkable** (which install base, weighted how) — a bare number with no baseline is the thing hiring reviewers discount first. Keep the four labels short enough to hold one line at `lg`; they sit in a four-column grid and a wrapped label misaligns the notes beneath it. The rating is review-count weighted across the four rated plugins (98/375, 96/828, 98/16, 98/9 → 97 across 1,228), so recompute it, don't nudge it.
- `PROFILE.installBase` is the single source for the combined WordPress.org install figure — currently `150,000+` (Everest Forms 90,000, User Registration 50,000, BlockArt 10,000, Magazine Blocks 6,000, SmartSMTP 2,000, Customize My Account 400). It is quoted in the hero, the bio and the experience summary, so re-check it against the plugin API before changing any of them:
  `curl -s "https://api.wordpress.org/plugins/info/1.2/?action=plugin_information&request[slug]=everest-forms"`
- `Project.role` ("my part") is not optional in spirit: most of these are team products, and presenting one as solo work is the fastest way to lose a reviewer. `Project.internal` renders a "Closed source" note instead of a dead Code link; `Project.note` renders free text there instead, for a product that has neither yet (the snippet plugin is pre-release).
- **The snippet plugin is built, not shipped.** It is not in the plugin directory and its repo is private, so no copy anywhere may say "shipped", "published" or "live" about it — `metric` says "designed and built solo" and `note` says "pre-release". `HERO_STATS`'s "7 products shipped" counts only the published ones and deliberately excludes it.
- **Exactly one entry carries `featured: true`** — User Registration & Membership. Everest Forms has more installs, but the payment work is the deepest thing on the page and Milan wants it read first. It renders full width at the top of the grid as prose, and its `description` holds a blank line (`\n\n`) that `FeaturedProject` splits into paragraphs. No bullet list: Milan asked for it in sentences. `Projects.tsx` has two render paths (`FeaturedProject`, `GridProject`) sharing the same small parts; keep new fields flowing through both.
- **The AI gateway is not a project of its own.** It is the back end of one public Everest Forms feature (AI form generation), built for Milan's employer, so it is described inside that card as his part in a shipped feature. It had its own section, then its own featured card; both read as a claim of ownership over company infrastructure. Do not promote it again.
- **Disclosure boundary for employer work.** Describing what he built is his to do; the internals are not. The card may say: there is a gateway, the plugin calls it, it checks licence, rate and spending limits, it validates the model's answer, no API key ships in the plugin, provider can change server side. It may **not** say: token mechanics (hashing, expiry, the domain-verification callback), endpoint paths or header names, rate or budget thresholds, measured costs, capacity figures, the internal repo, or anything from the internal security review. Those were all on the page at one point and were removed deliberately.
- **`role` is written from `git log`, not from memory.** Before changing one, count the commits and read the subjects:
  `git -C <plugin> log --format='%an|%ae' | grep -icE 'milan|chaudharymilan'`
  **Count that way, not with `--author=milan`.** He has committed as `MILAN88888`, `milan88888` and `Milan Chaudhary` across two email addresses, and `--author` matching one spelling undercounted every figure on the page: Everest Forms came out at 182 when it is 492 across free and pro, and User Registration at 99 when it is 268 across core and pro.
  Verified counts, recounted this way: Everest Forms 214 + 278 pro = **492**, User Registration 191 + 77 pro = **268**, SmartSMTP **303 of 331**, Custom Code Snippets Manager **171 of 171**, Customize My Account (Woo) **162**, Magazine Blocks 50 + 31 = **81**, Registration Form Fields **70**, BlockArt **4**, and **26** User Registration add-ons touched. Vague roles like "block work" or "mailer routing" understate him — name the field, the module or the fix.
- **Work outside ThemeGrill counts, and it is under the Skunk-Tech org.** `Turbo Proxy HA` (`Skunk-Tech/turbo-proxy-reboot`, private) is **467 of its 472 commits his** — the largest thing he has built: FastAPI, MySQL, Redis, two React front ends, Docker behind Nginx, Prometheus and Grafana, G3Proxy deployed over SSH with mobile carrier emulation. `Turbo Subdomains` (`Skunk-Tech/turbosubdomains`, private, sells at turbosubdomains.com) is **18 commits** of feature work in early 2026: SearXNG search, AI featured images with IPTC metadata, background bulk jobs and exports, a DB indexing refactor.
  Both are presented as projects, not as a job: the employment relationship with Skunk Tech is unverified, so no title, dates-as-role or employer entry until he says what it is. His counts there come from `gh api repos/Skunk-Tech/<repo>/commits?author=MILAN88888` for the private repos and the local clones in `~/Documents/st/`.
- **Keep one product in the grid that is Milan's own.** A page made entirely of an employer's plugins doesn't answer what he builds on his own account, which is why Custom Code Snippets Manager sits third, ahead of larger install numbers. Its repo (`MILAN88888/snippet-master`) is private and it is not in the plugin directory yet — when either changes, swap the `note` for real links.
- **Every grid card folds, and they all look the same closed.** A closed card shows title, metric and the first line of `description`; everything after that first blank line, plus the whole of `role`, sits behind `ui/Expandable`. That primitive takes the card header as its `header` prop and renders it inside `<summary>`, so the whole header is the click target with the chevron in the corner — a native `<details>` styled by `.disclosure` in `globals.css`. No label text, no client JavaScript, and it stays a server component. Don't rewrite it with `useState`, and don't put "Show more" text back on it.
- **Two rules keep the grid even, and they work together.** The `<ul>` is `items-start` so opening a card grows that card alone instead of stretching its whole row (stretching was what made the open state look wrong), and each grid `Card` carries `min-h-[21rem]` so every closed card is the same height regardless of how its tags or note wrap. Measured after the change: eight closed cards at 336px, spread 0, and opening one leaves its neighbours untouched. Reserving heights block by block was tried first and never got below a 22px spread.
- **Grid cards show at most four stack tags and a one-line `metric`**, and the `note` sits on its own reserved line under the links. Longer values wrap and break the alignment; the full stack is named in `role` anyway.
- **Security work is a headline, and the count is 40.** Audited by streaming `git log --format='@@%an|%ae|%s' --name-only` over every plugin repo in `~/Sites`, keeping his commits and matching subjects against security terms: 40 unique fixes across nine plugins (Everest Forms 17, User Registration 10, SmartSMTP 5, Magazine Blocks 2, UR pro 2, plus BlockArt, both Customize My Account plugins and UR invite codes). The page said 2. Excluded from the count: the `security review yml` CI commits (tooling, not fixes) and pure text-domain churn.
  The ones worth naming: unauthenticated privilege escalation and user deletion (UR-4593), arbitrary shortcode execution through user-controlled smart tags (UR-4683), a PayPal flaw letting a pending payment be marked completed without payment (UR-4379), a forged gateway on free memberships and an open redirect after login (#1408), stored XSS in the SmartSMTP mail log viewer, and Snyk report triage in core and pro.
- **Payment gateways really are 4** — PayPal, Stripe, Authorize.Net, Mollie — in both Everest Forms and User Registration. A path scan also matched `razorpay` and `square`, but both were image filenames (`razorpay.png`, `avatar-thumb-square.png`), not code. Check the file paths before adding a gateway to that count.
- **Keep every lead under about 70 characters.** The title, metric and lead blocks carry min-heights (`3rem`, `2.25rem`, `2.85rem`) so one- and two-line values line up, but a lead that wraps to three lines pushes its card's chevron out of line with the rest of the row. Measured in the browser: at every breakpoint a card is roughly 310px of text width, so 70 characters is two lines. Whatever the lead drops goes into the folded paragraph, not the bin.
- The featured card never folds: it is the one meant to be read in full.
- **The AI work is one thread, not the spine of the page.** It earns one clause in the hero subtitle, one sentence in the intro, one bio paragraph, one experience bullet, and the second paragraph of the Everest Forms card. There is deliberately **no AI figure in `HERO_STATS`** and no AI section. If a copy change adds a mention anywhere else, cut it.
- **Employer framing:** the work is Milan's, the employer is context. `ThemeGrill` appears only in the two experience entries, `PROFILE.company` and the About facts — never in the hero, the bio or the case study heading.
- Skills group **capabilities, not tool badges** — "LLM gateway design", "Rate & budget control", not a list of model names. Listing AI products as skills reads as unverified.

### Voice

Milan's review of the first pass was that it "look like complete ai generated", and he was right. The tells, all of which had crept into every section:

- **Aphorisms as headings.** "Product engineering, with the platform underneath." Section titles are now plain: `Hi, I'm Milan.`, `Things I've built`, `What I work with`, `Where I've worked`, `Get in touch`.
- **Paragraphs that land on a punchline.** Every bio paragraph used to end on a closing line ("the engineering calls stay mine", "doesn't delegate", "instead of a proposal"). One per page is a voice; five is a machine.
- **Em-dash flourishes.** The rewritten About contains none. Use commas and full stops.
- **Antithesis constructions** — "the difference between a feature and a vulnerability", "a shipped feature instead of a proposal", "X, not Y". They read clever and identical.
- **No human detail.** The About now closes on self-hosting, Tailscale, his own plugin and how he actually uses AI assistants, because every developer portfolio worth copying (Brittany Chiang, Lee Robinson) gives one paragraph to something that is not the job.

The shape to keep: plain heading, three or four short first-person paragraphs — where I am now, how I got here, what I moved on to, what I do away from work — concrete nouns, varied sentence length, no rhetoric. Milan's own drafts are the register to match; when he supplies copy, tighten it rather than restyling it.

### Section patterns

Two of these came from studying salim.com.np (a former ThemeGrill colleague's portfolio, and the closest comparable to Milan's own career), adapted with Milan's own verifiable numbers:

- **Experience is grouped by product, not a flat bullet list.** `Job.groups` holds `{ product, items[] }`; `Job.highlights` stays for a role that was one job on one thing (Idea Foundation). Seven products in one list buries what each was, and a reviewer scans product-then-detail far faster. `Experience.tsx` renders both shapes, sharing a `Bullets` part.
- **Skills lead with `PROOF_POINTS` before `TECH_LIST`.** Six figures, each from `git log` in the plugin it names (`303 of 331` in SmartSMTP, `~440` in Everest Forms, `158` in Customize My Account, 4 payment gateways, 2 production security fixes, 20+ add-ons). A tag cloud is a self-assessment; these can be checked. If a number changes, recount it — never round it up.
- The section heading is **What I can show for it**, which is the promise those cards make. Don't put a proof figure in `PROOF_POINTS` that isn't traceable to a repo.

Deliberately **not** copied from that site: a speaking/community section, testimonials, separate case study pages and a blog. Each needs material Milan does not have yet or that cannot be invented — talks he has given, quotes real colleagues actually said. Add them only when the material exists.

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

`changelog.txt` follows `= X.Y.Z - YYYY-MM-DD` / `* entry`; bump `version` in `package.json` alongside it. They sat out of step for two years (0.1.0 against a 1.0.0 changelog); keep them matched, newest entry first.
