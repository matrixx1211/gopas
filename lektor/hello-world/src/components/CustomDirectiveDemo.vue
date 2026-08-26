<script setup>
  const arr = ['a', 'b', 'c']
</script>

<template>
  <h2>Custom directives</h2>
  <ul>
    <li v-for="val in arr" v-selectable="'yellow'">{{ val }}</li>
  </ul>
  <br />
  <table>
    <tbody>
      <tr v-for="val in arr">
        <td v-selectable="'lightgreen'">{{ val }}</td>
      </tr>
    </tbody>
  </table>
  <div v-deleted>Foo bar baz</div>
</template>
