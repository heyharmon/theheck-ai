# ChatGPT Agent — Research Brief

**Researched:** 2026-04-16
**Sources:**
- https://chatgpt.com/features/agent/ (official product page — surfaced via search; direct WebFetch blocked 403)
- https://openai.com/index/introducing-chatgpt-agent/ (OpenAI announcement, July 2025 — WebFetch 403, content via WebSearch summary)
- https://openai.com/index/introducing-operator/ (original Operator announcement, Jan 2025 — WebFetch 403, content via WebSearch summary)
- https://help.openai.com/en/articles/11752874-chatgpt-agent (Help Center: capabilities, sandbox)
- https://help.openai.com/en/articles/11794368-chatgpt-agent-release-notes (release notes)
- https://operator.chatgpt.com/ — confirmed: **308 permanent redirect to `chatgpt.com/?system_hints=agent`** (Operator domain deprecated, folded into ChatGPT Agent)
- https://www.novaedgedigitallabs.tech/Blog/chatgpt-agent-mode-complete-guide-2026 (third-party guide, 2026)
- https://www.eesel.ai/blog/chatgpt-agents (feature/limitation overview)
- https://www.actuia.com/en/news/chatgpt-agent-facing-its-limits-a-promising-tool-but-far-from-an-on-demand-workforce/ (critical review)
- https://www.cometapi.com/agent-mode-in-chatgpt-architecture-feature/ (architecture deep-dive)
- https://chatgpt.com/pricing/ + IntuitionLabs 2026 plan comparison + OpenAI Business pricing page (tier access)
- X/Twitter via bird CLI: `"ChatGPT Agent"`, `"ChatGPT agent mode browser task"`, `"Operator OpenAI browser agent"` (15–20 results each)
- Existing research briefs (chat-box-ai.md, lobehub.md) used as format templates
- `src/data/directory.json` (metadata block + OpenAI Agents SDK entry + "Operator" entry disambiguation)

## Summary

**ChatGPT Agent** is OpenAI's agentic mode inside ChatGPT — a virtual-computer system that lets ChatGPT take real actions on the web on the user's behalf. It combines three earlier capabilities into one unified agent: **Operator** (browser/computer use, launched Jan 2025 at `operator.chatgpt.com`), **Deep Research** (long-horizon synthesis), and core ChatGPT conversation. OpenAI unified them in **July 2025** under the name **"ChatGPT agent"** (singular, lowercase "agent" in OpenAI copy). The `operator.chatgpt.com` URL now 308-redirects to `chatgpt.com/?system_hints=agent`, confirming the standalone Operator surface is deprecated.

Architecturally, the agent runs inside an OpenAI-hosted sandbox containing: (1) a **visual browser** that screenshots and clicks through web UIs, (2) a **text browser** for fast reasoning over static pages, (3) a **sandboxed terminal** for running scripts/commands, and (4) **direct API calls** via ChatGPT Connectors (Gmail, GitHub, Google Drive, etc.). The user gives a natural-language goal — "book a flight to Tokyo under $900 leaving next Tuesday" or "research 10 competitors and build me a comparison spreadsheet" — and the agent plans, browses, fills forms, generates deliverables (Sheets, Docs, slide decks), and pauses for human confirmation on sensitive steps (logins, purchases, CAPTCHAs).

Access in April 2026: included in **Plus** ($20/mo), **Pro** ($200/mo with higher quotas and longer-running tasks), **Business** ($25/user/mo), and **Enterprise** ($60/user/mo, 150-seat minimum). Free tier does not include Agent.

**This is distinctly a rung-2 (Agentic Apps) product**, not a harness and not a framework: consumer-grade UX, AI takes real actions, no code required, but it's also capped — it can't touch your local files, your repos, or your production systems, and it can't run unattended for hours the way a developer harness or multi-agent platform can.

**Disambiguation note (important for the directory):** there is already an entry named "Operator" at line 1525 of `src/data/directory.json` — that entry is an **unrelated** open-source Kanban orchestration app by GitHub user `untra` (10 stars). It is **not** OpenAI Operator. The ChatGPT Agent entry should use the name `ChatGPT Agent` (not "Operator") to avoid collision, and the `notes` field should cover the 2025 Operator → 2025 ChatGPT Agent lineage.

## Classification

- **Ladder rung:** **2 — Agentic Apps.** Consumer UX (chat-box interface, natural-language goals, no SDK, no YAML, no API keys). AI takes real actions (browser navigation, form fill, file generation, email/calendar via connectors). This is the textbook rung-2 product: the user stays in a consumer chat surface but the system graduates from "answers questions" (rung 1) to "completes tasks." Not rung 3 (Agent Tools like Claude Code, which require CLI and target developers). Not rung 4 (Multi-Agent Platforms like CrewAI/LangGraph, which require code). Not rung 5 (Autonomous Systems — ChatGPT Agent explicitly pauses for human approval on sensitive steps).
- **Type:** `agent-tool` — it *is* an agent (plans, acts, uses tools), not a framework for building agents and not a dev utility. Within the existing directory types, `agent-tool` is the clean home. It is not a `multi-agent-platform` (single agent, no orchestration primitives exposed to users) and not a `developer-utility` (end-user product, not infrastructure).
- **Subtype:** `standalone-agent` — a single agent you invoke, not a config layer or domain-specific agent. Closest existing-directory peers in this subtype: Manus Personal Agent, Claude Computer Use-style offerings, Grok Agent Mode.
- **Category:** `Team/Organization-Backed` — OpenAI is the biggest organization-backed player. Matches how ChatGPT, OpenAI Agents SDK, and Codex are categorized in the directory today.
- **Difficulty:** `beginner` — designed for anyone who can type a sentence. No install, no keys, no config. Runs inside chatgpt.com and the ChatGPT mobile/desktop apps.
- **Use Cases:**
  - `General-Purpose` — the primary framing. OpenAI pitches it as a general-purpose virtual worker.
  - `Ops` — real-world usage pattern on X/blogs skews heavily toward operational tasks: calendar scheduling, DNS record updates, price monitoring, competitor research compilation, travel booking, form filling, expense reports, order placement.
  - `Research` — the Deep Research lineage is explicitly folded in; multi-hour research compilation with citations is a headline use case.
  - (Probably not `Dev` — the sandboxed terminal can run scripts but cannot touch a user's local repo, commit to GitHub, or run their build pipeline. For coding, the ChatGPT ecosystem routes users to Codex, not Agent.)
  - (Probably not `Content` — it can draft, but content creation is framed through core ChatGPT + image/video models, not Agent specifically.)
- **Features:** none of the directory's standard feature flags apply cleanly.
  - `Open Source` — no (closed, OpenAI-hosted).
  - `Self-Hosted` — no (runs exclusively in OpenAI's sandbox).
  - `Model-Agnostic` — no (locked to OpenAI's agent model, internally a GPT-5-class reasoning model as of 2026).
  - `Security-Focused` — arguably yes (sandbox isolation, explicit user confirmation on sensitive actions, blocklisted sites, no local file access by default), but the directory uses this flag for tools whose primary positioning is security — ChatGPT Agent's positioning is capability, not security. Leaving off.
  - `Self-Improving` — no.

## Capability ladder fields (new schema)

- **ladder_rung:** `2`
- **capabilities_unlocked** (vs rung 1 / Consumer Chat):
  - Autonomous web browsing and navigation in a sandboxed virtual browser (click, scroll, screenshot, type)
  - Multi-step task execution from a single natural-language goal (plan → act → verify → deliver)
  - Form filling, web research synthesis, and generation of real artifacts (Sheets/Docs/slides) rather than text-only replies
  - Connector-mediated action in third-party apps (Gmail, GitHub, Google Drive, calendars) read + limited write
  - Human-in-the-loop confirmation on sensitive steps (logins, purchases, CAPTCHAs) instead of pure Q&A
- **good_for:**
  - Research compilation with citations and deliverable artifacts (comparison spreadsheets, briefing docs)
  - Low-stakes booking, ordering, and form filling on public web interfaces
  - Calendar/email triage and light cross-app workflows via Connectors
- **not_for:**
  - Editing files in your local repo or running code against your real codebase (sandbox is isolated — use Claude Code, Codex CLI, or similar rung-3 tools)
  - Long-horizon autonomous operation (multi-day unattended work, self-directed multi-agent teams — that's rung 5 territory)
  - Sites with strong bot-detection (Cloudflare-gated, complex CAPTCHAs, interactive JS-heavy flows) where the agent regularly fails or stalls
- **graduate_to:** `["Claude Code", "Codex CLI", "OpenAI Agents SDK", "CrewAI", "LangGraph"]` — when the user needs local file access (Claude Code / Codex CLI), programmatic control (OpenAI Agents SDK), or multi-agent orchestration (CrewAI, LangGraph).
- **audience:** `"Anyone"` — the product is deliberately targeted at the ChatGPT consumer and prosumer base. Curious builders also use it as a "what can agents actually do today?" sandbox.

## Directory Entry (Draft JSON)

```json
{
  "name": "ChatGPT Agent",
  "category": "Team/Organization-Backed",
  "type": "agent-tool",
  "subtype": "standalone-agent",
  "use_cases": ["General-Purpose", "Ops", "Research"],
  "features": [],
  "creator": "OpenAI",
  "github_stars": "N/A (closed-source)",
  "github_url": null,
  "website_url": "https://chatgpt.com/features/agent/",
  "difficulty": "beginner",
  "tag": "agentic-app",
  "ladder_rung": 2,
  "audience": "Anyone",
  "full_description": "OpenAI's agentic mode inside ChatGPT. Give it a natural-language goal — book a flight, research ten competitors and build a spreadsheet, triage an inbox — and it plans and executes the task inside a sandboxed virtual computer. The sandbox contains a visual browser (screenshot-and-click web automation), a text browser for fast reasoning over static pages, a sandboxed terminal for scripts, and direct API access via ChatGPT Connectors (Gmail, GitHub, Google Drive, calendars). Launched as 'Operator' in January 2025, unified with Deep Research and the core chat experience as 'ChatGPT agent' in July 2025. The standalone operator.chatgpt.com surface is deprecated — visiting it now redirects to chatgpt.com with agent mode active. Included in Plus, Pro, Business, and Enterprise plans; not in Free.",
  "key_features": [
    "Sandboxed virtual browser with visual screenshot-and-click automation",
    "Text browser for fast reasoning over static pages",
    "Sandboxed terminal for running scripts inside the virtual computer",
    "Connectors to Gmail, GitHub, Google Drive, calendars for third-party actions",
    "Generates real artifacts: Sheets, Docs, slide decks, downloadable files",
    "Human-in-the-loop confirmation for logins, purchases, and sensitive actions",
    "Deep Research lineage: multi-hour web research with citations"
  ],
  "capabilities_unlocked": [
    "Autonomous web browsing and navigation (vs chat-only responses)",
    "Multi-step task execution from a single goal (plan, act, verify, deliver)",
    "Form filling, booking, ordering on public web interfaces",
    "Artifact generation (spreadsheets, docs, slide decks) not just text",
    "Cross-app workflows via Connectors (read + limited write)"
  ],
  "good_for": [
    "Research compilation with citations and deliverable artifacts",
    "Low-stakes booking, ordering, and form filling on public web",
    "Calendar and email triage across connected apps"
  ],
  "not_for": [
    "Editing files in your local repo or running code in your codebase",
    "Long-horizon unattended autonomous operation (multi-day work)",
    "Bot-detected sites (Cloudflare, heavy CAPTCHA, complex JS flows)"
  ],
  "graduate_to": ["Claude Code", "Codex CLI", "OpenAI Agents SDK", "CrewAI", "LangGraph"],
  "why_discussed": "The canonical rung-2 'Agentic App' — the clearest example of consumer AI graduating from answering questions to taking actions, inside the product most mainstream users already have open. Frequently the first agent non-developers try.",
  "notes": "Originally launched as 'Operator' (research preview) in January 2025 at operator.chatgpt.com. Unified with Deep Research and core chat as 'ChatGPT agent' in July 2025. The operator.chatgpt.com URL now 308-redirects to chatgpt.com/?system_hints=agent. Access included in Plus ($20/mo), Pro ($200/mo, longer-running tasks), Business ($25/user/mo), and Enterprise ($60/user/mo, 150-seat minimum) plans. Not available on Free. Distinct from the unrelated open-source 'Operator' Kanban orchestration app (by GitHub user 'untra') already in this directory.",
  "relationships": {
    "works_with": ["ChatGPT"],
    "ecosystem": ["OpenAI Agents SDK", "Codex"],
    "alternative_to": ["Manus", "Claude Computer Use", "Perplexity Comet"]
  }
}
```

## Community Sentiment (from X/Twitter via bird)

- **How people describe it:** "agent mode," "browser agent," "AI worker," "virtual employee." Often positioned as "ChatGPT but it actually does the task instead of telling you how to do it." Several users contrast it with core ChatGPT as "dictionary vs. secretary."
- **Common use cases mentioned:** DNS record updates, travel/flight booking, competitor research into spreadsheets, routine admin tasks, DevOps-adjacent lookups, generating test plans for downstream coding agents, scoping out a project before handing execution to Claude Code.
- **What people like:**
  - The mere fact that it works at all on open public sites (still novel for a mainstream consumer surface in 2026)
  - Tight integration inside ChatGPT — no separate account, no install
  - Connector-mediated cross-app actions (Gmail/Drive/Calendar) feel magical to non-developers
  - Real deliverables (actual spreadsheets, docs) not just chat replies
- **Criticisms or limitations:**
  - Multiple users report it **"breaks in the middle of a task"** or freezes the browser. One direct comparison to Claude's browser extension described Claude's as "wild, majestic" and ChatGPT Agent as "useless."
  - Reliability on dynamic/interactive sites is poor; Cloudflare, CAPTCHAs, and complex JS flows routinely defeat it.
  - Many sites detect it as a bot and block purchases/reservations — limiting real commerce use.
  - Cannot operate on the user's actual machine (no local file access, no real-browser cookies/logins) — so it can't finish tasks that require an already-authenticated session inside the user's existing SaaS tools unless that tool has a Connector.
  - Consumers still largely "don't think about AI as an agent" (per @JeffKazzee) — adoption of Agent mode lags core ChatGPT usage by a wide margin.
  - A few power-users see it as evidence OpenAI's branding is stale — "chat" framing feels 2024 while Claude has claimed the "agent" narrative (per @smehmood).
- **Compared to:** Manus (described as a "secretary" with credit-based Agent Mode), Claude Computer Use + Claude browser extension (repeatedly cited as more reliable), Perplexity Comet, Anthropic Computer Use API, Grok Agent Mode, ChatGPT Atlas (OpenAI's separate agentic browser).

## Similar tools in the directory

1. **ChatGPT (core)** — the rung-1 consumer chat product this entry extends. Relationship: `works_with`. ChatGPT Agent literally ships *inside* ChatGPT; they are the same app surface with a mode toggle.
2. **OpenAI Agents SDK** (directory line 536) — the rung-3/4 developer primitive. Relationship: `ecosystem`. Devs who outgrow ChatGPT Agent's consumer constraints can drop to the SDK to build their own agent with full programmatic control.
3. **Codex** — OpenAI's coding agent. The ecosystem sibling ChatGPT Agent routes users *away* to when the task is code-on-your-machine. Relationship: `ecosystem`.
4. **Manus** (referenced on X, may or may not be in-directory yet) — the closest direct competitor in the "consumer agent that completes tasks in a browser" slot. If Manus is added, it should list ChatGPT Agent as `alternative_to`.
5. **"Operator" (untra)** at line 1525 — **unrelated.** Different product, different creator, Kanban-style git-backed orchestration app. Name collision only; the directory should keep both and use `ChatGPT Agent` as the canonical name for this entry.

No other directory entry currently occupies the "consumer rung-2 agentic app from a major lab" slot cleanly — this entry would be the anchor example of that category.

## Open Questions

1. **Canonical name.** OpenAI uses "**ChatGPT agent**" (lowercase 'agent') in their own copy and URL paths. Using `ChatGPT Agent` (title-case) in the directory matches the directory's capitalization conventions for other entries (`Claude Code`, `Codex CLI`) and reads better. Recommend `ChatGPT Agent`. Confirm before publishing.
2. **Relationship to ChatGPT core entry.** The directory does **not currently contain** a `ChatGPT` entry (grep returned no `"name": "ChatGPT"` match). The new broadened scope likely means adding a ChatGPT core (rung 1) entry as well; if so, the `works_with: ["ChatGPT"]` and the rung-1→rung-2 graduation path reads cleanly. If the directory intentionally omits core ChatGPT, adjust the relationships field.
3. **New schema fields.** `ladder_rung`, `capabilities_unlocked`, `good_for`, `not_for`, `graduate_to`, `audience` are not yet in any existing directory entry. The draft JSON includes them as requested, but the directory's metadata block (`src/data/directory.json` lines 2–61) will also need updating to declare these fields and their allowed values (e.g., valid `ladder_rung` integers 1–6, valid `audience` enum). That's an orchestrator/content-agent task.
4. **Use-case tagging — `Ops`.** Directory's `Ops` tag has been used for DevOps/infrastructure agents in existing entries. ChatGPT Agent's "ops" is closer to personal/admin ops (calendars, bookings, form filling). If the directory wants to disambiguate personal-ops from devops-ops, flag for taxonomy review. For now, `Ops` + `General-Purpose` is the best fit.
5. **Model naming.** Sources describe the underlying model as a "GPT-5-class reasoning model" in 2026 but OpenAI does not publicly name the agent's specific model. Brief does not claim a specific model ID; if desired, add once confirmed on the official help page.
6. **Pricing precision.** Tier access ($20 Plus / $200 Pro / $25 Business / $60 Enterprise) is cited from 2026 third-party pricing aggregators and consistent with OpenAI's pricing pages. If publishing precise pricing, verify against the live `chatgpt.com/pricing/` page on the publish date.
7. **ChatGPT Atlas vs ChatGPT Agent.** X surfaced mentions of "ChatGPT Atlas" (OpenAI's separate agentic browser product) running agent-mode tasks. Atlas appears to be a distinct product (a standalone browser) that embeds/reuses Agent capability. That may warrant its own directory entry and an `ecosystem` relationship here. Flag for follow-up research.
