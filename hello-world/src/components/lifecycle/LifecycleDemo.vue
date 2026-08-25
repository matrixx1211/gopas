<script setup>
import { ref } from 'vue';
import Clock from './Clock.vue';

const showClock = ref(true)

</script>

<template>
  <h2>lifecycle</h2>
  <div style="display: flex; flex-direction: column;">
    <button @click="showClock = !showClock">Toggle</button>

    <Clock v-if="showClock"/>
  </div>
</template>
