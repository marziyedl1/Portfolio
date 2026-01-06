<template>
  <ClientOnly>
    <UButton
      :icon="icon"
      color="neutral"
      variant="ghost"
      size="sm"
      class="rounded-full"
      @click="handleThemeSwitch"
    />

    <template #fallback>
      <div class="size-4" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()

const nextTheme = computed<'light' | 'dark'>(() =>
  colorMode.value === 'dark' ? 'light' : 'dark'
)

const icon = computed(
  () => `i-lucide-${nextTheme.value === 'dark' ? 'sun' : 'moon'}`
)

const switchTheme = () => {
  colorMode.preference = nextTheme.value
}

const handleThemeSwitch = (event: MouseEvent) => {
  if (!document.startViewTransition) {
    switchTheme()
    return
  }

  const { clientX: x, clientY: y } = event

  const endRadius = Math.hypot(
    Math.max(x, window.innerWidth - x),
    Math.max(y, window.innerHeight - y)
  )

  const transition = document.startViewTransition(switchTheme)

  transition.ready.then(() => {
    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${endRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 600,
        easing: 'cubic-bezier(.76,.32,.29,.99)',
        pseudoElement: '::view-transition-new(root)',
      }
    )
  })
}
</script>

<style scoped>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-new(root) {
  z-index: 9999;
}

::view-transition-old(root) {
  z-index: 1;
}
</style>
