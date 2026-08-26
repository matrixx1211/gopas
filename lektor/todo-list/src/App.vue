<script setup>
import { provide, reactive } from 'vue';
import { useRouter } from 'vue-router';

const state = reactive({
  todos: [],
  itemsPerPage: 5,
  currentPage: 1
})

const router = useRouter()

function addToDo(todo) {
  state.todos.push({
      ...todo, 
      id: state.todos.length === 0
        ? 1
        : Math.max(...state.todos.map(t=>t.id)) + 1,
    })
  router.push({name: 'list'})
}

function editToDo(todo) {
  const edited = state.todos.find(t => t.id === todo.id)
  edited.task = todo.task
  edited.done = todo.done
  router.push({name: 'list'})
}

provide('todolist', {
  state,
  addToDo,
  editToDo
})

</script>

<template>
  <h1>To Do</h1>
  <RouterView />
</template>
