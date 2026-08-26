<script setup>
  import { ref, reactive, computed } from "vue"
  function onClick(e) {
    alert('ahoj ' + e.target.innerText)
  }

  var count = ref(0)
  const doubleCount = computed(()=>count.value * 2)

  const person = ref({
    id: 1,
    fname: "Ferda",
    address: {
      street: "Mraveniste",
      number: "4b"
    }
  })

  const state = reactive({count: 0})

  function inc() {
    count.value++
    console.log(count)
  }

  function changePersonName() {
    person.value.fname = "Beruska"
  }

  function changeAddress() {
    person.value.address.number = "5c"
  }

  function reactiveInc() {
    state.count++
  }
</script>

<template>
  <h2>Event handling</h2>
  <button @click="onClick">Click me</button>
  <br />
  <div>Count: {{ count }}</div>
  <div>Double count: {{ doubleCount }}</div>
  <button @click="inc">++</button>
  <br />
  <div>{{ person.fname }} {{ person.address.street }} {{ person.address.number }}</div>
  <button @click="changePersonName">Change name</button>
  <button @click="changeAddress">Change address</button>
  <br />
  <div>{{ state.count }}</div>
  <button @click="reactiveInc()">++</button>
</template>
