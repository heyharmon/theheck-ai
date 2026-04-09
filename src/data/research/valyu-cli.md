# Valyu CLI — Research Brief

**Researched:** 2026-04-09
**Sources:**
- https://github.com/valyuAI/valyu-cli
- https://api.github.com/repos/valyuAI/valyu-cli
- https://docs.valyu.ai/integrations/agent-skills
- https://docs.valyu.ai/pricing
- https://www.valyu.ai/company
- https://www.valyu.ai/pricing
- https://dev.to/edet/understanding-valyu-ai-native-search-and-a-cli-tool-to-experiment-faster-21di
- https://medium.com/@unicodeveloper/10-must-have-clis-for-your-ai-agents-in-2026-51ba0d0881df
- https://x.com/ValyuOfficial/status/2037598857345835204
- https://x.com/unicodeveloper/status/2037602316178608404

## Summary

Valyu CLI is the official command-line interface for Valyu, a London-based AI-native search platform founded at UCL by Harvey Yorke, Hirsh Pithadia, and Alexander Ng Yew Shen. It gives AI agents (and humans) terminal access to 36+ specialized data sources — SEC filings (10-K, 10-Q, 8-K, 13F/G/D), PubMed, arXiv, bioRxiv, medRxiv, clinical trials, FDA drug labels, ChEMBL (2.5M bioactive compounds), USPTO patents, FRED economic indicators, BLS, World Bank, USASpending, live market data from 70+ exchanges, and real-time web search. The CLI solves a critical agent problem: when agents need factual financial, scientific, or regulatory data, web search returns news articles and Wikipedia pages instead of authoritative source material. Valyu returns structured, attributed data from the actual sources. The platform claims 79% on FreshQA (vs Google's 39%) and 73% on finance-specific queries (vs Google's 55%). It ships a SKILL.md file enabling AI agents to call it directly without MCP server setup, claimed to be 4-32x cheaper in tokens than MCP-based approaches. MIT-licensed, TypeScript, very early stage (1 GitHub star, 1 contributor, created March 23, 2026).

## Classification

- **Type:** developer-utility
- **Category:** Harnesses-Adjacent — Valyu CLI is not an agent harness or orchestration framework itself; it is a specialized data-access tool that augments agent capabilities, fitting the same pattern as AgentCI, PromptLock, and other adjacent utilities in the directory.
- **Difficulty:** Beginner — Installation via npm/brew/curl, authentication via a single API key, straightforward commands (search, answer, contents, deep-research). $10 free credits, no complex setup.
- **Use Cases:** Research & Science, Business Operations
  - *Research & Science:* Primary use case — academic papers, biomedical databases, clinical trials, patents, economic indicators.
  - *Business Operations:* SEC filings, earnings transcripts, stock/crypto/forex data, competitive intelligence reports.
- **Features:** Open Source
  - MIT license, GitHub-hosted. Not self-hosted (relies on Valyu's API). Not model-agnostic (it is a data tool, not an LLM wrapper). Not security-focused or self-improving.
- **Tag:** cli

## Directory Entry (Draft)

```json
{
  "name": "Valyu CLI",
  "category": "Harnesses-Adjacent",
  "type": "developer-utility",
  "use_cases": [
    "Research & Science",
    "Business Operations"
  ],
  "features": [
    "Open Source"
  ],
  "creator": "Valyu (London, UK)",
  "github_stars": 1,
  "github_url": "https://github.com/valyuAI/valyu-cli",
  "full_description": "Official CLI for Valyu's AI-native search platform, giving agents and humans terminal access to 36+ specialized data sources including SEC filings, PubMed, arXiv, clinical trials, patents, FRED economic indicators, and live market data from 70+ exchanges. Four core commands — search, answer, contents, and deep-research — return structured, attributed data instead of web search noise. Ships with a SKILL.md file for direct agent integration without MCP setup, claimed 4-32x cheaper in tokens. Pay-per-retrieval pricing with $10 free credits on signup.",
  "key_features": [
    "36+ specialized data sources (SEC, PubMed, patents, FRED, ChEMBL)",
    "DeepResearch mode with 4 depth levels (fast to max)",
    "SKILL.md agent integration without MCP overhead",
    "Structured JSON output for scripting and CI/CD",
    "Pay-per-retrieval with cost caps (--max-price)"
  ],
  "why_discussed": "Listed as a top-10 must-have CLI for AI agents in 2026. Solves the critical problem of agents falling back to web search when they need authoritative financial, scientific, or regulatory data. Claims 79% FreshQA accuracy vs Google's 39%.",
  "notes": "Very early stage: 1 star, 1 contributor, created March 2026. v1.0.3 latest. Requires API key from platform.valyu.ai. $10 free credits. Pricing: $0.50/1k (open sources) to $50/1k (proprietary). MIT license.",
  "website_url": "https://www.valyu.ai",
  "difficulty": "beginner",
  "tag": "cli"
}
```

## Community Sentiment

**Positive signals:**
- Listed as #4 in "10 Must-Have CLIs for Your AI Agents in 2026" (Medium/unicodeveloper) — praised for solving the "web search returns news articles instead of real data" problem.
- The same author (@unicodeveloper on X) called it "the best CLI for search, deepresearch & information retrieval of any kind for any AI agent (or human) in the world."
- Valyu's DeepResearch (fast mode) claims #1 on ScholarQA, the Nature-published benchmark for AI scientific literature reviews — 29% ahead of OpenScholar, beating Perplexity Pro and PaperQA2.
- DEV Community tutorial exists showing practical usage for RAG pipelines and agent testing.
- Official Valyu blog post describes integration with OpenClaw for automated research workflows.

**Neutral/cautionary signals:**
- The CLI repo itself is extremely new (created March 23, 2026) with only 1 star and 1 contributor — this is a first-party tool from a small startup, not a community-validated project.
- The DEV Community article notes it is "unofficial and unsupported" (referring to an earlier community fork by ed3t; the official valyuAI/valyu-cli is the canonical version).
- Valyu the company has not raised any disclosed funding per Crunchbase/Tracxn. 7 total employees.
- 10 open issues on the repo suggest active development but also unresolved edge cases.
- All positive coverage appears to come from a small circle of advocates (primarily @unicodeveloper / Prosper Otemuyiwa), not broad independent validation.

**X/Twitter sentiment:**
- Official Valyu account announced the CLI with emphasis on "built for AI (or human) knowledge workers."
- Engagement appears modest — no viral threads or widespread community discussion beyond the core advocates.

## Similar Tools in Directory

1. **Nanobot** (HKUDS, 38K stars) — Python research-lab harness with LiteLLM routing and memory consolidation. Overlap: Research & Science use case. Difference: Nanobot is a full agent harness; Valyu CLI is a data-access utility that augments any agent.

2. **awesome-agent** (ShrikeBot) — Curated list of agent resources. Overlap: Research & Science, developer-utility type. Difference: awesome-agent is a reference list; Valyu CLI is a functional tool.

3. **Skills CLI** (Harnesses-Adjacent, developer-utility) — Meta-layer for installing agent skills. Overlap: Both are developer utilities that extend agent capabilities. Difference: Skills CLI manages skill installation; Valyu CLI provides actual data retrieval functionality. Notably, Valyu distributes its agent skill through the Skills CLI ecosystem (`npx skills add valyuAI/skills`).

4. **OpenGauss** (mathematics_inc) — Autoformalization agent harness for math/Lean, Research & Science use case. Overlap: specialized research tooling. Difference: domain-specific agent vs general data-access CLI.

## Open Questions

1. **Sustainability:** With no disclosed funding, 7 employees, and a pay-per-retrieval model — how sustainable is the platform? If Valyu shuts down, the CLI becomes useless since it depends entirely on their API.

2. **Star count of 1:** Is this truly the canonical CLI, or is there a more established tool? The GitHub org (valyuAI) appears legitimate and matches the official docs, but the near-zero community adoption is notable. The earlier community fork (ed3t/valyu-cli) also exists but appears less maintained.

3. **Benchmark claims need verification:** The 79% FreshQA and #1 ScholarQA claims are from Valyu's own marketing. Independent verification would strengthen the case.

4. **Pricing at scale:** While $10 free credits cover casual use, agents making hundreds of queries daily could run up costs quickly — especially at $8-50/1k for financial and proprietary sources. How does this compare to direct API access to SEC EDGAR, PubMed, etc.?

5. **"CLI" tag precedent:** This would be the first tool with tag "cli" in the directory. Worth confirming this aligns with the planned CLI category expansion before adding.

6. **Agent skill vs CLI distinction:** Valyu has two integration paths — the CLI binary and the SKILL.md agent skill. The directory entry should clarify which is being cataloged (the CLI itself, though the skill is the primary agent integration vector).
