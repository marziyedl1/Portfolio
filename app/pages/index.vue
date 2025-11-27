<template>
  <UContainer class="py-20 flex flex-col items-center gap-10">
    <HeroTitle :name="aboutMe.name" :text="aboutMe.text"/>




  </UContainer>
</template>

<script setup>

const aboutMe = {
  name :'Marzieh',
  text: $t('aboutme.text')
}
</script>
