import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  function debouncedIncrement() {
    setTimeout(()=>{
      this.increment()
    }, 1000)
  }

  return { count, doubleCount, increment, debouncedIncrement }
})
