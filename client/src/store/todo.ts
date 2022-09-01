import { defineStore } from 'pinia';
import axios from 'axios'
import {ITask} from "../interfaces/todo"

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
      const response = await axios.get<[ITask]>(`http://localhost:3000/todos/getAll/${completed}`);
      if(completed){
        this.tasksListCompleted = response.data;
        return this.tasksListCompleted
      }
      this.tasksListUnCompleted = response.data;
      return this.tasksListUnCompleted;
    },
    async fetchDeleteTasks(id:string){
      await axios.delete<ITask>(`http://localhost:3000/todos/delete/${id}`)
      .then(()=>{
        this.fetchTasks(true);
        this.fetchTasks(false);
      });
      return
    },
    async fetchUpdateTasks(prop:ITask,id:string){
      await axios.patch<ITask>(`http://localhost:3000/todos/update/${id}`, prop)
      .then(()=>{
        this.fetchTasks(true);
        this.fetchTasks(false);
      });;
      return
    },
    async fetchCreateTasks(prop:ITask){
      await axios.post<ITask>(`http://localhost:3000/todos/create`, prop)
      .then(()=>{
        this.fetchTasks(true);
        this.fetchTasks(false);
      });;
      return
    },
  }
})