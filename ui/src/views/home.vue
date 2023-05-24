<template>
  <h1>{{ stores.name }} ♥ 欢迎来到 vite + vue3 + TS + vue-router + pinia</h1>
</template>

<script setup type="ts">
import {userStore} from "@/store/index";
const stores = userStore()
</script>

<style scoped>

</style>