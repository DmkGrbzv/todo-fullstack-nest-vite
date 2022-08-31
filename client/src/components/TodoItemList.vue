<script lang="ts">
import { defineComponent } from "@vue/runtime-core"
import TodoItem from "./TodoItem.vue";

  export default defineComponent({
  name: "TodoInput",
  components: {
    TodoItem,
},
  data() {
    const lehgth:any[] = [{text:'Hello', completed:false, id:1},{text:'Secons', completed:false,id:2}];
    const lehgthCompleted:any[] = [{text:'Hello', completed:true,id:3},{text:'Secons', completed:true,id:4}];
    return {
     lehgth,
     lehgthCompleted
    }
  }
  })
</script>

<template>
  <div class="list-wrapper">
    <div v-for="item in lehgth" :key="item.id">
      <TodoItem :completed='item.completed' :text='item.text' :idValue='item.id'/>
    </div>
  </div>
</template>

<style scoped>

</style>
