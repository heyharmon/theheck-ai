# designdotmd — Research Brief

**Researched:** 2026-04-16
**Sources:**
- Announcement tweet: https://x.com/bidah/status/2046722613465014380 (Tue Apr 21 2026, 650 likes, 39 RTs)
- Project site: https://designdotmd.directory/
- npm package: https://www.npmjs.com/package/designdotmd (v0.4.1, Apache-2.0, published Apr 16 2026)
- Creator GitHub: https://github.com/bidah (Rodrigo Figueroa / "ROFI", Chile)
- Quoted tweet: https://x.com/stitchbygoogle/status/2046624729403142320 (Stitch by Google open-sourcing the DESIGN.md spec)
- Adjacent ecosystem signal: VoltAgent/awesome-design-md, google-labs-code/design.md
- bird CLI search "designdotmd OR design.md directory" (n=15)

## Summary

**designdotmd** is a web directory and companion CLI (`npx designdotmd add <slug>`) that packages 100+ ready-made `DESIGN.md` files for coding agents. Each entry is a design system spec (colors, typography, spacing, components, accessibility rules) formatted per Google Stitch's newly open-sourced DESIGN.md spec, shown on the site with desktop and mobile previews plus "kitchen sink" design-system samples, filterable by category and searchable. Drop a design.md into your project and agents like Claude Code, Cursor, or Codex generate UI that matches that identity. Created by Rodrigo Figueroa (@bidah / ROFI), a Chile-based builder who ships AI/React Native experiments, and announced April 21, 2026 as a direct response to Google Stitch open-sourcing the DESIGN.md draft specification earlier the same day.

## Classification

- **Type:** `developer-utility` — it is not itself an agent; it distributes context files (`DESIGN.md`) that agents read. Parallel pattern to Skills CLI (npm for agent SKILL.md files) and awesome-agent-skills (directory of skills).
- **Subtype:** `reference` — it is a curated, browseable catalog of reusable assets (DESIGN.md files) with CLI distribution. "reference" fits better than `meta-tool` because Skills CLI claims the meta-tool slot (a package manager/registry), while designdotmd is a content directory with an add-only CLI. It sits closer to awesome-agent-skills and awesome-design-md in spirit.
- **Category:** `Individual/Indie & Research` — built and shipped solo by Rodrigo Figueroa, no org backing, Apache-2.0 npm package, ~50 hours after the Stitch spec drop.
- **Difficulty:** `beginner` — one command, no config. Target user does not need to read the spec; they pick a design.md from the gallery and ship.
- **Ladder rung:** `null` — this is a companion/infra tool. It does not sit on the 6-rung capability ladder (no autonomy, no agent capability of its own). Same rationale as Skills CLI and ui.sh (both `developer-utility` off-ladder).
- **Audience:** `Curious builder` — primary user is an indie maker / vibe coder using a harness (v0, Claude Code, Cursor) who wants their UI to not look AI-generated. Developers also benefit, but the pitch is "browse, pick, ship" — gallery-driven, not developer-first.
- **Use Cases:** `Dev`, `Content` — scaffolding UI for real apps (Dev) and design-forward landing pages / marketing sites (Content).
- **Features:** `Open Source`, `Model-Agnostic` — npm package is Apache-2.0; DESIGN.md is a plain-text spec readable by any coding agent. Not `Self-Hosted` (site is hosted on designdotmd.directory, though the CLI runs locally — follow Skills CLI precedent and omit Self-Hosted).
- **Tag:** `design`

## Directory Entry (Draft)

```json
{
  "name": "designdotmd",
  "category": "Individual/Indie & Research",
  "type": "developer-utility",
  "subtype": "reference",
  "use_cases": ["Dev", "Content"],
  "features": ["Open Source", "Model-Agnostic"],
  "creator": "Rodrigo Figueroa (@bidah / ROFI)",
  "github_stars": "N/A",
  "github_url": null,
  "website_url": "https://designdotmd.directory",
  "full_description": "A directory of 100+ ready-made DESIGN.md files for coding agents, plus a one-command CLI (`npx designdotmd add <slug>`) that drops a chosen spec into your project. Each entry conforms to Google Stitch's newly open-sourced DESIGN.md draft specification — a plain-markdown format that encodes a visual identity (colors, typography, spacing, components, accessibility/WCAG rules) so coding agents know exactly what 'on-brand' means without guessing. The site shows each design.md as desktop and mobile previews with 'kitchen sink' design-system samples, filterable by category and searchable. Announced April 21, 2026 by Chile-based indie builder Rodrigo Figueroa (@bidah / 'ROFI') roughly half a day after Google Stitch open-sourced the spec. Positioned as the fastest way to turn a generic, AI-generated UI into something that looks intentional. CLI is Apache-2.0 on npm; model-agnostic — a DESIGN.md is plain markdown any agent (Claude Code, Cursor, Codex, v0, Gemini CLI) can read.",
  "key_features": [
    "100+ pre-built DESIGN.md files across categories (SaaS, fitness, consumer, landing, dashboards, etc.)",
    "Desktop and mobile preview plus kitchen-sink design-system samples for every entry",
    "Category filters and search on the web directory",
    "One-command install: `npx designdotmd add <slug>`",
    "Built on Google Stitch's open DESIGN.md draft specification",
    "Model-agnostic — drop into any coding agent's project (Claude Code, Cursor, Codex, v0, Gemini CLI)",
    "Apache-2.0 CLI on npm (designdotmd)"
  ],
  "why_discussed": "First serious content directory for the DESIGN.md format — shipped the same day Google Stitch open-sourced the spec, turning a specification into an instantly useful, browseable catalog. 650+ likes on launch. Fills the gap between 'AI-generated UI looks sloppy' and 'reading a design spec is too much friction': pick a design.md from a gallery, run one command, ship.",
  "notes": "Apache-2.0. Creator Rodrigo Figueroa (@bidah on X, bidah on GitHub), based in Chile. Ships AI / React Native experiments; previously worked on Daytona + Expo + OpenCode React Native harness demos. designdotmd package v0.4.1 on npm as of Apr 21 2026. No public GitHub repo surfaced for the directory itself at research time — only the npm CLI. Related ecosystem: VoltAgent/awesome-design-md (GitHub list of brand-inspired DESIGN.md files) and google-labs-code/design.md (the official spec repo).",
  "difficulty": "beginner",
  "tag": "design",
  "ladder_rung": null,
  "audience": "Curious builder",
  "capabilities_unlocked": [
    "Give a coding agent a coherent visual identity in one command — no design system to write",
    "Browse 100+ real design systems (with live previews) instead of prompting 'make it look professional'",
    "Switch design languages between projects without re-describing spacing, color, and typography",
    "Hand a v0 / Cursor / Claude Code project a spec that follows WCAG rules out of the box",
    "Sample design directions in minutes — swap the design.md, re-run the agent, compare"
  ],
  "good_for": [
    "Indie makers and vibe coders whose AI-built UIs all 'look the same' and want a quick design upgrade",
    "Designers and PMs shipping with v0 / Lovable / Bolt who want a non-generic look without hiring",
    "Developers on Claude Code / Cursor / Codex who want to drop in a visual-identity context file and move on"
  ],
  "not_for": [
    "Teams that already maintain a custom design system — roll your own DESIGN.md instead",
    "Projects needing pixel-perfect brand compliance — the provided design.md files are inspirational, not official brand assets",
    "Anyone looking for interactive component libraries — DESIGN.md is a spec, not code (use shadcn/ui or ui.sh for components)"
  ],
  "graduate_to": ["ui.sh", "Skills CLI"],
  "relationships": {
    "works_with": ["Claude Code", "Cursor", "v0"],
    "ecosystem": ["Skills CLI", "ui.sh"]
  }
}
```

## Community Sentiment (from X/Twitter)

- **How people describe it:** The launch tweet frames it as "more than a hundred design.md to choose from for free with desktop and mobile previews, kitchen sink design system samples, filters by category and search." Adjacent ecosystem voices (Marwan @marwan_ux) describe the DESIGN.md pattern broadly as "a dead-simple Markdown file that sits in your root directory and tells your AI exactly how NOT to ruin your UI."
- **Common use cases mentioned:** Porting / adopting a design system into coding-agent projects quickly; avoiding the "sloppy AI UI" problem; pairing with v0, Claude Code, Cursor.
- **What people like:** Timing (shipped same day as Stitch's spec open-sourcing); gallery UX with previews beats raw markdown lists; single-command install.
- **Criticisms or limitations:** Too early for direct criticism on the tweet itself (12 replies at research time). General criticism of the DESIGN.md category from the ecosystem: one designer (@uxerik_) noted that even with a careful design system md file, agents still struggle with Figma → code parity — the spec helps, but doesn't fully close the gap.
- **Compared to:** VoltAgent/awesome-design-md (curated GitHub list of 40+ brand-inspired DESIGN.md files — designdotmd is bigger, previewed, and installable via CLI); the broader "awesome-*" family (awesome-agent-skills, awesome-claude-code, awesome-openclaw-skills) that hailey @haileyhmt consolidated into a directory site — designdotmd occupies the same shape in the DESIGN.md niche.

## Similar Tools in Directory

- **Skills CLI** (Vercel, `developer-utility` / `meta-tool`, off-ladder) — the closest structural parallel: npm-installable markdown context for coding agents. Skills CLI is a registry/package manager for SKILL.md (behavioral capabilities); designdotmd is a content directory for DESIGN.md (visual identity). Different axis, same pattern.
- **ui.sh** (Adam Wathan & Steve Schoger, `developer-utility` / `design-tool`, off-ladder) — same design-engineering goal (make AI-generated UIs not look bad) but different mechanism: ui.sh is a code-generating CLI, designdotmd is a context-file directory. Complementary, not competing.
- **awesome-agent** (`developer-utility` / `reference`) — precedent for the `reference` subtype on curated directories of agent-ecosystem content.

designdotmd differs from all three by being the first content directory specifically for Google Stitch's DESIGN.md spec, with a web gallery front door (previews, filters, search) that Skills CLI and awesome-agent do not have.

## Open Questions

1. **GitHub repo.** The npm package `designdotmd` is published under `bartoindahouse` (Rodrigo Figueroa) but no public GitHub repo surfaced for the directory site or the CLI at research time. `github_url` set to `null` and `github_stars` to `"N/A"` — confirm if a repo gets published and update before going live.
2. **License clarity.** The npm package declares Apache-2.0, but the individual DESIGN.md files on the site may carry different licensing (inspired-by-brand files have attribution concerns). Worth a site footer check before classifying `features: ["Open Source"]` broadly.
3. **Subtype choice (`reference` vs `meta-tool`).** Argued for `reference` here — it's a content catalog with a thin install CLI, not a package manager. If the directory's taxonomy treats any CLI-installable markdown as `meta-tool`, reclassify accordingly.
4. **`graduate_to` targets.** `ui.sh` and `Skills CLI` are directional graduations (to real design-engineering CLIs and to the broader skills ecosystem). Verify these feel right or leave empty.
5. **Creator handle.** Twitter is `@bidah`, GitHub is `bidah`, npm maintainer is `bartoindahouse`, display name is "ROFI", legal name Rodrigo Figueroa. Entry uses "Rodrigo Figueroa (@bidah / ROFI)" — confirm preferred attribution.
