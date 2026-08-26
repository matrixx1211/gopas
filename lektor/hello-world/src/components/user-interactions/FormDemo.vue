<script setup>
import { reactive, ref } from 'vue';

const name = ref("")
const options = ref([])
const selected = ref("")
const num = ref("0")

const formData = reactive({
  fname: "",
  lname: ""
})

const submittedData = reactive({})

function formSubmit(/*e*/) {
  //e.preventDefault()
  // ERROR: submittedData = formData
  submittedData.fname = formData.fname
  submittedData.lname = formData.lname
}

</script>

<template>
  <h2>v-model</h2>
  <input v-model.lazy="name" />
  <div>{{ name }}</div>
  <br />

  <input type="checkbox" value="A" v-model="options" />
  <span>A</span>
  <input type="checkbox" value="B" v-model="options" />
  <span>B</span>
  <div>{{ options }}</div>
  <br />

  <input type="radio" value="A" v-model="selected" />
  <span>A</span>
  <input type="radio" value="B" v-model="selected" />
  <span>B</span>
  <div>{{ selected }}</div>
  <br />

  <input v-model.number="num" />
  <div>{{ num }} {{ typeof num }}</div>
  <br />

  <form @submit.prevent="formSubmit">
    <input v-model="formData.fname" />
    <input v-model="formData.lname" />
    <button>Save</button>
  </form>
  <div>{{ submittedData.fname }} {{ submittedData.lname }}</div>

</template>
