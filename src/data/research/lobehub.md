# LobeHub — Research Brief

**Researched:** 2026-04-11
**Sources:**
- https://github.com/lobehub/lobehub (gh CLI metadata)
- https://lobehub.com (blocked by WebFetch 403 — retrieved via GitHub README mirror and X/Twitter feed)
- X/Twitter via bird CLI: `@lobehub` account, search "lobehub", "lobe chat", "lobehub agent team"
- Community mentions (Charlie0 tracker, OpenAlternative, Agent Tresor, multiple Japanese/Chinese dev accounts)

## Summary

LobeHub (formerly "LobeChat") is an open-source, self-hostable agent workspace that has recently rebranded and repositioned itself from "personal ChatGPT UI" to a full **multi-agent collaboration platform**. The product's current tagline — taken verbatim from its GitHub description — is "the ultimate space for work and life — to find, build, and collaborate with agent teammates that grow with you. We are taking agent harness to the next level — enabling multi-agent collaboration, effortless agent team design, and introducing agents as the unit of work interaction." It ships as a Next.js/TypeScript monorepo, Apache-licensed (repo license: Other / Apache-flavored), with 75,179 GitHub stars and active daily development. The creator is the **LobeHub** organization/team (core maintainer Arvin Xu, @arvin17x on X). The product runs as a managed cloud service (lobehub.com) with paid subscriptions for premium models (Seedance 2.0, etc.) and a self-hostable open-source edition.

## Classification

- **Type:** `multi-agent-platform` — The product explicitly positions itself as a multi-agent collaboration environment with Agent Groups, per-page agents, and an agent marketplace. It is not a single-agent coding harness.
- **Subtype:** `orchestration-platform` — LobeHub orchestrates many heterogeneous agents (chat personas, page agents, tool-using agents, image/video generators) within a shared workspace, routing user intent to the right agent via CMDK/Tab selection and Agent Groups. It's closer to a *platform* than an SDK/framework — users don't write code to use it.
- **Category:** `Team/Organization-Backed` — Backed by the LobeHub organization with a commercial cloud offering, dedicated team, and consistent release cadence.
- **Difficulty:** `beginner` — The cloud product is point-and-click; self-hosting is a one-command Docker/Vercel deploy. Non-developers can install marketplace agents and assemble Agent Groups without writing code.
- **Use Cases:** `General-Purpose`, `Content`, `Ops`
  - *General-Purpose*: explicit positioning as "ultimate space for work and life"; 10,000+ marketplace agents span every domain.
  - *Content*: first-class image/video/TTS generation (Seedance 2.0, text-to-image, artifacts for SVG/HTML/docs), "upload a video, get the Seedance prompt" agents.
  - *Ops*: Agent Groups, Pages, Schedules, Projects, Workspaces are pitched for team/workflow automation; the LobeHub Page feature puts a different agent on each page for operational workflows.
- **Features:** `Open Source`, `Self-Hosted`, `Model-Agnostic`
  - Open Source: Apache-licensed public repo, 75K stars, TypeScript.
  - Self-Hosted: Docker, Vercel, and local deploy paths documented.
  - Model-Agnostic: "Claude (and 100+ other models)" per their own OpenClaw-migration post; supports local LLMs, multiple providers.
  - *Not* Security-Focused (CVE-2026-39411 auth-bypass was recently disclosed) and not Self-Improving in the Hermes/GEPA sense.

## Directory Entry (Draft JSON)

```json
{
  "name": "LobeHub",
  "category": "Team/Organization-Backed",
  "type": "multi-agent-platform",
  "use_cases": ["General-Purpose", "Content", "Ops"],
  "features": ["Open Source", "Self-Hosted", "Model-Agnostic"],
  "creator": "LobeHub (Arvin Xu et al.)",
  "github_stars": 75179,
  "github_url": "https://github.com/lobehub/lobehub",
  "full_description": "Open-source multi-agent workspace that treats agents as the unit of work. Assemble teams of specialized agent teammates with Agent Groups, a 10,000+ agent marketplace, per-page agents via LobeHub Pages, multi-model routing (Claude, GPT, local LLMs, 100+ providers), MCP plugins, personal memory, and artifacts. Ships as self-hostable Next.js monorepo (Docker/Vercel) plus a managed cloud with premium media models like Seedance 2.0.",
  "key_features": [
    "Agent Groups — compose multi-agent teams that collaborate on tasks",
    "Agent marketplace with 10,000+ community agents and MCP plugins",
    "LobeHub Pages — a different agent for each page, live-editor style",
    "Model-agnostic: Claude, GPT, Gemini, local LLMs, 100+ providers",
    "Personal Memory (white-box, editable) and Chain-of-Thought visualization",
    "Artifacts, TTS/STT, vision, text-to-image, and video generation",
    "CMDK + Tab agent switcher keeps you on the keyboard",
    "Self-hosted via Docker/Vercel or managed cloud"
  ],
  "why_discussed": "Positioned itself as the landing pad for OpenClaw refugees after Anthropic's third-party cutoff, and is actively marketing 'agents as the unit of work' — the most explicit embrace of the agent-as-teammate thesis in the directory.",
  "notes": "Recent CVE-2026-39411 (auth bypass via forged X-lobe-chat-auth header, fixed in 2.1.48). Rebranded from LobeChat to LobeHub. Apache-licensed.",
  "website_url": "https://lobehub.com",
  "difficulty": "beginner",
  "tag": "marketplace",
  "subtype": "orchestration-platform",
  "relationships": {
    "alternative_to": ["Dify", "OpenClaw"],
    "works_with": ["Claude Code"]
  }
}
```

## The "Agent as Unit of Work" Angle (First-Class Theme)

LobeHub is the **single most explicit embodiment of the "agent-as-teammate" thesis** in the current directory research pool. This is not inference — it's their literal marketing copy.

**Direct evidence from their own GitHub description (verbatim):**
> "find, build, and collaborate with **agent teammates** that grow with you… introducing **agents as the unit of work interaction**."

**Supporting signals from the @lobehub X feed (April 2026):**
- *"One AI doing everything is a bottleneck. LobeHub Page: a live editor with a different agent for each page."* — Explicit rejection of monolithic assistants; agents are **specialized workers**, not personas.
- *"type your message in CMDK / press Tab / pick an agent / hit Enter"* — Agents are first-class addressable entities in the UI, selected like teammates in a Slack DM.
- *"Your agents. Your choice of model. No harness lock-in."* (OpenClaw migration post) — Agents are portable assets owned by the user, decoupled from the underlying model.
- A Japanese developer account summarized it as "マルチエージェント協調の新時代… AI同士が協力する時代へ完全シフト" ("new era of multi-agent cooperation… complete shift to an era where AIs cooperate with each other").

**How it operationalizes the thesis:**
1. **Agents are discrete, named workers** — each has its own memory, model assignment, tools, and role. Not just system-prompt personas.
2. **Agent Groups** — users literally assemble teams of agents that collaborate on tasks, mirroring how a human team would split work.
3. **Marketplace of 10,000+ agents** — agents are shareable, installable units, like npm packages or Slack apps. Community contributions are discoverable and reusable.
4. **Per-page agents (LobeHub Page)** — the workspace itself is structured around agents; each unit of work (a page, project, schedule) has its own dedicated agent.
5. **Workspaces + multi-user management** — team-level sharing of agents, making them organizational assets rather than personal chatbots.
6. **Portable across models** — an agent's identity is separate from the model running it, so the "teammate" persists even when you swap Claude for GLM.

**Differentiation from other directory entries:**
- **vs. Claude Code:** Claude Code is a solo coding agent. LobeHub is a multi-agent *workspace* — the agent isn't the product, the *team of agents* is.
- **vs. Dify:** Dify is a developer-facing LLM-app builder; LobeHub is an end-user-facing agent workspace with a consumer-grade marketplace and UI. Dify's audience is app builders; LobeHub's is workers who want teammates.
- **vs. Cabinet / AgentBnB:** Those platforms treat agents as rentable/hostable infrastructure. LobeHub treats them as *collaborators in a shared space* — closer to Notion-for-agents than to Heroku-for-agents.
- **vs. Hermes / OpenClaw:** Those are messaging-channel runtimes focused on one persistent agent with deep skills. LobeHub is horizontal — many agents, each narrower, orchestrated by a human (or each other) through a GUI.

LobeHub is arguably the **clearest consumer-grade articulation of "agents are teammates"** — where other platforms gesture at the idea via SDK primitives, LobeHub has shipped the UX.

## Community Sentiment (from X/Twitter)

- **How people describe it:** "Personal AI assistant for enhanced productivity" (OpenAlternative). "Multi-model interface" listed alongside Dify, Flowise, Langflow in open-source-alternative roundups. Chinese devs simply call it "真货" (the real deal). A tracker noted it "turns agent workflows into directly-reusable open-source components."
- **Common use cases mentioned:** Personal ChatGPT replacement, multi-model routing, video generation (Seedance 2.0), MCP tool hosting, replacement home for OpenClaw users who lost Claude subscription access.
- **What people like:**
  - Model-agnostic — "Claude (and 100+ other models)… save up to 90%+"
  - Fast keyboard UX (CMDK + Tab agent switcher)
  - Inline completion in the input field
  - Message queue (can send while agent is still thinking)
  - Active shipping cadence
  - Clean self-host story
- **Criticisms / limitations:**
  - **Security:** CVE-2026-39411 — auth bypass via forged `X-lobe-chat-auth` header prior to v2.1.48. Publicly flagged on VulmonFeeds.
  - **Skill vetting concern:** A user asked Nous Research whether Hermes skills installed via LobeHub are vetted, implying the marketplace has no formal review process.
  - Premium media models (Seedance 2.0) are paywalled to subscribers — not everything is free.
- **Compared to:** Dify, Flowise, Langflow (as the free alternative to paid AI-app builders). Positioned as the migration target from OpenClaw after Anthropic's API cutoff.
- **Who's talking about it:** Chinese, Japanese, and English developer Twitter; OpenAlternative-style OSS aggregators; agent-infra trackers (Agent Tresor called it part of the rotation "into agent infra, not agent memes"); MCP registry watchers.

## Similar Tools in the Directory

1. **Dify** — Closest positional peer. Both are open-source, self-hostable, multi-model AI platforms. Dify skews developer/LLM-app-builder; LobeHub skews end-user/agent-workspace.
2. **Claude Code** — Contrasting model. Claude Code = one expert coding agent. LobeHub = a roster of agents for non-coding work. LobeHub explicitly courts Claude Code's spillover audience (OpenClaw migration messaging).
3. **Cabinet** / **AgentBnB Hub** — Adjacent "agent hosting" plays. LobeHub differs by being a workspace-first UX, not an infra-first hosting plane.
4. **OpenClaw / Hermes Agent** — Messaging-runtime single-agent harnesses. LobeHub is the multi-agent GUI counterpart and is actively marketing itself as the migration target.

## Open Questions

1. **Exact license string:** gh reports `licenseInfo.key = "other"` — the README states Apache 2.0 but the actual LICENSE file should be verified to confirm whether it's pure Apache 2.0 or Apache + Commons Clause / custom attribution.
2. **Agent Groups maturity:** Confirmed via LobeHub's own copy, but I could not retrieve the live /chat or /agents page (lobehub.com returns 403 to WebFetch). The editor may want to spot-check whether Agent Groups are GA or still beta.
3. **Creator attribution:** Arvin Xu (@arvin17x) appears to be the public face and core maintainer, but the repo is owned by the `lobehub` org. Using "LobeHub (Arvin Xu et al.)" as a reasonable middle ground — editor may prefer just "LobeHub".
4. **Subtype alternative:** Could also be argued as `gui-shell` under developer-utility (since it's fundamentally a chat GUI over many models). Choosing `orchestration-platform` because Agent Groups + per-page agents + marketplace push it beyond a pure shell — but this is a judgment call.
5. **CVE handling:** The recent auth-bypass CVE is worth noting in the entry but shouldn't block inclusion — it's been patched in 2.1.48. Decide whether to surface this in `notes`.
6. **Stars freshness:** 75,179 as of 2026-04-14 via gh CLI. Round to 75000 if the directory convention prefers round numbers (several other entries use exact figures, so the exact number is used in the draft).