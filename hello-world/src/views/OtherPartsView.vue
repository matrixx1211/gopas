<script setup>
import ComposablesDemo from '@/components/composable/ComposablesDemo.vue';
import CustomDirectiveDemo from '@/components/CustomDirectiveDemo.vue';
import EventsDemo from '@/components/events/EventsDemo.vue';
import LifecycleDemo from '@/components/lifecycle/LifecycleDemo.vue';
import PropsDemo from '@/components/props/PropsDemo.vue';
import ProvideInjectDemo from '@/components/provide-inject/ProvideInjectDemo.vue';
import WatcherDemo from '@/components/WatcherDemo.vue';

</script>

<template>
  <WatcherDemo v-if="true" />
  <hr>

  <LifecycleDemo v-if="true" />
  <hr>

  <PropsDemo v-if="true" />
  <hr>

  <EventsDemo v-if="true" />
  <hr>

  <ProvideInjectDemo v-if="true" />
  <hr>

  <ComposablesDemo v-if="true" />
  <hr>

  <CustomDirectiveDemo v-if="true" />
  <hr>
</template>

<style></style>
