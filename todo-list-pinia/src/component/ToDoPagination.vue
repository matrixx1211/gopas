<script setup>
import { useToDoStore } from './ToDoLogicStore';

const toDoStore = useToDoStore()
</script>

<template>
    <div v-if="toDoStore.totalPages > 1" 
        style="display: flex; height: 40px; width: 100%; gap: 16px; padding-top: 16px; justify-content: center;">

        <button @click="() => toDoStore.changePage(-1)" :disabled="toDoStore.currentPage === 1" 
            style="aspect-ratio: 1; border-radius: 8px; border: 1px solid red; background-color: white; font-weight: bold; font-size: medium;"><</button>

        <span style="font-weight: bold; margin: auto 0;">{{ toDoStore.currentPage }} / {{ toDoStore.totalPages }}</span>
        
        <button @click="() => toDoStore.changePage(1)" :disabled="toDoStore.currentPage === toDoStore.totalPages" 
            style="aspect-ratio: 1; border-radius: 8px; border: 1px solid red; background-color: white; font-weight: bold; font-size: medium;">></button>
    </div>
</template>

<style></style>