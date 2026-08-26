<script setup>
import ToDoForm from './ToDoForm.vue';
import ToDoList from './ToDoList.vue';
import setupToDoLogic from './ToDoLogic.js';

setupToDoLogic()
</script>

<template>
    <ToDoForm />
    <hr style="width: 100%;">
    <ToDoList />
</template>

<style></style>