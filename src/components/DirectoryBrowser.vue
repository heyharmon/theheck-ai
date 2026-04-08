<script setup lang="ts">
import { ref, computed, onMounted } from "vue";

interface Project {
  name: string;
  category: string;
  type: string;
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
}

const props = defineProps<{
  projects: Project[];
  types: string[];
  useCases: string[];
  difficultyLevels: string[];
}>();

const searchQuery = ref("");
const selectedType = ref("All");
const selectedUseCase = ref("All");
const selectedDifficulty = ref("All");
const sortBy = ref<"name" | "stars" | "type">("name");

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
  "agent-tool": "Agent Tools",
  "multi-agent-platform": "Multi-Agent Platforms",
  "developer-utility": "Developer Utilities",
};

const typeColors: Record<string, { border: string; badge: string; badgeText: string }> = {
  "agent-tool": { border: "border-t-indigo-500", badge: "bg-indigo-50", badgeText: "text-indigo-700" },
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
  const params = new URLSearchParams(window.location.search);
  const type = params.get("type");
  if (type) {
    const label = typeLabels[type];
    if (label && props.types.includes(label)) {
      selectedType.value = label;
    }
  }
  const uc = params.get("use_case");
  if (uc && props.useCases.includes(uc)) {
    selectedUseCase.value = uc;
  }
  const diff = params.get("difficulty");
  if (diff && props.difficultyLevels.includes(diff)) {
    selectedDifficulty.value = diff;
  }
});
</script>

<template>
  <div class="flex flex-col lg:flex-row lg:gap-8">
    <!-- Sidebar -->
    <aside class="w-full shrink-0 lg:w-64 xl:w-72">
      <div class="lg:sticky lg:top-6 space-y-6">
        <!-- Search -->
        <div>
          <div class="relative">
            <svg class="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clip-rule="evenodd" />
            </svg>
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Search projects..."
              class="w-full rounded-lg border border-neutral-300 bg-white py-2.5 pl-10 pr-4 text-sm text-neutral-900 placeholder-neutral-400 outline-none transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </div>
        </div>

        <!-- Sort -->
        <div>
          <p class="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-400">Sort</p>
          <select
            v-model="sortBy"
            class="w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm text-neutral-700 outline-none focus:border-indigo-500"
          >
            <option value="name">Name</option>
            <option value="stars">Stars</option>
            <option value="type">Type</option>
          </select>
        </div>

        <!-- Type Filter -->
        <div>
          <p class="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-400">Type</p>
          <div class="flex flex-col gap-1">
            <button
              :class="[
                'rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors',
                selectedType === 'All'
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:bg-neutral-100',
              ]"
              @click="selectedType = 'All'"
            >
              All <span class="text-xs opacity-60">({{ projects.length }})</span>
            </button>
            <button
              v-for="t in types"
              :key="t"
              :class="[
                'rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors',
                selectedType === t
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:bg-neutral-100',
              ]"
              @click="selectedType = t"
            >
              {{ t }} <span class="text-xs opacity-60">({{ projects.filter((p) => typeLabels[p.type] === t).length }})</span>
            </button>
          </div>
        </div>

        <!-- Use Case Filter -->
        <div>
          <p class="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-400">Use Case</p>
          <div class="flex flex-col gap-1">
            <button
              :class="[
                'rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors',
                selectedUseCase === 'All'
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:bg-neutral-100',
              ]"
              @click="selectedUseCase = 'All'"
            >
              All
            </button>
            <button
              v-for="uc in useCases"
              :key="uc"
              :class="[
                'rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors',
                selectedUseCase === uc
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:bg-neutral-100',
              ]"
              @click="selectedUseCase = uc"
            >
              {{ uc }} <span class="text-xs opacity-60">({{ projects.filter((p) => p.use_cases.includes(uc)).length }})</span>
            </button>
          </div>
        </div>

        <!-- Difficulty Filter -->
        <div>
          <p class="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-400">Difficulty</p>
          <div class="flex flex-col gap-1">
            <button
              :class="[
                'rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors',
                selectedDifficulty === 'All'
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:bg-neutral-100',
              ]"
              @click="selectedDifficulty = 'All'"
            >
              All
            </button>
            <button
              v-for="d in difficultyLevels"
              :key="d"
              :class="[
                'rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors',
                selectedDifficulty === d
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 hover:bg-neutral-100',
              ]"
              @click="selectedDifficulty = d"
            >
              {{ d }} <span class="text-xs opacity-60">({{ projects.filter((p) => difficultyLabels[p.difficulty] === d).length }})</span>
            </button>
          </div>
        </div>

        <!-- Clear filters -->
        <button
          v-if="selectedType !== 'All' || selectedUseCase !== 'All' || selectedDifficulty !== 'All' || searchQuery.trim()"
          class="w-full rounded-lg border border-neutral-300 px-3 py-2 text-sm font-medium text-neutral-600 transition-colors hover:bg-neutral-100"
          @click="searchQuery = ''; selectedType = 'All'; selectedUseCase = 'All'; selectedDifficulty = 'All'"
        >
          Clear all filters
        </button>
      </div>
    </aside>

    <!-- Main content -->
    <div class="mt-8 min-w-0 flex-1 lg:mt-0">
      <!-- Results count -->
      <p class="mb-6 text-sm text-neutral-500">
        {{ filtered.length }} {{ filtered.length === 1 ? 'project' : 'projects' }} found
      </p>

      <!-- Card Grid -->
      <div v-if="filtered.length" class="grid gap-6 sm:grid-cols-2">
        <a
          v-for="project in filtered"
          :key="project.name"
          :href="`/project/${generateSlug(project.name)}`"
          :class="[
            'card-interactive flex flex-col border-t-4 no-underline',
            typeColors[project.type]?.border || 'border-t-neutral-500',
          ]"
        >
          <div class="flex items-start justify-between gap-2">
            <h3 class="text-lg font-semibold text-neutral-900">{{ project.name }}</h3>
            <svg v-if="project.github_url" class="h-5 w-5 shrink-0 text-neutral-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </div>

          <p class="mt-1 text-xs text-neutral-400">{{ project.creator }}</p>

          <div class="mt-3 flex flex-wrap items-center gap-2">
            <span
              :class="[
                'inline-block rounded-full px-3 py-1 text-xs font-medium',
                typeColors[project.type]?.badge || 'bg-neutral-100',
                typeColors[project.type]?.badgeText || 'text-neutral-700',
              ]"
            >
              {{ typeLabels[project.type] || project.type }}
            </span>
            <span
              v-if="project.difficulty"
              :class="[
                'inline-block rounded-full px-3 py-1 text-xs font-medium',
                difficultyColors[project.difficulty]?.badge || 'bg-neutral-100',
                difficultyColors[project.difficulty]?.badgeText || 'text-neutral-700',
              ]"
            >
              {{ difficultyLabels[project.difficulty] || project.difficulty }}
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

          <div class="mt-4 flex flex-wrap gap-1.5">
            <span
              v-for="uc in project.use_cases"
              :key="uc"
              class="inline-block rounded-full border border-neutral-200 px-2.5 py-0.5 text-xs text-neutral-500"
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
          class="mt-4 text-sm font-medium text-indigo-600 hover:underline"
          @click="searchQuery = ''; selectedType = 'All'; selectedUseCase = 'All'"
        >
          Clear all filters
        </button>
      </div>
    </div>
  </div>
</template>
