import directoryData from "../data/directory.json";

export interface ToolRelationships {
  extends?: string[];
  alternative_to?: string[];
  works_with?: string[];
  built_on?: string[];
  ecosystem?: string;
}

export interface Project {
  name: string;
  category: string;
  type: "agent-tool" | "multi-agent-platform" | "developer-utility";
  subtype: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  use_cases: string[];
  features: string[];
  creator: string;
  github_stars: string | number | null;
  github_url: string | null;
  website_url: string | null;
  full_description: string;
  key_features: string[];
  why_discussed: string;
  notes: string;
  tag?: string | null;
  relationships?: ToolRelationships;
}

export interface DirectoryMetadata {
  title: string;
  last_updated: string;
  description: string;
  total_entries: number;
  categories: string[];
  types: string[];
  subtypes: Record<string, string[]>;
  difficulty_levels: string[];
  use_cases: string[];
  features: string[];
}

export interface DirectoryData {
  metadata: DirectoryMetadata;
  tools: Project[];
}

const data = directoryData as DirectoryData;

export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function formatStars(stars: string | number | null): string {
  if (stars === null || stars === undefined) return "\u2014";
  if (typeof stars === "number") {
    if (stars >= 1000) return `${(stars / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    return String(stars);
  }
  return stars;
}

export function getMetadata(): DirectoryMetadata {
  return { ...data.metadata, total_entries: data.tools.length };
}

export function getAllProjects(): Project[] {
  return data.tools;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return data.tools.find((p) => generateSlug(p.name) === slug);
}

// --- Type helpers ---

export function getTypes(): string[] {
  return data.metadata.types;
}

export function getTypeCounts(): Record<string, number> {
  return data.tools.reduce(
    (acc, p) => {
      const label = getTypeLabel(p.type);
      acc[label] = (acc[label] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
}

export function getTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    "agent-tool": "Agents",
    "multi-agent-platform": "Multi-Agent Platforms",
    "developer-utility": "Developer Utilities",
  };
  return labels[type] || type;
}

export function getTypeColor(type: string): string {
  const colors: Record<string, string> = {
    "agent-tool": "neutral",
    "multi-agent-platform": "neutral",
    "developer-utility": "neutral",
    "Agents": "neutral",
    "Multi-Agent Platforms": "neutral",
    "Developer Utilities": "neutral",
  };
  return colors[type] || "neutral";
}

export function getProjectsByType(type: string): Project[] {
  return data.tools.filter((p) => p.type === type || getTypeLabel(p.type) === type);
}

// --- Subtype helpers ---

export function getSubtypes(): Record<string, string[]> {
  return data.metadata.subtypes;
}

export function getSubtypesForType(type: string): string[] {
  return data.metadata.subtypes[type] || [];
}

export function getSubtypeLabel(subtype: string): string {
  const labels: Record<string, string> = {
    "standalone-agent": "Standalone Agent",
    "config-layer": "Config / Skills Layer",
    "domain-agent": "Domain-Specific Agent",
    "framework-sdk": "Framework / SDK",
    "orchestration-platform": "Orchestration Platform",
    "autonomous-org": "Autonomous Org Platform",
    "self-improving": "Self-Improving System",
    "scaffolding": "Agent Scaffolding",
    "built-in-feature": "Built-in Feature",
    "meta-tool": "Cross-Agent Tool",
    "quality-tool": "Quality / Testing",
    "design-tool": "Design Tool",
    "gui-shell": "GUI Shell",
    "infrastructure": "Infrastructure",
    "reference": "Reference",
    "production-system": "Production System",
  };
  return labels[subtype] || subtype;
}

export function getSubtypeColor(subtype: string): string {
  const colors: Record<string, string> = {
    "standalone-agent": "sky",
    "config-layer": "violet",
    "domain-agent": "indigo",
    "framework-sdk": "teal",
    "orchestration-platform": "cyan",
    "autonomous-org": "fuchsia",
    "self-improving": "rose",
    "scaffolding": "lime",
    "built-in-feature": "stone",
    "meta-tool": "violet",
    "quality-tool": "amber",
    "design-tool": "pink",
    "gui-shell": "sky",
    "infrastructure": "slate",
    "reference": "stone",
    "production-system": "orange",
  };
  return colors[subtype] || "neutral";
}

export function getProjectsBySubtype(subtype: string): Project[] {
  return data.tools.filter((p) => p.subtype === subtype);
}

export function getSubtypeCounts(type?: string): Record<string, number> {
  const tools = type ? getProjectsByType(type) : data.tools;
  return tools.reduce(
    (acc, p) => {
      if (p.subtype) {
        const label = getSubtypeLabel(p.subtype);
        acc[label] = (acc[label] || 0) + 1;
      }
      return acc;
    },
    {} as Record<string, number>,
  );
}

// --- Relationship helpers ---

export function getRelatedTools(
  project: Project,
): { type: string; label: string; tools: Project[] }[] {
  if (!project.relationships) return [];

  const sections: { type: string; label: string; tools: Project[] }[] = [];

  const resolve = (names: string[]): Project[] =>
    names
      .map((n) => data.tools.find((t) => t.name === n))
      .filter((t): t is Project => t !== undefined);

  if (project.relationships.extends?.length) {
    sections.push({
      type: "extends",
      label: "Extends",
      tools: resolve(project.relationships.extends),
    });
  }

  if (project.relationships.built_on?.length) {
    sections.push({
      type: "built_on",
      label: "Built on",
      tools: resolve(project.relationships.built_on),
    });
  }

  if (project.relationships.alternative_to?.length) {
    sections.push({
      type: "alternative_to",
      label: "Alternatives",
      tools: resolve(project.relationships.alternative_to),
    });
  }

  if (project.relationships.works_with?.length) {
    sections.push({
      type: "works_with",
      label: "Works well with",
      tools: resolve(project.relationships.works_with),
    });
  }

  return sections;
}

export function getToolsThatExtend(project: Project): Project[] {
  return data.tools.filter(
    (t) => t.relationships?.extends?.includes(project.name),
  );
}

export function getToolsByEcosystem(ecosystem: string): Project[] {
  return data.tools.filter(
    (t) => t.relationships?.ecosystem === ecosystem,
  );
}

export function getEcosystemFor(project: Project): Project[] {
  const eco = project.relationships?.ecosystem;
  if (!eco) return [];
  return data.tools.filter(
    (t) => t.relationships?.ecosystem === eco && t.name !== project.name,
  );
}

// --- Category helpers ---

export function getCategories(): string[] {
  return data.metadata.categories;
}

// --- Difficulty helpers ---

export function getDifficultyLevels(): string[] {
  return data.metadata.difficulty_levels;
}

export function getDifficultyLabel(difficulty: string): string {
  const labels: Record<string, string> = {
    beginner: "Beginner",
    intermediate: "Intermediate",
    advanced: "Advanced",
  };
  return labels[difficulty] || difficulty;
}

export function getDifficultyColor(difficulty: string): string {
  const colors: Record<string, string> = {
    beginner: "emerald",
    intermediate: "amber",
    advanced: "rose",
  };
  return colors[difficulty] || "neutral";
}

// --- Use case helpers ---

export function getUseCases(): string[] {
  return data.metadata.use_cases;
}

export function getUseCaseCounts(): Record<string, number> {
  const counts: Record<string, number> = {};
  data.tools.forEach((p) => {
    p.use_cases.forEach((uc) => {
      counts[uc] = (counts[uc] || 0) + 1;
    });
  });
  return counts;
}

// --- Feature helpers ---

export function getFeatures(): string[] {
  return data.metadata.features;
}

// --- Popularity helpers ---

const POPULAR_THRESHOLD = 5000;

export function isPopular(stars: string | number | null): boolean {
  return typeof stars === "number" && stars >= POPULAR_THRESHOLD;
}

// --- Slug uniqueness check ---

const slugs = data.tools.map((p) => generateSlug(p.name));
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupes.length > 0) {
  throw new Error(`Duplicate slugs detected: ${dupes.join(", ")}`);
}
