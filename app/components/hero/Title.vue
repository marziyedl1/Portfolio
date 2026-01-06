<template>
  <section class="flex flex-col gap-8">
    <h1
      class="text-5xl md:text-7xl font-extrabold text-center bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient"
    >
      {{ myName }}
    </h1>
    <p class="text-left max-w-xl mx-auto text-lg opacity-80">
      {{ text }}
    </p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  myName: string
  text: string
}>()
</script>
