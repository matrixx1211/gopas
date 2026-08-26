<script setup>
import { ref } from 'vue';
import Toolbar from './Toolbar.vue';
const message = ref("")
function onCommand(msg) {
  message.value = msg
}
</script>

<template>
  <h2>Events</h2>
  <Toolbar
    @command="onCommand"
  />
{{ message }}
</template>
