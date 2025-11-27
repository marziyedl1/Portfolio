<template>
  <UContainer class="py-20 flex flex-col items-center gap-10">
    <HeroTitle :name="aboutMe.name" :text="aboutMe.text" />

    <ResumeDownload />
  </UContainer>
</template>

<script setup>
import { HeroTitle, ResumeDownload } from '~/components/hero';


const aboutMe = {
  name: 'Marzieh',
  text: $t('aboutme.text'),
}
</script>
