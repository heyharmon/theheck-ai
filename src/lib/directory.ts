import directoryData from "../data/directory.json";

export interface Project {
  name: string;
  category: string;
  type: "agent-tool" | "multi-agent-platform" | "developer-utility";
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
}

export interface DirectoryMetadata {
  title: string;
  last_updated: string;
  description: string;
  total_entries: number;
  categories: string[];
  types: string[];
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
    "agent-tool": "indigo",
    "multi-agent-platform": "emerald",
    "developer-utility": "amber",
    "Agents": "indigo",
    "Multi-Agent Platforms": "emerald",
    "Developer Utilities": "amber",
  };
  return colors[type] || "neutral";
}

export function getProjectsByType(type: string): Project[] {
  return data.tools.filter((p) => p.type === type || getTypeLabel(p.type) === type);
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

// --- Slug uniqueness check ---

const slugs = data.tools.map((p) => generateSlug(p.name));
const dupes = slugs.filter((s, i) => slugs.indexOf(s) !== i);
if (dupes.length > 0) {
  throw new Error(`Duplicate slugs detected: ${dupes.join(", ")}`);
}
