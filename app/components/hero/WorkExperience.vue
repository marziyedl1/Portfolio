<template>
  <div
    class="w-1/4 h-100 max-w-sm p-6 rounded-xl border border-gray-700 shadow-lg"
  >
    <h2 class="text-xl font-semibold mb-1">
      {{ title }}
    </h2>

    <p class="text-sm text-gray-400 mb-4">
      {{ role }}
    </p>

    <p class="text-sm leading-relaxed mb-4">
      {{ description }}
    </p>

    <div class="flex flex-wrap gap-2 mt-2">
      <span
        v-for="badge in badges"
        :key="badge.label"
        class="px-3 py-1 text-gray-200 text-xs rounded-md bg-gray-800 border border-gray-600"
      >
        {{ badge.label }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Badge {
  label: string
}

interface HeroWorkExperienceProps {
  title: string
  role: string
  description: string
  badges: Badge[]
}

defineProps<HeroWorkExperienceProps>()
</script>
