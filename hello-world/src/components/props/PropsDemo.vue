<script setup>
import ItemDemo from './ItemDemo.vue';


</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 16px;">
    <ItemDemo id="ABECEDA" text="Tento item má id ABECEDA" />
    <ItemDemo id="NENI" text="Tento item má id NENI" />
    <ItemDemo id="VEDA" text="Tento item má id VEDA" />
    <ItemDemo :id="2" text="Tento item má id 2 číselně, takže console dává warning => type check" />
    <ItemDemo text="Tento item nemá id => default UNDEFINED textově" />
  </div>
</template>
