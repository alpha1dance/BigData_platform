import { defineStore } from "pinia";

export const userStore = defineStore('main', {
    state: () => (
        {
            name: 'hanhu'
        }
    )
})