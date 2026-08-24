<script setup>
const classes = {
  bold: true,
  underline: false
}

const classes2 = [
  'bold', 'underline'
]

const classes3 = [
  {bold: false},
  'underline'
]

const styles = {
  color: "red",
  backgroundColor: "yellow"
}
</script>

<template>
  <h2 class="bold">TEST</h2>
  <p :class="classes" :style="styles">This is SPARTA!</p>
  <p :class="classes3">sparta</p>

  <span :class="classes2">both are applied</span>
</template>

<style scoped>
.bold {
  font-weight: 800;
}

.underline {
  text-decoration: underline;
}
</style>
