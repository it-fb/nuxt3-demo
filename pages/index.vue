<script setup lang="ts">

const color = useColorMode()
const device = useDevice()

const docLinks = ref<any>([
    {
        title: 'unocss',
        link: 'https://unocss.dev/'
    },
    {
        title: 'nuxt ui',
        link: 'https://ui.nuxt.com/'
    },
    {
        title: 'device',
        link: 'https://nuxt.com/modules/device'
    },
    {
        title: 'color-mode',
        link: 'https://nuxt.com/modules/color-mode'
    },
    {
        title: 'pinia',
        link: 'https://nuxt.com/modules/pinia'
    },
    {
        title: 'pinia-plugin-persistedstate',
        link: 'https://nuxt.com/modules/pinia-plugin-persistedstate'
    },
    {
        title: 'nuxt-icon',
        link: 'https://nuxt.com/modules/icon'
    },
])

function changeColorMode (v: string) {
    color.preference = v
}

</script>

<template>
    <div flex flex-col gap-10 justify-center items-center h-screen text-center px-4>
        <p font="~ bold">Welcome !!!</p>
        <p>{{ device.userAgent }}</p>
        <p>桌面: {{ device.isDesktop }}</p>
        <div>
            <p>模式：{{ color.preference }}</p>
            <div flex justify-around ring-1 ring-gray-200 p-2 rd-2 mt-4>
                <Icon @click="changeColorMode('system')" cursor-pointer hover:color-green name="material-symbols:computer-outline-rounded" />
                <Icon @click="changeColorMode('light')" cursor-pointer hover:color-green name="material-symbols:light-mode-outline-rounded" />
                <Icon @click="changeColorMode('dark')" cursor-pointer hover:color-green name="material-symbols:nightlight-outline-rounded" />
            </div>
        </div>
        <UButton loading>加载按钮</UButton>
        <div ring-1 ring-gray-200 p-2 rd-2>
            <p mb-4>相关文档</p>
            <nuxt-link mx-2 color-green-500 hover:underline v-for="item in docLinks" :to="item.link" target="_blank">{{ item.title }}</nuxt-link>
        </div>
    </div>
</template>