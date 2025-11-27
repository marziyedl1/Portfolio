<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const navLinks: NavigationMenuItem[] = [
  {
    label: $t('home'),
    to: '/',
  },
  {
    label: $t('about'),
    to: '/aboutme',
  },
  {
    label: $t('project'),
    to: '/projects',
  },
  {
    label: $t('contact'),
    to: '/contact',
  },
]
</script>

<template>
  <div>
    <UContainer class="pt-10">
      <AppHeader :links="navLinks" />
      <slot />
      <AppFooter />
    </UContainer>
  </div>
</template>
