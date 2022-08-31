<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup

import { mapActions, storeToRefs } from 'pinia';
import TodoInput from './components/TodoInput.vue';
import TodoItemList from './components/TodoItemList.vue';
import { useStore } from './store/todo';

const todoStore = useStore();
const {getCompletedTasks, getUnCompletedTasks} = storeToRefs(todoStore)
const {fetchTasks} = mapActions(useStore,["fetchTasks"])

</script>

<template>
  <div class="wrapper">
    <div class="title">To-do list</div>
    <TodoInput/>
    <TodoItemList/>
    <!-- <TodoItemList/> -->
  </div>
</template>

<style lang="scss">
@import "./scss/main.scss";
</style>
