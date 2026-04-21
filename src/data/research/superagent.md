# Superagent (by Airtable) — Research Brief

**Researched:** 2026-04-16
**Sources:**
- https://superagent.com/ (homepage)
- https://superagent.com/about
- https://superagent.com/use-cases
- https://superagent.com/faq
- https://www.airtable.com/newsroom/introducing-superagent (launch announcement)
- https://techcrunch.com/2026/01/27/airtables-valuation-fell-by-7-million-its-founder-thinks-that-was-just-the-warm-up/
- https://www.vktr.com/digital-workplace/airtable-debuts-superagent-a-multi-agent-ai-research-platform/
- https://x.com/airtable/status/2016187061338779832 (launch tweet, Jan 27 2026)
- https://x.com/micheal/status/2016254457697513854 (Micheal Benedict, launch day)
- https://x.com/ednevsky/status/2024882117469958345 (critical Feb 20 commentary on pivot)
- https://x.com/MakadiaHarsh/status/2016893857800376413 (paid-partner review)
- X/Twitter search via bird CLI (search: "superagent.com airtable", "\"@Superagent\" airtable")

---

## Summary

Superagent is a hosted, multi-agent business-research SaaS launched by Airtable on January 27, 2026. It's Airtable's first standalone product in 13 years, built on the company's October 2025 acquisition of DeepSky, and sits under a new product org led by CEO Howie Liu and newly appointed CTO David Azose (formerly led ChatGPT's business products at OpenAI). Instead of a single chatbot, Superagent uses a coordinating agent that plans a research brief, deploys specialist sub-agents in parallel across credible sources (FactSet, Crunchbase, SEC filings, earnings transcripts, and the open web), and synthesizes the output into one of four "boardroom-ready" deliverables: Super Reports (interactive scrollytelling docs), Super Slides (presentation decks as interactive sites), Super Documents, or full Websites. Pricing is $20/month for Pro (200 runs, $0.50/overage) with a 30-day free trial. The tagline is "Think deeper." It is closed-source, cloud-only, and targets business users, not developers.

---

## Classification

- **Type:** `multi-agent-platform` — Superagent is explicitly marketed as "a multi-agent coordination system": a planner agent spawns parallel specialist sub-agents (financial, competitive, market, synthesis) that work concurrently and produce a merged deliverable. This is not a single standalone agent (rules out `agent-tool`) and not a developer tool or shell around other agents (rules out `developer-utility`). It matches the directory's definition of multi-agent-platform as a product that defines and coordinates agent architectures.
- **Subtype:** `orchestration-platform` — It's a hosted platform that orchestrates specialist agents to complete business research tasks, with the same shape as DeerFlow, Dify, and Emdash in the directory (all tagged `orchestration-platform`). It is not an `autonomous-org` (no org chart, no persistent roles, no budget/governance layer like Paperclip), not a `framework-sdk` (closed SaaS, no SDK), not `self-improving` (no continual-learning claim), not `scaffolding`, not `built-in-feature`.
- **Category:** `Team/Organization-Backed` — Built and operated by Airtable (an $11B-era public-facing SaaS company) on top of an acquired team (DeepSky). Dedicated product org, CTO hired from OpenAI, paid influencer campaign at launch, ICONIQ Capital amplification.
- **Difficulty:** `beginner` — Target user is explicitly "every founder, operator, and decision-maker" — non-technical business users. No code, no CLI, no setup; type a question, get a deliverable. The tool is priced and positioned like Notion or Perplexity Pro, not like a developer framework.
- **Use Cases:**
  - `Research` — Core positioning: "deep, rigorous research that used to be reserved for companies with massive analyst teams." Market analysis, competitive landscapes, due diligence, trend forecasts, investment evaluation. This is the dominant use case.
  - `Content` — Secondary but first-class: the product explicitly outputs slide decks, written documents, and full websites (landing pages, event sites, portfolio showcases, comparison pages). Several community posts highlight the deliverable quality as the "wow" moment, not the research itself.
  - Not `Ops` — no workflow automation or operational task execution.
  - Not `Dev` — no coding or engineering use case.
  - Not `General-Purpose` — the product is explicitly scoped to business research and document generation, not open-ended agent tasks.
- **Features:**
  - No `Open Source` — closed SaaS, no public repo.
  - No `Self-Hosted` — cloud only, no on-prem option per FAQ.
  - No `Model-Agnostic` — Airtable has not disclosed which models power it, and there's no user-facing model selection. Not user-controllable.
  - No `Security-Focused` or `Self-Improving` tags warranted.
  - The directory's feature list is developer-tool-oriented; none of the canonical tags fit cleanly, which is consistent with Superagent being a business-user SaaS rather than infrastructure.

---

## Directory Entry (Draft)

```json
{
  "name": "Superagent",
  "category": "Team/Organization-Backed",
  "type": "multi-agent-platform",
  "use_cases": [
    "Research",
    "Content"
  ],
  "features": [],
  "creator": "Airtable (built on DeepSky acquisition)",
  "github_stars": "N/A (closed-source SaaS)",
  "github_url": null,
  "website_url": "https://superagent.com/",
  "full_description": "Hosted multi-agent business-research platform from Airtable. A coordinating agent plans a research brief, deploys specialist sub-agents in parallel across credible sources (FactSet, Crunchbase, SEC filings, earnings transcripts, open web), and synthesizes outputs into one of four boardroom-ready deliverables: Super Reports (interactive scrollytelling documents with charts and citations), Super Slides (presentation decks rendered as interactive websites), Super Documents (written business plans, white papers, RFP responses), or Websites (landing pages, dashboards, comparison pages). Every output is fact-checked and citation-linked. Designed for non-technical business users — founders, operators, executives, strategists — not developers. Launched January 27, 2026 as Airtable's first standalone product in 13 years, built on the October 2025 acquisition of DeepSky and led by new CTO David Azose (formerly ChatGPT business products at OpenAI).",
  "key_features": [
    "Multi-agent planner/specialist/synthesizer architecture, parallel execution",
    "Four deliverable types: Super Reports, Super Slides, Super Documents, Websites",
    "Premium data sources: FactSet, Crunchbase, SEC filings, earnings transcripts",
    "Inline citations and source traceability on every claim",
    "Interactive, visually-rendered outputs (not plain text summaries)",
    "Shareable URLs for every deliverable",
    "Designed for business users — no prompting expertise required",
    "30-day free trial; $20/mo Pro (200 runs) with $0.50/overage"
  ],
  "why_discussed": "Airtable's first standalone product in 13 years and one of the highest-profile non-developer multi-agent SaaS launches of early 2026. Represents the business-research wedge of the multi-agent platform space (alongside OpenAI/Perplexity/Google Deep Research) and demonstrates a major SaaS incumbent betting its next act on an agent product. Launched alongside a paid influencer campaign and ICONIQ Capital amplification.",
  "notes": "Closed SaaS. No API, no self-hosting, no model selection disclosed. Underlying model providers not publicly specified. Airtable also launched a sibling product, Hyperagent (hyperagent.com), ~3 weeks later in Feb 2026 — it appears to share the underlying team/platform. Name collides with Superagent.sh (YC W24, AI agent red-teaming / open-source framework) and getsuperagent.com (insurance AI) — these are unrelated companies.",
  "difficulty": "beginner",
  "tag": null,
  "subtype": "orchestration-platform",
  "relationships": {
    "alternative_to": [
      "ROMA (Recursive Open Meta-Agent Framework)",
      "DeerFlow"
    ]
  }
}
```

---

## Community Sentiment (from X/Twitter)

**Launch reception (Jan 27–30, 2026):** Airtable's launch tweet (@airtable, Jan 27) got 59 likes, 13 retweets, 10 replies — modest for a company of Airtable's size but amplified by a visible paid-partner campaign (hashtags `#SuperagentPartner` and `#SuperagentbyAirtable #ad`) from creators like @MakadiaHarsh, @Parul_Gautam7, @heyshrutimishra, @javinpaul, and @milan_milanovic. ICONIQ Capital (an Airtable investor) publicly endorsed the product.

**How people describe it:**
- Consistently framed as "multi-agent coordination" or a "team of AI agents" rather than a chatbot. Dr. Milan Milanović: "Not a prompt, but an orchestrated system... 20 minutes later, I got interactive charts, cited sources, and a business plan I could actually hand to someone."
- Troy Tessalone (@AutomationAce_) classified it bluntly: "Superagent is a multi-agent coordination system that builds research plans and deploys specialists to produce finished deliverables from complex business queries."
- Micheal Benedict, a product lead internal to the launch, called it Airtable's "first standalone long-running, general purpose research agent product."

**What people like:**
- The deliverable polish — reports are described as "a rich, visually immersive, interactive deliverable with charts, structure, full citations, and a shareable URL" (Harsh Makadia).
- The parallel-agent feel — "If you've ever wanted AI to think like a cross-functional team working in parallel, this is it" (javinpaul).
- Breadth of output — one reviewer said the output was a complete business plan in 20 minutes.

**Criticisms / skepticism:**
- Alexander Nevedovsky (@ednevsky, Feb 20) — the most pointed public critique: "I tried it, and the output was quite… good. However, is it so much better than what I could get with OpenAI/Anthropic/Google? Probably not." He frames both Superagent and the follow-up Hyperagent as a pivot from an $11B-era company struggling to find its next act, noting both .com domains "must have cost them upwards of 1 million each."
- Heavy reliance on `#ad` paid partners at launch has drawn skepticism about authentic signal vs. marketing.
- No API, no self-hosting, opaque model stack — several technical users noted this means it can't be integrated into existing workflows.

**Compared to:** Perplexity Pro / Deep Research, OpenAI Deep Research, Google Gemini Deep Research, and ByteDance DeerFlow (which was labeled an "open-source SuperAgent" in press coverage, creating naming confusion). Within Airtable's own portfolio, it is paired with the later-launched Hyperagent (more agentic/deployable, per community speculation).

**Who's talking about it:** Business-content creators, marketing influencers, and strategy/operator-type accounts — not the developer-agent crowd. This is consistent with the product's non-technical positioning.

---

## Similar Tools in Directory

| Tool | Similarity | Key Difference |
|---|---|---|
| **DeerFlow** (ByteDance, 59K stars, `multi-agent-platform` / `orchestration-platform`) | Also explicitly a multi-agent research/deliverable platform; press has called DeerFlow an "open-source SuperAgent" | DeerFlow is open-source, self-hostable, and developer-oriented; Superagent is closed SaaS for business users. Opposite ends of the same concept. |
| **ROMA (Recursive Open Meta-Agent Framework)** (`multi-agent-platform` / `self-improving`, Research use case) | Long-horizon multi-agent research system | ROMA is research-code/academic; Superagent is a polished consumer SaaS. ROMA is for building agents; Superagent is a finished product. |
| **Dify** (`multi-agent-platform` / `orchestration-platform`) | Visual multi-agent orchestration | Dify is a platform you build agents *on*; Superagent is a single vertical-SaaS product built *for* business research. |
| **Paperclip** (`multi-agent-platform` / `autonomous-org`) | Multi-agent, delegates work across specialists | Paperclip is a persistent org/company abstraction (org charts, budgets, governance) — Superagent is task-scoped one-shot deliverables. |

Superagent is the clearest example in the directory of a **non-developer, business-user, closed-SaaS multi-agent platform**. Most existing `multi-agent-platform` entries are developer frameworks or open-source orchestrators — Superagent fills a gap in the business/consumer segment.

---

## Open Questions

1. **Model stack undisclosed.** Airtable has not said which LLM(s) power Superagent. Without disclosure, `Model-Agnostic` is not warranted — and the opposite (locked to a single provider) also can't be confirmed. Leave features empty and revisit if Airtable publishes an architecture post.
2. **Hyperagent relationship.** Airtable launched a sibling product, Hyperagent (hyperagent.com), ~3 weeks after Superagent. Community speculation is that they share a backend and team. If Hyperagent is added to the directory later, a `works_with` or `ecosystem` relationship may fit. For now, flag in notes only.
3. **Pricing limits.** The FAQ confirms $20/mo Pro with 200 runs and $0.50 overage, but doesn't specify what counts as a "run," whether outputs are capped by length, or what the free trial restricts. Worth revisiting when Airtable publishes a clearer pricing page.
4. **Name collision.** "Superagent" is a heavily overloaded name:
   - Superagent.sh — YC W24 AI-agent red-teaming / open-source agent framework (Alan Zabihi, Ismail Pelaseyed). Unrelated.
   - getsuperagent.com — insurance-vertical AI. Unrelated.
   - DeerFlow was labeled an "open-source SuperAgent" in press coverage, adding noise.
   The directory entry name should be **"Superagent"** (disambiguated in the description as "by Airtable"), and this collision should be noted in the `notes` field. If the directory later adds the YC Superagent.sh, the two will need clearer disambiguation (e.g., "Superagent (Airtable)" vs. "Superagent (superagent.sh)").
5. **Use case tagging.** I included both `Research` (primary) and `Content` (secondary, given the slide/document/website deliverables). If the directory prefers single-tag entries for clarity, drop `Content` and keep `Research` only. Flag for content agent judgment.
6. **GitHub field.** No repo exists. Used `"github_stars": "N/A (closed-source SaaS)"` and `"github_url": null`, matching the Claude Code and Superconductor precedent.
