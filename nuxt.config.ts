// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/partials/_colors.scss" as *;',
        },
      },
    },
  },
  modules: ["nuxt-icon", "@nuxt/ui", "@vueuse/nuxt", "nuxt-aos", "@pinia/nuxt"],
});
