<script setup>
import { inject, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const { state, addToDo, editToDo } = inject('todolist')
const route = useRoute()
console.log(route.params.id)
const formData = ref(route.name === "create"
  ? {
    id: 0,
    task: '',
    done: false
  }
  : {...state.todos.find(t=>t.id === +route.params.id)}
)

watch(
  () => route.params.id,
  (newId) => {
    formData.value = {...state.todos.find(t=>t.id === +newId)}
  }
)

function submit() {
  if(route.name === "create") addToDo(formData.value)
  else {
    console.log(formData.value)
    editToDo(formData.value)
    
  }
}
</script>

<template>
  <form @submit.prevent="submit">
    <input type="hidden" id="id" name="id" v-model="formData.id" />
    <div>
      <label for="task">Task </label>
      <input id="task" name="task" v-model="formData.task" />
    </div>
    <div>
      <label for="Done">Done </label>
      <input type="checkbox" id="done" name="done" v-model="formData.done" />
    </div>
    <button>Save</button>
  </form>
  <button 
    v-if="$route.name === 'edit'"
    @click="$router.push({name: 'edit', params: {id: +$route.params.id + 1}})"
  >
    Next
  </button>
</template>