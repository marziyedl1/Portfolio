<template>
  <UButton @click="downloadResume" color="neutral">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-5 h-5"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5M12 16.5V3"
      />
    </svg>
    Download Resume in pdf
  </UButton>
</template>

<script setup lang="ts">
const RESUME_URL = '/resume.pdf'

const downloadResume = () => {
  const link = document.createElement('a')
  link.href = RESUME_URL
  link.download = 'Marzieh-DL-Resume.pdf'
  link.click()
}
</script>
