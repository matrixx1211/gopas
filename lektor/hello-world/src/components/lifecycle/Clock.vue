<script setup>
  import { onUnmounted, ref } from 'vue';

  const now = ref(new Date())
  const timer = setInterval(()=>{
    now.value = new Date()
    console.log("tik")
  }, 1000)

  onUnmounted(()=>{
    clearInterval(timer)
  })

</script>

<template>
  {{ now.toLocaleTimeString() }}
</template>
