<script setup>
import { ref } from 'vue';

const count = ref(0)

</script>

<template>
    <div style="display: flex; gap: 8px; flex-direction: column; align-items: center;">
        <span>{{ count }}</span>
        <button @click="count++" style="background-color: blueviolet; color: white; border: 0; border-radius: 16px; padding: 6px;">Increase by 1</button>
    </div>
</template>

<style></style>