<script setup>
import { inject } from 'vue';
import ToDoPagination from './ToDoPagination.vue';

const {emptyList, filteredData} = inject("todo")
</script>

<template>
    <div>
        <button v-on:click="emptyList">Empty list!</button>
    </div>

    <div v-if="filteredData.length > 0">
        <ul>
            <li v-for="(task, index) in filteredData" :key="index">
                {{ task.task }} ({{ task.done ? "done" : "not done" }})
            </li>
        </ul>
        <ToDoPagination />
    </div>


    <p v-else>Nothing inside!</p>
</template>

<style></style>