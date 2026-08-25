<script setup>
const emits = defineEmits(['command'])

const onClick = (msg) => {
  emits("command", msg)
}
</script>

<template>
  <div>
    <button @click="onClick('A')">A</button>
    <button @click="onClick('B')">B</button>
    <button @click="onClick('C')">C</button>
    <button @click="$emit('command', 'D')">D</button>
  </div>
</template>
