<script setup>
import { inject } from 'vue';

const count = inject("count")
</script>

<template>
  <span style="font-size: large; font-weight: 900;">
    {{ count.value }}
  </span>
</template>

<style></style>
