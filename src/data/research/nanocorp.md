# NanoCorp — Research Brief

**Researched:** 2026-04-16
**Sources:**
- https://www.nanocorp.so/ (homepage)
- https://www.nanocorp.so/pricing (pricing)
- https://app.nanocorp.so/ (product app)
- https://docs.nanocorp.so (docs)
- https://phospho.ai/ (parent company)
- https://www.linkedin.com/posts/plbiojout_nanocorp-reached-193k-arr-in-3-days-how-activity-7435777454482518016-6RqP (founder LinkedIn)
- https://www.youtube.com/watch?v=nUgE0Cq7paQ ("Forget Lovable, Nanocorp creates autonomous businesses")
- X/Twitter search via bird CLI (NanoCorpHQ handle, @plbiojout tweets, ~60 tweets reviewed)
- https://x.com/plbiojout/status/2042925880297820486 ($400k ARR in 1 month claim)
- https://x.com/plbiojout/status/2037153092232208459 (live leaderboard announcement)

## Summary

NanoCorp is a platform from PHOSPHO INC. (Delaware C-corp; parent also runs phospho.ai robotics) that lets anyone spin up an autonomous AI-run company from a single prompt. You describe a business idea; the system provisions a nanocorp.app subdomain and email, generates a website, stands up Stripe payments, and assigns specialized agents that "run on schedules, complete tasks, and report back." Founded by Pierre-Louis Biojout (@plbiojout, YC alum), launched roughly mid-March 2026 and going viral on FR/EN AI-Twitter in April 2026 — founder is publicly posting ARR milestones ($250k in 19 days, $400k in ~30 days, $520k two days later) driven entirely by referral/organic growth. The live leaderboard at nanocorp.so/live tracks cumulative real revenue generated autonomously by NanoCorp companies ($264+ at March 26, climbing steadily). Free tier gives 3 lifetime credits, 1 active company, and nanocorp.app domain; Founder tier is $30/mo for 30 credits (scaling up to 960 credits) with custom domains and unlimited companies; a flat 20% withdrawal fee applies on all plans.

## Classification

- **Type:** `multi-agent-platform` — the product orchestrates "specialized agents" (the docs explicitly mention "hire agents") per company, and each NanoCorp is effectively a swarm of scheduled agents executing marketing, sales, product, and support roles. It is the end-user-facing equivalent of an autonomous-org-orchestration platform, not a single-agent harness.
- **Subtype:** `autonomous-org-platform` — the cleanest fit. Adjacent to existing directory entries in the "Zero-Human / Agent Company Orchestration" space. NanoCorp productizes the ZHC (Zero-Human Company) concept into a consumer-grade SaaS.
- **Category:** `Zero-Human / Agent Company Orchestration` — founder's own framing, community's framing (@ZoidbergEternal thread literally calls it "ZHC flywheel in action"), and product positioning ("Making money while you sleep") all point here.
- **Difficulty:** `beginner` — the entire pitch is "launch in 20 seconds from one prompt, no babysitting." Most tweeted screenshots show non-technical users launching companies. No code, no infra, no model selection.
- **Audience:** `Anyone` — the product is explicitly aimed at non-developers. Founder's marketing emphasizes grandmas/friends/strangers creating companies.
- **Use Cases:**
  - **Business Operations** — primary. NanoCorp automates the entirety of running a small business (marketing, sales, support, payments).
  - **Autonomous Operations** — core positioning: zero human intervention after the initial prompt.
  - **Content Creation** — many NanoCorp companies generate content (newsletters, LinkedIn audits, review services). Secondary but meaningful.
  - *Not* Research & Science, Software Development, or General-Purpose — the tool is narrowly scoped to "run a revenue-generating company."
- **Features:**
  - `Open Source` — NO (closed SaaS).
  - `Self-Hosted` — NO (hosted by PHOSPHO INC.).
  - `Model-Agnostic` — NO / unclear (no evidence of user-selectable models; likely single vendor under the hood).
  - `Security-Focused` — NO.
  - `Self-Improving` — NO (though agents operate on schedules and iterate on marketing/sales, there's no evidence of reinforcement or weight updates).
  - None of the standard feature flags apply confidently — leave empty.

## Ladder Placement — Rung 5 (Autonomous Systems)

**Rationale:** NanoCorp is a textbook rung-5 tool: the user defines intent once and the system operates without further human input, including handling real money, real customers, and real transactions. It sits above rung 4 (Multi-Agent Platforms where humans still direct work) because the explicit premise is no human in the loop after launch. The "30 credits/month" model is the only human intervention — credits control how many autonomous actions the company can take, but the user doesn't review or approve each one.

Rung 2 (Agentic Apps) was considered and rejected: NanoCorp hides the agents behind a no-code UI, which is an agentic-app hallmark, but the *capability* — running an entire revenue-generating business unsupervised — is firmly rung 5. Consumer-grade packaging of autonomous-org tech.

## Directory Entry (Draft)

```json
{
  "name": "NanoCorp",
  "category": "Zero-Human / Agent Company Orchestration",
  "type": "multi-agent-platform",
  "subtype": "autonomous-org-platform",
  "use_cases": ["Business Operations", "Autonomous Operations", "Content Creation"],
  "features": [],
  "creator": "PHOSPHO INC. (Pierre-Louis Biojout)",
  "github_stars": "N/A",
  "github_url": null,
  "website_url": "https://www.nanocorp.so/",
  "difficulty": "beginner",
  "tag": "new",
  "ladder_rung": 5,
  "audience": "Anyone",
  "capabilities_unlocked": [
    "Spin up a full autonomous company (site, email, Stripe, agents) from one prompt in ~20 seconds",
    "Scheduled agent workstreams that run marketing, sales, and support without human check-ins",
    "Real revenue — agents transact with real customers; live leaderboard shows cumulative earnings",
    "Portfolio dashboard to run many autonomous companies in parallel from one account",
    "Credit-based metering instead of per-action approvals, so the company keeps operating while you sleep"
  ],
  "good_for": [
    "Non-technical founders testing a business idea end-to-end without building anything",
    "Experimenters exploring the Zero-Human Company (ZHC) thesis firsthand",
    "Anyone who wants a side-project that runs itself on a schedule"
  ],
  "not_for": [
    "Builders who want visibility into or control over the agent stack (models, prompts, tools)",
    "Regulated industries or anyone needing compliance guarantees — this is a consumer SaaS with a 20% withdrawal fee",
    "Developers wanting to compose their own agent workflow (use a framework instead)"
  ],
  "graduate_to": [],
  "full_description": "NanoCorp is a consumer platform from PHOSPHO INC. that lets anyone launch an autonomous, revenue-generating AI company from a single prompt. You describe an idea; NanoCorp provisions a nanocorp.app subdomain, email, website, Stripe payments, and a team of specialized agents that handle marketing, sales, support, and ops on a schedule. A portfolio dashboard tracks every company you run and a public leaderboard (nanocorp.so/live) shows cumulative real dollars earned autonomously across the network — climbing from $264 (March 26, 2026) toward thousands as the product goes viral. Free tier gives 3 lifetime credits + 1 active company; the Founder plan is $30/mo for 30 credits, scaling up to 960 credits/month with custom domains and unlimited companies. A flat 20% withdrawal fee applies to revenue earned through the platform. Founded by Pierre-Louis Biojout (YC alum) and launched mid-March 2026; reportedly crossed $520k ARR by mid-April with zero paid acquisition.",
  "key_features": [
    "One-prompt company launch with auto-provisioned domain, email, website, and Stripe",
    "Specialized scheduled agents for marketing, sales, product, and support",
    "Portfolio dashboard for managing many autonomous companies",
    "Live leaderboard tracking real revenue generated across the network",
    "Referral/cross-partnership flows between NanoCorp companies",
    "Planned Google Search Ads autonomous budget management",
    "Custom-domain support on Founder plan"
  ],
  "why_discussed": "Viral on FR/EN AI-Twitter throughout April 2026 as the headline example of a Zero-Human Company platform. Founder is publicly posting aggressive ARR milestones ($250k → $400k → $520k in days). Community (@RodJacson indexed 3,000+ NanoCorp-built companies) and skeptics alike frame it as a stress test of whether consumer-accessible autonomous orgs can generate durable revenue.",
  "notes": "Closed-source SaaS. Launched ~mid-March 2026. Parent company PHOSPHO INC. also operates phospho.ai (AI-robotics toolkit). Name collision: nanocorp.ai is an unrelated security-platform company; Google's 'Nano Banana' image-gen feature is also unrelated. Founder Pierre-Louis Biojout was on the Génération Do It Yourself podcast in April 2026.",
  "creator": "PHOSPHO INC. (Pierre-Louis Biojout)",
  "relationships": {
    "alternative_to": [],
    "works_with": [],
    "built_on": [],
    "ecosystem": []
  }
}
```

## Community Sentiment (from X/Twitter)

- **How people describe it:** "Forget Lovable, Nanocorp creates autonomous companies" (multiple French tweets and YT title); "ZHC flywheel in action" (@ZoidbergEternal); "un truc qui me brainfuck" (@juherr, meaning "a thing that blows my mind"); "one of the most stimulating tools to appear recently" (@0xMadMaks).
- **Common use cases mentioned:** LinkedIn profile audits, contract review for freelancers (@MehdiBuilds), roaster/discovery services, cross-referral partnerships between NanoCorp companies, niche SaaS. @refgui noted the firehose of genuine business ideas being created is itself a signal — people scrape the new-company URLs to spot trends.
- **What people like:** The wow factor of launching a functioning company in 20 seconds; the public leaderboard creating gamified accountability; the cross-company referral mechanic; authentic-seeming business ideas compared to Lovable/AI-generated apps.
- **Criticisms or limitations:**
  - **Credit economics don't pencil easily:** @MehdiBuilds tested with 8 free credits and concluded "you need to put serious credits in to do enough daily tasks to generate decent revenue." The 30-credit Founder plan may be insufficient to realistically run a business.
  - **20% withdrawal fee** is steep for a lean business.
  - **Skepticism about durability:** @RodJacson's thread acknowledges "some will die. Some are jokes. Some are someone's 11pm shower-thought turned into a real business before breakfast."
  - ARR claims are founder-reported and unverified — treat $400k/$520k figures as marketing, not audited.
- **Compared to:** Lovable (no-code app builder, positioned as the anti-Lovable); Polsia (@refgui tested both); implicitly compared to ZHC community projects and @openclaw's autonomous vending machine (which the founder favorably QT'd).

## Similar Tools in Directory

- **Cabinet** (line 2592, directory.json) — another consumer-facing autonomous-operations play. Useful reference for `good_for`/`not_for` phrasing at rung 5.
- **Quiver** (line 3634) — recent-format rung-5 entry; mirror its field structure and audience framing.
- **ChatGPT Agent** (directory) — rung-3/4 autonomous task runner; NanoCorp is the consumer-packaged, business-scoped cousin.
- No existing entry covers "launch an autonomous business from one prompt." NanoCorp is a clear gap-fill as the directory broadens from developer harnesses to tools for everyone; it's arguably the canonical consumer example of the Zero-Human Company category.

## Open Questions

1. **Verify ARR / revenue claims.** Founder-reported numbers should be caveated in `why_discussed` rather than stated as fact. The live leaderboard at nanocorp.so/live is the most defensible datapoint.
2. **Subtype confirmation.** `autonomous-org-platform` is the strongest fit per the existing taxonomy. If the directory adds a more specific subtype (e.g., `agentic-business-builder`), migrate.
3. **Underlying models / stack.** No public disclosure of which LLM(s) power NanoCorp agents. Docs site (docs.nanocorp.so) may reveal more — worth a follow-up fetch before publishing.
4. **Relationship mapping.** Nothing obvious to link to — no confirmed integration with Anthropic/OpenAI/etc. Leave relationships empty or add `alternative_to: ["Cabinet"]` if the Cabinet entry reads as comparable.
5. **Name-collision note.** Ensure the directory entry disambiguates from nanocorp.ai (network security) and Google's Nano Banana feature. The `notes` field covers this.
6. **Tag.** Recommend `tag: "new"` since product is <6 weeks old as of research date.
