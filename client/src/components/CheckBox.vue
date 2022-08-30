<script lang="ts">
import { defineComponent } from 'vue';

  export default defineComponent({
  name: "CheckBox",
  components: {
   
  },
  data() {
    const isOpen:boolean = false;
    return {
      isOpen
    }
  },
  methods:{
    toggle(value:boolean):void{
      this.isOpen = !value;
    }
  },
  mounted(){
   
  }
  })
</script>

<template>
  <label class="checkbox-wrapper">
    <input type="checkbox" class="default-checkbox"/>
      <span class="checkbox" :class="{'checkbox-selected': isOpen}" @click="toggle(isOpen)">
        <svg v-if="isOpen" class="checkbox_item" width="8" height="8" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.67418 1.04877L2.92549 5.14902L1.32583 3.39924C1.02251 3.06757 0.530709 3.06757 0.227491 3.39924C-0.0758304 3.73114 -0.0758304 4.26898 0.227491 4.60076L2.37632 6.95123C2.52793 7.11707 2.72676 7.19999 2.92549 7.19999C3.12422 7.19999 3.32305 7.11707 3.47466 6.95123L7.77242 2.25029C8.07584 1.9185 8.07584 1.38055 7.77252 1.04888C7.4693 0.717098 6.97751 0.716985 6.67418 1.04877Z" fill="#222435"/>
        </svg>
      </span>
  </label>

  
</template>

<style scoped>

</style>
