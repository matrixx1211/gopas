<script setup>
const keyboard = [
  ["7", "8", "9", "+"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "*"],
  ["", "0", "C", "/"],
  ["="]
]
</script>

<template>
    <div class="table">
      <div class="row" v-for="(row, index) in keyboard" :index>
        <div v-for="(key, iIndex) in row" :key="iIndex" class="column">
          <button class="key" v-if="key" :class="{ 'blue': iIndex != 3, 'green': iIndex === 3 }"
            v-on:click="$emit('key', key)">
            {{ key }}
          </button>
        </div>
      </div>
    </div>
</template>

<style scoped>
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

.row:last-child {
  grid-template-columns: 1fr;
}

.row:last-child .key {
  width: 100%;
  background-color: violet;
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