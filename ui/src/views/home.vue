<template>
  <Layout>
    <Header class="layout-header">
      <h1>{{ user.name }} ♥ 欢迎来到 vite + vue3 + TS + vue-router + pinia</h1>
    </Header>
    <Content class="layout-content">Content</Content>
  </Layout>
</template>

<script setup type="ts">
import {Layout, Header, Content} from "view-ui-plus";
import {userStore} from "@/store";
const  user = userStore()
</script>

<style scoped>
.layout-content{
  height: 100%;
}
</style>