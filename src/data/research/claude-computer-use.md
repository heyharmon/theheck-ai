# Claude Computer Use — Research Brief

**Researched:** 2026-04-16
**Sources:**
- https://www.anthropic.com/news/developing-computer-use (original Oct 22, 2024 launch announcement)
- https://claude.com/blog/dispatch-and-computer-use (March 23, 2026 consumer rollout — "Put Claude to work on your computer")
- https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool (API reference, computer-use-2025-11-24 beta header, Opus 4.7 support, zoom action)
- https://platform.claude.com/docs/en/about-claude/models/whats-new-claude-4-6 (Sonnet 4.6 computer-use improvements)
- https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo (Docker reference implementation)
- https://www.cnbc.com/2026/03/24/anthropic-claude-ai-agent-use-computer-finish-tasks.html (CNBC coverage of March 2026 consumer rollout)
- https://siliconangle.com/2026/03/23/anthropics-claude-gets-computer-use-capabilities-preview/ (SiliconAngle)
- https://tech-insider.org/anthropic-claude-computer-use-agent-2026/ ("What $20/Mo Actually Gets You")
- https://x.com/claudeai/status/2036195789601374705 (March 23 official announcement tweet)
- https://x.com/claudeai/status/2038663014098899416 (March 30 — Computer Use in Claude Code CLI)
- https://x.com/claudeai/status/2039836891508261106 (April 2 — Windows support)
- https://x.com/downingARK/status/2036242486297825407 ("less than a year and a half later, it actually works… shipping in a polished product you can start using for \$20")
- https://x.com/alishananda08/status/2044770403638563218 (consumer feature summary)
- https://x.com/warrioraashuu/status/2044773919497027682 ("what's new" roundup — Memory, Cowork, Computer Use, Claude for Excel, Dispatch)
- https://x.com/aiagent_builder/status/2044877079247000009 (Dispatch + Computer Use VM workflow discussion, JP)
- X searches via bird CLI: `Claude Computer Use`, `Claude Cowork computer use`, `computer use anthropic limitations slow`, `computer use vs OpenAI Operator`, `from:claudeai computer use`

## Summary

Claude Computer Use is Anthropic's capability that lets Claude see a screen (via screenshots), move the mouse, click, type, and use keyboard shortcuts to operate applications on behalf of the user. First released as a developer API beta on October 22, 2024 (Claude 3.5 Sonnet, 14.9% on OSWorld vs. 7.7% for the next-best model), it was substantially upgraded across 2025–2026 and — critically for this directory — graduated to a **consumer-facing research preview on March 23, 2026** as part of **Claude Cowork** (the Claude desktop app) and **Claude Code Desktop**, available to Pro (\$20/mo) and Max (\$100–\$200/mo) subscribers on macOS (March 23) and Windows (April 2, 2026). The consumer version drives the user's actual local machine: it opens apps, navigates the browser, fills spreadsheets, and chains tasks with **Dispatch**, which lets the user send instructions from their phone and come back to completed work on their desktop. The API surface is still available (beta header `computer-use-2025-11-24`, supported on Opus 4.7/4.6/4.5 and Sonnet 4.6) with new `zoom` and enhanced mouse-control actions, and continues to be the primitive underneath the consumer feature. The tool remains in "research preview" with explicit guidance to avoid sensitive data on your local machine until maturity improves.

## Classification

- **Type:** `agent-tool` — Claude Computer Use, in the consumer Cowork/Code form this entry covers, is a single agent (Claude) taking actions on a user's computer on their behalf. It is not a platform that coordinates multiple agents (that would be `multi-agent-platform`), not a developer utility, and not an autonomous org. It's Claude acting as an agent via a new surface (the screen). The closest directory analogue is Claude Code — a single Claude-powered agent attached to a specific runtime surface (the filesystem/terminal for Code, the screen for Computer Use).

- **Subtype:** `built-in-feature` — Computer Use is not a standalone product; it's a capability *inside* Claude.ai / Claude Cowork / Claude Code Desktop. The directory's `built-in-feature` subtype was designed exactly for this pattern (Claude Code Agent Teams sits in it). It's not `standalone-agent` (Computer Use doesn't exist without Claude Cowork/Code hosting it), not `config-layer` (it doesn't configure other agents), not `domain-agent` (it's horizontal, not vertical).

- **Category:** `Team/Organization-Backed` — Shipped by Anthropic, one of the two frontier labs. Clearly matches the category's definition.

- **Difficulty:** `beginner` — The consumer version (Cowork/Code Desktop) is the entry point this brief covers. A user installs Claude Desktop, upgrades to Pro or Max, toggles Computer Use on in settings, and asks Claude to do something. No code, no VM, no Docker. Onboarding is comparable to enabling ChatGPT Operator. The API/Docker path is `advanced`, but that is a separate audience and — per the prompt — sits in a different rung.

- **Ladder Rung:** **2 — Agentic Apps.** The consumer rollout (March 23, 2026) unambiguously places this at rung 2. It is a consumer UX, accessed through the Claude Desktop app, where the AI takes action on the user's computer. The product is not the API; the product is "turn on Computer Use in Cowork and ask Claude to do things." The API (and Docker reference implementation) remains at rung 3 (Agent Tools) / rung 6 (Developer Utilities) for builders, but the entry itself is the consumer capability.

- **Use Cases:**
  - `General-Purpose` — Primary. The pitch is deliberately horizontal: "anything you'd do sitting at your desk." Early users cite data entry, form-filling, email triage, scheduling, cross-app workflows, research assembly. Anthropic deliberately avoided pinning it to a vertical.
  - `Ops` — Secondary. The most-mentioned real workflows in community discussion are business-ops tasks: spreadsheets (Claude for Excel integration), calendar/email, admin work, SNS reply pipelines. These are the Cowork sweet spot.
  - `Dev` — Secondary. The Claude Code integration (March 30, 2026) explicitly positions Computer Use as a tool for *coding* agents — "Claude can open your apps, click through your UI, and test what it built, right from the CLI." Useful for browser-based end-to-end testing from Claude Code.
  - Not `Content` — Not a content-creation tool per se; content tasks are incidental.
  - Not `Research` — Research is supported (navigating papers, collating results) but isn't the marketed positioning.

- **Features:**
  - No `Open Source` — The consumer Cowork/Code integration is closed. (The Docker reference implementation on GitHub is MIT-licensed code *scaffolding*, not the capability itself. Do not tag.)
  - No `Self-Hosted` — The consumer feature runs on your local machine but depends on Anthropic's hosted Claude API; not self-hostable in the directory's sense.
  - No `Model-Agnostic` — Claude-only by definition. This is a first-party capability of Anthropic's models.
  - No `Security-Focused` — Anthropic explicitly acknowledges security is an active risk area ("avoid sensitive data," prompt-injection classifiers, ask-for-confirmation safeguards). It's *security-aware*, not security-focused as a selling point.
  - No `Self-Improving` — No claimed self-learning loop.

## Directory Entry (Draft)

```json
{
  "name": "Claude Computer Use",
  "category": "Team/Organization-Backed",
  "type": "agent-tool",
  "subtype": "built-in-feature",
  "difficulty": "beginner",
  "ladder_rung": 2,
  "audience": "Curious builder",
  "use_cases": [
    "General-Purpose",
    "Ops",
    "Dev"
  ],
  "features": [],
  "creator": "Anthropic",
  "github_stars": "N/A (closed-source feature; reference Docker implementation at github.com/anthropics/anthropic-quickstarts is separate)",
  "github_url": "https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo",
  "website_url": "https://claude.com/blog/dispatch-and-computer-use",
  "full_description": "Claude Computer Use is Anthropic's capability that lets Claude see your screen and operate your computer directly — moving the mouse, clicking, typing, using keyboard shortcuts, and reading windows via screenshots — to complete tasks end to end. First released as a developer API beta in October 2024 with Claude 3.5 Sonnet, it graduated to a consumer research preview inside Claude Cowork (the Claude desktop app) and Claude Code Desktop on March 23, 2026 for Pro (\$20/mo) and Max (\$100–\$200/mo) subscribers on macOS, with Windows support following April 2, 2026. The consumer version drives the user's actual local machine: Claude can open apps, navigate browsers, fill spreadsheets, manage email, and handle multi-step workflows. It pairs with Dispatch, which lets users assign tasks from their phone and come back to completed work on their desktop. Claude prioritizes direct integrations (Gmail, Google Calendar, Slack) when available, and falls back to point-and-click control when they aren't. The underlying API (beta header `computer-use-2025-11-24`) is also available on Opus 4.7, Opus 4.6, Sonnet 4.6, and Opus 4.5 for developers building custom computer-using agents, with screenshot, click, drag, scroll, keyboard, modifier-key, and zoom-to-region actions.",
  "key_features": [
    "Consumer research preview in Claude Cowork and Claude Code Desktop for Pro/Max subscribers (macOS + Windows, March–April 2026)",
    "Operates the user's actual local machine — opens apps, clicks, types, navigates browsers, fills spreadsheets, manages email",
    "Pairs with Dispatch: assign tasks from your phone, return to completed work on your desktop",
    "Prefers direct integrations (Gmail, Calendar, Slack) and falls back to screen control when no integration exists",
    "Permission-gated with prompt-injection classifiers and stop-anytime safeguards",
    "Developer API (beta) with zoom, fine-grained mouse control, modifier keys, and scroll direction",
    "Dockerized reference implementation on GitHub for sandboxed builders",
    "Supports Opus 4.7, Opus 4.6, Sonnet 4.6, Opus 4.5 via the `computer-use-2025-11-24` beta header",
    "ZDR (Zero Data Retention) eligible — screenshots aren't stored by Anthropic after the response"
  ],
  "capabilities_unlocked": [
    "Drive apps that don't have APIs by clicking and typing like a human",
    "Delegate multi-step desktop workflows from your phone via Dispatch",
    "Let Claude Code test what it built by actually clicking through the UI",
    "Fill spreadsheets, process forms, and chain cross-app tasks without tab-switching",
    "Hand off repetitive desk work (email triage, scheduling, data entry) to an agent that can literally see the screen"
  ],
  "good_for": [
    "Pro/Max Claude subscribers who want Claude to operate apps the way they would",
    "Knowledge workers with repeatable cross-app workflows (email → spreadsheet → calendar → doc)",
    "Builders who want to prototype agentic app experiences before investing in full API integration"
  ],
  "not_for": [
    "Tasks that touch sensitive credentials or financial data — Anthropic explicitly warns against this while in research preview",
    "Latency-sensitive or high-precision workflows — the agent is slower than a human and still error-prone on niche UIs",
    "Headless automation at scale — the consumer feature runs on your local machine, so it competes with your own keyboard and mouse"
  ],
  "graduate_to": [
    "Claude Code (rung 3) — for developers who want a terminal-native agent with Computer Use as one of several tools",
    "Anthropic's Computer Use API + Docker reference (rung 6) — for builders who need headless, sandboxed, VM-based computer control",
    "Multi-agent orchestrators like Claude Flow or Paperclip (rungs 4–5) — when one agent on one screen isn't enough"
  ],
  "why_discussed": "Claude Computer Use is the clearest example of 'AI takes action on your machine' graduating from a research demo to a shipping consumer product. Between the October 2024 API preview and the March 2026 Cowork rollout, Anthropic went from 14.9% on OSWorld to reports of 'human-level capability on complex spreadsheets and multi-step web forms' (Sonnet 4.6). Community reaction centered on the jump in polish: 'less than a year and a half later, it actually works, and is shipping in a polished product you can start using for \$20' (Frank Downing). Also a signal datum for the directory's new capability-ladder taxonomy: this is the canonical rung-2 (Agentic App) from a frontier lab.",
  "notes": "Originally launched as an API beta Oct 22, 2024. Consumer research preview inside Claude Cowork and Claude Code Desktop launched Mar 23, 2026 (macOS) and Apr 2, 2026 (Windows), available on Pro and Max plans. The capability is a built-in feature of Claude Cowork/Claude Code — it is not a standalone product. Keep this entry distinct from Claude Code and Claude.ai (chat) entries: those are the hosts, this is the capability. The Docker reference implementation at anthropics/anthropic-quickstarts is scaffolding for developers, not the feature itself. Pricing: included with Claude Pro (\$20/mo) and Max (\$100–\$200/mo); API users pay standard tool-use token rates plus screenshot vision tokens. Security posture: prompt-injection classifiers, stop-anytime UI, explicit guidance to avoid sensitive data while in preview. Windows and macOS only on the consumer side; Linux is supported via the Docker reference for API builders.",
  "relationships": {
    "works_with": [
      "Claude Code",
      "Claude Cowork"
    ],
    "ecosystem": [
      "Claude.ai"
    ],
    "alternative_to": [
      "OpenAI Operator",
      "Gemini 2.5 Computer Use"
    ]
  },
  "tag": "computer-use"
}
```

## Community Sentiment (from X/Twitter)

**How people describe it:**
- "Claude can point, click, navigate — like a human" (@alishananda08, consumer feature summary)
- "Shipping in a polished product you can start using for \$20" — signaling the jump from 2024 demo to 2026 product (@downingARK)
- Japanese community: "指示して、PCが勝手に動く" ("Give the instruction, the PC runs on its own") — framing it as a "work handoff" experience rather than automation
- Most common shorthand: "computer use in Cowork" or "computer use in Claude Code"

**Common use cases mentioned:**
- Data entry and spreadsheets (Claude for Excel/PowerPoint work closely paired with Computer Use)
- Email and calendar triage (replace Gmail + Google Calendar tabs with Claude doing it)
- Browser-based end-to-end testing from inside Claude Code
- SNS reply pipelines with human-in-the-loop checkpoints
- Handling admin work from a phone via Dispatch while the laptop is closed

**What people like:**
- The leap in reliability between the 2024 demo and the 2026 consumer release. Almost every positive tweet frames it as "this actually works now."
- The Dispatch pairing — turning "sitting at my desk doing admin" into "send an instruction, come back to finished work."
- Being bundled into Pro (\$20) rather than being a premium add-on.
- Windows support came fast (only 10 days behind macOS) — unusual for Anthropic.

**Criticisms or limitations:**
- **Runs on your actual local machine**, not a VM — early users warn against using it with sensitive credentials. This is also Anthropic's own warning.
- Still latency-prone for short interactive tasks; best for background/async work.
- Competition is real and catching up: Gemini 2.5 Computer Use (69% on web benchmarks vs. OpenAI's 61.3%), BardeenAgent (2× recall, 4–6× speed on scraping), Agent S2 (SOTA on OSWorld), Perplexity Personal Computer (security-first positioning).
- Apps with login walls and multi-factor auth remain friction points.
- UK/EU regional availability has been a rolling concern (Claude Computer Use available in UK, but OpenAI's equivalent often isn't — cited as a selling point).

**Compared to:**
- **OpenAI Operator / ChatGPT Computer Use** — primary competitor. Multiple tweets frame them as direct head-to-heads.
- **Gemini 2.5 Computer Use** — Google's web-agent release scoring higher on WebArena-class benchmarks.
- **Perplexity Personal Computer** — launched the same April 2026 week, positioned on security-first / audit-log differentiators.
- **BardeenAgent** — extraction-specialized agent, claims 2–6× improvements over both Operator and Computer Use for structured web data.
- **Browser Use**, **Agent S2** — open-source/academic alternatives operating in the same space.

## Similar Tools in Directory

| Tool | Similarity | Key Difference |
|---|---|---|
| **Claude Code** (Team-Backed, `agent-tool` / `standalone-agent`) | Same creator, same model family, shipped as a Claude-first capability for Pro/Max subscribers. Computer Use is now accessible *from* Claude Code. | Claude Code is a terminal-native coding agent attached to the filesystem. Computer Use is attached to the screen. Different runtime surface, complementary. |
| **Claude Code Agent Teams** (Team-Backed, `multi-agent-platform` / `built-in-feature`) | Same `built-in-feature` subtype pattern — a capability *inside* a shipping Anthropic product rather than a standalone tool. | Agent Teams is multi-agent orchestration inside Claude Code. Computer Use is single-agent screen control inside Cowork/Code. |
| **Operator (OpenAI)** — *not in directory* | Direct competitor, nearly identical product shape at rung 2 (Agentic App). | If/when Operator is added, these two are natural alternatives. |
| **Twin** (`agent-tool` / `domain-agent`) | Consumer-facing agent that takes action on user behalf across many apps. Targets beginner/curious-builder audience. | Twin uses pre-built integrations across 2,700 apps. Computer Use falls back to raw screen control when no integration exists. Twin is the integration-first approach; Computer Use is the vision-first fallback. |

**Fills a gap:** This is the first rung-2 (Agentic App) entry in the directory from a frontier lab with native desktop screen-control. It also serves as the canonical "consumer face of an API primitive" case study for the new ladder taxonomy — the API Computer Use capability has existed since 2024, but it only reached rung 2 when wrapped in Cowork for Pro/Max subscribers in March 2026.

## Open Questions

1. **Ladder rung — is it really rung 2 today?** Yes. Per the March 23, 2026 announcement and subsequent Cowork/Code rollout, Computer Use is a consumer-facing product: Pro subscribers toggle it on in the Claude Desktop app settings and ask Claude to do things. No code required. The API is still rung 3/6, but the *entry* should reflect the consumer surface. Recommendation: **ladder_rung: 2, audience: "Curious builder."** The beginner/intermediate Pro subscriber who has already paid \$20/month for Claude and wants to try the new computer-use toggle is exactly the "curious builder" persona.

2. **Name in directory.** Should this be "Claude Computer Use" (descriptive), "Computer Use in Cowork" (product-specific), or folded into a future "Claude Cowork" entry? Recommendation: **"Claude Computer Use"** — it's the capability name Anthropic uses in its own marketing ("Put Claude to work on your computer") and it's how the community refers to it on X. If/when Cowork gets its own entry, link via `relationships.works_with`.

3. **Is there a separate "Claude Cowork" or "Claude.ai" entry coming?** Currently the directory only has "Claude Code" from Anthropic; no Claude.ai/Cowork entry was found. The `relationships.ecosystem` → "Claude.ai" and `works_with` → "Claude Cowork" will be dangling references until those entries exist. Flag for the content agent: either (a) add a stub Claude.ai/Cowork entry when ingesting this, or (b) accept the dangling refs and let them resolve when Cowork is added.

4. **`ladder_rung` and `audience` are new schema fields.** Existing entries do not have these. Content agent should confirm the schema has been extended before adding, or include these as optional top-level keys and update the metadata section of directory.json accordingly.

5. **Tag field.** Proposed `"tag": "computer-use"`. Not a formally defined tag vocabulary, but prior entries use free-form slugs (Cabinet uses `knowledge-base`, Littlebird uses `memory`). If the content agent prefers a different tag or `null`, that's fine.

6. **Alternative-to list.** "OpenAI Operator" and "Gemini 2.5 Computer Use" are both referenced heavily in community discussion but are not yet in the directory. Listing them as `alternative_to` will produce dangling references. Recommendation: keep them in the draft so the relationship is encoded, and let the content agent prune to only in-directory names if that's the policy.

7. **Feature tag for "ZDR eligible" / privacy.** Not in the current feature vocabulary. Not adding. If the directory ever introduces a privacy-focused tag, this would qualify.
