// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // pre-render routes at build time
  css: ['@/assets/main.sass'],
  devtools: { enabled: true }
})
