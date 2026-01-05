<template>
  <section class="flex flex-col gap-8">

  <h1
    class="text-5xl md:text-7xl font-extrabold text-center 
           bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
           bg-clip-text text-transparent bg-[length:200%_200%] 
           animate-gradient"
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
  myName: string,
  text:string
}>()
</script>

<style scoped>
@keyframes gradientMove {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 100% 50%;
  }
}

.animate-text-gradient {
  background: linear-gradient(90deg, #3b82f6, #a855f7, #ec4899);
  background-size: 200% 200%;
  animation: gradientMove 4s ease-in-out infinite alternate;
  -webkit-background-clip: text;
  color: transparent;
}
</style>
