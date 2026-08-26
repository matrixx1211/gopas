<script setup>
import { ref, watch } from 'vue';
import Display from './Display.vue';
import Keyboard from './Keyboard.vue';

const display = ref("0")

watch(display, (newDisplay, oldDisplay) => {
  console.log(`Display changed from ${oldDisplay} to ${newDisplay}`)
})

function addToDisplay(str) {
  display.value = display.value === "0" ? str : display.value + str
}

function equals() {
  try {
    display.value = eval(display.value)
  } catch(e) {
    display.value = e.message
  }
}

function reset() {
  display.value = "0"
}

</script>

<template>
  <h1>Calc</h1>
  <Display>{{ display }}</Display>
  <Keyboard @button-click="addToDisplay" @equals="equals" @reset="reset" />
</template>

