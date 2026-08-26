<script setup>
const classes = {
  bold: true,
  underline: true
}

const classes2 = ["bold", "underline"]

const classes3 = [{bold: true}, "underline"]

const styles = {
  color: 'green',
  backgroundColor: 'black'
}
</script>

<template>
  <h2>class and style</h2>
  <p :class="classes3" :style="styles">Ahoj</p>
</template>

<style scoped>
  .bold {
    font-weight: 800;
  }
  .underline {
    text-decoration: underline;
  }
</style>
