<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import TodoInput from './components/TodoInput.vue';
import TodoItem from './components/TodoItem.vue';
</script>

<template>
  <div class="wrapper">
    <div class="title">To-do list</div>
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <CheckBox/>
    <TodoInput/>
    <TodoItem/>
  </div>
</template>

<style lang="scss">
@import "./scss/main.scss";
</style>
