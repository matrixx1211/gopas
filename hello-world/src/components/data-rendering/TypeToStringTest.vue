<script setup>
const num = 42
const bool = false
const und = undefined
const obj = { foo: "Ahojda jahojda!",
  toString: function () {
    return "foo=" + this.foo
  }
 }
const arr = [1, 2, 3]
const dt = new Date()
const nl = null
</script>

<template>
  <p><span>number</span>: {{ num }}</p>
  <p><span>boolean</span>: {{ bool }}</p>
  <p><span>undefined</span>: {{ und }}</p>
  <p><span>object</span>: {{ obj }}</p>
  <p><span>array</span>: {{ arr }}</p>
  <p><span>date</span>: {{ dt }}</p>
  <p><span>null</span>: {{ nl }}</p>
</template>

<style scoped>
  p span {
    font-weight: 700;
  }
</style>
