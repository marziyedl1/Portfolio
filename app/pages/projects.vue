<template>
  <UTabs class="mt-8" :items="items" color="neutral">
    <template v-for="{ slot, projects } in tabContent" :key="slot" #[slot]>
      <UContainer
        class="py-20 flex items-center justify-center flex-wrap gap-4"
      >
        <HeroWorkExperience
          v-for="project in projects"
          :key="project.title"
          v-bind="project"
        />
      </UContainer>
    </template>
  </UTabs>
</template>

<script setup lang="ts">
import { companiesProject, gitProjects } from '@/assets/data/projects'

const items = [
  {
    label: 'Companies',
    icon: 'i-lucide-user',
    slot: 'companies',
  },
  {
    label: 'Github',
    icon: 'i-lucide-lock',
    slot: 'github',
  },
]

const tabContent = [
  {
    slot: 'companies',
    projects: companiesProject,
  },
  {
    slot: 'github',
    projects: gitProjects,
  },
]
</script>
