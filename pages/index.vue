<script setup lang="ts">
const color = useColorMode()
const store = useToken()
// const nuxtApp = useNuxtApp()

// change the cache key to 'xxx'
// const { data } = await useAsyncData('xxx', () => api.getHello(), {
//   // cache key
//   getCachedData(key) {
//     return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
//   },
// })

// or

const input = ref<string>('')

const { data, refresh } = await useAsyncData(() => api.getHello())

function saveToken() {
  store.setToken(input.value)
}

function changeColorMode(mode: 'system' | 'light' | 'dark') {
  color.preference = mode
}
</script>

<template>
  <div class="px-10">
    <h1>Home Page</h1>
    <Card>
      <h2>Light Or Dark</h2>
      <div flex="~ inline gap-4" class="rd-2 px-4 py-2 ring-1 ring-gray-200">
        <Icon :class="{ 'color-green': color.preference === 'system' }" class="cursor-pointer" hover="color-green" name="material-symbols:computer-outline-rounded" @click="changeColorMode('system')" />
        <Icon :class="{ 'color-green': color.preference === 'light' }" class="cursor-pointer" hover="color-green" name="material-symbols:light-mode-outline-rounded" @click="changeColorMode('light')" />
        <Icon :class="{ 'color-green': color.preference === 'dark' }" class="cursor-pointer" hover="color-green" name="material-symbols:dark-mode-outline-rounded" @click="changeColorMode('dark')" />
      </div>
    </Card>
    <Card>
      <h2>Request Remote Sever Api</h2>
      <div>url: '/api/hello'</div>
      <div class="my-4 p-2 ring-1">
        result: {{ data }}
      </div>
      <button @click="refresh()">
        refresh
      </button>
    </Card>
    <Card>
      <h2>Pinia Storage Data</h2>
      <input v-model="input" placeholder="please input content">
      <button @click="saveToken()">
        change token
      </button>
      <div class="mt-4">
        Result: {{ store.token }}
      </div>
    </Card>
  </div>
</template>
