<script setup lang="ts">
import { ref, computed, onMounted, watch, nextTick } from "vue";

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
  full_description: string;
  key_features: string[];
  why_discussed: string;
  notes: string;
  tag?: string | null;
}

const props = defineProps<{
  projects: Project[];
  types: string[];
  useCases: string[];
  difficultyLevels: string[];
  features: string[];
}>();

const searchQuery = ref("");
const selectedType = ref("All");
const selectedUseCase = ref("All");
const selectedDifficulty = ref("All");
const selectedFeatures = ref<string[]>([]);
const sortBy = ref<"name" | "stars" | "type">("stars");

// --- URL sync helpers ---

// Reverse lookups: label -> slug
const typeLabelToSlug = computed(() => {
  const map: Record<string, string> = {};
  for (const [slug, label] of Object.entries(typeLabels)) {
    map[label] = slug;
  }
  return map;
});

const difficultyLabelToSlug = computed(() => {
  const map: Record<string, string> = {};
  for (const [slug, label] of Object.entries(difficultyLabels)) {
    map[label] = slug;
  }
  return map;
});

// Flag to suppress URL writes while restoring state from URL on mount
let isRestoringFromUrl = false;

/** Build a URLSearchParams with only non-default filter values */
function buildFilterParams(): URLSearchParams {
  const params = new URLSearchParams();
  if (searchQuery.value.trim()) params.set("q", searchQuery.value.trim());
  if (selectedType.value !== "All") {
    const slug = typeLabelToSlug.value[selectedType.value];
    if (slug) params.set("type", slug);
  }
  if (selectedUseCase.value !== "All") params.set("useCase", selectedUseCase.value);
  if (selectedDifficulty.value !== "All") {
    const slug = difficultyLabelToSlug.value[selectedDifficulty.value];
    if (slug) params.set("difficulty", slug);
  }
  if (selectedFeatures.value.length > 0) {
    for (const f of selectedFeatures.value) {
      params.append("feature", f);
    }
  }
  if (sortBy.value !== "stars") params.set("sort", sortBy.value);
  return params;
}

/** Push current filter state to the URL (replaceState, no history entry) */
function syncFiltersToUrl() {
  if (isRestoringFromUrl) return;
  const params = buildFilterParams();
  const qs = params.toString();
  const newUrl = qs
    ? `${window.location.pathname}?${qs}`
    : window.location.pathname;
  history.replaceState(null, "", newUrl);
}

// Watch all filter refs and sync to URL on change
watch(
  [searchQuery, selectedType, selectedUseCase, selectedDifficulty, selectedFeatures, sortBy],
  syncFiltersToUrl,
  { deep: true }
);

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

const POPULAR_THRESHOLD = 5000;

function isPopular(stars: string | number | null): boolean {
  return typeof stars === "number" && stars >= POPULAR_THRESHOLD;
}

const emergingTags = new Set(["testing", "web3", "theorem-proving", "no-code", "video", "design"]);

function isEmerging(tag: string | null | undefined): boolean {
  return !!tag && emergingTags.has(tag);
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
  "agent-tool": "Agents",
  "multi-agent-platform": "Multi-Agent Platforms",
  "developer-utility": "Developer Utilities",
};

const typeColors: Record<string, { border: string; badge: string; badgeText: string }> = {
  "agent-tool": { border: "border-t-black/20", badge: "bg-neutral-100", badgeText: "text-neutral-700" },
  "multi-agent-platform": { border: "border-t-emerald-500", badge: "bg-emerald-50", badgeText: "text-emerald-700" },
  "developer-utility": { border: "border-t-amber-500", badge: "bg-amber-50", badgeText: "text-amber-700" },
};

const difficultyLabels: Record<string, string> = {
  beginner: "Beginner",
  intermediate: "Intermediate",
  advanced: "Advanced",
};

const difficultyColors: Record<string, { badge: string; badgeText: string }> = {
  beginner: { badge: "bg-emerald-50", badgeText: "text-emerald-700" },
  intermediate: { badge: "bg-amber-50", badgeText: "text-amber-700" },
  advanced: { badge: "bg-rose-50", badgeText: "text-rose-700" },
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

function toggleFeature(feature: string) {
  const idx = selectedFeatures.value.indexOf(feature);
  if (idx >= 0) {
    selectedFeatures.value.splice(idx, 1);
  } else {
    selectedFeatures.value.push(feature);
  }
}

const hasActiveFilters = computed(() =>
  selectedType.value !== "All" ||
  selectedUseCase.value !== "All" ||
  selectedDifficulty.value !== "All" ||
  selectedFeatures.value.length > 0 ||
  searchQuery.value.trim() !== ""
);

// Whether any non-search filter is active (type, useCase, difficulty, features)
const hasNonSearchFilter = computed(() =>
  selectedType.value !== "All" ||
  selectedUseCase.value !== "All" ||
  selectedDifficulty.value !== "All" ||
  selectedFeatures.value.length > 0
);

// Count of results matching the search query only (ignoring type/useCase/difficulty/features filters)
const searchOnlyCount = computed(() => {
  if (!searchQuery.value.trim()) return 0;
  const q = searchQuery.value.toLowerCase();
  return props.projects.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.creator.toLowerCase().includes(q) ||
      p.full_description.toLowerCase().includes(q) ||
      p.key_features.some((f) => f.toLowerCase().includes(q)) ||
      p.use_cases.some((uc) => uc.toLowerCase().includes(q))
  ).length;
});

// Number of additional results hidden by filters
const hiddenByFilters = computed(() => searchOnlyCount.value - filtered.value.length);

/** Reset all filters except the search query */
function resetFiltersKeepSearch() {
  selectedType.value = "All";
  selectedUseCase.value = "All";
  selectedDifficulty.value = "All";
  selectedFeatures.value = [];
}

function clearAll() {
  searchQuery.value = "";
  selectedType.value = "All";
  selectedUseCase.value = "All";
  selectedDifficulty.value = "All";
  selectedFeatures.value = [];
}

const filtered = computed(() => {
  let results = [...props.projects];

  if (selectedType.value !== "All") {
    results = results.filter((p) => typeLabels[p.type] === selectedType.value);
  }

  if (selectedUseCase.value !== "All") {
    results = results.filter((p) => p.use_cases.includes(selectedUseCase.value));
  }

  if (selectedDifficulty.value !== "All") {
    results = results.filter((p) => difficultyLabels[p.difficulty] === selectedDifficulty.value);
  }

  if (selectedFeatures.value.length > 0) {
    results = results.filter((p) =>
      selectedFeatures.value.every((f) => p.features.includes(f))
    );
  }

  if (searchQuery.value.trim()) {
    const q = searchQuery.value.toLowerCase();
    results = results.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.creator.toLowerCase().includes(q) ||
        p.full_description.toLowerCase().includes(q) ||
        p.key_features.some((f) => f.toLowerCase().includes(q)) ||
        p.use_cases.some((uc) => uc.toLowerCase().includes(q))
    );
  }

  results.sort((a, b) => {
    if (sortBy.value === "stars") return getNumericStars(b.github_stars) - getNumericStars(a.github_stars);
    if (sortBy.value === "type") return a.type.localeCompare(b.type) || a.name.localeCompare(b.name);
    return a.name.localeCompare(b.name);
  });

  return results;
});

onMounted(() => {
  isRestoringFromUrl = true;

  const params = new URLSearchParams(window.location.search);

  // Search query
  const q = params.get("q");
  if (q) {
    searchQuery.value = q;
  }

  // Type filter (slug -> label)
  const type = params.get("type");
  if (type) {
    const label = typeLabels[type];
    if (label && props.types.includes(label)) {
      selectedType.value = label;
    }
  }

  // Use case — support both "useCase" (canonical) and "use_case" (legacy)
  const uc = params.get("useCase") || params.get("use_case");
  if (uc && props.useCases.includes(uc)) {
    selectedUseCase.value = uc;
  }

  // Difficulty (slug -> label, with fallback for label form)
  const diff = params.get("difficulty");
  if (diff) {
    const label = difficultyLabels[diff];
    if (label && props.difficultyLevels.includes(label)) {
      selectedDifficulty.value = label;
    } else if (props.difficultyLevels.includes(diff)) {
      // Fallback: param value is already the display label (legacy URLs)
      selectedDifficulty.value = diff;
    }
  }

  // Features (supports multiple ?feature=X&feature=Y)
  const feats = params.getAll("feature");
  if (feats.length > 0) {
    selectedFeatures.value = feats.filter((f) => props.features.includes(f));
  }

  // Sort
  const sort = params.get("sort");
  if (sort && (sort === "name" || sort === "stars" || sort === "type")) {
    sortBy.value = sort;
  }

  // Allow URL sync watcher to resume on next tick.
  // nextTick ensures all watch callbacks from the above assignments have fired first.
  nextTick(() => { isRestoringFromUrl = false; });
});
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:gap-10">
    <!-- Sidebar -->
    <aside class="w-full shrink-0 lg:w-60 xl:w-64">
      <div class="lg:sticky lg:top-20 lg:max-h-[calc(100vh-6rem)] lg:overflow-y-auto space-y-8 pr-2">
        <!-- Categories (Use Case) — durable-style vertical list -->
        <div>
          <div class="mb-3 flex items-center gap-2 px-3">
            <svg class="h-4 w-4 text-neutral-500" viewBox="0 0 20 20" fill="currentColor">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 16a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            </svg>
            <span class="text-sm font-semibold text-neutral-900">Categories</span>
          </div>
          <div class="flex flex-col gap-0.5">
            <button
              :class="[
                'w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
                selectedUseCase === 'All'
                  ? 'bg-neutral-100 font-semibold text-neutral-950'
                  : 'font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950',
              ]"
              @click="selectedUseCase = 'All'"
            >
              All categories
            </button>
            <button
              v-for="uc in useCases"
              :key="uc"
              :class="[
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors',
                selectedUseCase === uc
                  ? 'bg-neutral-100 font-semibold text-neutral-950'
                  : 'font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950',
              ]"
              @click="selectedUseCase = uc"
            >
              <span>{{ uc }}</span>
              <span class="text-xs text-neutral-400">{{ projects.filter((p) => p.use_cases.includes(uc)).length }}</span>
            </button>
          </div>
        </div>

        <!-- Type -->
        <div>
          <p class="mb-3 px-3 text-sm font-semibold text-neutral-900">Type</p>
          <div class="flex flex-col gap-0.5">
            <button
              :class="[
                'w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
                selectedType === 'All'
                  ? 'bg-neutral-100 font-semibold text-neutral-950'
                  : 'font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950',
              ]"
              @click="selectedType = 'All'"
            >
              All types
            </button>
            <button
              v-for="t in types"
              :key="t"
              :class="[
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors',
                selectedType === t
                  ? 'bg-neutral-100 font-semibold text-neutral-950'
                  : 'font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950',
              ]"
              @click="selectedType = t"
            >
              <span>{{ t }}</span>
              <span class="text-xs text-neutral-400">{{ projects.filter((p) => typeLabels[p.type] === t).length }}</span>
            </button>
          </div>
        </div>

        <!-- Difficulty -->
        <div>
          <p class="mb-3 px-3 text-sm font-semibold text-neutral-900">Difficulty</p>
          <div class="flex flex-col gap-0.5">
            <button
              :class="[
                'w-full rounded-lg px-3 py-2 text-left text-sm transition-colors',
                selectedDifficulty === 'All'
                  ? 'bg-neutral-100 font-semibold text-neutral-950'
                  : 'font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950',
              ]"
              @click="selectedDifficulty = 'All'"
            >
              All levels
            </button>
            <button
              v-for="d in difficultyLevels"
              :key="d"
              :class="[
                'flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-colors',
                selectedDifficulty === d
                  ? 'bg-neutral-100 font-semibold text-neutral-950'
                  : 'font-medium text-neutral-600 hover:bg-neutral-50 hover:text-neutral-950',
              ]"
              @click="selectedDifficulty = d"
            >
              <span>{{ d }}</span>
              <span class="text-xs text-neutral-400">{{ projects.filter((p) => difficultyLabels[p.difficulty] === d).length }}</span>
            </button>
          </div>
        </div>

        <!-- Features -->
        <div>
          <p class="mb-3 px-3 text-sm font-semibold text-neutral-900">Features</p>
          <div class="flex flex-col gap-0.5">
            <label
              v-for="f in features"
              :key="f"
              class="flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-950"
            >
              <input
                type="checkbox"
                :checked="selectedFeatures.includes(f)"
                class="h-3.5 w-3.5 rounded border-neutral-300 accent-neutral-900"
                @change="toggleFeature(f)"
              />
              <span class="flex-1">{{ f }}</span>
              <span class="text-xs text-neutral-400">{{ projects.filter((p) => p.features.includes(f)).length }}</span>
            </label>
          </div>
        </div>

        <!-- Clear filters -->
        <button
          v-if="hasActiveFilters"
          class="w-full rounded-lg border border-neutral-200 px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-50 hover:text-neutral-950"
          @click="clearAll"
        >
          Clear all filters
        </button>
      </div>
    </aside>

    <!-- Main content -->
    <div class="mt-10 min-w-0 flex-1 lg:mt-0">
      <!-- Top strip: search + sort + count -->
      <div class="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div class="relative flex-1 sm:max-w-sm">
          <svg class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
          </svg>
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Search projects..."
            class="w-full rounded-lg border border-neutral-200 bg-white py-2 pl-9 pr-4 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-neutral-600"
          />
        </div>
        <div class="flex items-center gap-2">
          <label class="text-xs font-medium text-neutral-500">Sort by</label>
          <select
            v-model="sortBy"
            class="rounded-lg border border-neutral-200 bg-white px-3 py-1.5 text-sm text-neutral-700 outline-none focus:border-neutral-600"
          >
            <option value="stars">Stars</option>
            <option value="name">Name</option>
            <option value="type">Type</option>
          </select>
        </div>
      </div>

      <!-- Results count -->
      <div class="mb-6">
        <p class="text-sm text-neutral-500">
          {{ filtered.length }} {{ filtered.length === 1 ? 'project' : 'projects' }}
        </p>
        <button
          v-if="searchQuery.trim() && hasNonSearchFilter && hiddenByFilters > 0"
          class="mt-1 text-xs text-neutral-500 underline decoration-neutral-300 underline-offset-2 transition-colors hover:text-neutral-900"
          @click="resetFiltersKeepSearch"
        >
          {{ hiddenByFilters }} more outside current filters
        </button>
      </div>

      <!-- Card Grid -->
      <div v-if="filtered.length" class="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        <a
          v-for="project in filtered"
          :key="project.name"
          :href="`/project/${generateSlug(project.name)}`"
          class="card-interactive flex flex-col no-underline"
        >
          <div class="flex items-start justify-between gap-2">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="text-base font-semibold text-neutral-950" style="letter-spacing: -0.01em;">{{ project.name }}</h3>
              <span
                v-if="isPopular(project.github_stars)"
                class="badge badge-accent"
              >
                Popular
              </span>
              <span
                v-if="isEmerging(project.tag)"
                class="badge badge-outline"
                style="border-style: dashed;"
              >
                Emerging
              </span>
            </div>
            <svg v-if="project.github_url" class="h-5 w-5 shrink-0 text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>

          <p class="mt-1 text-xs text-neutral-500">{{ project.creator }}</p>

          <div class="mt-3 flex flex-wrap items-center gap-1.5">
            <span class="badge badge-neutral">
              {{ typeLabels[project.type] || project.type }}
            </span>
            <span
              v-if="project.difficulty"
              class="badge badge-neutral"
            >
              {{ difficultyLabels[project.difficulty] || project.difficulty }}
            </span>
            <span
              v-if="project.tag"
              class="badge badge-outline"
              style="border-style: dashed;"
            >
              #{{ project.tag }}
            </span>
            <span v-if="project.github_stars" class="inline-flex items-center gap-1 text-xs text-neutral-500">
              <svg class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              {{ formatStars(project.github_stars) }}
            </span>
          </div>

          <p class="mt-3 flex-1 text-sm leading-relaxed text-neutral-600" style="display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">
            {{ project.full_description }}
          </p>

          <p
            v-if="project.why_discussed"
            class="mt-2 text-xs italic leading-relaxed text-neutral-500"
            style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;"
          >
            {{ project.why_discussed }}
          </p>

          <div class="mt-4 flex flex-wrap gap-1.5">
            <span
              v-for="uc in project.use_cases"
              :key="uc"
              class="badge badge-outline"
            >
              {{ uc }}
            </span>
          </div>
        </a>
      </div>

      <!-- Empty state -->
      <div v-else class="mt-12 text-center">
        <p class="text-lg text-neutral-500">No projects match your filters.</p>
        <button
          class="mt-4 text-sm font-medium text-neutral-900 hover:underline"
          @click="clearAll"
        >
          Clear all filters
        </button>
      </div>
    </div>
  </div>
</template>
