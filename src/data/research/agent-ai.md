# Agent.ai — Research Brief

**Researched:** 2026-04-16
**Sources:**
- https://agent.ai/ — homepage / marketplace
- https://agent.ai/pricing — pricing tiers
- https://docs.agent.ai/builder/overview — Agent Builder documentation
- https://simple.ai/p/secret-behind-agent-ai — founder origin story
- https://www.cxtoday.com/crm/hubspot-founders-agentic-ai-platform-surges-past-2500000-users/ — Jan 2025 milestone coverage
- https://www.cxtoday.com/crm/agent-ai-smashes-milestone-with-1000-public-agents-on-its-growing-network/ — 1M+ user / 1K agent milestone
- https://www.cxtoday.com/crm/hubspot-introduces-agent-ai-the-only-network-of-ai-agents/ — HubSpot positioning
- https://analyticsindiamag.com/ai-news-updates/hubspot-co-founder-launches-agentic-ai-platform-agent-ai-records-258k-users-in-just-4-months/ — growth report
- https://www.bostonglobe.com/2025/01/31/business/hubspot-dharmesh-shah-ai-artificial-intelligence-agents/ — Boston Globe coverage
- https://agent.ai/profile/dharmeshai and https://agent.ai/human/dharmesh — creator profile
- X/Twitter via bird CLI: `agent.ai dharmesh`, `@dharmesh` user-tweets, community replies

---

## Summary

Agent.ai is a hosted "professional network for AI agents" built by **Dharmesh Shah, co-founder and CTO of HubSpot**. It is explicitly a *personal side project* run through an LLC Shah owns — not a HubSpot product — although Shah has indicated he hopes it will eventually fold into HubSpot's portfolio (as his prior side project, ChatSpot, did when it became Breeze Copilot). The platform has three layers: a **marketplace** where users discover and run 1,000+ public agents, a **no-code Agent Builder** that lets anyone (technical or not) compose multi-step workflows on a visual canvas, and a **network/identity layer** where both humans and agents have profiles. Launched at HubSpot's INBOUND conference in September 2024, it grew from 10K waitlist signups to 258K users by January 2025 and surpassed 1.1M users with 1,000 public agents by mid-2025. The tagline: "Discover, use and build agents to create your personal AI agent team." Closed-source SaaS. Freemium — marketplace agents are free, Pro is $25/month.

---

## Classification

- **Type:** `multi-agent-platform` — Agent.ai is a platform *for* building and composing agents, not a single agent itself (rules out `agent-tool`) and not developer infrastructure (rules out `developer-utility`). The Builder's visual canvas composes multi-step workflows that can invoke other agents (agent-to-agent calls are a documented Workflow action), and the marketplace is explicitly positioned around combining agents into "teams." This matches the directory's definition of multi-agent-platform.

- **Subtype:** `orchestration-platform` — This is the same shape as **Dify** and **LobeHub** in the directory: a hosted (or self-hostable, in their cases) platform where users browse a marketplace of pre-built agents, compose custom ones via a visual no-code builder, and run them in the cloud. It is not a `framework-sdk` (no SDK, no code-first authoring), not `autonomous-org` (no org-chart/budget/governance layer), not `self-improving`, not `scaffolding`, not `built-in-feature`.

- **Category:** `Individual/Indie & Research` — This is the key nuance. Despite Dharmesh Shah's prominence and the HubSpot association, Agent.ai is explicitly **an LLC side project built with freelancers, not HubSpot employees**, precisely so Shah can "move fast and not be tied to HubSpot product roadmaps" (per simple.ai interview, repeated in Boston Globe and CX Today). The platform is independent from HubSpot. This puts it in the same category as other indie-operator projects in the directory (Impeccable, Paperclip.ing, AgentBnB, etc.) rather than `Team/Organization-Backed` (which covers products built and operated by a company as a company product — Dify, LobeHub, Claude Code, Superagent).

- **Difficulty:** `beginner` — The entire product is pitched at "citizen developers" and non-technical professionals. No code, no CLI, no install; the Builder is a visual canvas with pre-built action blocks, the marketplace is browse-and-run, and Shah has explicitly said "I've removed as many barriers as I can." Pricing ($25/mo Pro) and positioning (INBOUND conference, CRM/sales/marketing professionals) mirror Notion/Zapier, not a developer framework.

- **Use Cases:**
  - `Ops` — Primary. The Builder's seven action categories are heavily skewed toward business-ops workflows: HubSpot CRM & Automation (contact/company management, lead creation, trigger-on-new-contact), Business & Financial Data (company details, financial statements, stock prices), Social Media (X, LinkedIn, Instagram integrations), scheduled recurring runs, webhook triggers from external systems. Pre-built "Sales Prospecting Team" is a headline example. This is the dominant use case.
  - `General-Purpose` — Secondary. Many marketplace agents are genuinely open-ended (domain valuation, newsletter summarization via agent@agent.ai, YouTube video clipping — Shah's origin-story agent). The platform doesn't restrict to one vertical.
  - `Content` — Tertiary but present. Content generation (text, sentiment analysis, image generation) and formatted report/document outputs are first-class Builder actions, and a subset of marketplace agents produce marketing/content deliverables.
  - Not `Dev` — there is no coding use case. The "custom code" action exists inside the Builder but is not what the product is for.
  - Not `Research` — no deep-research or academic-research positioning (a user feature-requested Google Scholar integration on X, indicating it's not currently supported).

- **Features:**
  - No `Open Source` — closed SaaS.
  - No `Self-Hosted` — cloud-only, no on-prem option.
  - `Model-Agnostic` — **Yes.** The docs explicitly state the platform integrates "models from providers like OpenAI and Anthropic" and that users get "access to leading AI models" (CX Today). Multiple underlying providers are supported, which matches how the directory applies this tag to tools like LobeHub (100+ providers) and Mastra (90+).
  - No `Security-Focused` or `Self-Improving` tags warranted.

---

## Directory Entry (Draft)

```json
{
  "name": "Agent.ai",
  "category": "Individual/Indie & Research",
  "type": "multi-agent-platform",
  "use_cases": [
    "Ops",
    "General-Purpose",
    "Content"
  ],
  "features": [
    "Model-Agnostic"
  ],
  "creator": "Dharmesh Shah (HubSpot co-founder & CTO) — AgentAI Platform, Inc. LLC, independent of HubSpot",
  "github_stars": "N/A (closed-source SaaS)",
  "github_url": null,
  "website_url": "https://agent.ai/",
  "full_description": "Hosted 'professional network for AI agents' that combines a 1,000+ agent marketplace, a no-code visual Agent Builder, and a profile/identity layer for both humans and agents. Built by HubSpot co-founder and CTO Dharmesh Shah as an independent LLC side project (AgentAI Platform, Inc.) — not a HubSpot product, but operated by Shah with freelancers so it can move faster than HubSpot's roadmap. The Builder exposes seven action categories (Inputs & Data Retrieval, Social Media, HubSpot CRM & Automation, Business & Financial Data, Workflow & Logic, AI & Content Generation, Outputs) composed on a visual canvas with manual, scheduled, email, webhook, and HubSpot-event triggers. Agents can invoke other agents, giving the platform a practical multi-agent composition model. Launched at HubSpot INBOUND in September 2024; grew from 10K waitlist signups to 258K users by January 2025, and surpassed 1.1M users with 1,000 public agents by mid-2025. Shah has stated he hopes Agent.ai eventually joins the HubSpot portfolio — the same trajectory as his prior side project ChatSpot, which became Breeze Copilot.",
  "key_features": [
    "1,000+ public agent marketplace with browse-and-run discovery",
    "No-code visual Agent Builder (canvas, 7 action categories, preview/debug panel)",
    "Multi-trigger support: manual, schedule, email-address, webhook, HubSpot event",
    "Agent-to-agent invocation as a first-class Workflow & Logic action",
    "Native HubSpot CRM integration (contact/company management, lead creation, event triggers)",
    "Model-agnostic backend (OpenAI, Anthropic, and other providers)",
    "Human and agent profile pages (agent.ai/human/* and agent.ai/profile/*)",
    "Freemium: marketplace agents free; individual premium agents $10/mo; Pro $25/mo"
  ],
  "why_discussed": "One of the highest-profile non-developer multi-agent marketplace/builder platforms in the ecosystem, and a rare example of a major SaaS founder (Dharmesh Shah, HubSpot) running a public independent AI side project at scale (1.1M+ users). Frequently name-checked as a reference point for 'agents for business users' positioning and as a precursor to HubSpot's likely agentic future. Notable for being run through an LLC separate from HubSpot to preserve speed and independence.",
  "notes": "Independent of HubSpot — built by Dharmesh Shah's LLC (AgentAI Platform, Inc.) with freelancers, not HubSpot employees. Shah acquired the agent.ai domain, reportedly from Igor Gabrielan in 2023. Pricing: Pro $25/mo includes all premium agents and private founder community chat; individual premium agents $10/mo each; free marketplace tier. Closed SaaS — no API or self-hosting. Name collides with agents.ai (unrelated), Google Vertex AI Agent Builder, Salesforce Agentforce Agent Builder, MindStudio, and others — the directory entry should be 'Agent.ai' (with the dot preserved) to match the brand.",
  "difficulty": "beginner",
  "tag": "marketplace",
  "subtype": "orchestration-platform",
  "relationships": {
    "alternative_to": [
      "Dify",
      "LobeHub"
    ],
    "works_with": [
      "HubSpot (CRM integration)"
    ]
  }
}
```

---

## Community Sentiment (from X/Twitter)

Searches via bird CLI: `"agent.ai" dharmesh`, `user-tweets dharmesh`, and related queries.

**How people describe it:**
- Consistently framed around Dharmesh Shah's personal ownership and the HubSpot-adjacent identity — community refers to it as "@dharmesh's thing" or "what @dharmesh is building." Not treated as a generic SaaS product; it rides on Shah's personal brand.
- Described as a marketplace/network — Terafab (@lmqlai, March 2026) called it "the #1 professional network/marketplace for AI agents, backed by big names like Dharmesh Shah."
- Sam Darcy (@SamDarcyAI) responded to a question about agent-marketplace concepts with: "I think that is sort of what @dharmesh is building with agent.ai" — the platform is the default reference point for the category.

**Common use cases mentioned:**
- Email a custom address (e.g., `agent@agent.ai`) to get back a newsletter summary or domain valuation (@BrianNull, @domainretail — early 2024 use cases that are still active).
- Domain valuation agent (@vietyork publicly credited as a contributor to one of the early agents).
- HubSpot CRM workflow automation (multiple X replies on HubSpot Spring Spotlight thread reference Agent.ai as a companion to HubSpot).

**What people like:**
- Speed of iteration and MVP delivery — "Dharmesh is lightning fast at making decisions and building MVPs" (@vietyork).
- Loyalty from day-one users — Fred Hsu (@heyheyfred): "I've loved [agent.ai] since day 1!" in reply to Dharmesh + HubSpot + @AgentDotAi thread.
- The newsletter and community around the product (Shah runs an active `agent.ai` email newsletter).

**Criticisms / feature requests:**
- Community requests for deeper research integrations — e.g., Houman Asefi (@houmanasefi) publicly requested Google Scholar / MIT library integration and daily research briefs. Indicates current coverage is ops/CRM-heavy, thin on research.
- Skepticism from one domain investor (@katerleonid) about the domain-acquisition narrative ("Did Dharmesh Shah quietly buy [agent.ai] in 2023… from Igor Gabrielan?"). Not a product criticism, but relevant provenance.
- No major public criticisms of the product itself surfaced in the search — the conversation is largely positive or neutral/inquisitive.

**Compared to:**
- In community discussions, Agent.ai is positioned alongside other agent builders and agent marketplaces; notably, one X user mentioned it alongside a "task engine for AI agents on Solana" in a domain-branding post (lmqlai).
- Implicitly compared to MindStudio, Vertex AI Agent Builder, Salesforce Agentforce, and similar business-oriented no-code agent platforms — though these don't appear in Agent.ai's own marketing.
- Inside the directory, the closest peers are **Dify** (open-source visual orchestration platform) and **LobeHub** (10K+ agent marketplace + multi-agent groups).

**Who's talking about it:**
- HubSpot partners, CRM-adjacent marketers, domain investors, and Shah's personal X audience (~500K+ followers). Not the developer-harness crowd.
- Consistent with the product's non-technical, business-user positioning.

---

## Similar Tools in Directory

| Tool | Similarity | Key Difference |
|---|---|---|
| **Dify** (`Team/Organization-Backed`, `multi-agent-platform` / `orchestration-platform`, 136K stars) | Visual no-code builder for AI agents and workflows; marketplace-style discovery | Dify is open-source and self-hostable; Agent.ai is closed SaaS. Dify targets developers/operators who want to own the stack; Agent.ai targets non-technical professionals in CRM/sales/marketing contexts. |
| **LobeHub** (`Team/Organization-Backed`, `multi-agent-platform` / `orchestration-platform`, 75K stars, `marketplace` tag) | 10,000+ agent marketplace, multi-provider models, Agent Groups for multi-agent composition | LobeHub is open-source, self-hostable, model-agnostic with 100+ providers, and developer-leaning. Agent.ai is closed SaaS, CRM-native, and business-user-first. Both share the `marketplace` tag. |
| **AgentBnB** (`Individual/Indie & Research`, `multi-agent-platform` / `orchestration-platform`, `marketplace` tag) | Agent-to-agent network where agents discover and hire other agents | AgentBnB is a peer-to-peer open-source protocol for agents hiring agents (MCP-native, CLI, escrow); Agent.ai is a centralized hosted marketplace for humans to discover and run agents built by other humans. Same "marketplace" framing, opposite architecture. |
| **Paperclip.ing** (`Zero-Human / Agent Company Orchestration`, `multi-agent-platform` / `autonomous-org`) | Also an independent-operator vision of agents doing real work | Paperclip is an org-chart/budget/governance abstraction for autonomous agent companies; Agent.ai is a task-scoped builder + marketplace for humans to compose lightweight agents. Different abstraction level. |

Agent.ai is the clearest example in the directory of a **closed-source, CRM-adjacent, business-user-first agent marketplace + no-code builder**, run by a well-known founder as an independent side project. It sits in a relatively underpopulated corner of the directory — most `orchestration-platform` entries are either open-source developer frameworks (Dify, LobeHub, Mastra) or enterprise SaaS from larger companies (Superagent, Composio).

---

## Open Questions

1. **Category judgment call.** I classified Agent.ai as `Individual/Indie & Research` because it is explicitly an LLC side project run with freelancers, independent of HubSpot. However, Dharmesh Shah's profile and the 1M+ user scale could justify `Team/Organization-Backed` — it depends on how the directory interprets "backed." Precedent in the directory (Impeccable, Paperclip, AgentBnB — all indie-operator projects with notable creators) supports Indie. Flag for content-agent review.

2. **HubSpot relationship.** Shah has said he hopes Agent.ai eventually joins HubSpot's product portfolio (as ChatSpot → Breeze Copilot did). If that happens, the category should flip to `Team/Organization-Backed` and the creator line should be updated. Worth revisiting if HubSpot announces an acquisition/absorption.

3. **Model disclosure.** Docs confirm "models from providers like OpenAI and Anthropic" — model-agnostic is warranted, but the full provider list is not public. If the directory prefers stricter evidence (e.g., explicit per-agent provider selection in UI), downgrade to no feature tags. I leaned toward including `Model-Agnostic` based on LobeHub/Mastra precedent where multi-provider support warranted the tag.

4. **Use case count.** I tagged `Ops`, `General-Purpose`, and `Content`. If the directory prefers 1–2 tags for clarity, drop `Content` and keep `Ops` + `General-Purpose` (or even just `Ops` given the CRM/HubSpot-heavy Builder actions). Flag for content agent judgment.

5. **Pricing changes.** Pricing page at time of research: free marketplace tier, $10/mo per-agent premium, $25/mo Pro. This may shift — verify before publishing.

6. **Name normalization.** The brand is "Agent.ai" with the dot. The directory has no other entries with dots in the name — should it render as "Agent.ai" or "Agent AI"? I used "Agent.ai" to match the brand.

7. **Public agent count.** Most-cited figure is "1,000 public agents" (CX Today, mid-2025). One X post from March 2026 referenced "2k+ agents" in the context of HubCode integration — the number may be higher now. Use 1,000+ in the entry as a conservative minimum.

8. **HubCode relationship.** An X post from March 2026 (@anodeen) references "HubCode bringing true no-terminal vibe coding straight into the HubSpot UI, with full [agent.ai] reuse (2k+ agents)." This suggests HubSpot is building HubCode *on top of* Agent.ai's agent catalog — worth investigating as a potential `ecosystem` or `works_with` relationship, and a strong signal that the eventual HubSpot absorption is already in motion.
