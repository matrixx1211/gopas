<script setup>
import { ref } from 'vue';

    const count = ref(0)

    function inc() {
        count.value++
    }
</script>

<template>
    <span>{{ count }}</span>
    <button 
        style="margin-left: 5px;"
        @click="inc"
    >
        ++
    </button>
</template>