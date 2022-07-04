import { defineNuxtConfig } from 'nuxt';

export default defineNuxtConfig({
  modules: ['@vueuse/nuxt', '@pinia/nuxt', '@nuxtjs/color-mode'],
  buildModules: ['nuxt-windicss', '@unocss/nuxt'],
  experimental: {
    reactivityTransform: true,
    viteNode: false,
  },
  unocss: {
    preflight: false,
  },
  colorMode: {
    classSuffix: '',
  },
});
