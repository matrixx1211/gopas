<script setup>
const array = [
  { id: 1, fname: "Marek", lname: "Bitomský" },
  { id: 2, fname: "Denisa", lname: "Pavlusíková" },
  { id: 3, fname: "Gopas", lname: "Titanium" }
]

</script>

<template>
  <div v-for="({id, fname, lname}) in array" v-bind:key="id">
    <span>{{ fname }}, {{ lname }}</span>
  </div>

  <ul>
    <li v-for="(person, index) in array" :key="person.id">
      {{ index + 1 }}: {{ person.fname }} - {{ person.lname }}
    </li>
  </ul>

  <ul>
    <li v-for="me in array[0]" :key="me.id">
      {{ me }}
    </li>
  </ul>

  <ul>
    <li v-for="i in 5" :key="i">{{ i }}</li>
  </ul>
</template>


<style scoped></style>
