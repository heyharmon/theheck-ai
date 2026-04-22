# Agentic.Market — Research Brief

**Researched:** 2026-04-16
**Sources:**
- Announcement tweet: https://x.com/brian_armstrong/status/2046270895795163635
- Launch tweet (PM): https://x.com/Nick_Prince12/status/2046268042326290472
- CoinbaseDev tweet: https://x.com/CoinbaseDev/status/2046272596426260831
- Website: https://agentic.market
- GitHub skill repo: https://github.com/coinbase/agentic-wallet-skills

## Summary

Agentic.Market is a discovery marketplace for x402-enabled services that AI agents can pay for per-request in USDC with no API keys, registration, or rate limits. Operated by Coinbase (and, per the site, "owned by the Linux Foundation"), it launched April 20, 2026, announced by Coinbase CEO Brian Armstrong. The marketplace aggregates 518+ services across inference (Claude, GPT, DeepSeek, Gemini), data (crypto prices, analytics), search, media (speech/image/audio), social (email, phone, X/Farcaster payments), trading, and infrastructure (RPC, storage, sandboxes, proxies). Most calls cost $0.001–$0.50 USDC. The companion `coinbase/agentic-wallet-skills` package (MIT, 96 stars, installable via `npx skills add coinbase/agentic-wallet-skills`) is a Claude Skill that drops x402 payment + service-discovery capabilities directly into an agent.

## Classification

- **Type:** `developer-utility` — it is infrastructure that agents (built elsewhere) consume. It doesn't itself run tasks.
- **Subtype:** `infrastructure` — a discovery/payments rail for agent-to-service commerce.
- **Category:** Team/Organization-Backed (Coinbase).
- **ladder_rung:** `null` — off-ladder infrastructure; it's a substrate other rungs plug into rather than a user-facing rung.
- **Difficulty:** `intermediate` — installing the skill is trivial, but meaningfully using it requires an agent harness and a funded agent wallet.
- **Audience:** "Developers building agents; API providers who want agent customers."
- **Use Cases:** `Ops` (agent-to-service commerce), `Dev` (skill ships into dev-facing agent harnesses). Reasoning: it isn't research or content — it's operational plumbing for autonomous agents.
- **Features:** `Open Source` (the skill repo is MIT). Marketplace itself not confirmed open-source.
- **Tag:** `web3` — fits the existing tag used for OpenAgents, Theoriq, Juno.

## Directory Entry (Draft)

```json
{
  "name": "Agentic.Market",
  "category": "Team/Organization-Backed",
  "type": "developer-utility",
  "subtype": "infrastructure",
  "use_cases": ["Ops", "Dev"],
  "features": ["Open Source"],
  "creator": "Coinbase",
  "github_stars": 96,
  "github_url": "https://github.com/coinbase/agentic-wallet-skills",
  "website_url": "https://agentic.market",
  "full_description": "A discovery marketplace for x402-enabled services that AI agents can call and pay for per-request in USDC — no API keys, no registration, no rate limits. Launched April 20, 2026 by Coinbase and announced by CEO Brian Armstrong as a homepage for the 'agentic economy.' Aggregates 500+ services across inference (Claude, GPT, DeepSeek, Gemini), data (crypto prices, analytics, portfolio tracking), search (web, scraping), media (speech-to-text, image and audio generation), social (email, phone, X/Farcaster payments), trading (oracles, DeFi), and infrastructure (RPC, storage, sandboxes, proxies). Most calls cost $0.001–$0.50 USDC. The companion coinbase/agentic-wallet-skills package (MIT) installs into an agent via `npx skills add coinbase/agentic-wallet-skills`, giving it x402 wallet + discovery capabilities out of the box. Providers list their service to be discovered and earn revenue per call.",
  "key_features": [
    "Directory of 500+ x402-enabled services across inference, data, search, media, social, trading, and infra",
    "Pay-per-request pricing in USDC — no API keys, no registration, no rate limits",
    "Companion 'agentic-wallet-skills' Skill installable into any skill-aware agent",
    "Providers can list services and earn revenue per call",
    "Trending / commerce dashboard for monitoring agent-economy activity",
    "Operated by Coinbase; site states ownership by the Linux Foundation"
  ],
  "why_discussed": "Named by Brian Armstrong as the first serious 'homepage of the agent economy' — a neutral discovery + payments rail that lets agents autonomously find and buy services without per-provider signup. Gives the x402 standard a concrete consumer surface.",
  "notes": "Skill repo MIT, 96 stars as of research date. Marketplace itself not confirmed open-source. Crypto-native (USDC on Base + x402).",
  "difficulty": "intermediate",
  "tag": "web3",
  "ladder_rung": null,
  "audience": "Developers building agents; API providers who want agent customers",
  "capabilities_unlocked": [
    "Agents can discover and call third-party services at runtime without a human pre-provisioning API keys",
    "Per-request micropayments in USDC replace subscriptions and rate limits for agent workloads",
    "API providers get an agent-native distribution channel without custom billing integrations",
    "A single installable skill wires wallet + discovery into any skill-aware harness (Claude Code, Claude.ai, etc.)"
  ],
  "good_for": [
    "Autonomous agents that need to shop for capabilities (inference, search, data) on the fly",
    "Developers prototyping agent-to-agent or agent-to-service commerce with real payments",
    "API providers wanting to reach agents as customers without standing up user accounts and keys"
  ],
  "not_for": [
    "Users who just want a chat assistant — this is plumbing, not a product",
    "Teams that need predictable fixed-price billing or enterprise procurement contracts",
    "Non-crypto environments — all settlement is in USDC"
  ],
  "graduate_to": ["Coinbase AgentKit", "Claude Code", "LangGraph"],
  "relationships": {
    "built_on": ["x402"],
    "ecosystem": ["Coinbase AgentKit", "Base"]
  }
}
```

## Community Sentiment (from X/Twitter)

- **How people describe it:** "Homepage of the agent economy," "discovery layer for x402 services," "marketplace where agents buy services."
- **Common use cases mentioned:** Letting an agent buy inference, search, or data on demand; providers listing APIs to monetize to agents.
- **What people like:** Zero-friction consumption model (no keys/accounts), native pay-per-call in USDC, and that Coinbase/CDP is bundling it with an installable skill.
- **Criticisms or limitations:** Limited direct criticism visible in the first 24 hours; noise is dominated by a BSC meme-coin named "agentic.market" (unrelated scam ticker) that clutters search results.
- **Compared to:** Implicitly compared to traditional API marketplaces (RapidAPI) and to x402-facilitator frontends; ideologically adjacent to OpenAgents' economic-markets model.

## Similar Tools in Directory

- **OpenAgents** (web3, autonomous-org, advanced): also frames agents as economic actors with five markets incl. Compute/Labor/Liquidity, but is a full decentralized economy in Rust/Nostr; Agentic.Market is narrower — a discovery surface for existing x402 services.
- **Theoriq Agent Framework** (web3, framework-sdk): decentralized agent framework for on-chain/off-chain tasks; different layer — Theoriq is the agent runtime, Agentic.Market is the service catalog an agent would shop from.
- **Juno** (web3, autonomous-org): sovereign business-entity framework; also different layer — infrastructure for the agent-as-org, not a service marketplace.
- No existing directory entry is a direct substitute; the closest analog in non-web3 space would be an MCP server registry, but those don't include payments.

## Open Questions

- Is the marketplace codebase itself open-source, or only the `agentic-wallet-skills` client? Site didn't state.
- Exact relationship to Coinbase AgentKit and Base — is it branded as CDP, a Linux Foundation project, or both?
- Does the skill work in non-Claude harnesses (e.g., Cursor, Codex CLI), or is it Claude-Skill-format only?
- Current service count (518+ per site copy) vs. how many are production-grade vs. demo listings.
