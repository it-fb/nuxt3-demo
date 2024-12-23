import { defineStore } from 'pinia'

export const useToken = defineStore('token', () => {
  const token = ref<string>('b')

  const setToken = (value: string) => {
    token.value = value
  }

  return {
    token,
    setToken,
  }
}, {
  persist: true,
})

// tips
// persist  documentation: https://prazdevs.github.io/pinia-plugin-persistedstate/frameworks/nuxt.html

// persist: true // enable pinia-plugin-persistedstate, default storage is cookie
// or
// persist: { storage: piniaPluginPersistedstate.cookies() }
// persist: { storage: piniaPluginPersistedstate.sessionStorage() }
// persist: { storage: piniaPluginPersistedstate.localStorage() }
