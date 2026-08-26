<script setup>
import useCoordinates from './useCoordinates';
const {x,y} = useCoordinates()
</script>

<template>
  <div style="font-size: small">{{ x }}, {{ y }}</div>
</template>
