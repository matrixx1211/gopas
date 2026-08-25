<script setup>
import useCoordinates from './useCoordinates';

const { x, y } = useCoordinates();
</script>

<template>
  <div>
    <span>Big coordinates: {{ x }}, {{ y }}</span>
  </div>
</template>

<style></style>
