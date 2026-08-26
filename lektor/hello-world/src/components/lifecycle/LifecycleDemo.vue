<script setup>
import { ref } from 'vue';
import Clock from './Clock.vue';

const showClock = ref(true)

</script>

<template>
  <h2>Lifecycle</h2>
  <Clock v-if="showClock" />
  <button @click="showClock=false">Kill clock</button>
</template>
