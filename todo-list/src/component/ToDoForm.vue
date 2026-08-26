<script setup>
import { inject } from 'vue';
import { useRoute } from 'vue-router';

const { addItem, formData, submittedData } = inject("todo")
const route = useRoute()

if (route.name === "edit" && submittedData.length > 0) {
    const found = submittedData.find((d) => d.id === Number(route.params.id));
    if (found) {
        formData.id = found.id;
        formData.task = found.task;
        formData.done = found.done;
    }
}
</script>

<template>
    <form @submit.prevent="addItem">
        <span>new todo:</span>
        <div style="display: flex; gap: 8px; height: 100%; justify-content: space-between;">
            <p>TASK</p>
            <p>DONE</p>
        </div>

        <div style="display: flex; gap: 8px; height: 100%; justify-content: space-between;">
            <input type="hidden" v-model="formData.id" />
            <input type="text" v-model="formData.task" />
            <input type="checkbox" v-model="formData.done" />
        </div>

        <br>

        <button>Add</button>
        <!-- <button @click="$route.params.id = submittedData[submittedData.findIndex(d => d.id) + 1].id" v-if="$route.name === 'edit' && submittedData.length > 0">Next</button> -->
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