import { defineStore } from 'pinia'

export const useToken = defineStore('token', {
    state: () => {
        return {
            token: '',
        }
    },
    persist: true,
})