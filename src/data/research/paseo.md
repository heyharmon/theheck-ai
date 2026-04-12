# Paseo — Research Brief

**Researched:** 2026-04-11
**Sources:**
- https://paseo.sh/
- https://github.com/getpaseo/paseo
- https://news.ycombinator.com/item?id=47397226
- https://news.ycombinator.com/item?id=47529963
- https://apps.apple.com/us/app/paseo-ai-coding/id6758887924
- https://x.com/moboudra (creator, @moboudra)
- https://www.libhunt.com/r/paseo

## Summary

Paseo is an open-source, self-hosted daemon and multi-platform client for orchestrating AI coding agents (Claude Code, Codex, OpenCode) from any device — phone, desktop, tablet, or CLI. Built by indie developer Mo Boudra (@moboudra) and released in October 2025, it solves a concrete pain point: coding agents are anchored to the machine they run on. Paseo runs a local daemon on your workstation and lets you connect, monitor, and direct agents from anywhere via iOS, Android, web, or terminal. It deliberately wraps existing coding agent CLIs without intercepting their behavior, keeping all code local and privacy-intact. The name "paseo" is Spanish for "stroll" — the creator originally built it so he could walk and talk to Claude via voice. It has since grown into a multi-agent orchestration platform with experimental skills for agent handoff, looping, and multi-agent team coordination.

## Classification

- **Type:** `developer-utility` — Paseo is not an agent itself and does not supply reasoning or task execution. It is an interface layer and orchestration shell that sits on top of existing agent CLIs. It fits the developer-utility mold in the same way Superset and T3 Code do.
- **Subtype:** `gui-shell` — The primary product is a multi-platform GUI (iOS, Android, desktop, web) that wraps and controls CLI-based coding agents. This aligns with the existing gui-shell pattern in the directory (Superset, T3 Code, Maestri), but Paseo's mobile-first and cross-device stance is distinct.
- **Category:** `Individual/Indie & Research` — Built and maintained by a single developer (Mo Boudra). No VC backing mentioned; AGPL-3.0 licensed open source.
- **Difficulty:** `intermediate` — Requires that users have already installed and configured at least one coding agent CLI (Claude Code, Codex, or OpenCode) with their own API credentials. The Paseo daemon and apps install easily, but the target user is someone already working with coding agents who wants more flexibility.
- **Use Cases:**
  - **Software Development** — Core use case: running and managing coding agents across devices and in parallel git worktrees during software development.
  - **Autonomous Operations** — The experimental orchestration skills (loop, handoff, orchestrator) enable autonomous multi-agent pipelines that run without constant supervision — the agent spawns sub-agents, verifies output, and iterates to completion.
- **Features:**
  - **Open Source** — Confirmed AGPL-3.0 license on GitHub.
  - **Self-Hosted** — Agents and daemon run entirely on the user's own machine; code never leaves the local environment.
  - **Model-Agnostic** — Supports Claude Code (Anthropic), Codex (OpenAI), OpenCode (open-source), and Pi. Uses OpenRouter via OpenCode for additional provider access.

## Directory Entry (Draft)

```json
{
  "name": "Paseo",
  "category": "Individual/Indie & Research",
  "type": "developer-utility",
  "use_cases": [
    "Software Development",
    "Autonomous Operations"
  ],
  "features": [
    "Open Source",
    "Self-Hosted",
    "Model-Agnostic"
  ],
  "creator": "Mo Boudra (@moboudra)",
  "github_stars": 1735,
  "github_url": "https://github.com/getpaseo/paseo",
  "website_url": "https://paseo.sh/",
  "full_description": "Self-hosted daemon and multi-platform client (iOS, Android, desktop, web, CLI) for orchestrating AI coding agents remotely. Paseo runs a local server that manages Claude Code, Codex, and OpenCode processes; you connect from any device to monitor, direct, and parallelize agents. Privacy-first — no telemetry, no logins, code never leaves your machine. Includes an experimental orchestration skills layer that teaches agents to spawn sub-agents, loop until done, and coordinate multi-agent teams.",
  "key_features": [
    "Cross-device access: iOS, Android, desktop, web, and CLI clients",
    "Multi-provider support: Claude Code, Codex, OpenCode, Pi",
    "Local voice control (on-device STT/TTS via Parakeet and Kokoro)",
    "Git worktree isolation for parallel agent tasks",
    "Encrypted relay for remote access without VPN",
    "Orchestration skills: agent handoff, loop-until-done, multi-agent teams",
    "Real-time agent output streaming",
    "No telemetry, no forced accounts, code stays local"
  ],
  "why_discussed": "Solves the mobility problem for coding agent power users: agents are anchored to one machine, Paseo breaks that constraint. Two Hacker News Show HN threads, strong Chinese developer community adoption (900+ likes on a Chinese-language viral tweet April 10 2026), and active weekly releases. One of the few FOSS tools with full native mobile app parity alongside desktop.",
  "notes": "AGPL-3.0. Latest: v0.1.52 (April 10, 2026). TypeScript monorepo (server, Expo app, Electron desktop, CLI, relay, website). Orchestration skills are marked experimental/unstable. Requires at least one agent CLI pre-installed.",
  "difficulty": "intermediate",
  "tag": "gui",
  "subtype": "gui-shell",
  "relationships": {
    "works_with": [
      "Claude Code",
      "OpenCode"
    ],
    "alternative_to": [
      "Superset",
      "T3 Code"
    ]
  }
}
```

## Community Sentiment (from X/Twitter and HN)

- **How people describe it:** A "self-hosted remote interface for coding agents," a solution to the "pain point that agents are anchored to the machine they run on." Several Chinese-language developers (who make up a visible share of the user base) describe it as solving the "only being able to operate the agent from the machine running it" problem.
- **Common use cases mentioned:** Monitoring long-running coding agents from a phone while on a walk or away from a desk; managing multiple parallel agents across branches; using voice dictation to assign tasks hands-free; connecting to agents running on a remote server or Raspberry Pi.
- **What people like:** End-to-end encryption with no cloud dependency; no logins or tracking; on-device voice stack (Parakeet STT + Kokoro TTS); native mobile apps with full feature parity; the daemon-plus-client architecture that does not modify or intercept the underlying agent. One HN user said: "Your project looks really solid! One of the best in this space I dare say."
- **Criticisms or limitations:** Early stability issues with provider detection (creator revamped this in v0.1.50); voice-activity detection (VAD) described as "not perfect but it works"; orchestration skills explicitly marked unstable with frequent breaking changes; requires pre-configured agent CLIs as prerequisites which adds setup friction.
- **Compared to:** Superset (parallel agents GUI, but desktop-only and source-available), T3 Code (coding agent GUI shell, but no mobile), Emdash (parallel agents with git worktrees, but no mobile/phone access), OpenCode's built-in web UI (available but mobile experience noted as "too unsatisfying"), Dify (connects agents to messaging platforms, different use case), Pane (terminal-first agent manager, no mobile).

## Similar Tools in Directory

1. **Superset** (`gui-shell`, Team/Organization-Backed) — Closest competitor in the parallel-agents GUI shell category. Desktop-only, Elastic License (source-available). Paseo differentiates with mobile apps, full open source (AGPL), and multi-provider support without lock-in.
2. **T3 Code** (`gui-shell`, Individual/Indie & Research) — GUI shell for coding agents with git worktrees, diff viewer, parallel work. Desktop-only, no mobile, early stage. Paseo is more mature and cross-device.
3. **Emdash** (`orchestration-platform`, Individual/Indie & Research) — Parallel-agent orchestrator with git worktree isolation. YC-backed, no mobile. Paseo overlaps on parallelism but positions as interface layer rather than orchestrator.
4. **Maestri** (`gui-shell`, Individual/Indie & Research) — Infinite-canvas GUI shell for coding agents. macOS/Windows/Linux but no mobile. Closed-source, paid. Paseo is the open-source, mobile-enabled alternative in the same category.

## Open Questions

1. **Subtype fit:** `gui-shell` fits the primary product well, but the orchestration skills layer pushes it toward `orchestration-platform`. The GUI shell framing wins because Paseo wraps existing agents rather than defining a new orchestration model, but this is worth a judgment call before adding.
2. **GitHub stars freshness:** 1,735 stars as of April 11, 2026. The viral Chinese-language tweet (928 likes, 132 RTs on April 10) is very recent and the star count may rise significantly in coming days.
3. **Relationships field:** The `relationships` object in the draft uses `alternative_to` for Superset and T3 Code — confirm this is valid schema usage in the directory (some entries omit it entirely).
4. **License clarification:** Listed as "Other" in the gh JSON field but README clearly states AGPL-3.0. The gh API may have parsed the license file incorrectly. Verify before entry.
5. **Mobile app status:** Apple App Store listing exists. Confirm Android availability — README mentions Android but no Play Store link was verified.
