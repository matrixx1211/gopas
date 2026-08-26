<script setup>
import ToDoList from '@/component/ToDoList.vue';

</script>

<template>
    <ToDoList />
    <button @click="$router.push({name: 'add'})">Add new ToDo</button>
</template>