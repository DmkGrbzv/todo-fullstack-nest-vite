<script lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { defineComponent } from "@vue/runtime-core"
import { mapActions, storeToRefs } from 'pinia';
import TodoInput from './components/TodoInput.vue';
import TodoItemList from './components/TodoItemList.vue';
import { useStore } from './store/todo';
import {ITask} from "./interfaces/todo";

export default defineComponent({
  name: "App",
  components: {
    TodoInput,
    TodoItemList
  },
  data() {
    const todoStore = useStore();
    const {getCompletedTasks, getUnCompletedTasks} = storeToRefs(todoStore)
    const {fetchTasks,fetchCreateTasks} = mapActions(useStore,["fetchTasks","fetchCreateTasks"]);
    const itemsData:ITask[] = [{text:'', completed:false, _id:"1"}];
    const itemsDataCompleted:ITask[] = [{text:'', completed:false, _id:"1"}];
    return {
      itemsData,
      itemsDataCompleted,
      getCompletedTasks,
      getUnCompletedTasks,
      fetchTasks,
      fetchCreateTasks
    }
  },
  methods:{
    async createTask(taskObj:ITask){
      await this.fetchCreateTasks(taskObj);
    },
  },
  computed:{
    unCompletedTasks(){
      return this.getUnCompletedTasks;
    },
    completedTasks(){
      return this.getCompletedTasks;
    }
  },
  async mounted(){
    await this.fetchTasks(false);
    await this.fetchTasks(true);
  }
  })
</script>

<template>
  <div class="wrapper">
    <div class="title">To-do list</div>
    <TodoInput :create="createTask"/>
    <TodoItemList :itemsProp = 'unCompletedTasks' v-show="unCompletedTasks.length"/>
    <div v-show="completedTasks.length">Completed</div>
    <TodoItemList :itemsProp = 'completedTasks' v-show="completedTasks.length"/>
    <!-- <TodoItemList/> -->
  </div>
</template>

<style lang="scss">
@import "./scss/main.scss";
</style>
