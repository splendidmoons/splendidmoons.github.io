// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true, // pre-render routes at build time
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
    '@/assets/main.sass',
  ],
  plugins: [
    '~/plugins/fontawesome.js',
    '~/plugins/pinia.ts',
  ],
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true }
})
