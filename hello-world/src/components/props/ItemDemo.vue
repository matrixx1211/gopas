<script setup>
const { id, text } = defineProps({
  id: {
    type: String,
    required: false,
    default: "UNDEFINED"
  },
  text: {
    type: String,
    required: true
  },
})
</script>

<template>
  <div>
    <span style="color:gray; font-size: small;">{{ id }}</span>
    <p :id="id">{{ text }}</p>
  </div>
</template>
