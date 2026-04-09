import resourcesData from "../data/resources.json";

export interface Resource {
  name: string;
  url: string;
  author: string;
  type: "guide" | "article" | "video" | "course" | "reference";
  description: string;
  tags: string[];
  related_tools: string[];
}

export interface ResourcesMetadata {
  description: string;
  last_updated: string;
  total_entries: number;
  types: string[];
}

export interface ResourcesData {
  metadata: ResourcesMetadata;
  resources: Resource[];
}

const data = resourcesData as ResourcesData;

export function getAllResources(): Resource[] {
  return data.resources;
}

export function getResourcesForTool(toolName: string): Resource[] {
  return data.resources.filter((r) =>
    r.related_tools.some(
      (t) => t.toLowerCase() === toolName.toLowerCase(),
    ),
  );
}

export function getResourceTypeLabel(type: string): string {
  const labels: Record<string, string> = {
    guide: "Guide",
    article: "Article",
    video: "Video",
    course: "Course",
    reference: "Reference",
  };
  return labels[type] || type;
}

export function getResourceTypeBadgeClass(type: string): string {
  const classes: Record<string, string> = {
    guide: "badge badge-neutral",
    article: "badge badge-outline",
    video: "badge badge-rose",
    course: "badge badge-emerald",
    reference: "badge badge-amber",
  };
  return classes[type] || "badge badge-subtle";
}
