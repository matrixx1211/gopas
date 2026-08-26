<script setup>
import { ref, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import useToDoStore from './useToDoStore';

const state = useToDoStore()
const route = useRoute()

const formData = ref(route.name === "create"
  ? {
    id: 0,
    task: '',
    done: false
  }
  : {...state.todos.value.find(t=>t.id === +route.params.id)}
)

watch(
  () => route.params.id,
  (newId) => {
    formData.value = {...state.todos.value.find(t=>t.id === +newId)}
  }
)

const router = useRouter()

function submit() {
  if(route.name === "create") state.addToDo(formData.value)
  else {
    state.editToDo(formData.value)    
  }
  router.push({name: 'list'})
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