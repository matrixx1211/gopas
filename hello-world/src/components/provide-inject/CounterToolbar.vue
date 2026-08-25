<script setup>
import { inject } from 'vue';


const count = inject("count")
</script>

<template>
  <button @click="count.inc" style="background-color: #1111ff40; border-radius: 8px;">
      ++
  </button>
</template>

<style></style>
