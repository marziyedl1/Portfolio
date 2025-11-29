<template>
  <UFooter
    class="border-t py-6 relative before:absolute before:top-0 before:left-0 before:w-full before:h-px before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 before:to-blue-500"
  >
    <UContainer
      class="flex flex-col md:flex-row justify-between items-center gap-4"
    >
      <div class="text-center md:text-left">
        <p class="font-semibold text-lg">Marzieh Portfolio</p>
        <p class="text-sm opacity-70">© {{ year }} {{ t('all_right_reserved') }}</p>
      </div>

      <div class="flex gap-4">
        <ULink to="/" active-class="font-semibold">{{ t('home') }}</ULink>
        <ULink to="/aboutme" active-class="font-semibold">{{ t('about') }}</ULink>

        <ULink to="/projects" active-class="font-semibold">{{
          t('project')
        }}</ULink>
        <ULink to="/contact" active-class="font-semibold">{{
          t('contact.title')
        }}</ULink>
      </div>

      <div class="flex gap-4">
        <UButton
          icon="i-simple-icons-github"
          color="gray"
          variant="ghost"
          to="https://github.com/marziyedl1"
          target="_blank"
        />
        <UButton
          icon="i-simple-icons-linkedin"
          color="gray"
          variant="ghost"
          to="https://www.linkedin.com/in/marzi-dt/"
          target="_blank"
        />
      </div>
    </UContainer>
  </UFooter>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const year = new Date().getFullYear()
const { t } = useI18n()
</script>
