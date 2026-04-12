# Hatch — Research Brief

**Researched:** 2026-04-11
**Sources:**
- https://gethatch.eu/ — platform homepage
- https://gethatch.eu/for-claude — AI agent / MCP integration page
- https://github.com/EscapeVelocityOperations/hatch-cli — CLI repository
- https://usehatch.com/ — redirects to same brand (renders JS-only, content matches gethatch.eu)

---

## Summary

Hatch (gethatch.eu / usehatch.com) is a zero-config, EU-hosted Platform-as-a-Service designed specifically for deploying applications built by AI coding agents — primarily Claude Code. Its tagline is "You built something with Claude. Now make it live in seconds." The platform auto-detects Node.js/TypeScript, Python, Go, Rust, and static sites; provisions PostgreSQL and Redis with no setup; and gives every deployment an instant live URL at `appname.gethatch.eu`. The core differentiator is its deep AI integration: it ships an MCP server (`hatch mcp`) and a Claude Code plugin, so agents can deploy, inspect logs, manage environment variables, and restart apps without ever leaving the coding session. It is the smallest, newest, and most AI-native entry in the deployment-platform category — a deliberate counterpart to Vercel or Railway aimed squarely at the vibe-coding workflow.

The operator is `EscapeVelocityOperations` on GitHub. The domain `usehatch.com` appears to be an alternate brand entry point for the same product. The platform is EU-based and GDPR-compliant by default.

---

## Classification

- **Type:** `developer-utility` — Reasoning: Hatch is not an agent itself, nor a multi-agent framework. It is deployment infrastructure that agents use as a tool. It sits in the same category as Vercel CLI, Supabase CLI, or Railway — services that an AI coding agent calls out to as part of a workflow.

- **Subtype:** `infrastructure` — Reasoning: Among the developer-utility subtypes, `infrastructure` is the precise fit. Like Open Harness (MaxGfeller) and Local AI Memory Sync Engine, Hatch is a foundational runtime/hosting layer rather than a quality-testing, GUI, or reference tool.

- **Category:** `Harnesses-Adjacent` — Reasoning: Hatch does not run agents or orchestrate them; it hosts what agents build. It is adjacent to agent harnesses in the same way Vercel CLI and AgentCI are — it serves agent workflows without being an agent itself.

- **Difficulty:** `beginner` — Reasoning: Zero-config deployment, no Dockerfile or YAML, one-command `hatch deploy`, free tier. This is explicitly designed to lower the barrier for vibe-coders who are not DevOps engineers. Comparable to Vercel CLI's beginner rating.

- **Use Cases:**
  - `Software Development` — primary; the entire product is oriented around taking code produced by Claude Code and making it live.

- **Features:** None of the standard feature tags apply cleanly. Hatch is not Open Source (CLI is MIT but the platform is commercial), not Self-Hosted, not Model-Agnostic (it is Claude-first), not Security-Focused or Self-Improving in the tracked senses. Leave features array empty or add `Open Source` only if the CLI being MIT-licensed is considered sufficient — needs verification (see Open Questions).

---

## Directory Entry (Draft)

```json
{
  "name": "Hatch",
  "category": "Harnesses-Adjacent",
  "type": "developer-utility",
  "use_cases": ["Software Development"],
  "features": [],
  "creator": "EscapeVelocityOperations",
  "github_stars": 1,
  "github_url": "https://github.com/EscapeVelocityOperations/hatch-cli",
  "website_url": "https://usehatch.com",
  "full_description": "Zero-config, EU-hosted deployment platform built for apps produced by AI coding agents. The tagline is 'You built something with Claude. Now make it live in seconds.' Auto-detects Node.js/TS, Python, Go, Rust, and static sites; provisions PostgreSQL and Redis automatically; every deploy gets an instant live URL at appname.gethatch.eu. Ships an MCP server (`hatch mcp`) and a Claude Code plugin, giving agents deploy_app, get_app_logs, set_env_var, restart_app, and other tools without leaving the session. Free tier includes 2 hours daily compute per app; Always On is €12/month per app. All infrastructure is EU-hosted and GDPR-compliant.",
  "key_features": [
    "One-command zero-config deploy (hatch deploy)",
    "MCP server exposes deployment tools to Claude Code agents",
    "Claude Code plugin via /plugin marketplace",
    "Auto-provisioned PostgreSQL and Redis (no setup)",
    "Instant live URLs (appname.gethatch.eu)",
    "EU-hosted, GDPR-compliant infrastructure"
  ],
  "why_discussed": "Purpose-built for the Claude Code + vibe-coding workflow. The MCP integration means AI agents can ship what they build without breaking out of the conversation — closing the loop from 'write code' to 'live URL' in one agent session.",
  "notes": "Platform at gethatch.eu; usehatch.com is alternate entry point. CLI repo (Go, MIT license) has 1 star — very new. Free tier: 2 hrs/day per app; Always On: €12/mo. Apps must bind to port 8080; no persistent local file writes (use DATABASE_URL). Claude Code plugin: /plugin marketplace add https://github.com/EscapeVelocityOperations/hatch-cli",
  "difficulty": "beginner",
  "tag": "cli",
  "subtype": "infrastructure",
  "relationships": {
    "works_with": ["Claude Code"],
    "alternative_to": ["Vercel CLI"]
  }
}
```

---

## Community Sentiment (from X/Twitter)

X searches for `gethatch.eu`, `usehatch`, and `hatch deploy Claude Code` returned no results, and the @Gethatch handle belongs to an unrelated Dutch ecommerce company (Hatch by PriceSpider, acquired 2022). The Hatch deployment platform does not appear to have an active X presence yet, and the CLI repo has 1 GitHub star — consistent with a very early-stage or recently-launched indie product.

Web search surfaces the platform prominently when searched alongside "Claude Code" and "vibe coding," but no reviews, tutorials, Reddit threads, or Hacker News submissions were found.

**Summary of available sentiment signals:**
- **How people describe it:** Not enough data from community — described on its own site as "the vibe-to-prod platform for Claude Code workflows."
- **Common use cases mentioned:** Deploying Claude Code-built apps to production; rapid prototyping and sharing previews.
- **What people like:** Zero config; no Dockerfile/YAML; EU data residency; free tier; MCP integration.
- **Criticisms or limitations:** None found in community (too early). Technical constraints to note: 500 MB max artifact, port 8080 required, no persistent local file storage across redeployments.
- **Compared to:** Vercel, Railway (implied by positioning — "no Dockerfile, no YAML, instant URLs").

---

## Similar Tools in Directory

1. **Vercel CLI** (`Harnesses-Adjacent`, `developer-utility`, `infrastructure`) — The most direct comparable. Both deploy web apps with zero-config, return instant URLs, and ship an MCP server for coding agents. Vercel is the established leader (15,200 stars, global CDN, 40+ commands); Hatch is the challenger positioned as simpler, EU-first, and Claude-native. The `alternative_to: Vercel CLI` relationship is appropriate.

2. **Supabase CLI** (`Harnesses-Adjacent`, `developer-utility`) — Adjacent in the "agents use this to provision backend resources" space. Supabase provides database/auth/storage; Hatch provides hosting/deployment. Complementary rather than competing — a Claude Code agent might use both in the same workflow.

3. **AgentCI** (`Harnesses-Adjacent`, `developer-utility`, `quality-tool`) — Also a harnesses-adjacent developer utility for the agent software development workflow, but focused on eval/CI/testing rather than deployment. Different lane, same category.

4. **Open Harness (MaxGfeller)** (`Individual/Indie & Research`, `developer-utility`, `infrastructure`) — Both are `infrastructure` subtypes for agent-adjacent dev workflows, but Open Harness is an embeddable TypeScript library for harness primitives, not a PaaS deployment platform.

---

## Open Questions

1. **Is usehatch.com the canonical URL or is gethatch.eu?** The website at usehatch.com renders only "Hatch" (JS-only, no indexed content). The gethatch.eu domain is fully crawlable and has all content. Use `usehatch.com` as `website_url` only if it's confirmed to be the intended brand entry point — otherwise swap to `https://gethatch.eu`.

2. **Who is the creator/operator?** GitHub org is `EscapeVelocityOperations` but no individual founder name or company name is stated anywhere in the public-facing materials. Verify before adding a proper `creator` value.

3. **Open Source feature tag?** The CLI repo (`hatch-cli`) is MIT-licensed Go code. However the platform itself is proprietary SaaS. The directory's `Open Source` feature tag likely means the tool itself is OSS — clarify whether CLI-only OSS qualifies.

4. **Is there a Twitter/X account** for this specific Hatch product? The @Gethatch handle is taken by an unrelated company. If the product has no social presence, that is relevant to the `why_discussed` framing.

5. **Relationship with Railway or Render?** The platform positions against Vercel/Railway/Heroku but no explicit comparisons appear in the docs. Confirm whether `alternative_to` should list Railway or Render in addition to Vercel CLI.

6. **"Energy" pricing model** — The MCP docs reference `check_energy` and `boost_app` tools, suggesting a credit/energy-based billing model (rather than standard compute hours). Verify the full pricing structure before the entry goes live.
