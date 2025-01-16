// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxthq/studio'],
  runtimeConfig: {
    public: {
      studioApi: import.meta.env.STUDIO_API
    }
  },
  routeRules: {
    '/': { prerender: true }
  },
  content: {
    studio: {
      enabled: true,
      dev: true,
    }
  },
  compatibilityDate: '2025-01-15'
})
