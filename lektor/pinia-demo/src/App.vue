<script setup>
import { storeToRefs } from 'pinia';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import { useCounterStore } from './stores/counter.js';

const counterStore = useCounterStore()
const refs = storeToRefs(counterStore)
console.log(refs)
const { count, doubleCount, } = refs
const {increment, debouncedIncrement } = counterStore

</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <hr />
    <div>count: {{ count }}</div>
    <div>double count: {{ doubleCount }}</div>
    <button @click="increment()">++</button>
    <button @click="debouncedIncrement()">debounced ++</button>
    <hr />
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
