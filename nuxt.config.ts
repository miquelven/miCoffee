// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  modules: [
    "nuxt-icon",
    "@nuxt/ui",
    "@vueuse/nuxt",
    "nuxt-aos",
    "@pinia/nuxt",
    "@nuxtjs/color-mode",
  ],
  colorMode: {
    preference: "system", // default value of $colorMode.preference
    fallback: "dark", // fallback value if not system preference found
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "-mode",
    storageKey: "nuxt-color-mode",
  },
});
