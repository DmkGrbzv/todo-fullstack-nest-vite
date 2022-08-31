<script lang="ts">
import { defineComponent } from "@vue/runtime-core"

  export default defineComponent({
  name: "TodoInput",
  components: {
   
  },
  data() {
    const defaultValue:string = 'AddValue'
    const value:string = ''
    return {
     defaultValue,
     value
    }
  },
  methods:{
    changedPlaceholder(isFocusein:boolean){
      if(isFocusein){
        this.value = ''
        return;
      }
      this.value = this.defaultValue;
      
    }
  },
  mounted(){
    this.value = this.defaultValue;
  }
  })
</script>

<template>
  <div class="input-wrapper">
    <label for="" class="label">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 8.75H11.25V0H8.75V8.75H0V11.25H8.75V20H11.25V11.25H20V8.75Z" fill="#7A7C8D"/>
      </svg>
      <input type="text" v-model="value" 
      v-on:focusin="changedPlaceholder(true)" 
      v-on:focusout="changedPlaceholder(false)"/>
    </label>
  </div>
</template>

<style scoped>

</style>
