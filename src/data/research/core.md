# Core (core.so) — Research Brief

**Researched:** 2026-04-16
**Sources:**
- https://www.core.so/ (landing page — JS SPA, marketing copy extracted from bundled `LandingPage-C4Kv-a6Q.js` and `AboutPage-DG6gDIzP.js`)
- https://x.com/blakeandersonw/status/2038276867464061056 ("Introducing core.so" launch thread, Mar 29 2026)
- https://x.com/blakeandersonw/status/2038277353571246471 (team composition tweet, Mar 29 2026)
- https://x.com/blakeandersonw/status/2038983214463689061 ("Apache 2.0, 100% free and open-source" confirmation, Mar 31 2026)
- https://x.com/blakeandersonw/status/2035009225592615035 ("Launching open-source + hosted", Mar 20 2026)
- https://x.com/blakeandersonw/status/2035021537804239183 ("Paperclip = individual orchestrates AI agents / Core = unified workspace with human team members", Mar 20 2026)
- https://x.com/RoundtableSpace/status/2038470019483410869 (Mario Nawfal press blurb)
- https://x.com/emmaxdata/status/2038473358052921403 (Emma / data press blurb)
- https://x.com/brunoarchway/status/2038701545529692447 (Bruno Archway review, Mar 30 2026)
- https://x.com/tonyennis/status/2041564277492928726 (Tony Ennis — "AI workspace tools I'm tracking", Apr 7 2026)
- https://x.com/dotta/status/2035065180938281413 (Dotta / Paperclip CEO: "Core looks incredible")
- https://x.com/earlytools/status/2039679142178775354 (early.tools listing, Apr 2 2026)
- X search via bird CLI: `"core.so"`, `from:blakeandersonw core`, `blakeandersonw core`, `core.so AI workspace`

## Summary

Core (core.so) is an open-source (Apache 2.0), AI-native team workspace built by a three-person team at **Core OS Studio Inc** — founder/CEO **Blake Anderson** (@blakeandersonw, previously known for viral consumer apps Cal AI, Umax, and 10x), backend engineer **Jayaditya Gupta** (@jayssj1), and design engineer **Benjamin Wang** (@benwxng). The website also lists CTO Theodore Anderson and COO Benjamin Chen on the "About" page. It was built in ~2 months and publicly launched on March 29, 2026. Its pitch is to replace Slack + Linear + Notion + Gmail + Google Calendar with a single workspace where humans and AI agents share the same context — "centralize context so small teams can work more efficiently with agents." The product bundles six first-class modules: AI Assistant, Messages, Projects (Kanban), Files (rich-text + uploads), Email (Gmail integration), and Calendar (Google Calendar sync). It's free, hosted at core.so, and open-source. Blake frames it as a sibling/complement to Paperclip: "Paperclip = individual orchestrates AI agents / Core = unified workspace with other human team members."

## Classification

- **Type:** `multi-agent-platform` — Core is not a single agent; it's a workspace platform in which an AI Assistant is "woven throughout" and the explicit product thesis is humans + agents sharing context and executing work together. Press coverage frames it as "rebuilding the modern workspace around AI agents" (Mario Nawfal, Emma Data, Bruno Archway). It's not purely a developer utility (it's a finished consumer/team product, not infrastructure or a GUI shell), and it's not a standalone agent — the agent is a feature *inside* the platform. The clearest fit in the directory's taxonomy is `multi-agent-platform`, with the understanding that this category covers both agent frameworks/orchestrators and agent-native application platforms.

- **Subtype:** `orchestration-platform` — Core is a hosted platform that coordinates AI work across a team's shared surface (messages, tasks, docs, calendar, email). It's the same shape as Dify and Cabinet in the directory: a product that gives teams/individuals a place where agents operate alongside human work. It's not `framework-sdk` (no SDK for building agents), not `autonomous-org` (no org charts, budgets, or zero-human operation — it's explicitly human-first with agents assisting), not `self-improving`, not `scaffolding`, not `built-in-feature` (it *is* the application, not a feature inside someone else's tool).

- **Category:** `Individual/Indie & Research` — Built by a three-person (sometimes framed as "TINY team of 3") indie shop in 2 months. No VC funding disclosed. Open-source under Apache 2.0. Founder Blake Anderson is a well-known indie builder (Cal AI, Umax, 10x) rather than a team backed by a traditional institution. This matches the pattern of Cabinet (Hila Shmuel solo dev) and similar entries.

- **Difficulty:** `beginner` — The product is a hosted SaaS with zero setup. Users sign up, connect Gmail/Google Calendar, and start working. Target audience is "small teams" of knowledge workers — not developers, not technical operators. No CLI, no code, no prompts needed. Onboarding wizard present in the bundled JS assets (`OnboardingWizard-C9E67LXT.js`).

- **Use Cases:**
  - `Ops` — Primary. Core replaces business-ops tools (messaging, project management, email, calendar, docs). Blake's own positioning explicitly targets "small teams" doing day-to-day work. This is the dominant use case.
  - `General-Purpose` — Secondary. Because Core is pitched as *the* workspace (not a vertical tool), and consolidates so many categories (chat + projects + files + email + calendar + AI), it reasonably applies across most team workflows. Matches Cabinet's tagging pattern which also includes General-Purpose.
  - Not `Dev` — Not a coding tool; no dev workflow integrations.
  - Not `Content` — Not positioned for content creation specifically (the files module is general-purpose docs, not a publishing tool).
  - Not `Research` — Not a research/analysis tool.

- **Features:**
  - `Open Source` — Apache 2.0, confirmed directly by Blake on X (Mar 31 2026: "Core is 100% free and open-source (Apache 2.0). All of my important work moving forward will be open-source.").
  - `Self-Hosted` — Implied but not directly confirmed in available sources. The code is open-source, so self-hosting is technically possible, but no self-hosting documentation was surfaced in this research. **Flagging as an Open Question rather than adding the tag.**
  - Not `Model-Agnostic` — No user-facing model selection disclosed; underlying LLM(s) not specified in public copy.
  - Not `Security-Focused` — Privacy/security not a marketed differentiator.
  - Not `Self-Improving` — No learning/improvement loop claimed.

## Directory Entry (Draft)

```json
{
  "name": "Core",
  "category": "Individual/Indie & Research",
  "type": "multi-agent-platform",
  "use_cases": [
    "Ops",
    "General-Purpose"
  ],
  "features": [
    "Open Source"
  ],
  "creator": "Blake Anderson (@blakeandersonw), Jayaditya Gupta, Benjamin Wang — Core OS Studio Inc",
  "github_stars": "N/A (repo not yet located)",
  "github_url": null,
  "website_url": "https://www.core.so/",
  "full_description": "Open-source (Apache 2.0) AI-native team workspace that rebuilds Slack, Linear, Notion, Gmail, and Google Calendar into one tool with an AI Assistant woven throughout. Six first-class modules — Messages (channels + DMs), Projects (Kanban boards), Files (rich-text docs + uploads), Email (Gmail integration), Calendar (Google Calendar sync), and AI Assistant (chat that drafts messages, summarizes threads, schedules meetings, manages tasks, and finds information) — all share context so agents can act across the full workspace rather than one app at a time. Built in ~2 months by a 3-person indie team at Core OS Studio Inc. Hosted at core.so and free to use. Founder Blake Anderson frames Core as the complement to Paperclip: 'Paperclip = individual orchestrates AI agents; Core = unified workspace with human team members.'",
  "key_features": [
    "AI Assistant embedded across every module (drafts, summarizes, schedules, finds)",
    "Real-time team messaging with channels + DMs (Slack replacement)",
    "Kanban project boards with customizable columns (Linear replacement)",
    "Rich-text documents with real-time collaboration + file uploads (Notion replacement)",
    "Gmail integration — read, compose, manage mail inside Core",
    "Google Calendar sync — day/week/month views, create events in-app",
    "Shared context across modules (calendar knows about tasks, AI can draft emails about projects, etc.)",
    "Team/Members management + Dashboard",
    "Apache 2.0 open-source; 100% free hosted version at core.so"
  ],
  "why_discussed": "March 29, 2026 public launch drew viral attention across the AI-workspace corner of X. Positioned by commentators (Mario Nawfal, Emma Data, Bruno Archway) as 'rebuilding the modern workspace around AI agents — Slack + Linear + Notion recentered around shared context.' Represents the human-team counterpart to Paperclip in Blake Anderson's own framing, and an Apache 2.0 open-source alternative to the coming wave of AI-native workspace SaaS. Built in 2 months by a 3-person team.",
  "notes": "Company: Core OS Studio Inc. Domain collides with no other major AI product, but 'Core' is a heavily overloaded name (coreos, CoreOS, Core Design System for Figma, Kore.ai, Mainframe Core, etc.). Entry name should be 'Core' with website disambiguation. GitHub repository location not publicly surfaced in this research — multiple sources confirm Apache 2.0 / open-source status, but a direct repo URL was not found; may be under a newly-created org. Self-hosting feasibility likely but undocumented. Underlying LLM(s) not disclosed.",
  "difficulty": "beginner",
  "tag": "workspace",
  "subtype": "orchestration-platform",
  "relationships": {
    "alternative_to": [
      "Superagent"
    ],
    "ecosystem": [
      "Paperclip.ing"
    ]
  }
}
```

## Community Sentiment (from X/Twitter)

**How people describe it:**
- "AI-native workspace for small teams" — Bruno Archway, most commonly echoed framing.
- "Rebuilding the modern workspace around AI agents — the best parts of Slack, Linear, and Notion, recentered around shared context and agent-powered work" — repeated nearly verbatim by Mario Nawfal (@RoundtableSpace) and Emma (@emmaxdata) press blurbs on launch day.
- Blake's own framing: "centralize context so small teams can work more efficiently with agents."
- Positioned explicitly as the team-oriented complement to Paperclip (single user orchestrating agents): Blake's own tweet defines the distinction.

**Common use cases mentioned:**
- Replacing the Slack + Linear + Notion stack for small startup teams.
- Letting an AI assistant act across chat, email, calendar, and tasks without tab-switching.
- Sebastian Turner (@sebxturner) posted Core as "just one part of my core workspace" — mixed with other tools as a productivity hub.

**What people like:**
- The open-source + free hosted combo was well received. Blake pinned it as a philosophical stance: "All of my important work moving forward will be open-source. I believe this is the future of software development."
- Cross-founder respect: Dotta (Paperclip CEO) publicly said "Core looks incredible." Alex (@AAlexDotDev) suggested packing Paperclip + Core together.
- @0xalatah's note — "Core is a conceptually brilliant pivot that completely changes my perception of you from a scalper during a revolutionary time in history to a genuine builder" — signals a meaningful reputational shift for Blake (from consumer-app builder to infrastructure-adjacent founder).
- Utpal Nadiger and others repeatedly described it as "hella cool" / refreshingly focused.

**Criticisms / limitations:**
- Early-stage polish gaps. First-day request from @TanujAravind8: "could you add a dark mode?" (Dark mode has since been referenced as supported per the theme store, but was missing at launch.)
- Blake himself flagged: built in 2 months with a team of 3, "there is certainly a lot to be improved."
- Blake had trouble getting an Apple Developer account approved for Core for over two months — suggests native mobile distribution is delayed.
- No broad critical reviews surfaced yet; the product is <3 weeks old at the time of research.

**Compared to / alongside:**
- **Paperclip.ing** — Explicit complementary positioning ("Paperclip = individual, Core = team"). In the directory.
- **Slack + Linear + Notion + Gmail + Google Calendar** — The stack Core is replacing; every press blurb names at least three of these.
- **Operator** (Tony Ennis) — Another AI workspace launched around the same time; Ennis grouped Core and Operator together as "AI workspace tools I'm tracking."
- **HilaShmuel's project (Cabinet)** — Grouped by Ennis in the same "AI workspace tools" list. Both are indie, open-source, and knowledge/workspace-oriented, but Cabinet is solo/local-first Obsidian-style and Core is team/hosted SaaS.

**Who's talking about it:** Indie hackers, AI-workspace commentators, founder-Twitter (paperclip/10x/apps ecosystem). Not the enterprise-SaaS crowd or the developer-framework crowd.

## Similar Tools in Directory

| Tool | Similarity | Key Difference |
|---|---|---|
| **Paperclip.ing** (Zero-Human, `multi-agent-platform` / `autonomous-org`) | Explicit sibling/complement per Blake; similar open-source ethos and viral indie launch cadence | Paperclip is a dashboard for one person to orchestrate autonomous agents (zero-human company). Core is a multi-human team workspace where agents assist. Different axes: human-less vs. human-team. |
| **Cabinet** (Individual/Indie, `multi-agent-platform` / `orchestration-platform`) | Very similar profile: solo/indie team, open-source, "knowledge base / startup OS" positioning, viral launch, pitched as alternative to Paperclip/Notion | Cabinet is local-first markdown-on-disk for a single operator using role-based Claude Code agents. Core is cloud-hosted team SaaS. Cabinet is knowledge-base-oriented; Core is collaboration-oriented. |
| **Dify** (Team-Backed, `multi-agent-platform` / `orchestration-platform`) | Also hosted visual orchestration of AI workflows | Dify is a platform you build *on* (workflows, apps, agents). Core is a finished workspace product you *use*. |
| **Twin** (`agent-tool` / `domain-agent`) | Both target non-technical users with an AI-native experience | Twin is an individual-facing agent builder for automating workflows across 2,700 apps. Core is a team workspace. Different shape. |
| **Superagent** (by Airtable, `multi-agent-platform` / `orchestration-platform`) | Both are non-developer multi-agent business platforms launched in early 2026 | Superagent is closed-SaaS business research; Core is open-source team workspace. Opposite business models, different core use case. |

**Fills a gap:** Core is the first Apache 2.0, team-oriented, AI-native workspace in the directory. The existing Individual/Indie entries in `multi-agent-platform` (Cabinet, AgentBnB) are single-operator or infrastructure-level; Core is explicitly *multi-human*.

## Open Questions

1. **GitHub repository URL.** Blake has publicly confirmed Apache 2.0 and "open-source" multiple times, but no direct GitHub URL surfaced in homepage, About page assets, X bios, or web search. Likely under a new org (possibly `core-os-studio`, `coreosstudio`, or similar). The content agent should verify the repo URL before publishing — `github_url` and `github_stars` should be updated once confirmed. If unlocatable at publish time, `github_stars: "N/A (open-source, repo URL pending)"` is acceptable.
2. **Self-hosted feasibility.** Being open-source implies self-hosting is technically possible, but no self-hosting instructions or docker-compose surfaced in this research. Leaving the `Self-Hosted` feature tag off for now. If the repo includes a deploy path, add the tag.
3. **Team composition.** Blake's own launch tweet lists the team as "1 backend engineer (@jayssj1), 1 design engineer (@benwxng), and me" — three people. The About page's team list adds "Theodore Anderson (CTO)" and "Benjamin Chen (COO)." The truth is probably: three operational builders + two business roles (likely relatives/early partners given shared surname). The brief lists the three builders as creators, consistent with Blake's framing.
4. **LLM provider.** Undisclosed. No model tag warranted. If a model selector or model policy surfaces in the codebase, consider adding `Model-Agnostic`.
5. **Name collision.** "Core" is an extremely common name. The directory should disambiguate in the entry's description ("Core (core.so)" or "Core — AI workspace"). The domain (core.so) is distinct enough and the tagline and founder attribution clarify which Core is meant. Unrelated products that share the name include: Core Design System for Figma, CoreOS (Red Hat), Kore.ai, Mainframe Core, and the `core.so` Ruby/Python binary extension convention.
6. **Use case fit for `Ops`.** The directory's `Ops` tag currently covers autonomous-operations and DevOps-adjacent tooling more than team productivity. Core sits closer to "team productivity / general business operations" than "automate back-office pipelines." Flagging in case the content agent prefers to drop `Ops` and keep only `General-Purpose`, or to introduce a cleaner mapping.
7. **Tag field.** I used `"tag": "workspace"` to signal the workspace/productivity angle. This tag isn't formally in the metadata vocabulary but several entries (e.g., Cabinet uses `"knowledge-base"`, Littlebird uses `"memory"`, Hatch uses `"cli"`) show that `tag` is a free-form slug. Content agent may prefer `"productivity"` or `null`.
