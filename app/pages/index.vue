<template>
  <UContainer class="py-20 flex flex-col items-center gap-10">
    <HeroTitle :my-name="aboutMe.name" :text="aboutMe.text" />

    <HeroResumeDownload />

  </UContainer>
</template>

<script setup lang="ts">

const aboutMe = {
  name: 'Marzieh',
  text: $t('aboutme.text'),
}

</script>
