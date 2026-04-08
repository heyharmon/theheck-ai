<script setup lang="ts">
import { ref, computed } from "vue";

interface Project {
  name: string;
  category: string;
  type: string;
  use_cases: string[];
  features: string[];
  creator: string;
  github_stars: string | number | null;
  github_url: string | null;
  full_description: string;
  key_features: string[];
  why_discussed: string;
  notes: string;
}

const props = defineProps<{
  projects: Project[];
}>();

const searchQuery = ref("");
const sortColumn = ref<"name" | "type" | "creator" | "stars" | "useCases">("name");
const sortDir = ref<"asc" | "desc">("asc");

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

function toggleSort(col: typeof sortColumn.value) {
  if (sortColumn.value === col) {
    sortDir.value = sortDir.value === "asc" ? "desc" : "asc";
  } else {
    sortColumn.value = col;
    sortDir.value = col === "stars" || col === "useCases" ? "desc" : "asc";
  }
}

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
</script>

<template>
  <div>
    <div class="relative max-w-md">
      <svg class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
      </svg>
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Filter table..."
        class="w-full rounded-lg border border-neutral-300 bg-white py-2.5 pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
      />
    </div>

    <p class="mt-4 text-sm text-neutral-500">
      {{ sorted.length }} {{ sorted.length === 1 ? 'project' : 'projects' }}
    </p>

    <div class="mt-4 overflow-x-auto rounded-xl border border-neutral-200">
      <table class="w-full text-left text-sm">
        <thead class="border-b border-neutral-200 bg-neutral-50">
          <tr>
            <th
              v-for="col in [
                { key: 'name', label: 'Name' },
                { key: 'type', label: 'Type' },
                { key: 'creator', label: 'Creator' },
                { key: 'stars', label: 'Stars' },
                { key: 'useCases', label: 'Use Cases' },
              ]"
              :key="col.key"
              class="cursor-pointer px-4 py-3 font-medium text-neutral-700 select-none hover:text-neutral-900 whitespace-nowrap"
              @click="toggleSort(col.key as any)"
            >
              <span class="inline-flex items-center gap-1">
                {{ col.label }}
                <svg v-if="sortColumn === col.key" class="h-4 w-4" :class="sortDir === 'desc' ? 'rotate-180' : ''" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clip-rule="evenodd" />
                </svg>
              </span>
            </th>
            <th class="px-4 py-3 font-medium text-neutral-700">GitHub</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-neutral-100">
          <tr
            v-for="project in sorted"
            :key="project.name"
            class="transition-colors hover:bg-neutral-50"
          >
            <td class="px-4 py-3 font-medium">
              <a
                :href="`/project/${generateSlug(project.name)}`"
                class="text-indigo-600 no-underline hover:underline"
              >
                {{ project.name }}
              </a>
            </td>
            <td class="px-4 py-3 whitespace-nowrap text-neutral-600">
              {{ typeLabels[project.type] || project.type }}
            </td>
            <td class="px-4 py-3 text-neutral-600">{{ project.creator }}</td>
            <td class="px-4 py-3 text-neutral-500 whitespace-nowrap">{{ formatStars(project.github_stars) }}</td>
            <td class="px-4 py-3">
              <div class="flex flex-wrap gap-1">
                <span
                  v-for="uc in project.use_cases"
                  :key="uc"
                  class="inline-block rounded-full border border-neutral-200 px-2 py-0.5 text-xs text-neutral-500"
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
                class="text-neutral-400 no-underline hover:text-neutral-900"
              >
                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <span v-else class="text-neutral-300">&mdash;</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
