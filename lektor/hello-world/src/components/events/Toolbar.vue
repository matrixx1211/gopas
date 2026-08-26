<script setup>
  const emits = defineEmits(['command'])
  function onClick(message) {
    emits('command', message)
  }
</script>
<template>
  <button @click="onClick('A')">A</button>
  <button @click="onClick('B')">B</button>
  <button @click="onClick('C')">C</button>
</template>
