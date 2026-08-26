<script setup>
import { inject } from 'vue';

  const { count } = inject('counter')
  
</script>

<template>{{ count }}</template>
