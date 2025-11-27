<template>
  <div class="flex gap-2">
    <UButton
      v-for="loc in locales"
      :key="loc.code"
      @click="setLocale(loc.code)"
      size="xs"
      variant="ghost"
      :color="loc.code === locale ? 'primary' : 'gray'"
    >
      {{ loc.code.toUpperCase() }}
    </UButton>
  </div>
</template>

<script setup>
const { locale, locales, setLocale } = useI18n()
</script>
