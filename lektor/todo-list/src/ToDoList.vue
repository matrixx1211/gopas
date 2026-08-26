<script setup>
    import { computed, inject } from 'vue'

    const { state } = inject('todolist')
    
    const totalPages = computed(()=>Math.ceil(state.todos.length / state.itemsPerPage))
    const startIndex = computed(()=>(state.currentPage-1)*state.itemsPerPage)
    const endIndex = computed(()=>startIndex.value+state.itemsPerPage)
    const page = computed(()=>state.todos.slice(startIndex.value,endIndex.value))
</script>

<template>
  <h2>{{ $route.query.title }}</h2>
  <button @click="$router.push({name: 'create'})">Add</button>
  <ul>
    <li v-for="(todo, index) in page" :key="index">
      <span>{{ todo.task }} ({{ todo.done ? "done" : "not done" }})</span>
      <button @click="$router.push({name: 'edit', params: {id: todo.id}})">Edit</button>
    </li>
  </ul>
  <button @click="state.currentPage--" :disabled="state.currentPage === 1">{{ "<" }}</button>
  <span>{{ state.currentPage }} / {{ totalPages }}</span>
  <button @click="state.currentPage++" :disabled="state.currentPage === totalPages">{{ ">" }}</button>
</template>