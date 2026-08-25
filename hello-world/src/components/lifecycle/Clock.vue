<script setup>
import { onUnmounted, ref } from 'vue';

const now = ref(new Date())

const timer = setInterval(() => {
  now.value = new Date()
  console.log("tik");
}, 1000);

onUnmounted(() => {
  clearInterval(timer)
})

const addZero = (num) => {
  if (num < 10) {
    return "0" + num
  }

  return num
}
</script>

<template>
  <span style="width: 320px; height: 160px; font-size: 64px; margin: auto;">
    {{ addZero(now.getHours()) }} : {{ addZero(now.getMinutes()) }} : {{ addZero(now.getSeconds()) }} </span>
</template>
