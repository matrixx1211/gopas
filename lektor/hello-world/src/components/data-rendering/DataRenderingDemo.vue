<script setup>
const title = "Hello world"
const num = 42
const bool = false
const und = undefined

const obj = {
  foo: "ahoj",
  toString: function () {
    return "foo=" + this.foo
  }
}
const arr = [1,2,3]
const date = new Date()
const nl = null</script>
<template>
<h2>Data rendering</h2>
<p>number: {{num}}</p>
  <p>boolean: {{bool}}</p>
  <p>undefined: {{und}}</p>
  <p>object: {{obj}}</p>
  <p>array: {{arr}}</p>
  <p>date: {{date}}</p>
  <p>null: {{null}}</p>
</template>
