<script setup>
    import { computed, ref } from 'vue'
    import useToDoStore from './useToDoStore'

    const  state  = useToDoStore()

    const currentPage = ref(1)
    const itemsPerPage = 5
    
    const totalPages = computed(()=>Math.ceil(state.todos.value.length / itemsPerPage))
    const startIndex = computed(()=>(currentPage.value-1)*itemsPerPage)
    const endIndex = computed(()=>startIndex.value+itemsPerPage)
    const page = computed(()=>state.todos.value.slice(startIndex.value,endIndex.value))
    console.log('list', state.todos.value)
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
  <button @click="currentPage--" :disabled="state.currentPage === 1">{{ "<" }}</button>
  <span>{{ currentPage }} / {{ totalPages }}</span>
  <button @click="currentPage++" :disabled="state.currentPage === totalPages">{{ ">" }}</button>
</template>