<script setup>
  import { ref, watch } from 'vue';

  const formId = ref(0)
  const id = ref(0)
  const data = ref({})
  const error = ref("")
  const loading = ref(false)

  watch(id, async(newId) => {
    if(newId > 0) {
      try {
        loading.value = true
        const response = await fetch("https://jsonplaceholder.typicode.com/users/" + newId)
        data.value = await response.json()

      } catch(e) {
        error.value = e.message
      } finally {
        loading.value = false
      }
    }
    else {
      console.log("id", newId)
    }
  }, { immediate: true })
</script>

<template>
  <h2>watch()</h2>
  <form @submit.prevent="id = formId">
    <div>
      <label for="id">Id: </label>
      <input type="number" v-model="formId" id="id" />
    </div>
    <button :disabled="loading">Get data</button>
  </form>
  <div>{{ data }}</div>
  <button @click="id++">Next</button>
  <div style="color: red;">{{ error }}</div>
</template>
