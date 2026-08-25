<script setup>
const { result } = defineProps({
    result: {
        required: true
    }
})
</script>

<template>
    <p class="result">{{ result === "" ? 0 : result }}
        <slot />
    </p>
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
</style>