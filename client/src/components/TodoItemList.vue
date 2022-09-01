<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import TodoItem from "./TodoItem.vue";
import { useStore } from '../store/todo';
import { mapActions, storeToRefs } from 'pinia';
import { PropType } from "vue";
import {ITask} from "../interfaces/todo";

  export default defineComponent({
  name: "TodoInput",
  props:{
    itemsProp: {
      type: (Array as PropType<ITask[]>),
      required: true
    }
  },
  components: {
    TodoItem,
  },
  data() {
    const todoStore = useStore();
    const {fetchDeleteTasks,fetchUpdateTasks} = mapActions(useStore,["fetchDeleteTasks","fetchUpdateTasks"])
    const items:ITask[] = [{text:'', completed:false, _id:"1"}];
    return {
     items,
     fetchDeleteTasks,
     fetchUpdateTasks
    }
  },
  methods:{
    async removeTask(id:string){
      this.fetchDeleteTasks(id)
    },
    async updateTask(payload:ITask,id:string){
      await this.fetchUpdateTasks(payload,id)
    }
  },
  computed:{
    itemsArray(){
      if(this.itemsProp.length){
        this.items = this.itemsProp
      }
      return this.items;
    }
  },
  })
</script>

<template>
  <div class="list-wrapper">
    <div v-for="item in itemsArray" :key="item._id">
      <TodoItem :completed='item.completed' 
        :text='item.text' 
        :idValue='item._id'
        :remove ="removeTask"
        :update = 'updateTask'
        :itemData = 'item'
      />
    </div>
  </div>
</template>

<style scoped>

</style>
