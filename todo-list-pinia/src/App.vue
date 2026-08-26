<script setup>
import { useToDoStore } from './component/ToDoLogicStore';

// import setupToDoLogic from './component/ToDoLogic.js';

// setupToDoLogic()
console.log(useToDoStore());

</script>

<template>

  <body>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      |
      <RouterLink to="/add">Add todo</RouterLink>
    </nav>

    <h1>todo-list</h1>
    <h2>Welcome to 1999!</h2>
    <RouterView />
  </body>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

h1 {
  font-size: 80px;
}

body {
  padding: 32px 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
}
</style>
