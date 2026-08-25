<script setup>
import { inject } from 'vue';

const {currentPage, totalPages, changePage} = inject("todo")
</script>

<template>
    <div v-if="totalPages > 1" 
        style="display: flex; height: 40px; width: 100%; gap: 16px; padding-top: 16px; justify-content: center;">

        <button @click="() => changePage(-1)" :disabled="currentPage === 1" 
            style="aspect-ratio: 1; border-radius: 8px; border: 1px solid red; background-color: white; font-weight: bold; font-size: medium;"><</button>

        <span style="font-weight: bold; margin: auto 0;">{{ currentPage }} / {{ totalPages }}</span>
        
        <button @click="() => changePage(1)" :disabled="currentPage === totalPages" 
            style="aspect-ratio: 1; border-radius: 8px; border: 1px solid red; background-color: white; font-weight: bold; font-size: medium;">></button>
    </div>
</template>

<style></style>