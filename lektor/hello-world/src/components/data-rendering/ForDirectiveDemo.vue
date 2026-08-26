<script setup>
  const people = [
    {
      id: 1,
      fname: "Ferda",
      lname: "Mravenec"
    },
    {
      id: 2,
      fname: "Beruska",
      lname: "Beruskova"
    }
  ]
</script>
<template>
  <h2>v-for</h2>
  <ul>
    <li v-for="(person, index) in people">[{{index}}]  {{ person.lname }}, {{ person.fname }}</li>
  </ul>
  <br />
  <ul>
    <li v-for="(value, key, index) in people[0]">[{{index}}] {{key}}: {{value}}</li>
  </ul>
  <br />
  <ul>
    <li v-for="num in 5">{{num}}</li>
  </ul>
</template>
