<script setup>
import { ref, watch } from 'vue'
import CalculatorDisplay from './components/CalculatorDisplay.vue'
import CalculatorButtons from './components/CalculatorButtons.vue'

const result = ref("")

watch(result, (newResult, oldResult) => {
  console.log("dislay is showing: " + newResult + " old value was: " + oldResult);
})


const handleClick = (key) => {
  try {
    if (parseInt(result.value) === 0 || `${result.value}`.includes("Infinity") || `${result.value}`.includes("error")) {
      result.value = key
      return
    }
  
    if (key === "=" && result.value != "") {
      result.value = eval(result.value)
      return
    }
  
  
    if (key === "C") { 
      result.value = ""; 
      return 
    }
  
    if (key != "=") { 
      result.value += key 
    }
  } catch (error) {
    result.value = "error"
  }
}

</script>

<template>

  <body class="body">
    <h1>KALKULÁTOR</h1>

    <CalculatorDisplay :result="result" />
    <CalculatorDisplay>{{ result === "" ? 0 : result }}</CalculatorDisplay>
    <CalculatorButtons @key="handleClick" />
  </body>
</template>

<style scoped>
.body {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  border-radius: 16px;
  padding: 32px;
}
</style>
