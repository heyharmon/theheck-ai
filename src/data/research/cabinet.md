# Cabinet — Research Brief

**Researched:** 2026-04-11
**Sources:**
- https://runcabinet.com/
- https://github.com/hilash/cabinet
- X/Twitter search via bird CLI (20+ tweets reviewed, mostly from creator @HilaShmuel and responders)

## Summary

Cabinet is a free, open-source, self-hosted "AI-first knowledge base and startup OS" built by Hila Shmuel (@HilaShmuel on X, hilash on GitHub). It combines a local markdown-backed knowledge base with a multi-agent team (e.g., CEO, Editor, Marketer roles), embedded HTML/CSS/JS web apps inside the working tree, scheduled jobs with "heartbeats," a web terminal, and a WYSIWYG editor — all running locally on top of Claude Code. The creator pitches it as "Paperclip + Obsidian, but local, open, and simple," targeting solo founders and indie operators who want a persistent data layer plus an agent team under one roof. Cabinet Cloud (hosted) is on a waitlist; the GitHub version is MIT-licensed (per website) and free.

## Classification

- **Type:** `multi-agent-platform` — Cabinet is fundamentally a platform for orchestrating multiple role-based AI agents (CEO, Editor, Marketer) on top of a shared markdown knowledge base, with scheduled jobs and heartbeats. It is not a single coding agent (agent-tool), nor a developer utility. It runs on top of Claude Code but adds an orchestration layer with multiple agents.
- **Subtype:** `orchestration-platform` — fits the multi-agent orchestration pattern with scheduled jobs and role-based agents, rather than a framework/SDK or autonomous-org system.
- **Category:** `Individual/Indie & Research` — solo-developer project by Hila Shmuel; community-driven; explicitly positioned for indie founders.
- **Difficulty:** `beginner` — one-line install (`npx create-cabinet my-startup`), WYSIWYG editor, visual KB, and "simple" is a stated design principle (KISS). Target user is non-technical solo founders.
- **Use Cases:**
  - **Ops** — core pitch is "startup operating system" with agents running business workflows (marketing, editing, CEO-level tasks), scheduled jobs.
  - **Content** — explicit "Editor" and "Marketer" agents; creators cited as target audience; PDF/CSV/markdown content management.
  - **General-Purpose** — positioned broadly as a KB+LLM tool for any knowledge work, not narrowly scoped.
- **Features:**
  - `Open Source` — confirmed on website and GitHub repo (MIT per website; repo licenseInfo returns null but README/website assert MIT).
  - `Self-Hosted` — explicitly "local," "own your data," files on disk, no database.
  - `Model-Agnostic` — **not confirmed.** Runs on Claude Code specifically, per creator's tweets. Do not include.
  - `Security-Focused` — not a primary positioning; don't include.
  - `Self-Improving` — no evidence of a learning loop / skill-generation system like Hermes Agent. Don't include.

## Directory Entry (Draft)

```json
{
  "name": "Cabinet",
  "category": "Individual/Indie & Research",
  "type": "multi-agent-platform",
  "use_cases": ["Ops", "Content", "General-Purpose"],
  "features": ["Open Source", "Self-Hosted"],
  "creator": "Hila Shmuel",
  "github_stars": 1239,
  "github_url": "https://github.com/hilash/cabinet",
  "full_description": "Open-source, self-hosted AI-first knowledge base and startup OS that pairs a local markdown working tree with a team of role-based AI agents (CEO, Editor, Marketer) running on Claude Code. Stores everything as files on disk — markdown, CSVs, PDFs, and embedded HTML/CSS/JS web apps — with git-backed history, scheduled jobs, agent heartbeats, a web terminal, and a WYSIWYG editor. Pitched as 'Paperclip + Obsidian, but local, open, and simple' for solo founders and indie operators.",
  "key_features": [
    "Local markdown-on-disk knowledge base (no database)",
    "Role-based AI agent team with heartbeats and scheduled jobs",
    "Embedded HTML/CSS/JS web apps inside the KB",
    "Git-backed version history",
    "Web terminal (xterm.js) and WYSIWYG editor",
    "One-command install: npx create-cabinet"
  ],
  "why_discussed": "Viral solo-dev launch (April 2026) positioning a local-first, open-source alternative to Paperclip/Notion — responses from Karpathy-adjacent threads and indie-hacker circles pushed it past 1.2K stars in its first week.",
  "notes": "Runs on top of Claude Code; Cabinet Cloud hosted version on waitlist.",
  "website_url": "https://runcabinet.com/",
  "difficulty": "beginner",
  "tag": "knowledge-base",
  "subtype": "orchestration-platform",
  "relationships": {
    "built_on": ["Claude Code"],
    "alternative_to": []
  }
}
```

Note on `alternative_to`: the creator repeatedly compares Cabinet to Paperclip, Notion, and Obsidian — none of which are currently in the directory by those names. If "Paperclip.ing" has an entry, consider linking. Left empty pending orchestrator check.

## Community Sentiment (from X/Twitter)

- **How people describe it:** "Paperclip + Notion, only local and open source," "Paperclip + Obsidian," "KB + LLM under one UI," "visual KB+LLM." Creator's own framing dominates; responders echo it.
- **Common use cases mentioned:** Dumping CSVs/PDFs into a single AI-accessible workspace; running agent teams for startup ops; replacing Obsidian for mixed-content (webapps + docs + tables) workflows.
- **What people like:**
  - Local-first and open source — one commenter (@callebtc reply): "As an engineer I feel very uncomfortable running closed software these days — one skill can take over my computer." Cabinet's openness addressed that.
  - Inline web apps inside the KB is the most distinctive feature people call out (~22 likes on the Karpathy reply thread).
  - Simple setup; free.
  - @reachmeviz noted it pairs well with their own agent (sarathy) having unrestricted MD file access.
- **Criticisms or limitations:** No direct criticism surfaced in the searched tweets. Cabinet Cloud waitlist indicates users asked for a hosted/easier option, implying local setup may still be friction for non-devs despite the one-line install.
- **Compared to:** Paperclip.ing, Notion, Obsidian, Claude Code (it runs on Claude Code rather than competing with it).

## Similar Tools in Directory

Based on a scan of `directory.json` (only first 200 lines fully read; reasoning extrapolated):

- **Hermes Agent** — both are agent platforms with persistent memory/knowledge, but Hermes is a single self-improving coding agent, while Cabinet is a multi-agent business-ops KB. Different type (agent-tool vs multi-agent-platform).
- **OpenClaw / IronClaw** — messaging-oriented standalone agents; Cabinet is a KB-first orchestration platform, not a messaging runtime.
- **Claude Code** — Cabinet is explicitly *built on* Claude Code; this is a `built_on` relationship.

The orchestrator should grep directory.json for `"Paperclip"`, `"Notion"`, `"Obsidian"`, or other KB-style platforms to find the closest neighbors for `alternative_to` relationships.

## Open Questions

1. **License confirmation.** Website states MIT; GitHub API returned `licenseInfo: null` (no LICENSE file detected at repo root via API). Orchestrator should verify before asserting MIT.
2. **Model-agnosticism.** Creator's tweets say "running on Claude Code." Unclear whether Cabinet can be pointed at other models/providers. If it can, `Model-Agnostic` could be added.
3. **Subtype fit.** `orchestration-platform` is the closest match, but Cabinet blurs into "startup OS" / productivity territory that the directory taxonomy doesn't explicitly cover. If a KB-specific subtype exists elsewhere, reconsider.
4. **Paperclip.ing presence.** Creator constantly compares Cabinet to Paperclip — worth checking if Paperclip is already in the directory to set an `alternative_to` relationship.
5. **GitHub star count is a moving target** — 1,239 as of 2026-04-14; launched ~April 4, 2026 so growing quickly.
