<script setup>
const title = "WHAAAAAT?"
import CssDemo from './components/data-rendering/CssDemo.vue';
import ForDirectiveDemo from './components/data-rendering/ForDirectiveDemo.vue';
import HtmlDirectiveDemo from './components/data-rendering/HtmlDirectiveDemo.vue';
import IfDirectiveDemo from './components/data-rendering/IfDirectiveDemo.vue';
import TypeToStringTest from './components/data-rendering/TypeToStringTest.vue';
import EventHandlingDemo from './components/user-interactions/EventHandlingDemo.vue';
import InputHandlingDemo from './components/user-interactions/InputHandlingDemo.vue';
</script>

<template>
  <h1 v-bind:title="title" v-bind:hidden="bool">{{ title }}</h1>
  <hr>
  <HtmlDirectiveDemo v-if="true" />
  <hr>

  <TypeToStringTest v-if="true" />
  <hr>

  <IfDirectiveDemo />
  <hr>

  <ForDirectiveDemo />
  <hr>

  <CssDemo />
  <hr>

  <EventHandlingDemo />
  <hr>

  <InputHandlingDemo />
  <hr>
</template>

<style scoped>
h1 {
  color: red
}
</style>
