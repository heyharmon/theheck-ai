<script setup lang="ts">
import { ref, computed } from "vue";

interface Project {
  name: string;
  category: string;
  type: string;
  subtype: string;
  difficulty: string;
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

const props = defineProps<{
  projects: Project[];
}>();

const searchQuery = ref("");
const sortColumn = ref<"name" | "type" | "creator" | "stars" | "useCases">("name");
const sortDir = ref<"asc" | "desc">("asc");
const selectedNames = ref<Set<string>>(new Set());
const showComparison = ref(false);

const MAX_COMPARE = 4;

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatStars(stars: string | number | null): string {
  if (stars === null || stars === undefined) return "\u2014";
  if (typeof stars === "number") {
    if (stars >= 1000) return `${(stars / 1000).toFixed(1).replace(/\.0$/, "")}k`;
    return String(stars);
  }
  return stars;
}

function getNumericStars(stars: string | number | null): number {
  if (typeof stars === "number") return stars;
  if (typeof stars === "string") {
    const match = stars.match(/[\d,.]+/);
    if (match) return parseFloat(match[0].replace(/,/g, "")) * (stars.includes("k") ? 1000 : 1);
  }
  return 0;
}

const typeLabels: Record<string, string> = {
  "agent-tool": "Agent Tool",
  "multi-agent-platform": "Multi-Agent Platform",
  "developer-utility": "Developer Utility",
};

const subtypeLabels: Record<string, string> = {
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

const difficultyLabels: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

function toggleSort(col: typeof sortColumn.value) {
  if (sortColumn.value === col) {
    sortDir.value = sortDir.value === "asc" ? "desc" : "asc";
  } else {
    sortColumn.value = col;
    sortDir.value = col === "stars" || col === "useCases" ? "desc" : "asc";
  }
}

function toggleSelection(name: string) {
  const next = new Set(selectedNames.value);
  if (next.has(name)) {
    next.delete(name);
  } else if (next.size < MAX_COMPARE) {
    next.add(name);
  }
  selectedNames.value = next;
}

function isSelected(name: string): boolean {
  return selectedNames.value.has(name);
}

function isDisabled(name: string): boolean {
  return !selectedNames.value.has(name) && selectedNames.value.size >= MAX_COMPARE;
}

function clearSelection() {
  selectedNames.value = new Set();
  showComparison.value = false;
}

function openComparison() {
  showComparison.value = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function closeComparison() {
  showComparison.value = false;
}

function removeFromComparison(name: string) {
  const next = new Set(selectedNames.value);
  next.delete(name);
  selectedNames.value = next;
  if (next.size < 2) {
    showComparison.value = false;
  }
}

const selectedCount = computed(() => selectedNames.value.size);

const comparedProjects = computed(() => {
  return props.projects.filter((p) => selectedNames.value.has(p.name));
});

const sorted = computed(() => {
  let results = [...props.projects];

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.creator.toLowerCase().includes(q) ||
        p.use_cases.some((uc) => uc.toLowerCase().includes(q))
    );
  }

  const dir = sortDir.value === "asc" ? 1 : -1;
  results.sort((a, b) => {
    switch (sortColumn.value) {
      case "name":
        return dir * a.name.localeCompare(b.name);
      case "type":
        return dir * a.type.localeCompare(b.type);
      case "creator":
        return dir * a.creator.localeCompare(b.creator);
      case "stars":
        return dir * (getNumericStars(a.github_stars) - getNumericStars(b.github_stars));
      case "useCases":
        return dir * (a.use_cases.length - b.use_cases.length);
      default:
        return 0;
    }
  });

  return results;
});

// Comparison row definitions
const comparisonRows = computed(() => [
  {
    label: "Creator",
    getValue: (p: Project) => p.creator,
    type: "text" as const,
  },
  {
    label: "Type",
    getValue: (p: Project) => typeLabels[p.type] || p.type,
    type: "text" as const,
  },
  {
    label: "Subtype",
    getValue: (p: Project) => subtypeLabels[p.subtype] || p.subtype,
    type: "text" as const,
  },
  {
    label: "Difficulty",
    getValue: (p: Project) => difficultyLabels[p.difficulty] || p.difficulty,
    type: "difficulty" as const,
  },
  {
    label: "Stars",
    getValue: (p: Project) => formatStars(p.github_stars),
    type: "text" as const,
  },
  {
    label: "Use Cases",
    getValue: (p: Project) => p.use_cases,
    type: "list" as const,
  },
  {
    label: "Key Features",
    getValue: (p: Project) => p.key_features,
    type: "list" as const,
  },
  {
    label: "Features",
    getValue: (p: Project) => p.features.length > 0 ? p.features : ["None listed"],
    type: "badges" as const,
  },
  {
    label: "Links",
    getValue: (p: Project) => p,
    type: "links" as const,
  },
]);

function getDifficultyClass(difficulty: string): string {
  switch (difficulty) {
    case "Beginner":
      return "badge-emerald";
    case "Intermediate":
      return "badge-amber";
    case "Advanced":
      return "badge-rose";
    default:
      return "badge-neutral";
  }
}
</script>

<template>
  <div>
    <!-- Comparison View -->
    <div v-if="showComparison" class="mb-12">
      <div class="mb-6 flex items-center justify-between">
        <h2 class="text-xl font-semibold text-neutral-900 dark:text-white">
          Comparing {{ comparedProjects.length }} Tools
        </h2>
        <button
          @click="closeComparison"
          class="inline-flex items-center gap-2 rounded-lg border border-black/10 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-100 dark:border-white/10 dark:text-neutral-300 dark:hover:bg-neutral-800"
        >
          <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
          Close comparison
        </button>
      </div>

      <!-- Comparison Grid -->
      <div class="overflow-x-auto rounded-xl border border-black/10 dark:border-white/10">
        <table class="w-full text-left text-sm">
          <!-- Header row: tool names -->
          <thead class="border-b border-black/10 bg-neutral-50 dark:border-white/10 dark:bg-neutral-900">
            <tr>
              <th class="w-36 min-w-[9rem] px-4 py-4 text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400"></th>
              <th
                v-for="project in comparedProjects"
                :key="project.name"
                class="min-w-[12rem] px-4 py-4"
              >
                <div class="flex items-start justify-between gap-2">
                  <a
                    :href="`/project/${generateSlug(project.name)}`"
                    class="text-base font-semibold text-neutral-900 no-underline hover:underline dark:text-white"
                  >
                    {{ project.name }}
                  </a>
                  <button
                    @click="removeFromComparison(project.name)"
                    class="shrink-0 rounded p-1 text-neutral-400 transition-colors hover:bg-neutral-200 hover:text-neutral-700 dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
                    title="Remove from comparison"
                  >
                    <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </div>
              </th>
            </tr>
          </thead>
          <tbody class="divide-y divide-neutral-100 dark:divide-white/5">
            <tr
              v-for="(row, idx) in comparisonRows"
              :key="row.label"
              :class="idx % 2 === 0 ? 'bg-white dark:bg-neutral-950' : 'bg-neutral-50/50 dark:bg-neutral-900/50'"
            >
              <td class="px-4 py-3 text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400 align-top">
                {{ row.label }}
              </td>
              <td
                v-for="project in comparedProjects"
                :key="project.name"
                class="px-4 py-3 align-top"
              >
                <!-- Text fields -->
                <template v-if="row.type === 'text'">
                  <span class="text-neutral-700 dark:text-neutral-300">
                    {{ row.getValue(project) }}
                  </span>
                </template>

                <!-- Difficulty badge -->
                <template v-else-if="row.type === 'difficulty'">
                  <span
                    class="badge"
                    :class="getDifficultyClass(row.getValue(project) as string)"
                  >
                    {{ row.getValue(project) }}
                  </span>
                </template>

                <!-- List items -->
                <template v-else-if="row.type === 'list'">
                  <ul class="list-none space-y-1 p-0 m-0">
                    <li
                      v-for="item in (row.getValue(project) as string[])"
                      :key="item"
                      class="flex items-start gap-1.5 text-neutral-700 dark:text-neutral-300"
                    >
                      <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500"></span>
                      {{ item }}
                    </li>
                  </ul>
                </template>

                <!-- Badge items -->
                <template v-else-if="row.type === 'badges'">
                  <div class="flex flex-wrap gap-1">
                    <span
                      v-for="item in (row.getValue(project) as string[])"
                      :key="item"
                      class="badge badge-neutral"
                    >
                      {{ item }}
                    </span>
                  </div>
                </template>

                <!-- Links -->
                <template v-else-if="row.type === 'links'">
                  <div class="flex flex-col gap-2">
                    <a
                      v-if="(row.getValue(project) as Project).website_url"
                      :href="(row.getValue(project) as Project).website_url!"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-1.5 text-sm text-neutral-600 no-underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                      <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                      </svg>
                      Website
                    </a>
                    <a
                      v-if="(row.getValue(project) as Project).github_url"
                      :href="(row.getValue(project) as Project).github_url!"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="inline-flex items-center gap-1.5 text-sm text-neutral-600 no-underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                    >
                      <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <span
                      v-if="!(row.getValue(project) as Project).website_url && !(row.getValue(project) as Project).github_url"
                      class="text-neutral-400 dark:text-neutral-600"
                    >
                      &mdash;
                    </span>
                  </div>
                </template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Mobile comparison cards (stacked) -->
      <div class="mt-6 space-y-4 md:hidden">
        <p class="text-xs text-neutral-500">Scroll the table above horizontally, or view each tool below.</p>
        <div
          v-for="project in comparedProjects"
          :key="project.name"
          class="rounded-xl border border-black/10 bg-white p-5 dark:border-white/10 dark:bg-neutral-900"
        >
          <div class="flex items-start justify-between gap-2 mb-4">
            <a
              :href="`/project/${generateSlug(project.name)}`"
              class="text-base font-semibold text-neutral-900 no-underline hover:underline dark:text-white"
            >
              {{ project.name }}
            </a>
            <button
              @click="removeFromComparison(project.name)"
              class="shrink-0 rounded p-1 text-neutral-400 transition-colors hover:bg-neutral-200 hover:text-neutral-700 dark:hover:bg-neutral-700 dark:hover:text-neutral-200"
              title="Remove from comparison"
            >
              <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
              </svg>
            </button>
          </div>
          <dl class="space-y-3 text-sm">
            <div>
              <dt class="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Creator</dt>
              <dd class="mt-0.5 text-neutral-700 dark:text-neutral-300">{{ project.creator }}</dd>
            </div>
            <div>
              <dt class="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Type</dt>
              <dd class="mt-0.5 text-neutral-700 dark:text-neutral-300">{{ typeLabels[project.type] || project.type }}</dd>
            </div>
            <div>
              <dt class="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Difficulty</dt>
              <dd class="mt-1">
                <span class="badge" :class="getDifficultyClass(difficultyLabels[project.difficulty] || project.difficulty)">
                  {{ difficultyLabels[project.difficulty] || project.difficulty }}
                </span>
              </dd>
            </div>
            <div>
              <dt class="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Stars</dt>
              <dd class="mt-0.5 text-neutral-700 dark:text-neutral-300">{{ formatStars(project.github_stars) }}</dd>
            </div>
            <div>
              <dt class="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Use Cases</dt>
              <dd class="mt-1 flex flex-wrap gap-1">
                <span
                  v-for="uc in project.use_cases"
                  :key="uc"
                  class="inline-block rounded-full border border-black/10 px-2 py-0.5 text-xs text-neutral-500 dark:border-white/10 dark:text-neutral-400"
                >
                  {{ uc }}
                </span>
              </dd>
            </div>
            <div>
              <dt class="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Key Features</dt>
              <dd class="mt-1">
                <ul class="list-none space-y-1 p-0 m-0">
                  <li
                    v-for="f in project.key_features"
                    :key="f"
                    class="flex items-start gap-1.5 text-neutral-700 dark:text-neutral-300"
                  >
                    <span class="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-neutral-400 dark:bg-neutral-500"></span>
                    {{ f }}
                  </li>
                </ul>
              </dd>
            </div>
            <div>
              <dt class="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Features</dt>
              <dd class="mt-1 flex flex-wrap gap-1">
                <span
                  v-for="f in (project.features.length > 0 ? project.features : ['None listed'])"
                  :key="f"
                  class="badge badge-neutral"
                >
                  {{ f }}
                </span>
              </dd>
            </div>
            <div>
              <dt class="text-xs font-medium uppercase tracking-wider text-neutral-500 dark:text-neutral-400">Links</dt>
              <dd class="mt-1 flex gap-3">
                <a
                  v-if="project.website_url"
                  :href="project.website_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm text-neutral-600 no-underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                >
                  <svg class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5zm7.25-.75a.75.75 0 01.75-.75h3.5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0V6.31l-5.47 5.47a.75.75 0 01-1.06-1.06l5.47-5.47H12.25a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                  </svg>
                  Website
                </a>
                <a
                  v-if="project.github_url"
                  :href="project.github_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-1.5 text-sm text-neutral-600 no-underline hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                >
                  <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>

    <!-- Table View (hidden during comparison) -->
    <div v-if="!showComparison">
      <!-- Hint text -->
      <p class="mb-4 text-sm text-neutral-500 dark:text-neutral-400">
        Select 2&ndash;4 tools to compare them side by side.
      </p>

      <div class="relative max-w-md">
        <svg class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
        </svg>
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Filter table..."
          class="w-full rounded-lg border border-black/10 bg-white py-2.5 pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-black focus:ring-2 focus:ring-neutral-100 dark:border-white/10 dark:bg-neutral-900 dark:text-white dark:placeholder-neutral-500 dark:focus:border-white dark:focus:ring-neutral-800"
        />
      </div>

      <p class="mt-4 text-sm text-neutral-500">
        {{ sorted.length }} {{ sorted.length === 1 ? 'project' : 'projects' }}
        <template v-if="selectedCount > 0">
          &middot; {{ selectedCount }} selected
        </template>
      </p>

      <div class="mt-4 overflow-x-auto rounded-xl border border-black/10 dark:border-white/10">
        <table class="w-full text-left text-sm">
          <thead class="border-b border-black/10 bg-neutral-50 dark:border-white/10 dark:bg-neutral-900">
            <tr>
              <th class="w-10 px-3 py-3">
                <span class="sr-only">Select</span>
              </th>
              <th
                v-for="col in [
                  { key: 'name', label: 'Name' },
                  { key: 'type', label: 'Type' },
                  { key: 'creator', label: 'Creator' },
                  { key: 'stars', label: 'Stars' },
                  { key: 'useCases', label: 'Use Cases' },
                ]"
                :key="col.key"
                class="cursor-pointer px-4 py-3 font-medium text-neutral-700 select-none hover:text-neutral-900 whitespace-nowrap dark:text-neutral-300 dark:hover:text-white"
                @click="toggleSort(col.key as any)"
              >
                <span class="inline-flex items-center gap-1">
                  {{ col.label }}
                  <svg v-if="sortColumn === col.key" class="h-4 w-4" :class="sortDir === 'desc' ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd" />
                  </svg>
                </span>
              </th>
              <th class="px-4 py-3 font-medium text-neutral-700 dark:text-neutral-300">GitHub</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-neutral-100 dark:divide-white/10">
            <tr
              v-for="project in sorted"
              :key="project.name"
              class="transition-colors"
              :class="[
                isSelected(project.name)
                  ? 'bg-neutral-100 dark:bg-neutral-800/50'
                  : 'hover:bg-neutral-50 dark:hover:bg-neutral-900',
              ]"
            >
              <td class="px-3 py-3">
                <input
                  type="checkbox"
                  :checked="isSelected(project.name)"
                  :disabled="isDisabled(project.name)"
                  @change="toggleSelection(project.name)"
                  class="h-4 w-4 cursor-pointer rounded border-neutral-300 text-neutral-900 focus:ring-neutral-500 disabled:cursor-not-allowed disabled:opacity-40 dark:border-neutral-600 dark:bg-neutral-800 dark:text-white dark:focus:ring-neutral-400"
                />
              </td>
              <td class="px-4 py-3 font-medium">
                <a
                  :href="`/project/${generateSlug(project.name)}`"
                  class="text-neutral-900 font-semibold no-underline hover:underline dark:text-white"
                >
                  {{ project.name }}
                </a>
              </td>
              <td class="px-4 py-3 whitespace-nowrap text-neutral-600 dark:text-neutral-400">
                {{ typeLabels[project.type] || project.type }}
              </td>
              <td class="px-4 py-3 text-neutral-600 dark:text-neutral-400">{{ project.creator }}</td>
              <td class="px-4 py-3 text-neutral-500 whitespace-nowrap">{{ formatStars(project.github_stars) }}</td>
              <td class="px-4 py-3">
                <div class="flex flex-wrap gap-1">
                  <span
                    v-for="uc in project.use_cases"
                    :key="uc"
                    class="inline-block rounded-full border border-black/10 px-2 py-0.5 text-xs text-neutral-500 dark:border-white/10 dark:text-neutral-400"
                  >
                    {{ uc }}
                  </span>
                </div>
              </td>
              <td class="px-4 py-3">
                <a
                  v-if="project.github_url"
                  :href="project.github_url"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="text-neutral-400 no-underline hover:text-neutral-900 dark:hover:text-white"
                >
                  <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <span v-else class="text-neutral-300 dark:text-neutral-600">&mdash;</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Sticky bottom bar -->
    <Teleport to="body">
      <Transition
        enter-active-class="transition-transform duration-200 ease-out"
        enter-from-class="translate-y-full"
        enter-to-class="translate-y-0"
        leave-active-class="transition-transform duration-150 ease-in"
        leave-from-class="translate-y-0"
        leave-to-class="translate-y-full"
      >
        <div
          v-if="selectedCount >= 2 && !showComparison"
          class="fixed bottom-0 inset-x-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur-sm dark:border-white/10 dark:bg-neutral-950/95"
        >
          <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
            <div class="flex items-center gap-3">
              <span class="text-sm font-medium text-neutral-900 dark:text-white">
                {{ selectedCount }} {{ selectedCount === 1 ? 'tool' : 'tools' }} selected
              </span>
              <button
                @click="clearSelection"
                class="text-sm text-neutral-500 underline-offset-4 hover:text-neutral-700 hover:underline dark:text-neutral-400 dark:hover:text-neutral-200"
              >
                Clear
              </button>
            </div>
            <button
              @click="openComparison"
              class="btn-primary"
            >
              Compare {{ selectedCount }} tools
            </button>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
