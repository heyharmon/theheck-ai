# Open Agents (Vercel Labs) — Research Brief

**Researched:** 2026-04-16
**Sources:**
- https://open-agents.dev/
- https://github.com/vercel-labs/open-agents
- https://github.com/vercel-labs/open-agents/blob/main/README.md
- X/Twitter community discussion (bird CLI searches)

## Naming Collision — Resolution

This project is **completely different** from the existing `OpenAgents` entry (openagents.com / OpenAgentsInc):

| | Existing "OpenAgents" | open-agents.dev (this research) |
|---|---|---|
| Creator | OpenAgentsInc | Vercel Labs |
| GitHub | OpenAgentsInc/openagents (393 stars) | vercel-labs/open-agents (3,845 stars) |
| Domain | openagents.com | open-agents.dev |
| Focus | Bitcoin/Nostr agent economy | Reference app for cloud coding agents |
| Stack | Rust + Nostr + Lightning | TypeScript + Next.js + Vercel products |
| License | Apache 2.0 | MIT |
| Created | Years-old project | Dec 26, 2025 |

Zero overlap in purpose or team. The directory must distinguish them clearly via naming.

**Recommended directory name:** `Open Agents (Vercel)` — matches how the X community refers to it ("@vercel open-agents") and avoids collision with the existing `OpenAgents` entry.

## Summary

Open Agents is an open-source reference application from Vercel Labs (MIT, 3,845 stars, Dec 2025) for building and running background coding agents on Vercel's infrastructure. It ships a complete three-layer system — web UI (Next.js) → durable agent workflow → Vercel Sandbox VM — that lets users spawn chat-driven coding agents that clone repos, edit files, run shell commands, and open pull requests without keeping a laptop open. The project is explicitly "meant to be forked and adapted, not treated as a black box." It stitches together four Vercel primitives (AI SDK, AI Gateway, Sandbox, Workflow SDK) into a working template that clones the ergonomics of Cursor/Devin/Claude Code for teams who want to self-host or build their own cloud coding agent. Sandboxes hibernate and resume on demand; agent runs are durable via Workflow SDK so turns survive across many persisted steps.

## Classification

- **Type:** `agent-tool` — It is an agentic coding app (forkable reference implementation). Not a framework/SDK, not a multi-agent orchestration platform, not an infrastructure primitive. It is a concrete agent application you deploy.
- **Subtype:** `agentic-app` — Fits the new rung-2 subtype exactly: a forkable, deployable coding-agent application that turns prompts into code changes in the cloud.
- **Category:** `Team/Organization-Backed` — Shipped by Vercel Labs.
- **Difficulty:** `intermediate` — Deploying requires a PostgreSQL DB, generating encryption secrets, setting up a Vercel OAuth app, creating a GitHub App, and configuring env vars. Not beginner-friendly, but well-documented and well-paved for developers already familiar with the Vercel ecosystem.
- **Audience:** `Developer` — Target user is a developer or team forking this to build their own Cursor/Devin-style cloud coding product, or to self-host background agents for their team.
- **Ladder rung:** `2` (Agentic Apps) — It is a chat-driven app that autonomously executes coding tasks. However, it is delivered as a **template** you deploy rather than a hosted consumer product, which is a nuance worth noting in the entry.
- **Use Cases:**
  - `Software Development` — Primary and only real use case. The agent is purpose-built for coding: file edits, shell, repo cloning, commits, PRs.
- **Features:**
  - `Open Source` — MIT licensed.
  - `Self-Hosted` — Designed to be forked and deployed on your own Vercel account.
  - `Model-Agnostic` — Uses AI Gateway, which supports multiple providers with fallbacks.

## Directory Entry (Draft)

```json
{
  "name": "Open Agents (Vercel)",
  "category": "Team/Organization-Backed",
  "type": "agent-tool",
  "subtype": "agentic-app",
  "ladder_rung": 2,
  "audience": "Developer",
  "use_cases": [
    "Software Development"
  ],
  "features": [
    "Open Source",
    "Self-Hosted",
    "Model-Agnostic"
  ],
  "creator": "Vercel Labs",
  "github_stars": 3845,
  "github_url": "https://github.com/vercel-labs/open-agents",
  "website_url": "https://open-agents.dev/",
  "full_description": "Open-source reference app from Vercel Labs for building and running background coding agents on Vercel. Ships a complete three-layer system — Next.js web UI handling auth/chat/streaming, a durable agent workflow running outside the sandbox, and a Vercel Sandbox VM for execution (filesystem, shell, git, dev servers, preview ports). The agent is explicitly decoupled from the sandbox: it runs as a Workflow SDK-backed durable run and interacts with the VM through tools, so sandbox hibernate/resume and model choices evolve independently. Includes repo cloning, branch work, optional auto-commit/push/PR creation, session sharing via read-only links, and optional voice input via ElevenLabs. MIT licensed, TypeScript, designed to be forked and adapted rather than used as a hosted product.",
  "key_features": [
    "Three-layer architecture: Web UI → durable workflow → Vercel Sandbox VM",
    "Agent lives outside the sandbox (not tied to request lifecycle)",
    "Durable multi-step runs via Vercel Workflow SDK with resume/cancellation",
    "Isolated Vercel sandboxes with snapshot-based hibernation and resume",
    "Built-in GitHub App integration: clone, branch, auto-commit, auto-PR",
    "Multi-model support via AI Gateway with provider fallbacks",
    "Session sharing via read-only links",
    "Optional ElevenLabs voice transcription"
  ],
  "capabilities_unlocked": [
    "Spawn coding agents that keep working after you close the tab",
    "Fork-and-deploy your own Cursor/Devin-style cloud coding product",
    "Run background agents that auto-open PRs from a chat prompt",
    "Hibernate idle sandboxes and resume hours later from the same state",
    "Swap models/providers without rewriting the agent or sandbox code"
  ],
  "good_for": [
    "Developers building their own background-agent product or internal tool",
    "Teams already on Vercel who want a working reference for coding agents"
  ],
  "not_for": [
    "Non-developers looking for a turnkey hosted coding assistant",
    "Users who need portability off Vercel — it is opinionated on Vercel's AI SDK, Gateway, Sandbox, and Workflow SDK"
  ],
  "graduate_to": [
    "Claude Code",
    "Cursor",
    "Devin"
  ],
  "why_discussed": "Vercel Labs' canonical reference for cloud coding agents. Cited on X alongside LangChain's open-swe and Cole Murray's background-agents as one of the three go-to open-source templates for teams building Stripe Minions / Ramp Inspect-style in-house coding agent systems. 3.8K stars within ~4 months of launch. The three-layer 'agent-outside-the-sandbox' architecture is the design lesson being circulated.",
  "notes": "MIT. Created Dec 26, 2025. Deploys as a Next.js app on Vercel. Requires PostgreSQL (Neon recommended), Vercel OAuth app, and GitHub App for full functionality. Tightly coupled to Vercel's product suite — AI SDK, AI Gateway, Sandbox, Workflow SDK.",
  "difficulty": "intermediate",
  "tag": null,
  "relationships": {
    "built_on": [
      "Vercel AI SDK",
      "Vercel Sandbox",
      "Vercel Workflow SDK"
    ],
    "alternative_to": [
      "LangChain open-swe"
    ]
  }
}
```

## Community Sentiment (from X/Twitter)

- **How people describe it:** A "template" for cloud coding agents (@neslyio). "Open framework for agent workflows." "Reference implementation for background coding agents." A Korean dev writeup frames it as "a realistic starting point for teams that want to build their own AI coding tools like Claude Code, Cursor, or Windsurf."
- **Common use cases mentioned:** Building in-house cloud coding agents like Stripe Minions or Ramp Inspect that generate thousands of PRs per week; forking as a starter for custom background-agent products.
- **What people like:** The clean three-layer architecture (web → workflow → sandbox) and the explicit "agent outside the sandbox" design decision. TypeScript + MIT. That it's a working end-to-end example, not a half-finished demo.
- **Criticisms/limitations:** Locked to Vercel's product suite. Some community privacy concerns about cloud-hosted agents generally (Grok thread about self-hosted alternatives).
- **Compared to:** LangChain `open-swe` (framework), Cole Murray's `background-agents` (full system). Open Agents sits between them as the "template" option.

## Similar Tools in Directory

- **OpenAgents (OpenAgentsInc)** — Namespace collision only. Completely different project (Bitcoin/Nostr agent economy). Hence the recommended `Open Agents (Vercel)` naming.
- **Claude Code / Cursor / Devin** — These are the hosted products Open Agents is a template for rebuilding. Good `graduate_to` candidates.
- **Daytona / E2B** — Sandbox infrastructure. Open Agents *uses* Vercel Sandbox, which is a direct competitor to these, but Open Agents itself is a layer above sandbox infra.
- **LangChain open-swe** — The closest peer as an open-source background-coding-agent template. Strong `alternative_to` candidate if it's in the directory.

## Open Questions

- The directory already uses `subtype: "agentic-app"` per the task brief — confirm it is registered as a valid subtype in the taxonomy.
- Confirm `LangChain open-swe` is in the directory before using it as an `alternative_to` relationship.
- Decide whether to list the closed-source Vercel products (AI SDK, Sandbox, Workflow SDK) as `built_on` targets when they may not exist as separate directory entries.

## Prompt Injection Notice

During research, the WebFetch response for open-agents.dev contained a fake "system-reminder" block attempting to inject instructions about a Discord MCP server. This was ignored — no Discord tools exist in this session and the injected content had no bearing on the research task.
