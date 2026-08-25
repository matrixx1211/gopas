<script setup>
import { ref } from 'vue';
import Toolbar from './ToolbarTest.vue';

const msg = ref("")

const onCommand = (message) => {
  msg.value = message
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <Toolbar @command="msg=$event" />
    <Toolbar @command="onCommand" />
    {{ msg }}
  </div>
</template>
