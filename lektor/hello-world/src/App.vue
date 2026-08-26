<script setup>
import { RouterView, useRouter } from 'vue-router';

const title = "Hello world"
const bool = false

const router = useRouter()

function goToUserInteraction() {
  router.push('/user-interaction')
}
</script>

<template>
  <h1 :title="title" :hidden="bool">{{ title }}</h1>
  <nav>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/data-rendering">Data rendering</RouterLink> |
    <button @click="goToUserInteraction">Go to User interaction</button>
  </nav>
  <RouterView />
</template>

<style></style>
