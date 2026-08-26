<script setup>
const title = "WHAAAAAT?"
import { RouterLink, RouterView, useRouter } from 'vue-router';
const router = useRouter()
function goBack() {
  router.go(-1)
}
</script>

<template>
  <nav>
    <a @click="goBack"><- go back!</a>
    |
    <RouterLink to="/">home</RouterLink>
    |
    <RouterLink to="/data-rendering">data-rendering</RouterLink>
    |
    <RouterLink to="/user-interactions">user-interactions</RouterLink>
    |
    <RouterLink to="/other-parts">other</RouterLink>
  </nav>

  <h1 v-bind:title="title">{{ title }}</h1>
  <hr>

  <RouterView />
</template>

<style scoped>
h1 {
  color: red
}
</style>
