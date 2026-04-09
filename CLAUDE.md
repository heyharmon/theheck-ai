# Claude Code — Project Instructions

## Project

**Agent Harness Directory** (agentharness.directory) — a curated directory that helps people find the right AI agent tool for their work.

### Mission & Audience

The AI agent landscape is vast and moving fast. This directory exists to make it navigable. It serves three audiences:
1. **Newcomers to agents** — understand what tools exist, what they do, and which match their goals. No jargon, just clear categories and use cases.
2. **People looking for alternatives** — compare tools side by side, filter by type or use case, discover options they didn't know existed.
3. **People keeping up with the space** — the directory tracks 72 tools across 6 use cases so they don't have to.

The value proposition is simple: the right tool is already here — browse, filter, compare, and find it.

### Scale (as of April 2026)

- **73 tools** across 3 types: Agents (18), Multi-Agent Platforms (40), Developer Utilities (15)
- **6 use cases:** Software Development, Business Operations, Autonomous Operations, General-Purpose, Content Creation, Research & Science
- **3 difficulty levels:** Beginner, Intermediate, Advanced

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
