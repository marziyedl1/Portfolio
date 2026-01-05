<template>
  <UTabs class="mt-8" :items="items" color="neutral">
    <template #companies>
      <UContainer
        class="py-20 flex items-center justify-center flex-wrap gap-4"
      >
        <HeroWorkExperience
          v-for="project in companiesProject"
          :title="project.title"
          :role="project.role"
          :description="project.description"
          :badges="project.badges"
        />
      </UContainer>
    </template>

    <template #github>
      <UContainer
        class="py-20 flex items-center justify-center flex-wrap gap-4"
      >
        <HeroWorkExperience
          v-for="project in gitProjects"
          :title="project.title"
          :role="project.role"
          :description="project.description"
          :badges="project.badges"
        />
      </UContainer>
    </template>
  </UTabs>
</template>

<script setup lang="ts">
import { companiesProject, gitProjects } from '~/assets/data/projects';

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

</script>
