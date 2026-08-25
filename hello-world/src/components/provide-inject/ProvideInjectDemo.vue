<script setup>
import { provide, readonly, ref } from 'vue';
import Counter from './Counter.vue';

const count = ref(0)

const inc = () => {
  count.value++
}

provide("count", {value: readonly(count), inc: inc})
</script>

<template>
  <div style="width: 100%; display: inline-flex; padding: 16px 0; justify-content: center;">
    <div style="display: flex; gap: 16px;">
      <Counter />
      <Counter />
    </div>
  </div>
</template>

<style></style>
