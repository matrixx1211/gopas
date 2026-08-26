<script setup>
import CssDemo from '@/components/data-rendering/CssDemo.vue';
import ForDirectiveDemo from '@/components/data-rendering/ForDirectiveDemo.vue';
import HtmlDirectiveDemo from '@/components/data-rendering/HtmlDirectiveDemo.vue';
import IfDirectiveDemo from '@/components/data-rendering/IfDirectiveDemo.vue';
import TypeToStringTest from '@/components/data-rendering/TypeToStringTest.vue';
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <nav>
    <RouterLink to="/data-rendering/css">CSS</RouterLink>
  </nav>

  <HtmlDirectiveDemo v-if="true" />
  <hr>

  <TypeToStringTest v-if="true" />
  <hr>

  <IfDirectiveDemo v-if="true" />
  <hr>

  <ForDirectiveDemo v-if="true" />
  <hr>

  <!-- <CssDemo v-if="true" /> -->
  <!-- <hr> -->

  <RouterView />
</template>

<style></style>
