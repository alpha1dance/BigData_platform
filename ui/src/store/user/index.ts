import { defineStore } from "pinia";

export const userStore = defineStore('main', {
    state: () => (
        {
            user: new User(null, "hanhu")
        }
    )
})