<script setup>
import { reactive, ref, watch } from 'vue';

const formId = ref(0)
const id = ref(0)
// const data = reactive({data: {}})
const data = ref({})
const error = ref("")
const loading = ref(false)


watch(id, async(newId) => {
 try {
    loading.value = true
    if (newId == 0) {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      data.value = await response.json()
    } else {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id.value}`)
      data.value = await response.json()
    }
  } catch(e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}, {immediate: true})
</script>

<template>
  <h2>watch()</h2>

  <form @submit.prevent="id = formId">
    <div>
      <label for="id">ID: </label>
      <input type="number" v-model="formId" id="id" />
    </div>

    <button :disabled="loading">Get data</button>
  </form>

  <div>
    {{ JSON.stringify(data) }}
  </div>

  <span v-if="error" style="color: red">Error: {{ error }}</span>
</template>

<style>
</style>
