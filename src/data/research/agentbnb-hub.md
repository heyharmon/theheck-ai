# AgentBnB (Hub) — Research Brief

**Researched:** 2026-04-11
**Sources:**
- https://agentbnb.dev/
- https://agentbnb.dev/hub/ (React SPA; inspected bundled JS for product copy)
- https://github.com/Xiaoher-C/agentbnb
- https://agentbnb.fly.dev/ (public relay)
- X posts from @xiaoher (Xiaoher Chen, creator) — Apr 2026
- Public repo README (v9.1)

## Summary

AgentBnB is an open-source peer-to-peer coordination network where AI agents discover, hire, and pay other AI agents for specialized work. Built by Xiaoher Chen (Xiaoher-C on GitHub), the system pairs a local CLI/daemon with a public relay (`agentbnb.fly.dev`) that handles escrow, a native credit economy, trust scoring, and cryptographic identity (W3C DID + UCAN + Verifiable Credentials). Integrates natively with Claude Code via MCP (6 tools: discover, request, publish, status, conduct, serve_skill), and also plugs into OpenClaw, Cursor, Windsurf, Cline, and LangChain/CrewAI/AutoGen. The "Hub" is the provider dashboard where agents publish capability cards, track earnings, and manage their skills.

## Classification

- **Type:** `multi-agent-platform` — it is explicitly coordination/orchestration infrastructure for multiple autonomous agents (discovery, routing, escrow, team formation). It is not itself an agent harness and not a dev tool in the utility sense.
- **Subtype:** `orchestration-platform` — closest fit. It orchestrates work across agents/machines, enforces escrow, and routes by trust × load × cost. (Alternative: `infrastructure` under `developer-utility`, but the agent-to-agent coordination framing matches orchestration-platform better.)
- **Category:** `Individual/Indie & Research` — solo/small-team project by @xiaoher, actively seeking early provider partners on X. 30 GitHub stars as of research date.
- **Difficulty:** `intermediate` — quickstart is a single npm command, but using it meaningfully requires understanding MCP, daemons, capability cards, YAML skill definitions, and the credit economy.
- **Use Cases:** `General-Purpose`, `Dev`
  - General-Purpose: the network is domain-agnostic — any skill (TTS, financial analysis, summarization, code review) can be published as a card.
  - Dev: first-class Claude Code / OpenClaw / Cursor / Windsurf / Cline integration; default published skills are `claude-code-run`, `claude-code-review`, `claude-code-summarize`; creator frames it as coding agents hiring other agents for testing/deploy/monitoring.
- **Features:** `Open Source` (MIT), `Self-Hosted` (daemon runs locally; relay source is public), `Model-Agnostic` (skills are command-wrapped, so any backing model/tool works).
  - NOT `Security-Focused` as a primary framing (though it does have DID + escrow — these are coordination guarantees, not a security-first positioning).
  - NOT `Self-Improving` — no DSPy/GEPA-style self-training loops; reputation accrues but agents don't learn.

## Directory Entry (Draft)

```json
{
  "name": "AgentBnB",
  "category": "Individual/Indie & Research",
  "type": "multi-agent-platform",
  "use_cases": ["General-Purpose", "Dev"],
  "features": ["Open Source", "Self-Hosted", "Model-Agnostic"],
  "creator": "Xiaoher Chen",
  "github_stars": 30,
  "github_url": "https://github.com/Xiaoher-C/agentbnb",
  "full_description": "Peer-to-peer coordination network where AI agents discover, hire, and pay other AI agents for specialized work. A local daemon plus a public relay handle capability discovery, trust-based routing, escrow-backed credit settlement, and cryptographic identity via W3C DID + UCAN + Verifiable Credentials. Ships with native MCP integration so Claude Code (and OpenClaw, Cursor, Windsurf, Cline) can call six tools — discover, request, publish, status, conduct, serve_skill — to join the network as both a consumer and a provider.",
  "key_features": [
    "Native MCP server with 6 agent-to-agent tools (discover, request, publish, conduct, serve_skill, status)",
    "Capability cards + skills.yaml for publishing commands as rentable skills",
    "Relay-enforced escrow with a credit economy (5% network fee, trust × load × cost routing)",
    "Cryptographic agent identity (Ed25519 + W3C DID + UCAN + Verifiable Credentials)",
    "Cross-machine team formation and multi-agent pipelines via the conduct tool",
    "Works with Claude Code, OpenClaw, Cursor, Windsurf, Cline, and LangChain/CrewAI/AutoGen"
  ],
  "why_discussed": "A credible open-source attempt at an agent-to-agent work marketplace — not an API marketplace. Live cross-machine trades, escrow, and reputation make it a concrete implementation of the 'agents hiring agents' thesis that harness authors keep floating.",
  "notes": "v9.1 · 1,800+ tests · MIT · public relay at agentbnb.fly.dev · Hub dashboard at agentbnb.dev/hub",
  "website_url": "https://agentbnb.dev/",
  "difficulty": "intermediate",
  "tag": "marketplace",
  "subtype": "orchestration-platform",
  "relationships": {
    "works_with": ["Claude Code", "OpenClaw"]
  }
}
```

## Community Sentiment (from X/Twitter)

Discussion is currently driven almost entirely by the creator, @xiaoher, with a supporting concept riff from @mayuronx ("Something like AirBnB but for agents. AgentBNB?", Apr 12). No adversarial or critical takes surfaced.

- **How people describe it:** The creator consistently pitches it as a network for "provider discovery, routing, trust, and repeat usage" of specialist agents — explicitly positioned against "generic assistants" and "wrapper" products.
- **Common use cases mentioned:** Coding agents hiring test/deploy/monitoring agents; knowledge-base agents hiring scrapers, data linters, and visualization agents; cross-machine specialist calls (e.g., a Chinese-language financial voice analysis pipeline demoed in the README).
- **What people like (creator-cited):** Durable pattern of narrow workflows with clear ROI; the "harness, not the model, is the bottleneck" framing resonates.
- **Criticisms or limitations:** Not yet observed externally. Open risks from a reviewer perspective: small star count (30), sole-maintainer signal, and unproven network liquidity (needs providers on both sides of trades).
- **Compared to:** Creator contrasts it with API marketplaces (single function calls, price-only signal, proxied code) and with generic agent wrappers. Concept-adjacent to any A2A / ACP work, but this is implementation-level, not spec-level.

## Similar Tools in Directory

- **Hermes Agent** — has sub-agent delegation and a skill system, but is a single-harness runtime; AgentBnB is the cross-harness coordination layer those agents could plug into.
- **OpenClaw** — AgentBnB ships an OpenClaw plugin; it is complementary rather than alternative (relationship is `works_with`).
- **Claude Code** — AgentBnB's primary integration target; relationship is `works_with` via MCP.
- Any "framework-sdk" or "orchestration-platform" entries already in the directory (e.g., agent frameworks) would be the closest taxonomic neighbors. AgentBnB differs by being a *network*, not a framework — it's the coordination/payment substrate rather than a way to author agents.

## Open Questions

1. **Subtype call:** I chose `orchestration-platform`. An argument exists for `infrastructure` (under `developer-utility`) because it is essentially a relay/escrow substrate. The orchestration framing better matches directory peers, but confirm this fits your taxonomy intuition.
2. **Use cases:** Picked `General-Purpose` + `Dev`. Could arguably also include `Ops` (creator mentions test/deploy/monitoring agents) but that's aspirational rather than shipped — left it out to stay factual.
3. **Feature tag `Security-Focused`:** Omitted because security is not the headline framing, even though DID + escrow + keypairs are real. If the directory treats escrow/cryptographic identity as security-focused, consider adding it.
4. **GitHub stars:** 30 at time of research (repo created 2026-03-13). Will change quickly — may want to refresh before launch.
5. **Website ambiguity:** `agentbnb.dev` is the marketing site; `agentbnb.dev/hub` is the provider dashboard SPA; `agentbnb.fly.dev` is the relay. README-stated homepage is `agentbnb.fly.dev/hub`. Using `agentbnb.dev` as canonical website_url since that's the public-facing marketing domain.
6. **Creator name:** GitHub handle is `Xiaoher-C`, X handle is `@xiaoher`, self-identifies as "Xiaoher Chen" in X bio context. Using "Xiaoher Chen" in the entry.
