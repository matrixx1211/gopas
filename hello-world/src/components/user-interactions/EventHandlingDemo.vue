<script setup>
import { ref } from 'vue';


const count = ref(0)

function onClick() {
  alert('God help me!')
}
</script>

<template>
  <button v-on:click="onClick">Click me!</button>
  <button @click="onClick">Click me!</button>
</template>

<style></style>
