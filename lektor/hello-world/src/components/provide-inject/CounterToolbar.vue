<script setup>
import { inject } from 'vue';

const {inc} = inject('counter')
</script>

<template>
  <button @click="inc">++</button>
</template>
