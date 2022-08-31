import { defineStore } from 'pinia'
interface ITask{
  id:string,
  text:string,
  completed:boolean
}

export const useStore = defineStore('todoStore', {
  state:()=>({
    tasksListCompleted:[] as ITask[],
    tasksListUnCompleted:[] as ITask[]
  }),
  getters:{
    getCompletedTasks():ITask[]{
      return this.tasksListCompleted;
    },
    getUnCompletedTasks():ITask[]{
      return this.tasksListUnCompleted;
    },
  },
  actions:{
    async fetchTasks(completed?:boolean){
      
    },
    async fetchDeleteTasks(id:string){

    },
    async fetchUpdateTasks(){

    },
    async fetchCreateTasks(prop:ITask){

    }
  }
})