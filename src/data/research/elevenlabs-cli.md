# ElevenLabs CLI — Research Brief

**Researched:** 2026-04-09
**Sources:**
- https://github.com/hongkongkiwi/elevenlabs-cli (community CLI — primary subject)
- https://github.com/elevenlabs/cli (official CLI — voice agent management)
- https://elevenlabs.io/docs/eleven-agents/operate/cli (official docs)
- https://x.com/ElevenLabsDevs/status/2036802792061333989 (agent-first announcement)
- https://crates.io/crates/elevenlabs-cli (Rust crate registry)
- https://lobehub.com/mcp/hongkongkiwi-elevenlabs-cli (MCP server listing)

## Summary

There are actually **two distinct ElevenLabs CLI tools** that need to be distinguished. The article describes the **community-built CLI** (`hongkongkiwi/elevenlabs-cli`), a Rust-based tool that provides direct terminal access to ElevenLabs audio capabilities: text-to-speech, speech-to-text, voice cloning, sound effects, dubbing, voice isolation, and more. It features `--json` output for scriptable automation, an MCP server mode with granular tool filtering and safety controls, and multi-channel distribution (Homebrew, Scoop, Cargo, Docker). Separately, the **official ElevenLabs CLI** (`elevenlabs/cli`) is a TypeScript/Node.js tool focused on managing voice agents as infrastructure-as-code (init, push, pull, branch, test). Both are relevant to AI agent workflows but serve different purposes. The community CLI is the audio workhorse; the official CLI is the agent deployment tool.

## Two Tools Identified

### 1. Community CLI (hongkongkiwi/elevenlabs-cli) — Primary Subject

| Field | Value |
|-------|-------|
| **Repo** | https://github.com/hongkongkiwi/elevenlabs-cli |
| **Language** | Rust (97.6%) |
| **License** | MIT |
| **Stars** | ~0 (very new, v0.1.8 as of Feb 2026) |
| **Releases** | 5 (latest: v0.1.8, 2026-02-18) |
| **Commits** | 61 |
| **Install** | Homebrew, Scoop, Cargo, Docker, source |
| **Creator** | hongkongkiwi (individual/community) |

**Core commands:** `tts`, `tts-stream`, `tts-timestamps`, `realtime-tts`, `stt`, `voice`, `voice-changer`, `voice-design`, `sfx`, `dialogue`, `music`, `dub`, `isolate`, `audio-native`, `agent`, `converse`, `tools`, `mcp`

**Agent integration points:**
- `--json` flag on all commands for script-friendly output
- MCP server mode (`elevenlabs-cli mcp`) with `--enable-tools`, `--disable-admin`, `--disable-destructive`, `--read-only`
- GitHub Action wrapper: `hongkongkiwi/action-elevenlabs-cli`
- OpenClaw skill: `hongkongkiwi/elevenlabs-cli-skill`
- Config via env var (`ELEVENLABS_API_KEY`) or TOML file

### 2. Official CLI (elevenlabs/cli) — Secondary/Related

| Field | Value |
|-------|-------|
| **Repo** | https://github.com/elevenlabs/cli |
| **Language** | TypeScript/JavaScript |
| **Stars** | 49 |
| **Forks** | 6 |
| **Install** | npm/pnpm (`@elevenlabs/cli`) |
| **Creator** | ElevenLabs (official) |

**Focus:** Voice agent management as code — init, push, pull, branch, test, templates. CI/CD-ready with `--no-ui` flag. Now "agent-first" with non-interactive default (per @ElevenLabsDevs tweet). This is an IaC tool for the ElevenLabs Agents Platform, not a direct audio generation CLI.

## Classification (Community CLI)

- **Type:** developer-utility
- **Category:** Harnesses-Adjacent
- **Difficulty:** intermediate
- **Use Cases:** Content Creation, Software Development
- **Features:** Open Source, Self-Hosted
- **Tag:** cli

**Rationale:**
- "Harnesses-Adjacent" because it is not an agent harness itself but a tool that agents consume (via MCP, CLI piping, or GitHub Actions)
- "intermediate" because it requires API key setup, understanding of audio formats/models, and CLI fluency, but installation is straightforward (Homebrew/Cargo)
- "Content Creation" is primary (audio production is its core purpose); "Software Development" secondary (CI/CD integration, MCP server for coding agents)
- Tag "cli" aligns with the planned "CLI tools for AI agents" category

## Directory Entry (Draft)

```json
{
  "name": "ElevenLabs CLI",
  "category": "Harnesses-Adjacent",
  "type": "developer-utility",
  "difficulty": "intermediate",
  "use_cases": [
    "Content Creation",
    "Software Development"
  ],
  "features": [
    "Open Source",
    "Self-Hosted"
  ],
  "creator": "hongkongkiwi (community)",
  "github_stars": 0,
  "github_url": "https://github.com/hongkongkiwi/elevenlabs-cli",
  "website_url": "https://crates.io/crates/elevenlabs-cli",
  "full_description": "Community-built Rust CLI for the ElevenLabs AI audio platform. Provides terminal-native text-to-speech, speech-to-text, voice cloning, sound effects, dubbing, and voice isolation. Every command supports --json output for script-friendly automation and CI/CD pipelines. Includes an MCP server mode with granular tool filtering and safety controls (--enable-tools, --disable-admin, --read-only), making it plug-and-play for AI agent workflows. Ships via Homebrew, Scoop, Cargo, and Docker. Also available as a GitHub Action (hongkongkiwi/action-elevenlabs-cli) and an OpenClaw skill.",
  "key_features": [
    "TTS, STT, voice cloning, sound effects, dubbing, and isolation",
    "MCP server mode with tool filtering and safety controls",
    "--json output for scriptable automation",
    "GitHub Action wrapper for CI/CD",
    "Multi-channel install (Homebrew, Scoop, Cargo, Docker)",
    "6 ElevenLabs models including multilingual and flash"
  ],
  "why_discussed": "Enables voice and audio workflows directly in agent pipelines and CI/CD. The MCP server mode makes it immediately usable by any MCP-compatible agent (Claude Code, OpenCode, Cursor, etc.) with fine-grained safety controls. First comprehensive CLI wrapper for the ElevenLabs API.",
  "notes": "Requires an ElevenLabs API key (paid service). v0.1.8 as of Feb 2026. Separate from the official elevenlabs/cli which manages voice agents as code. Community-built, not officially endorsed by ElevenLabs.",
  "tag": "cli"
}
```

## Community Sentiment

- **X/Twitter:** ElevenLabs Developers (@ElevenLabsDevs) announced the official CLI is "now agent-first" with non-interactive defaults and a `--human-friendly` flag for interactive use. This validates the market direction: CLI tools designed for agent consumption, not just humans.
- **LobeHub MCP directory:** The community CLI's MCP server is listed on LobeHub's MCP server directory, indicating adoption in the MCP ecosystem.
- **OpenClaw ecosystem:** An OpenClaw skill wrapper exists (`elevenlabs-cli-skill`), showing integration with the agent harness ecosystem.
- **General ElevenLabs sentiment:** ElevenLabs remains the dominant commercial TTS API in 2026, though open-source alternatives (Chatterbox, Kokoro, Qwen3-TTS) are closing the quality gap. The CLI differentiates by wrapping the full ElevenLabs platform (not just TTS) into a single agent-friendly interface.

## Similar Tools in Directory

| Tool | Overlap | Difference |
|------|---------|------------|
| **OpenMontage** | Content Creation, developer-utility, audio/video workflows | OpenMontage is a full video production system (11 pipelines, 400+ skills); ElevenLabs CLI is audio-only but deeper (TTS, STT, cloning, SFX, dubbing) |
| **AutoAgents (LiquidOS)** | Has local TTS/STT capability | AutoAgents is a full agent framework with TTS/STT as one feature; ElevenLabs CLI is a dedicated audio utility |
| **Impeccable** | developer-utility, Content Creation | Impeccable is a design system tool; no audio overlap |
| **ui.sh** | developer-utility, Content Creation, CLI-based | ui.sh is for UI generation; no audio overlap |

**No direct competitor** exists in the directory for a dedicated audio/voice CLI utility. This would be the first "cli"-tagged entry and the first audio-focused developer utility.

## Open Questions

1. **Which CLI does the article actually mean?** The article mentions `elevenlabs-cli tts` which matches the community CLI syntax. But the "agent-first" framing from ElevenLabsDevs on X refers to the official CLI. Confirm with the article source which tool is intended. **Recommendation:** Add the community CLI as the primary entry (it matches the described features) and mention the official CLI in notes.

2. **Star count concern:** The community CLI has ~0 GitHub stars despite being feature-rich. This is unusual. It may be too new (first release Dec 2025, latest Feb 2026) to have gained traction, or the audience discovers it through Homebrew/crates.io rather than GitHub. Monitor adoption.

3. **Sustainability risk:** Single-maintainer community project wrapping a commercial API. If ElevenLabs ships their own comprehensive CLI (their official one is currently agent-management only), the community CLI could become redundant.

4. **Should the official CLI also get an entry?** The official `elevenlabs/cli` (49 stars) is an IaC tool for voice agent deployment. It could merit its own entry under a different framing (agent deployment/management tool rather than audio utility). This is a separate decision.

5. **ElevenLabs API pricing:** The CLI requires a paid ElevenLabs API key. Worth noting in the directory entry since most other developer-utilities are free/open-source tools.
