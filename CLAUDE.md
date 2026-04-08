# Claude Code — Project Instructions

## Project

**Agent Harness Directory** (agentharness.directory) — a curated directory that helps developers find the right AI agent tool for their use case. Browse, filter, compare, and explore 63+ agent harnesses, orchestration frameworks, and developer utilities shaping the AI agent ecosystem.

Built with Astro 5, Tailwind CSS 4, and Vue 3. Static output — no SSR.

### Architecture

The site is **data-driven, not CMS-driven**. The primary content source is `src/data/directory.json` — a structured JSON file containing all tool entries. Astro Content Collections exist (`src/content/`) but are secondary (used only for static pages and blog posts). The directory data flows through a utility layer (`src/lib/directory.ts`) into both static Astro pages and interactive Vue components.

### Data Model (`src/data/directory.json`)

Each tool entry has:
- `name`, `creator`, `category`, `type` (Agent Tools | Multi-Agent Platforms | Developer Utilities)
- `difficulty` (beginner | intermediate | advanced) — who the tool is for in terms of technical skill required
- `use_cases[]` (Software Development, Business Operations, Autonomous Operations, General-Purpose, Content Creation, Research & Science)
- `features[]` (Open Source, Self-Hosted, Cloud-Based, etc.)
- `github_stars`, `github_url`, `website_url`
- `full_description`, `key_features[]`, `why_discussed`, `notes`

Slugs are generated from names at build time via `generateSlug()` in `src/lib/directory.ts`.

### Pages & Routes

| Route | File | What it does |
|-------|------|-------------|
| `/` | `index.astro` | Homepage — hero, tool type cards, use case grid, featured tools, CTAs |
| `/directory` | `directory.astro` | Interactive directory browser with search, sort, and multi-filter (Vue) |
| `/compare` | `compare.astro` | Sortable comparison table of all tools (Vue) |
| `/project/[slug]` | `project/[slug].astro` | Dynamic detail page per tool (static-generated from directory.json) |
| `/style-tile` | `style-tile.astro` | Design reference page for visual consistency |

### Interactive Components (Vue 3)

Vue is used for the two data-heavy interactive views:
- **`DirectoryBrowser.vue`** — Search, sort (name/stars/type), filter by type, use case, and difficulty. Renders a grid of project cards.
- **`ComparisonTable.vue`** — Sortable table with global search. Columns: Name, Type, Creator, Stars, Use Cases.

### Static Components (Astro)

`ProjectCard.astro`, `TypeCard.astro`, `TypeBadge.astro`, `UseCaseBadge.astro`, `FeatureBadge.astro`, `StarCount.astro`, `StatBlock.astro`, `Header.astro`, `Footer.astro`, `Head.astro`

## Agents

This project uses four specialist agents. Route every user request to the correct agent based on the task domain. If a request spans multiple domains, break it into sub-tasks and invoke agents sequentially — foundational changes first.

### Content Agent → `content`

**When:** Adding, editing, or removing tool entries in the directory. Editing static page text, blog posts, or markdown content. Managing navigation links, footer links, or site config (nav.json, footer.json, site-meta.json). Any operation a non-developer would do in a CMS.

**Owns:** `src/data/directory.json` (tool entries), `src/content/`, `src/data/nav.json`, `src/data/footer.json`, `src/data/site-meta.json`, `src/pages/` (route files for new pages only)

**Skills:** `/content:create-page`, `/content:edit-content`, `/content:update-nav`

### SEO Agent → `seo`

**When:** Auditing SEO, updating meta titles or descriptions, optimizing OG images, keyword research, competitor analysis, SERP analysis, creating content briefs, or any task focused on search visibility.

**Owns:** SEO frontmatter fields (`title`, `description`, `featuredImage`/`image`, `tags`) and `src/data/site-meta.json` (SEO fields only)

**Skills:** `/seo:update-seo`

### Design Agent → `design`

**When:** Changing colors, typography, fonts, spacing, layout, design tokens, component appearance, Tailwind theme, prose styling, or any visual change.

**Owns:** `src/styles/global.css`, Tailwind classes in `.astro` components and layouts

**Skills:** `/design:update-styles`

### Dev Agent → `dev`

**When:** Bug fixes, new features, component development, schema changes (content.config.ts), build configuration, new integrations, refactoring, performance work, or any structural codebase change.

**Owns:** Everything not owned by Content, SEO, or Design — components, layouts, schemas, build config, static assets, deployment config

## Subagent Model Policy

Use **Sonnet** (`model: "sonnet"`) as the default for all subagents. This includes:
- File/codebase exploration and search
- Web research and content review
- Data classification and tagging
- Any read-only or research task

Use **Opus** (`model: "opus"`) for subagents only when the task requires:
- Writing or modifying code (components, logic, schemas)
- Complex architectural decisions
- Multi-step implementation work

When in doubt, use Sonnet. Opus should be the exception, not the default.

## Routing Rules

1. **Single-domain request** → Delegate directly to that agent.
2. **Multi-domain request** → Break into sub-tasks. Execute sequentially, starting with the foundational change. Example: "Add a new tool category page with good SEO and a matching card style" → Dev builds the route → Content populates data → SEO optimizes metadata → Design adjusts styling.
3. **Ambiguous request** → Ask the user to clarify before delegating.
4. **Agents do not call each other.** Root Claude orchestrates all inter-agent coordination.

## Key Paths

| What | Where |
|------|-------|
| **Directory data** | **`src/data/directory.json`** (primary content — all 63+ tool entries) |
| **Directory utilities** | **`src/lib/directory.ts`** (slug generation, filtering, metadata helpers) |
| **Vue components** | **`src/components/DirectoryBrowser.vue`**, **`ComparisonTable.vue`** |
| Static content | `src/content/{pages,blog}/*.md` |
| Config | `src/data/nav.json`, `footer.json`, `site-meta.json` |
| Schemas | `src/content.config.ts` |
| Styles | `src/styles/global.css` |
| Design tokens | `src/data/design-tokens.json` |
| Astro components | `src/components/*.astro` |
| Layouts | `src/layouts/BaseLayout.astro` |
| Routes | `src/pages/` (index, directory, compare, project/[slug], style-tile) |
| Documentation | `docs/` |

## Documentation

Detailed documentation lives in `docs/`. Agents should reference these for full context:

| Document | What it covers |
|----------|---------------|
| `docs/project-structure.md` | Directory layout, key files, architecture |
| `docs/content-schemas.md` | Zod schemas, frontmatter fields, content collections |
| `docs/design-system.md` | Tailwind theme, tokens, style tile, colors, typography |
| `docs/agent-system.md` | Agent definitions, routing, skills, how they coordinate |

## Build

```bash
npm run dev          # Dev server at localhost:4321
npm run build        # Production build to dist/
npm run validate     # Config checks + build (use after CMS changes)
```
