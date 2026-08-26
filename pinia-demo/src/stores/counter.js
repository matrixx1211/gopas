import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }

  // Uložíme si ID timeoutu, aby ho šlo zrušit
  let timeoutId = null
  
  function debouncedIncrement() {
    // Pokud už nějaký timeout běží, zrušíme ho
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    // Nastavíme nový timeout
    timeoutId = setTimeout(() => {
      increment()
      timeoutId = null // Po dokončení vyresetujeme ID
    }, 200)
  }

  return { count, doubleCount, increment, debouncedIncrement }
})