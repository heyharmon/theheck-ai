# Tolaria — Research Brief

**Researched:** 2026-04-16
**Sources:**
- Launch tweet: https://x.com/lucaronin/status/2046877445748322418
- Website: https://tolaria.md/
- GitHub: https://github.com/refactoringhq/tolaria (AGPL-3.0, TypeScript, 461 stars)
- Newsletter announcement: https://refactoring.fm/p/introducing-tolaria
- bird CLI: `read 2046877445748322418`, `search "Tolaria" -n 20`, `about lucaronin`

## Summary

Tolaria is a free, open-source macOS desktop app for managing Markdown knowledge bases, built by **Luca Rossi** (@lucaronin, author of the Refactoring newsletter) and released April 22, 2026. It pairs a Notion-like block editor (WYSIWYG + raw Markdown, wikilinks, types, views, relationships) with a native MCP server so AI agents — Claude Code, Codex, OpenClaw — can read, create, and connect notes alongside humans. The creator calls it "my implementation of @karpathy's LLM wiki" and uses it to operate his own 10,000-note personal knowledge base. Files stay as plain Markdown on disk, with an integrated Git client (manual commit or AutoGit) for versioning and cross-device sync. AGPL-3.0 licensed, "free & open source forever," developed primarily via AI coding (2000 commits / 100K LOC / 85% test coverage / 70+ ADRs over three months) and pitched as a living artifact of Rossi's AI coding practice.

## Classification

- **Type:** `agent-tool` — Tolaria is a GUI application that exposes an MCP server so external AI agents (Claude Code, Codex) can operate on a shared file-backed workspace. It isn't a multi-agent orchestration platform (agents aren't managed from within Tolaria — they run externally), nor a dev utility. It's a packaged app that gives AI agents first-class access to user knowledge.
- **Subtype:** `agentic-app` — a consumer/knowledge-worker app where AI agents are a first-class collaborator via MCP. Closest fit in the directory's `agent-tool` subtypes. Not `standalone-agent` (no bundled agent), not `domain-agent` (no agent), not `config-layer` (it's a full app, not a plugin for another runtime).
- **Category:** `Individual/Indie & Research` — solo developer project by Luca Rossi, built in the open, distributed free.
- **Difficulty:** `beginner` — download a .app, open a folder of Markdown, click the bottom banner to initialize AGENTS/CLAUDE files. No account, no API keys (uses the user's local Claude Code / Codex CLI).
- **Audience:** `Curious builder` — not quite "Anyone" because the sweet spot requires already having (or being willing to run) Claude Code / Codex locally, plus comfort with Git concepts. Obsidian/Bear-style note-takers who want AI collaboration are the clear target.
- **Ladder rung:** `2` (Agentic Apps) — Tolaria is a ready-to-use desktop app where AI capability is baked in via MCP; the user gets value from the UI alone and unlocks more once they point agents at the vault. It's not rung 3 (Agent Tool) because there's no agent runtime *in* Tolaria — the agent is external — and it's not rung 6 (dev-utility infra) because it's a finished consumer app.
- **Use Cases:** `General-Purpose`, `Content` — the core pitch is personal knowledge management ("running my life and work"); content/writing workflows are explicit in the newsletter (note types, wikilinks, properties for drafts/articles). Not `Dev`-specific despite the creator's audience, though ADR management and AGENTS-file authoring are showcased.
- **Features:**
  - `Open Source` — confirmed (GitHub, AGPL-3.0).
  - `Self-Hosted` — confirmed (desktop app, files on local disk, no cloud account).
  - `Model-Agnostic` — partially true. Tolaria itself is model-independent; it defers to whatever CLI (Claude Code, Codex) the user already has. But AGENTS/CLAUDE files and MCP framing bias toward Claude + Codex. Include with caveat.

## Directory Entry (Draft)

```json
{
  "name": "Tolaria",
  "category": "Individual/Indie & Research",
  "type": "agent-tool",
  "subtype": "agentic-app",
  "use_cases": ["General-Purpose", "Content"],
  "features": ["Open Source", "Self-Hosted", "Model-Agnostic"],
  "creator": "Luca Rossi (@lucaronin)",
  "github_stars": 461,
  "github_url": "https://github.com/refactoringhq/tolaria",
  "website_url": "https://tolaria.md/",
  "full_description": "Tolaria is a free, open-source macOS desktop app for managing Markdown knowledge bases where AI agents are a first-class collaborator. Notes stay as plain .md files on disk with a Notion-style block editor (WYSIWYG + raw Markdown), wikilinks, note types, custom views, and native relationships (belongs_to, related_to, etc.). A built-in Git client (manual commits or AutoGit) handles versioning and cross-device sync. Tolaria exposes an MCP server so Claude Code, Codex, and other CLI agents can read, write, and connect notes in the same vault a human is using — the creator frames it as his implementation of Karpathy's 'LLM wiki.' Built by Luca Rossi (Refactoring newsletter) over three months as both a product and a living artifact of AI-assisted software development (2000 commits, 100K LOC, 85% test coverage, 70+ architecture decision records). AGPL-3.0 licensed and 'free forever.'",
  "key_features": [
    "Block editor with WYSIWYG + raw Markdown, wikilinks, types, views, and relationships",
    "Native MCP server — Claude Code, Codex, and OpenClaw can operate the vault directly",
    "Notes are plain Markdown files on disk (no database, no proprietary format)",
    "Integrated Git client with manual commit or AutoGit auto-sync",
    "Per-vault AGENTS and CLAUDE files teach agents Tolaria's types and properties",
    "Command palette (cmd+K), inbox, favorites, archive, and type-based filtering"
  ],
  "why_discussed": "Launched April 22, 2026 to 1,140+ likes and immediate adoption by Obsidian/Bear users ('I am switching to Tolaria' — @hancengiz). Distinctive because the creator shipped it primarily via AI coding and released the whole repo — AGENTS file, ADRs, hooks — as a reference for how to build a serious app with Claude Code. Widely read as a concrete answer to Karpathy's 'LLM wiki' prompt.",
  "notes": "AGPL-3.0 (not MIT). TypeScript. macOS only at launch. Uses the user's locally installed Claude Code / Codex — no API keys required. Related AGENTS/CLAUDE scaffolding is generated by clicking an in-app banner. 461 stars two days post-launch.",
  "difficulty": "beginner",
  "tag": "knowledge-base",
  "ladder_rung": 2,
  "audience": "Curious builder",
  "capabilities_unlocked": [
    "Run a local Markdown knowledge base that humans and AI edit in the same place",
    "Let Claude Code or Codex scan existing notes and auto-assign types, properties, and relationships",
    "Use Git-backed versioning and AutoGit sync without leaving the editor",
    "Adopt a Notion-style editor without giving up file portability or local-first control",
    "Copy a working AGENTS.md / CLAUDE.md pattern into your own projects"
  ],
  "good_for": [
    "Obsidian, Bear, or Notion users who want AI agents as collaborators on the same files",
    "Developers with a large personal knowledge base who already run Claude Code or Codex locally",
    "Anyone curious about Karpathy's 'LLM wiki' idea and wanting a concrete, opinionated starting point"
  ],
  "not_for": [
    "Windows or Linux users — macOS only at launch",
    "Teams that need real-time multi-user collaboration (Tolaria is single-user local + Git)",
    "Users who don't want to install Claude Code, Codex, or another MCP client alongside"
  ],
  "graduate_to": ["Cabinet"],
  "relationships": {
    "alternative_to": ["Cabinet"],
    "works_with": ["Claude Code", "Codex", "OpenClaw"],
    "ecosystem": ["Claude Code"]
  }
}
```

## Community Sentiment (from X/Twitter)

- **How people describe it:** "Markdown knowledge base manager," "offline alternative to Notion," "the LLM wiki," "Bear/Obsidian but with AI built in." Creator's framing as "my implementation of Karpathy's LLM wiki" is sticky.
- **Common use cases mentioned:** Migrating existing Obsidian/Bear/Notion vaults; having Claude Code or Codex scan a folder of notes and auto-assign types/properties/relationships; managing ADRs for AI-driven software projects; personal "second brain" operation.
- **What people like:** File portability (@patrickblokjevz confirmed "2 apps using the same vault... awesome" with Obsidian webclipper still feeding the vault); zero-config AI integration via a single banner click; no API keys required (uses local CLIs); the living-artifact framing — the whole repo is published as an example of serious AI coding.
- **Criticisms or limitations:** Early users asked for ingest pipelines / prompt templates ("share some prompts or connectors for getting the data in" — @RayLiVerified). macOS-only at launch was noted by at least one reply. One user hit a Git auth edge case at push time. No nested tags (creator confirmed — only types and relationships).
- **Compared to:** Obsidian, Bear, Notion, Paperclip. Creator explicitly names Bear as a UX inspiration. Multiple replies position it as a direct Obsidian alternative.

## Similar Tools in Directory

- **Cabinet** (multi-agent-platform / orchestration-platform, `src/data/directory.json:2592`) — closest neighbor: both are local-first Markdown knowledge systems where AI agents are first-class operators. Cabinet is a multi-agent *platform* (CEO/Editor/Marketer roles, scheduled jobs, heartbeats) built on Claude Code with a web UI; Tolaria is a single-user macOS GUI that leaves the agents external and focuses on editor UX + MCP. Cabinet graduates Tolaria users who want agents orchestrated inside the KB rather than called from outside it.
- **Claude Code** — Tolaria's primary agent backend; correct `works_with` and `ecosystem` relationship.
- **OpenClaw** — the creator mentions using OpenClaw on phone to operate Tolaria vaults; `works_with`.
- **LazyPi / json-render / Browser Harness** — all recent indie entries, but none overlap functionally.

## Open Questions

1. **Tag value.** `knowledge-base` matches Cabinet's tag. Orchestrator should confirm whether that's still an approved tag or if a more specific one (e.g. `markdown`, `notes`) fits the current taxonomy.
2. **Use case: `Dev` vs `Content`.** The creator's audience is heavily dev-leaning (ADRs, AGENTS files, refactoring newsletter), but the app is a general note tool. I chose `General-Purpose` + `Content`; reconsider adding `Dev` if the directory allows three use cases.
3. **Subtype check.** `agentic-app` is the correct fit given Tolaria is a packaged app where AI is first-class via MCP. If the directory has since added a more specific `knowledge-base` or `gui-shell` variant under `agent-tool`, reconsider.
4. **`Model-Agnostic` feature flag.** Tolaria itself is agnostic (talks via MCP to whatever client is installed), but the shipped AGENTS/CLAUDE scaffolding is Claude/Codex-biased. Include but verify against directory definition of Model-Agnostic.
5. **Star count is a moving target.** 461 stars at research time (two days post-launch); will keep climbing.
6. **License nuance.** AGPL-3.0 — stricter than most entries. Worth surfacing in `notes` so users know downstream commercial use has obligations.
