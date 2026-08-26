<script setup>
import { useRoute, useRouter } from 'vue-router';
import { useToDoStore } from './ToDoLogicStore';

const route = useRoute()
const toDoStore = useToDoStore()

if (route.name === "edit" && toDoStore.submittedData.length > 0) {
    const found = toDoStore.submittedData.find((d) => d.id === Number(route.params.id));
    if (found) {
        toDoStore.formData.id = found.id;
        toDoStore.formData.task = found.task;
        toDoStore.formData.done = found.done;
    }
}
const router = useRouter()

const addOrEdit = () => {
    toDoStore.addItem()

    router.push({name: "home"})
}
</script>

<template>
    <form @submit.prevent="addOrEdit">
        <span>new todo:</span>
        <div style="display: flex; gap: 8px; height: 100%; justify-content: space-between;">
            <p>TASK</p>
            <p>DONE</p>
        </div>

        <div style="display: flex; gap: 8px; height: 100%; justify-content: space-between;">
            <input type="hidden" v-model="toDoStore.formData.id" />
            <input type="text" v-model="toDoStore.formData.task" />
            <input type="checkbox" v-model="toDoStore.formData.done" />
        </div>

        <br>

        <button>{{ $route.name }}</button>
        <!-- <button @click="$route.params.id = toDoStore.submittedData[toDoStore.submittedData.findIndex(d => d.id) + 1].id" v-if="$route.name === 'edit' && toDoStore.submittedData.length > 0">Next</button> -->
    </form>
</template>

<style scoped>
form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 240px;

    border: 1px solid red;
    padding: 0px 16px 32px;
    border-radius: 16px;
}

form span {
    padding-top: 16px;
    padding-bottom: 16px;
    font-size: 24px;
    font-weight: 900;
}

form button {
    width: 100%;
}
</style>