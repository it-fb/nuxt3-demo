// https://nuxt.com/docs/api/configuration/nuxt-config
import { appDesc } from "./constants"

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@pinia/nuxt',
    '@unocss/nuxt',
    '@nuxtjs/device',
    '@nuxtjs/color-mode',
    '@pinia-plugin-persistedstate/nuxt'
  ],

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

  css: [],

  devServer: {
    host: '0.0.0.0'
  },
  
  experimental: {
    // when using generate, payload js assets included in sw precache manifest
    // but missing on offline, disabling extraction it until fixed
    payloadExtraction: false,
    renderJsonPayloads: true,
    typedPages: true,
  },

  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 7, // 1 week
    }
  },

  colorMode: {
    classSuffix: '-mode',
  },

  device: {
    refreshOnResize: true
  },

})