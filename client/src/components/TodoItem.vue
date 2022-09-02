<script lang="ts">
import { defineComponent, PropType } from "vue";
import CheckBox from '../components/CheckBox.vue';
import { ITask } from "../interfaces/todo";

  export default defineComponent({
  name: "TodoItem",
  props:{
    remove:{
      type: Function,
      default: ()=>{},
      required: true
    },
    update:{
      type: Function,
      default: ()=>{},
      required: true
    },
    itemData:{
      type: Object as PropType<ITask>,
      default: {text:'', completed:false, _id:"1"}
    }
  },
  components: {
   CheckBox
  },
  data() {
    const value:string='';
    const isEditMode:boolean=true;
    const isSelected:boolean=false;
    
    return {
     value,
     isEditMode,
     isSelected,
    }
  },
  methods:{
    getCheckBoxValue(value:boolean){
      this.isSelected = value;
      this.fetchUpdateTask({ text: this.itemData.text, completed: this.isSelected, _id: this.itemData._id }, this.itemData._id )
    },
    getTextValue(value:string){
      this.fetchUpdateTask({ text:value,completed:this.isSelected,_id:this.itemData._id }, this.itemData._id);
    },
    focusEdit(){
      const itemRefValue = (this.$refs.item as HTMLInputElement);
      setTimeout(()=>{
        itemRefValue.focus();
      },100)
      itemRefValue.focus();
    },
    async removeItem(value:string){
      await this.remove(value);
    },
    editField(value:boolean){
      this.isEditMode = !value;
      this.focusEdit();
    },
    async fetchUpdateTask(obj:ITask,id:string){
      if( !( obj.text.length > 0 ) ){
        return this.value
      }
      await this.update(obj,id);
    }
  },
  computed:{
    isSelectedValue(){
      if(this.itemData){
       return this.isSelected = this.itemData.completed;
      }
    },
    isChangedTextValue(){
      if(this.itemData.text && !this.value.length){
       return this.value = this.itemData.text;
      }
      return this.value;
    },
  },
  mounted(){
    return this.value = this.itemData.text;
  }
  })
</script>

<template>
  <div class="item-wrapper">
    <div class="item">
      <label for="" class="item__label" :class="{'item__label-done':  isSelectedValue}">
        <div class="position-absolute">
          <CheckBox :select="getCheckBoxValue" :selectedValue='isSelectedValue'/>
        </div>
        <input ref="item" type="text" v-model="value" v-show="!isEditMode"  @change="getTextValue(isChangedTextValue)" :class="{'item__label-done': isSelectedValue}" v-on:focusout="isEditMode = true">
        <p @dblclick="editField(isEditMode)" v-show="isEditMode">{{itemData.text}}</p>
        <svg @click.stop="removeItem(itemData._id)" width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5745 0.43434C11.4092 0.26865 11.1848 0.175535 10.9507 0.175535C10.7167 0.175535 10.4922 0.26865 10.3269 0.43434L6.00002 4.75238L1.67313 0.425491C1.50782 0.259802 1.28338 0.166687 1.04932 0.166687C0.815262 0.166687 0.590821 0.259802 0.425504 0.425491C0.0804147 0.770581 0.0804147 1.32803 0.425504 1.67312L4.75239 6.00001L0.425504 10.3269C0.0804147 10.672 0.0804147 11.2294 0.425504 11.5745C0.770593 11.9196 1.32804 11.9196 1.67313 11.5745L6.00002 7.24765L10.3269 11.5745C10.672 11.9196 11.2294 11.9196 11.5745 11.5745C11.9196 11.2294 11.9196 10.672 11.5745 10.3269L7.24765 6.00001L11.5745 1.67312C11.9108 1.33688 11.9108 0.770581 11.5745 0.43434Z" fill="#9799AD"/>
        </svg>
          
      </label>
    </div>
  </div>

  
</template>

<style scoped>

</style>
