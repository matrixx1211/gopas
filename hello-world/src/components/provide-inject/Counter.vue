<script setup>
import CounterDisplay from './CounterDisplay.vue';
import CounterToolbar from './CounterToolbar.vue';
</script>

<template>
  <div style="width: 80px; height: 120px; border: 1px solid black; display: flex; flex-direction: column; padding: 8px; align-items: center; justify-content: space-between; border-radius: 16px;">
    <span>COUNTER</span>
    <hr style="width: 100%;">
    <CounterDisplay />
    <CounterToolbar />
  </div>
</template>

<style></style>
