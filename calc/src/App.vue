<script setup>
const keyboard = [
  ["7", "8", "9", "+"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "*"],
  ["", "0", "", "/"],
]
const value = 123

const handleClick = (key) => {
  console.log(key)
}
</script>

<template>
  <body class="body">
    <h1>KALKULÁTOR</h1>

    <p class="result">{{ value }}</p>

    <div class="table">
      <div class="row" v-for="(row, index) in keyboard" :index>
        <div v-for="(key, iIndex) in row" :key="iIndex">
          <button class="key" v-if="key" :class="{'blue': iIndex != 3, 'green': iIndex === 3}" v-on:click="handleClick"> 
            {{ key }}
          </button>
        </div>
      </div>
    </div>
  </body>

</template>

<style scoped>
.result {
  border: 1px solid black;
  width: 200px;
  padding: 16px;
  border-radius: 8px;
  text-align: right;
  font-weight: 600;
  font-size: 18px;
}
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

.table {
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 16px;
  border: 1px solid black;
  border-radius: 8px;
  gap: 8px;
}

.row {
  display: grid;
  grid-template-columns: repeat(4, 40px);
  justify-content: center;
  gap: 8px;
}

.key {
  font-weight: 900;
  margin: auto;
  width: 40px;
  height: 40px;
  border: 1px solid black;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.key:hover {
  background-color: red;
}

.key:active {
  background-color: darkred;
  color: white;
}
.green {
  background-color: rgb(162, 255, 108);
}

.blue {
  background-color: #a8d9fa;
}
</style>
