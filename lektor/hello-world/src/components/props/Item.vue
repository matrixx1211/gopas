<script setup>
  const props = defineProps({
    id: {
      type: Number,
      required: true
    },
    name: String
  })
  const {id, name} = props
</script>

<template>
  <div>id: {{ id }}</div>
  <div>name: {{ name }}</div>
</template>
