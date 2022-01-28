<script setup lang="ts">
import { ref } from 'vue'
import ScrollList from './components/ScrollList'

const list = ref<string[]>([
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
])
</script>

<template>
  <div class="container">
    <ScrollList> </ScrollList>
  </div>
</template>

<style>
html,
body {
  margin: 0;
  overflow: hidden;
}
#app {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
