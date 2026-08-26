<script setup>
    const emits = defineEmits(['buttonClick', 'equals', 'reset'])

    const keyboard = [
        ["7","8","9","+"],
        ["4","5","6","-"],
        ["1","2","3","*"],
        ["","0","","/"],
    ]

    function onButtonClick(btn) {
        emits('buttonClick', btn)
    }

    function onEquals() {
        emits('equals')
    }

    function onReset() {
        emits('reset')
    }
</script>

<template>
    <table>
        <tbody>
            <tr v-for="(row, rowIndex) in keyboard" :key="rowIndex">
                <td v-for="(btn, btnIndex) in row" :key="btnIndex">
                <button 
                    v-if="btn" 
                    :style="{backgroundColor: isNaN(+btn) ? 'lightblue' : 'lightgreen'}"
                    @click="onButtonClick(btn)"
                >
                    {{ btn }}
                </button>
                </td>
            </tr>
        </tbody>
    </table>
    <button @click="onEquals">=</button>
    <button @click="onReset">C</button>
</template>

<style scoped>
  button {
    width: 25px;
    height: 25px;
  }
</style>
