<script setup>
import Counter from './Counter.vue';
import { provide, readonly, ref } from 'vue';


  const count = ref(0)
  function inc() {
    count.value++
  }
  provide('counter', {
    count: readonly(count),
    inc
  })

</script>

<template>
  <h2>provide() / inject()</h2>
  <Counter />
  <Counter />
</template>
