<script setup>
  const htmlString = "<i>Some text</i>"
</script>

<template>
  <h2>v-html</h2>
  <p>{{ htmlString }}</p>
  <p v-html="htmlString"></p>
</template>

<style scoped>
  h2 {
    color: blue;
  }
</style>
