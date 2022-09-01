<script lang="ts">

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

    <div class="vertical-line"></div>

    <div class="label-wrapper" v-show="completedTasks.length">
      <svg width="12" height="11" viewBox="0 0 12 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0113 1.19614L4.38823 7.17566L1.98874 4.62391C1.53376 4.14022 0.796064 4.14022 0.341237 4.62391C-0.113746 5.10793 -0.113746 5.89227 0.341237 6.37612L3.56448 9.8039C3.79189 10.0457 4.09014 10.1667 4.38823 10.1667C4.68633 10.1667 4.98457 10.0457 5.21198 9.8039L11.6586 2.94835C12.1138 2.4645 12.1138 1.67999 11.6588 1.1963C11.204 0.712448 10.4663 0.712282 10.0113 1.19614Z" fill="#4EA2FF"/>
      </svg>  
      <div class="completed-list-label">Completed</div>
    </div>
    
    <TodoItemList :itemsProp = 'completedTasks' v-show="completedTasks.length"/>
  </div>
</template>

<style lang="scss">
@import "./scss/main.scss";
</style>
