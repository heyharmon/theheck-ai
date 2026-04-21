# Claude Code — Project Instructions

## Project

**Directory of AI Tools, Agents & Harnesses** (agentharness.directory) — a directory of AI tools for everyone at every level, from frontier consumer chat products to agent harnesses, multi-agent platforms, and autonomous systems.

### Mission & Audience

The AI landscape is vast and moving fast. This directory exists to make it navigable for **anyone interested in AI, working with AI, or building on AI — at every level**. It serves:
1. **Newcomers** — understand what tools exist, what they do, and which match their goals. No jargon.
2. **People looking for alternatives** — compare tools side by side, filter by rung, use case, or audience.
3. **People leveling up** — users of basic consumer chat often don't understand the capability gaps between ChatGPT and a tool like Claude Code or a multi-agent platform. The directory draws that line and shows the path.

### The Capability Ladder (primary organizing concept)

Every entry gets an optional `ladder_rung` (1–6) plus fields (`capabilities_unlocked`, `good_for`, `not_for`, `graduate_to`, `audience`) that explain what the rung unlocks and who it's for. Off-ladder (`ladder_rung: null`) is valid and common — companion tools, purpose-specific utilities, and infrastructure don't force onto the ladder.

1. **Consumer Chat** — chat in a box, zero setup (ChatGPT, Claude.ai, Gemini, Perplexity, DeepSeek, Grok, Meta AI, Mistral Le Chat, Microsoft Copilot)
2. **Agentic Apps** — consumer UX, AI takes action (ChatGPT Agent, Claude Computer Use, Gemini Deep Research, Perplexity Comet, Perplexity Computer)
3. **Agent Tools** — agent runs alongside your files (Claude Code, OpenCode, Cursor Agent, Codex CLI)
4. **Multi-Agent Platforms** — compose/orchestrate multiple agents (Dify, CrewAI, LangGraph, Agent.ai, Superagent)
5. **Autonomous Systems** — zero-human-in-the-loop operations (Paperclip.ing, CompanyHelm)
6. **Developer Utilities** — supporting infrastructure (GUI shells, memory engines, testing tools)

The directory has two browsing modes: **"I want to level up"** (ladder view, rung-by-rung) and **"I want to build a stack"** (companion/ecosystem view via `works_with` / `ecosystem` / `built_on`).

### Scale (as of April 2026)

- **~105 tools** across 4 types and 17 subtypes
- **Types:** `consumer-chat`, `agent-tool`, `multi-agent-platform`, `developer-utility`
- **5 use cases:** Dev, Ops, General-Purpose, Content, Research
- **4 audience levels:** Anyone, Curious builder, Developer, AI practitioner (replaces difficulty as primary signal)
- **3 difficulty levels:** Beginner, Intermediate, Advanced (retained for legacy, secondary)
- **Relationship data** on 40+ tools: extends, alternative_to, works_with, built_on, ecosystem
- **Curated scenarios** on the /guide page

Built with Astro 5, Tailwind CSS 4, and Vue 3. Static output — no SSR.

### Architecture

The site is **data-driven, not CMS-driven**. The primary content source is `src/data/directory.json`. Astro Content Collections (`src/content/`) are secondary — used only for static pages and blog posts. Directory data flows through `src/lib/directory.ts` into both static Astro pages and interactive Vue components.

## Agents

Three specialist agents. Route every user request to the correct agent. If a request spans multiple domains, break into sub-tasks and invoke sequentially — foundational changes first. Agents do not call each other; root Claude orchestrates all coordination.

### Research Agent → `research`

**When:** A new tool or project needs to be added to the directory. Always run research *before* adding the entry. Uses the project's website, GitHub, docs, and X/Twitter (via Chrome browser tools) to produce a structured research brief.

**Produces:** `src/data/research/{slug}.md` — a research brief with classification, draft entry JSON, community sentiment, and similar tools.

### SEO Agent → `seo`

**When:** Auditing SEO, updating meta titles/descriptions, OG images, keyword research, competitor analysis, SERP analysis, content briefs — anything focused on search visibility.

**Owns:** SEO frontmatter fields (`title`, `description`, `featuredImage`/`image`, `tags`) and `src/data/site-meta.json` (SEO fields only)

### Design Agent → `design`

**When:** Changing colors, typography, fonts, spacing, layout, design tokens, component appearance, Tailwind theme, prose styling — any visual change.

**Owns:** `src/styles/global.css`, Tailwind classes in `.astro` components and layouts

## Subagent Model Policy

Use **Sonnet** (`model: "sonnet"`) as the default for all subagents (exploration, search, research, classification, read-only tasks).

Use **Opus** (`model: "opus"`) only when the task requires writing/modifying code, complex architectural decisions, or multi-step implementation.

## Build

```bash
npm run dev          # Dev server at localhost:4321
npm run build        # Production build to dist/
npm run validate     # Config checks + build (use after CMS changes)
```
