<script setup>
import { reactive, ref } from 'vue';


const text = ref("")

const names = ref([])
const names_arr = ["Marek", "Denisa", "Gopas"]

const selected = ref()

const num = ref(69)

const formData = reactive({
  fname: "",
  lname: ""
})

const submittedData = reactive({})

function formSubmit() {
  // ERROR: submittedData = formData
  submittedData.fname = formData.fname
  submittedData.lname = formData.lname

  console.log(submittedData)
}
</script>

<template>
  <h2>v-model</h2>
  <input v-model.lazy.trim="text" />
  <div>{{ text }}</div>

  <div class="list">
    <div style="display: flex; gap: 8px;" v-for="(n, index) in names_arr" :key="index">

      <input type="checkbox" :id="n" :value="n" v-model="names" />
      <span>{{ n }}</span>
    </div>
  </div>
  <div>{{ names }}</div>

  <br>

  <div class="list">
    <div style="display: flex; gap: 8px;" v-for="(n, index) in names_arr" :key="index">

      <input type="radio" :id="n" :value="n" v-model="selected" />
      <span>{{ n }}</span>
    </div>
  </div>
  <div>{{ selected }}</div>

  <input v-model.number="num"/>
  <div>{{ num }} {{ typeof num }}</div>

  <div style="border-top: 2px solid black; padding: 8px 0;">
    <form @submit.prevent="formSubmit" class="list">
      <input v-model="formData.fname" name="fname"/>
      <input v-model="formData.lname" name="lname"/>
      <button>Save me!</button>
    </form>
  </div>
</template>

<style>
.list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>
