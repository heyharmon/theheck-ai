# PostHog CLI — Research Brief

**Date:** 2026-04-09
**Proposed type:** Developer Utility
**Proposed tag:** cli
**Status:** Research complete — ready for Content Agent entry

---

## Overview

PostHog offers two distinct CLI tools relevant to AI agent workflows:

1. **PostHog Wizard** (`@posthog/wizard`) — an AI-powered agentic CLI that automatically installs and configures the full PostHog analytics stack in a project. This is the primary tool of interest for the directory.
2. **PostHog CLI** (`@posthog/cli`) — a lower-level CLI for sourcemap uploads, event querying, feature flag management, and dSYM uploads. Currently at v0.7.5. Lives inside the main PostHog monorepo at `posthog/cli/`.

Additionally, PostHog ships an **MCP server** (`@posthog/mcp`) that the Wizard can install into AI coding agents.

For directory purposes, the entry should focus on the **Wizard** as the agent-facing tool, with the CLI and MCP server noted as complementary capabilities.

---

## PostHog Wizard — Key Facts

| Field | Value |
|---|---|
| **Name** | PostHog Wizard |
| **Creator** | PostHog |
| **Install** | `npx @posthog/wizard@latest` |
| **GitHub** | https://github.com/PostHog/wizard |
| **Stars** | ~102 (as of April 2026) |
| **npm** | `@posthog/wizard` |
| **License** | Open source (MIT assumed, per PostHog standard) |
| **Language** | TypeScript |
| **Runtime** | ~8 minutes for full setup |
| **Status** | Experimental / actively developed |

### What It Does

The Wizard is a single-command tool that:
1. Authenticates with your PostHog account
2. Scans your codebase and detects framework (React, Next.js, Svelte, Astro, React Native, TanStack Router, TanStack Start)
3. Installs the appropriate PostHog SDKs (client-side and server-side)
4. Configures `.env` with project credentials
5. Creates custom events based on real product flows
6. Generates insights and dashboards in the PostHog app
7. Optionally installs the PostHog MCP server into your AI coding agent

### Supported PostHog Products

Product Analytics, Session Replay, Error Tracking, Web Analytics, Feature Flags, Experiments, LLM Analytics, Logs.

### AI Agent Integration

- Installs MCP server into **Cursor, Claude Code, Claude Desktop, Codex, VS Code, Zed** via `npx @posthog/wizard@latest mcp add`
- Leaves `.cursor/rules` files in projects to guide future AI agent sessions
- MCP server provides framework-specific documentation and example code as resources for agents
- CI/CD mode: `npx @posthog/wizard --ci --region us --api-key $POSTHOG_PERSONAL_API_KEY --install-dir .`

### Agent-Friendly Architecture

- Health checks against Anthropic, PostHog, GitHub, npm, and Cloudflare before execution
- Deterministic prompt generation tailored to specific project files
- LLM-powered code interpretation for reliable modification
- JSON output support on the lower-level CLI for programmatic consumption

---

## PostHog CLI (Lower-Level) — Summary

| Field | Value |
|---|---|
| **Install** | `npm i @posthog/cli` |
| **npm** | `@posthog/cli` |
| **Version** | 0.7.5 |
| **Location** | `PostHog/posthog` monorepo at `cli/` |

### Commands

- `posthog login` — interactive authentication
- `posthog query` — run SQL queries against PostHog data
- `posthog sourcemap` — upload bundled chunks for error tracking
- `posthog events query --event "page_view" --days 7` — retrieve event data
- `posthog feature-flags list` — list feature flags
- `posthog feature-flags toggle <flag-key> --enable` — toggle flags

### Environment Variables

`POSTHOG_CLI_HOST`, `POSTHOG_CLI_API_KEY`, `POSTHOG_CLI_PROJECT_ID`

---

## Self-Hosting: deploy-hobby

The main PostHog repo includes `bin/deploy-hobby`, a bash script (not part of the npm CLI) that deploys a self-hosted PostHog instance via Docker in one command:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/posthog/posthog/HEAD/bin/deploy-hobby)"
```

Requires 8GB+ RAM. Takes ~5-10 minutes. Supports CI mode with `--domain` flag.

---

## Third-Party Recognition

- Listed in Composio's `awesome-agent-clis` repository as an agent skill
- Featured in "10 Must-Have CLIs for Your AI Agents in 2026" (Medium, April 2026) — positioned as the analytics setup tool alongside Stripe, Supabase, Vercel, and others
- PostHog itself is a major open-source project (~25K+ stars on the main repo)

---

## Competitive Context

No other analytics platform offers a comparable agentic CLI that combines:
- AI-powered codebase analysis and SDK installation
- MCP server for persistent agent integration
- One-command self-hosted deployment

Closest alternatives are manual SDK setup guides or Segment/Amplitude integrations, none of which are agent-native.

---

## Proposed Directory Entry Fields

```json
{
  "name": "PostHog Wizard",
  "category": "Team/Organization-Backed",
  "type": "developer-utility",
  "use_cases": ["Software Development"],
  "features": ["Open Source"],
  "creator": "PostHog",
  "github_stars": 102,
  "github_url": "https://github.com/PostHog/wizard",
  "full_description": "AI-powered CLI that installs and configures PostHog analytics in one command. Scans your codebase, detects your framework (React, Next.js, Svelte, Astro, React Native), installs SDKs, creates custom events, and generates dashboards. Ships an MCP server that integrates directly with Cursor, Claude Code, VS Code, and other AI coding agents for persistent analytics context.",
  "key_features": [
    "One-command analytics setup with AI codebase analysis",
    "MCP server for Cursor, Claude Code, VS Code, Zed, and Codex",
    "Supports 7 frameworks with auto-detection",
    "CI/CD mode for automated deployments",
    "Configures Product Analytics, Session Replay, Error Tracking, Feature Flags, and more"
  ],
  "why_discussed": "First analytics platform to ship an agentic CLI with MCP integration, making it the fastest path from zero to instrumented product analytics in AI-assisted development workflows.",
  "notes": "Install: npx @posthog/wizard@latest. Lower-level CLI also available: npm i @posthog/cli (v0.7.5). Self-hosted deploy via bin/deploy-hobby script.",
  "website_url": "https://posthog.com/wizard",
  "difficulty": "beginner",
  "tag": "cli"
}
```

---

## Sources

- https://github.com/PostHog/wizard — Wizard repository and README
- https://github.com/PostHog/posthog/tree/master/cli — CLI source in monorepo
- https://github.com/PostHog/posthog/blob/master/cli/CHANGELOG.md — CLI changelog (v0.4.0-0.7.5)
- https://github.com/ComposioHQ/awesome-agent-clis/blob/master/posthog-cli/SKILL.md — Agent CLI skill definition
- https://posthog.com/wizard — Wizard product page
- https://posthog.com/docs/ai-engineering/ai-wizard — Wizard documentation
- https://posthog.com/docs/model-context-protocol — MCP server docs
- https://posthog.com/docs/model-context-protocol/claude-code — Claude Code MCP setup
- https://github.com/PostHog/mcp — MCP server repository
- https://posthog.com/docs/self-host — Self-hosting docs (deploy-hobby)
- https://medium.com/@unicodeveloper/10-must-have-clis-for-your-ai-agents-in-2026-51ba0d0881df — "10 Must-Have CLIs" article
