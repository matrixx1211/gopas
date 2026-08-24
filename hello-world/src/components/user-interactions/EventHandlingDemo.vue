<script setup>
import { reactive, ref } from 'vue';


var count = ref(0)

function onClick(e) {
  alert('God help me!' + ' ' + e.target.innerText)
}

const plus = () => {
  count.value ++;
  state.count ++;
}

const minus = () => {
  count.value --;
  state.count --;
}

const person = ref({
  id: 1,
  fname: "Marek",
  address: {
    street: "Vsetínská",
    number: "12"
  }
})

// const name = ref("Marek")

const state = reactive({count: 0})

</script>

<template>
  <div class="flex">
    <button v-on:click="onClick">Click me!</button>
    <button @click="onClick">Click me!</button>

    <div style="display: flex; gap: 8px;">
      <span>REF COUNT: {{count}}</span>
      <button @click="plus">+</button>
      <button @click="minus">-</button>
    </div>

    <div style="display: flex; gap: 8px;">
      <span>REACTIVE COUNT: {{state.count}}</span>
      <button @click="plus">+</button>
      <button @click="minus">-</button>
    </div>
  </div>

  <div>
    <span>
      {{ person }}
    </span>

    <!-- <input type="text" v-model="name" /> -->
  </div>
</template>

<style>
.flex {
  display: flex;
  flex-direction: column;
  gap: 4px;

}
</style>
