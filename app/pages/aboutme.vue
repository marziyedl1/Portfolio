<template>
  <UContainer
    class="mt-10 flex flex-col items-center justify-center relative overflow-hidden"
  >
    <div class="snow-layer-1" />
    <div class="snow-layer-2" />
    <img
      src="@/assets/img/profile.jpg"
      width="200"
      class="h-auto max-w-lg transition-all duration-300 rounded cursor-pointer filter grayscale hover:grayscale-0 z-2"
    />
    <section class="max-w-3xl mx-auto px-4 py-10">
      <h1 class="text-3xl font-bold mb-6">
        {{ $t('aboutme.title') }}
      </h1>

      <p class="mb-4">
        {{ $t('aboutme.intro') }}
      </p>
      <p class="mb-4">
        {{ $t('aboutme.skills') }}
      </p>
      <p class="mb-4">
        {{ $t('aboutme.experience') }}
      </p>
      <p class="mb-4">
        {{ $t('aboutme.tech') }}
      </p>
      <p class="mb-4">
        {{ $t('aboutme.migration') }}
      </p>
      <p class="mb-4">
        {{ $t('aboutme.soft') }}
      </p>
      <p class="mb-4">
        {{ $t('aboutme.background') }}
      </p>
      <p class="mt-6 font-medium">
        {{ $t('aboutme.closing') }}
      </p>
    </section>
  </UContainer>
</template>

<style scoped>
.snow-layer-1,
.snow-layer-2 {
  pointer-events: none;
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-repeat: repeat;
  background-image:
    radial-gradient(2px 2px at 20px 20px, gray, transparent),
    radial-gradient(3px 3px at 70px 40px, gray, transparent),
    radial-gradient(2px 2px at 120px 80px, gray, transparent),
    radial-gradient(3px 3px at 200px 160px, gray, transparent);
  background-size: 250px 250px;
  opacity: 0.7;
  animation: fall 8s linear infinite;
}

.snow-layer-2 {
  animation-delay: -4s;
  opacity: 0.5;
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
