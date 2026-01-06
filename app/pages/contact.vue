<template>
  <UContainer class="py-16 max-w-3xl mx-auto text-center">
    <section class="relative z-10">
      <h1 class="text-3xl font-bold mb-4">
        {{ $t('contact.title') }}
      </h1>

      <p class="text-gray-600 mb-8">
        {{ $t('contact.subtitle') }}
      </p>

      <!-- Contact Info -->
      <div class="space-y-4 text-lg">
        <div class="flex justify-center items-center gap-3">
          <Icon name="location" />
          <span>{{ $t('contact.location') }}</span>
        </div>
        <div class="flex justify-center items-center gap-3">
          <i class="i-heroicons-envelope text-2xl" />
          <a href="mailto:marzieh@example.com" class="hover:text-primary">
            marziye.dl@gmail.com
          </a>
        </div>
      </div>

      <div
        class="mt-10 flex flex-col items-center gap-6 justify-center text-2xl"
      >
        <UButton
          icon="i-simple-icons-linkedin"
          color="neutral"
          variant="ghost"
          to="https://www.linkedin.com/in/marzi-dt/"
          target="_blank"
        >
          {{ $t('vist_my_linkedin') }}
        </UButton>
        <UButton
          icon="i-simple-icons-github"
          color="neutral"
          variant="ghost"
          to="https://github.com/marziyedl1"
          target="_blank"
        >
          {{ $t('vist_my_github') }}
        </UButton>

        <a
          href="https://www.linkedin.com/in/marzieh-dl"
          target="_blank"
          class="hover:text-primary"
        >
          <i class="i-simple-icons-linkedin" />
        </a>

        <a
          href="https://t.me/YOUR_TELEGRAM"
          target="_blank"
          class="hover:text-primary"
        >
          <i class="i-simple-icons-telegram" />
        </a>
      </div>
    </section>
  </UContainer>
</template>
