<script setup>
import useCoordinates from './useCoordinates';

const { x, y } = useCoordinates();
</script>

<template>
  <div>
    <span style="font-size: small;">Small coordinates: {{ x }}, {{ y }}</span>
  </div>
</template>

<style></style>
