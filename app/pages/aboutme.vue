<template>
  <UContainer
    class="mt-10 flex flex-col items-center justify-center relative overflow-hidden"
  >
    <div v-for="layer in 2" :key="layer" :class="`snow-layer-${layer}`" />

    <img
      src="@/assets/img/profile.jpg"
      width="200"
      alt="Profile picture"
      class="h-auto max-w-lg rounded cursor-pointer z-2 transition-all duration-300 filter grayscale hover:grayscale-0"
    />

    <!-- About content -->
    <section class="max-w-3xl mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold mb-6">
        {{ $t('aboutme.title') }}
      </h1>

      <p v-for="key in paragraphKeys" :key="key" class="mb-4">
        {{ $t(`aboutme.${key}`) }}
      </p>

      <p class="mt-6 font-medium">
        {{ $t('aboutme.closing') }}
      </p>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
const paragraphKeys = [
  'intro',
  'skills',
  'experience',
  'tech',
  'migration',
  'soft',
  'background',
]
</script>

<style scoped>
.snow-layer-1,
.snow-layer-2 {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 1;
  background-repeat: repeat;
  background-size: 250px 250px;
  background-image:
    radial-gradient(2px 2px at 20px 20px, gray, transparent),
    radial-gradient(3px 3px at 70px 40px, gray, transparent),
    radial-gradient(2px 2px at 120px 80px, gray, transparent),
    radial-gradient(3px 3px at 200px 160px, gray, transparent);
  animation: fall 8s linear infinite;
}

.snow-layer-1 {
  opacity: 0.7;
}

.snow-layer-2 {
  opacity: 0.5;
  animation-delay: -4s;
}

@keyframes fall {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}
</style>
