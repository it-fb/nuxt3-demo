// https://nuxt.com/docs/api/configuration/nuxt-config
import { appDesc } from './constants'

export default defineNuxtConfig({

  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    '@nuxt/image',
    '@unocss/nuxt',
    '@nuxt/eslint',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'pinia-plugin-persistedstate/nuxt',
  ],
  devtools: { enabled: false },

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1',
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: appDesc },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  css: [
    '~/assets/css/style.scss',
  ],

  colorMode: {
    classSuffix: '-mode',
  },

  devServer: {
    host: '0.0.0.0',
  },

  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  compatibilityDate: '2024-12-06',

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },

  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },

  piniaPluginPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    },
  },

})
