<script setup>
import IfDirectiveDemo from "../components/data-rendering/IfDirectiveDemo.vue"
import ForDirectiveDemo from "../components/data-rendering/ForDirectiveDemo.vue"
import CssDemo from "../components/data-rendering/CssDemo.vue";
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <RouterLink to="/data-rendering/">Data rendering demo</RouterLink> |
    <RouterLink to="/data-rendering/html">Html</RouterLink>
  </nav>
  <RouterView />
  <IfDirectiveDemo />
  <ForDirectiveDemo />
  <CssDemo />
</template>
