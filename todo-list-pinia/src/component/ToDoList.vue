<script setup>
import ToDoPagination from './ToDoPagination.vue';
import { useToDoStore } from './ToDoLogicStore.js';

const toDoStore = useToDoStore()

const toggle = (id) => {
    const found = toDoStore.submittedData.find((d) => d.id === Number(id));
    found.done = !found.done
}

const remove = (id) => {
    const foundIndex = toDoStore.submittedData.findIndex((d) => d.id === Number(id));
    toDoStore.submittedData.splice(foundIndex, 1)
    localStorage.setItem("todos", JSON.stringify(toDoStore.submittedData));
}

</script>

<template>
    <div>
        <button v-on:click="toDoStore.emptyList">Empty list!</button>
    </div>

    <div v-if="toDoStore.filteredData.length > 0">
        <ul>
            <li v-for="(task, index) in toDoStore.filteredData" :key="index" style="padding: 4px 0;">
                <span>{{ task.task }} ({{ task.done ? "done" : "not done" }}) </span>
                <div style="display: inline-flex; gap: 8px;">
                    <button @click="$router.push({ name: 'edit', params: { id: task.id } })">Edit</button>
                    <button @click="() => toggle(task.id)">Toggle state</button>
                    <button @click="() => remove(task.id)"
                        style="background-color: #ff2222; aspect-ratio: 1; border-radius: 100%; color: white">X</button>
                </div>
            </li>
        </ul>
        <ToDoPagination />
    </div>


    <p v-else>Nothing inside!</p>
</template>

<style></style>