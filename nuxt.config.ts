// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  alias: {
    assets: "/<rootDir>/assets"
  },
  css: ['~/assets/css/main.css'],
  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'de', iso: 'de-DE', file: 'de.json', name: 'Deutsch' }
    ],
    langDir: 'locales/',

  }


})
