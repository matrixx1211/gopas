<script setup>
const list = [
  { value: 1, color: "red" },
  { value: 2, color: "yellow" },
  { value: 3, color: "green" },
]
</script>

<template>
    <!-- <template v-for="item in list" :key="item.value">
      <span v-selectable="item.color" style="display: block; width: 100%;">
        {{ item.value }}
      </span>
    </template> -->

    <div>
      <span v-for="item in list" :key="item.value" v-selectable="item.color" style="display: block; width: 100%;">
        {{ item.value }}
      </span>
    </div>

    <span v-crossed>crossed</span>
</template>
