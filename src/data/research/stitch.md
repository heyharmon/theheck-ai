# Stitch by Google — Research Brief

**Researched:** 2026-04-16
**Sources:**
- https://x.com/stitchbygoogle/status/2046624729403142320 (DESIGN.md open-source launch tweet)
- https://x.com/stitchbygoogle (recent launch thread — "vibe design partner", AI-native canvas, native image gen, copy/paste across projects, DESIGN.md syncing)
- https://stitch.withgoogle.com (product home — "Design with AI")
- https://blog.google/innovation-and-ai/models-and-search/google-labs/stitch-ai-ui-design/
- https://developers.googleblog.com/stitch-a-new-way-to-design-uis/
- https://blog.google/technology/google-labs/stitch-gemini-3/
- https://the-decoder.com/google-labs-turns-stitch-into-a-full-ai-design-platform-that-converts-plain-text-into-user-interfaces/
- https://uxpilot.ai/blogs/google-stitch-ai
- X search — community sentiment (EanDesigns, darialitlfld, coreyganim, arshi_mohib, BEnhancer, jaykardis, Kraggich)

## Summary
Stitch is Google Labs' AI UI-design product. You describe a mobile or web app in natural language (or sketch, voice, or screenshot) and Stitch generates a complete multi-screen UI — branding, layout, components, and exportable front-end code — on an AI-native canvas. Originally launched at Google I/O 2025 as a text-to-UI tool, it relaunched in 2026 as a full "vibe design partner" with a design agent, voice-driven editing, native image/logo generation, copy-paste across projects, Figma export, and a "View Code" panel. Runs on Gemini 2.5 Flash (Standard, 350 gens/mo) and Gemini 2.5 Pro / Gemini 3 (Experimental, 50 gens/mo), free through Google Labs. The April 21, 2026 launch open-sourced the **DESIGN.md** draft spec — a portable design-rules file agents can import/export and validate (incl. WCAG accessibility) — with a CLI validator and MCP hookups so tools like Claude Code can consume a Stitch design system directly.

## Classification
- **Type:** `agent-tool` — Stitch is a hosted agentic app you prompt; it plans and produces full UIs, not just snippets. It is consumer-facing, not a dev SDK/framework.
- **Subtype:** `agentic-app` — same shape as v0, Lovable, Bolt: prompt-in, generated project out, visual canvas, code export.
- **Category:** Team/Organization-Backed (Google Labs).
- **Difficulty:** `beginner` — zero code setup; natural-language and voice are the primary input; non-designers regularly ship design systems with it (per community workflows).
- **Use Cases:** `Dev`, `Content` — mirrors v0's use_cases. It is fundamentally a UI/design + code-scaffold tool, which the directory maps into Dev + Content.
- **Features:** none confirmed from the directory's feature tag set (not open-source, not self-hosted, not model-agnostic — it is Gemini-only and closed product). DESIGN.md *spec* is open-sourced (Apache-style repo), but the Stitch product itself is closed.

## Ladder placement: rung 2 (Agentic Apps)
v0 sits at rung 2 as the canonical "prompt → deployed UI" consumer product. Stitch is the closest peer — same audience (curious builders, designers, PMs, indie makers) and same interaction model. It differs from v0 in two material ways, but neither moves it off rung 2:
1. **Design-first, code-second.** Stitch's canvas is a design surface with an optional code view and Figma export; v0's canvas is a live app preview with GitHub sync and 1-click Vercel deploy. Stitch does not host/deploy apps.
2. **Model lock-in is Google's stack (Gemini).** v0 runs on Vercel's in-house models.
Both are rung 2: describe-it-and-get-a-working-artifact products for people without a dev environment.

## Directory Entry (Draft)

```json
{
  "name": "Stitch",
  "category": "Team/Organization-Backed",
  "type": "agent-tool",
  "subtype": "agentic-app",
  "use_cases": ["Dev", "Content"],
  "features": [],
  "creator": "Google Labs",
  "github_stars": "N/A (product is closed-source; DESIGN.md spec repo is separate)",
  "github_url": null,
  "website_url": "https://stitch.withgoogle.com",
  "full_description": "Google Labs' AI UI designer. Describe a mobile or web app in natural language — 'a meditation app with a calming palette,' 'a dashboard for a running coach,' 'a dark-mode checkout flow' — and Stitch generates a full multi-screen UI with branding, layout, components, and exportable front-end code on an AI-native canvas. Originally launched at Google I/O 2025 as a text-to-UI tool, it relaunched in 2026 as a 'vibe design partner' with a persistent design agent, voice-driven editing ('show me this in three palettes'), native image/logo generation on the canvas, copy-paste across projects, image/sketch/screenshot-to-UI, Figma export, and a View Code panel. Runs on Gemini 2.5 Flash (Standard, 350 generations/month) and Gemini 2.5 Pro / Gemini 3 (Experimental, 50 generations/month). Free via Google Labs. In April 2026, Google open-sourced the DESIGN.md draft spec — a portable design-rules file agents can import, export, and validate against WCAG — with a CLI validator and MCP integrations so downstream tools (e.g. Claude Code) can consume a Stitch design system directly.",
  "key_features": [
    "Natural-language, voice, sketch, and screenshot inputs all generate full multi-screen UIs",
    "AI-native canvas with a persistent design agent that tracks progress and gives real-time critiques",
    "Native image generation on the canvas (logos, hero graphics) that the agent drops into the UI",
    "Copy & paste screens across projects — mix design systems and styles",
    "Figma export and a View Code panel for clean front-end code",
    "DESIGN.md — open-sourced portable design-system spec with WCAG validation and CLI validator; works across tools via MCP",
    "Runs on Gemini 2.5 Flash / 2.5 Pro / Gemini 3; free via Google Labs"
  ],
  "why_discussed": "Alongside v0, Lovable, and Bolt, Stitch is a canonical consumer 'describe a UI, get a working design + code' product. It is the design-led entry point in Google's Gemini stack and pairs naturally with Claude Code / Cursor via MCP, which the community has turned into a repeatable workflow (design in Stitch, implement in a coding agent). The April 2026 DESIGN.md launch is notable because it is the first serious attempt at a portable, agent-readable design-system file format — sentiment is split: some call it genuinely useful scaffolding, others find Stitch's output generic vs. Claude Design.",
  "notes": "Closed-source product; Gemini-only. Launched at Google I/O 2025 as text-to-UI; relaunched 2026 as a full 'vibe design partner' AI-native canvas. April 21 2026: DESIGN.md draft spec open-sourced with CLI validator and components-section experiment. MCP server lets Claude Code (and other agents) read a Stitch design system directly — this is the main interop story. Community sentiment is mixed — fans love the free tier and the $3-5k-service-in-2-minutes workflow; critics (including Claude Design users) find output generic on non-light themes.",
  "difficulty": "beginner",
  "tag": "agentic-app",
  "ladder_rung": 2,
  "audience": "Curious builder",
  "capabilities_unlocked": [
    "Generate a full multi-screen mobile or web UI from a single natural-language prompt",
    "Iterate on designs with voice ('show me three palettes', 'make it feel like high-end stationery')",
    "Turn a sketch, wireframe, or screenshot into a clean digital UI",
    "Export a production-ready design system as DESIGN.md and hand it to a coding agent via MCP",
    "Share a live link for client approval before any code is written"
  ],
  "good_for": [
    "Designers, PMs, and indie makers who want polished multi-screen UIs from a prompt without opening Figma from scratch",
    "Non-developers who need mockups and a design system they can hand off to a coding agent (Claude Code, Cursor) via DESIGN.md / MCP",
    "Client work where the design needs sign-off before a single line of code is written"
  ],
  "not_for": [
    "Deploying a working app — Stitch stops at design + code export; it does not host or ship production apps (use v0, Lovable, or Bolt for that)",
    "Editing in your existing repo — Stitch generates its own projects; it does not run as an agent in your codebase",
    "Teams that need self-hosted, on-prem, or model-agnostic generation — Stitch is closed-source and Gemini-only"
  ],
  "graduate_to": ["Claude Code"],
  "relationships": {
    "alternative_to": ["v0"],
    "ecosystem": ["Google Gemini", "Quiver"]
  }
}
```

## Community Sentiment (from X/Twitter)
- **How people describe it:** "vibe design partner," "UI generator for mobile and web apps," "free design-system generator." Google itself uses "Design with AI" and "vibe design."
- **Common use cases mentioned:** Generating design systems and mockups from brand inputs (colors + fonts + logo); producing screens for client approval before coding; feeding a DESIGN.md into Claude Code via MCP to build a Next.js site. Corey Ganim documented the full "$3-5k service" workflow: plug brand into Stitch → share link for approval → Claude Code pulls design system via MCP → working Next.js site.
- **What people like:** Free tier, speed (minutes for full design system), image-to-UI, shareable review links, the new DESIGN.md + MCP story.
- **Criticisms or limitations:** "Generic and a bit like AI slop" (arshi_mohib) compared to Claude Design; "design fidelity drops in dark-mode themes" (tawer1O); "was pretty trash when I tried it" (BEnhancer). Mixed reactions overall — clearly a polarizing product vs. Claude Design as of April 2026.
- **Compared to:** v0, Lovable, Figma (AI features), Claude Design ("Design by Claude"), UX Pilot. Community frames it explicitly as rung 2.

## Similar Tools in Directory
- **v0 (Vercel)** — closest peer, same rung, same "prompt-to-UI + code export" pattern. Stitch is design-first (Figma export, design agent, MCP handoff); v0 is app-first (GitHub sync, Vercel deploy). Use `alternative_to`.
- **Lovable / Bolt (rung 2 builders)** — adjacent; both ship full deployed apps rather than design systems.
- **Quiver (design-tool)** — directory peer in design-tool space; `ecosystem` link for design-tool neighborhood.
- **Google Gemini** — model provider; `ecosystem` link.

## Open Questions
- DESIGN.md spec GitHub URL was abbreviated in the tweet (t.co); content agent should resolve the canonical `github.com/...` URL before publishing if that repo ends up linked.
- Exact MCP server name/package for Stitch — the community references it but I did not verify the canonical identifier from Google. Worth confirming before wiring additional `works_with` relationships (e.g. to Claude Code).
- Pricing appears fully free via Google Labs as of April 2026, but Google Labs products have historically moved to paid tiers — confirm before launch.
