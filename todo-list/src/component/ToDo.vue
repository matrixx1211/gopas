<script setup>
import { computed, provide, reactive, ref } from 'vue';
import ToDoForm from './ToDoForm.vue';
import ToDoList from './ToDoList.vue';

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


const todos = JSON.parse(localStorage.getItem("todos"))

if (todos != null && todos.length > 0) {
    for (let i = 0; i < todos.length; i++) {
        submittedData.push(todos[i])
  }
}

const itemsPerPage = 5

const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(submittedData.length / itemsPerPage))

const emptyList = () => {
  const x = submittedData.length

  for (let i = 0; i < x; i++) {
    submittedData.pop()
  }

  localStorage.removeItem("todos")
  currentPage.value = 1
}

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

provide("todo", {
    formData,
    submittedData,
    filteredData,
    addItem,
    currentPage,
    totalPages,
    changePage,
    emptyList
})
</script>

<template>
    <ToDoForm />
    <hr style="width: 100%;">
    <ToDoList />
</template>

<style></style>