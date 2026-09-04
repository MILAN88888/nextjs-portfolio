import type { CaseStudy } from "./types";

/**
 * The deep-dive section. A reviewer skimming this page should be able to see
 * the calls I made and why, not just the stack I used — so each entry carries
 * the problem, the approach, and the decisions that were actually contested.
 */
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "themegrill-ai-cloud",
    title: "A multi-tenant AI gateway for WordPress plugins",
    context: "ThemeGrill AI Cloud · 2026 · I designed it, wrote it, and shipped it",
    problem:
      "Everest Forms needed AI form generation for an install base of 90,000 sites. A provider key shipped inside a plugin leaks the first time somebody downloads the folder, and it puts every site on one unbounded budget — one abusive install can spend the whole company's quota. Per-site keys were not an option either: site owners will not create an OpenAI account to use a form builder.",
    approach:
      "One self-hosted gateway between the plugins and a model router. Sites authenticate to the gateway, not to a provider. Plugins never hold a provider key, never see the system prompt that shapes their output, and cannot spend past the tier their licence grants. Adding AI to the next product is a prompt module in the same service rather than a second deployment.",
    decisions: [
      {
        title: "Prove the domain before issuing a token",
        body: "Registration is a callback, not a claim. The plugin stores a one-time token as a WordPress transient, the gateway fetches it back over that site's own REST route, and the transient is deleted on read. Without it, anyone could register a competitor's domain and burn its quota — or generate content under its name.",
      },
      {
        title: "Hash the token, slide the expiry",
        body: "Site tokens are 256-bit, returned once, and stored only as a SHA-256 hash — a database dump yields nothing usable. A 90-day window slides forward on use, and the plugin clears and re-registers on a 401, so a leaked token dies of disuse without an admin ever seeing an error.",
      },
      {
        title: "Three independent limits, one shared counter",
        body: "Per-IP limits live in Redis so they hold across uvicorn workers instead of being per-worker fiction; a per-token daily cap sits on top; and per-site request-rate and spend ceilings are enforced by the router's virtual keys. A request has to satisfy all three, which is what stops a single bot registering domains to farm free quota.",
      },
      {
        title: "Ask for an alias, not a model",
        body: "Plugins request one alias and the router resolves it. Changing model or provider is a config change on the server — not a plugin release that has to reach tens of thousands of sites and wait for each one to update.",
      },
      {
        title: "Validate the answer, not just the request",
        body: "Generated output is parsed and shape-checked against the product's own field schema before WordPress touches it, and prompts that are not about building a form are refused with a specific error. A model that returns something unexpected should produce a clean failure, never a half-built form in someone's admin.",
      },
      {
        title: "Own both ends of the integration",
        body: "The WordPress side is mine too: token lifecycle in the options table, the AJAX handler, and the transform from model JSON into the form builder's internal structure — including the fields the product requires on every generated form, whatever the model returned.",
      },
    ],
    outcomes: [
      "AI form generation live in Everest Forms, a 90,000-install plugin",
      "Cost per generation measured on live traffic and kept under a cent, with per-site budget and rate ceilings above it",
      "Sized and documented for 1,000+ registered sites on a single 2 vCPU / 4 GB box",
      "Postgres, Redis, the router and the gateway brought up as one Docker Compose stack, with health-gated startup and a separate schema so the router's migrations can't drop the gateway's tables",
      "Shipped with a written security review covering token lifecycle, rate limiting, CORS, audit logging and prompt isolation",
    ],
    stack: [
      "Python",
      "FastAPI",
      "LiteLLM",
      "PostgreSQL",
      "Redis",
      "Docker Compose",
      "Nginx",
      "PHP",
      "WordPress",
    ],
    internalNote:
      "Internal ThemeGrill infrastructure, so there is no public repository — but the feature it powers is public, and shipping in Everest Forms.",
    links: [{ title: "Everest Forms on WordPress.org", url: "https://wordpress.org/plugins/everest-forms/" }],
  },
];

/**
 * How the day-to-day actually works. Listing AI tools as badges reads as
 * unverified; these are the specific things agents do in my workflow.
 */
export const AGENTIC_PRACTICE: { title: string; body: string }[] = [
  {
    title: "Agents verify in a real environment",
    body: "Claude Code drives Playwright over MCP against a live local WordPress. A fix is not done when it compiles — it is done when the agent has reproduced the bug, applied the change, and walked the admin screens again.",
  },
  {
    title: "Standards encoded as skills, not reminders",
    body: "I keep my own Claude Code skills for the plugin suite: which of the free and pro trees a change belongs in, the coding-standards gate that has to pass before a commit, and a triage routine that reads debug.log and traces a fatal back to the plugin, file and line.",
  },
  {
    title: "Prompts are product code",
    body: "The gateway's system prompts live in versioned per-product modules next to the schema they have to produce. A prompt change is reviewed, deployed and rolled back like any other code path — not edited in a dashboard.",
  },
  {
    title: "The judgement doesn't delegate",
    body: "Agents are fast at what was never the interesting part: scaffolding, mechanical refactors, reading unfamiliar code, a first pass of tests. What to build, what the failure modes are, and whether the answer is actually right stays with me.",
  },
];
