<script setup>
import { computed, reactive, ref } from 'vue';

const formData = reactive({
  task: "",
  done: false
})

const addItem = () => {
  submittedData.push({...formData})

  formData.done = false
  formData.task = ""

  localStorage.setItem("todos", JSON.stringify(submittedData))
}

const submittedData = reactive([])

const emptyList = () => {
  const x = submittedData.length

  for (let i = 0; i < x; i++) {
    submittedData.pop()
  }

  localStorage.removeItem("todos")
}

const todos = JSON.parse(localStorage.getItem("todos"))

if (todos != null && todos.length > 0) {
  for (let i = 0; i < todos.length; i++) {
    submittedData.push(todos[i])
  }
}

const itemsPerPage = 5

const currentPage = ref(1)

const totalPages = computed(() => parseInt(submittedData.length / itemsPerPage) + 1)

const changePage = (direction) => {
  const newPage = currentPage.value + direction

  if (newPage >= 1 && newPage <= totalPages.value) {
    currentPage.value = newPage
  }
}

const filteredData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  // Tady chyběl druhý parametr (end)
  return submittedData.slice(start, end)
})
</script>

<template>
  <body>
    <h1>todo-list</h1>
    <h2>Welcome to 1999!</h2>

    <form @submit.prevent="addItem">
      <span>new todo:</span>
      <div style="display: flex; gap: 8px; height: 100%; justify-content: space-between;">
        <p>TASK</p>
        <p>DONE</p>
      </div>

      <div style="display: flex; gap: 8px; height: 100%; justify-content: space-between;">
        <input type="text" v-model="formData.task" />
        <input type="checkbox" v-model="formData.done" />
      </div>

      <br>

      <button>Add</button>
    </form>

    <hr style="width: 100%;">

    <div>
      <button v-on:click="emptyList">Empty list!</button>
    </div>

    <div v-if="filteredData.length > 0">
      <ul >
        <li v-for="(task, index) in filteredData" :key="index">
          {{ task.task }} ({{ task.done ? "done" : "not done" }})
        </li>
      </ul>
      <div style="display: flex; height: 40px; width: 100%; gap: 16px; padding-top: 16px; justify-content: center;" v-if="totalPages > 1">
        <button style="aspect-ratio: 1; border-radius: 8px; border: 1px solid red; background-color: white; font-weight: bold; font-size: medium;" @click="() => changePage(-1)" :disabled="currentPage === 1"><</button>
        <span style="font-weight: bold; margin: auto 0;">{{ currentPage }} / {{ totalPages }}</span>
        <button style="aspect-ratio: 1; border-radius: 8px; border: 1px solid red; background-color: white; font-weight: bold; font-size: medium;" @click="() => changePage(1)" :disabled="currentPage === totalPages">></button>
      </div>
    </div>


    <p v-else>Nothing inside!</p>
  </body>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  font-size: 80px;
}

body {
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
}

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
