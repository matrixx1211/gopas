<script setup>
const title = "WHAAAAAT?"
import CssDemo from './components/data-rendering/CssDemo.vue';
import ForDirectiveDemo from './components/data-rendering/ForDirectiveDemo.vue';
import HtmlDirectiveDemo from './components/data-rendering/HtmlDirectiveDemo.vue';
import IfDirectiveDemo from './components/data-rendering/IfDirectiveDemo.vue';
import TypeToStringTest from './components/data-rendering/TypeToStringTest.vue';
import EventHandlingDemo from './components/user-interactions/EventHandlingDemo.vue';
import InputHandlingDemo from './components/user-interactions/InputHandlingDemo.vue';
import WatcherDemo from './components/WatcherDemo.vue';
</script>

<template>
  <h1 v-bind:title="title" v-bind:hidden="bool">{{ title }}</h1>
  <hr>
  <HtmlDirectiveDemo v-if="false" />
  <hr>

  <TypeToStringTest v-if="false" />
  <hr>

  <IfDirectiveDemo v-if="false" />
  <hr>

  <ForDirectiveDemo v-if="false" />
  <hr>

  <CssDemo v-if="false" />
  <hr>

  <EventHandlingDemo v-if="false" />
  <hr>

  <InputHandlingDemo v-if="false" />
  <hr>

  <WatcherDemo v-if="true"/>
  <hr>
</template>

<style scoped>
h1 {
  color: red
}
</style>
