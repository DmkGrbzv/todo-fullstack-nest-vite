import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo, TodoDocument } from 'src/todos/shemas/todo.shema';
import { CreateTaskDto } from 'src/todos/dto/create-task.dto';
import { UpdateTaskDto } from 'src/todos/dto/update-task.dto';

@Injectable()
export class TodosService {
  constructor(@InjectModel(Todo.name) private todoModel: Model<TodoDocument>) {}
  async getAll(): Promise<Todo[]> {
    return await this.todoModel.find().exec();
  }
  async getTasksWithCompletedMark(completed?: boolean): Promise<Todo[]> {
    return await this.todoModel.find({ completed: completed }).exec();
  }
  async create(taskDto: CreateTaskDto): Promise<Todo> {
    const newTask = new this.todoModel(taskDto);
    return newTask.save();
  }
  async update(id: string, taskDto: UpdateTaskDto): Promise<Todo> {
    await this.todoModel.findByIdAndUpdate({ _id: id }, taskDto);
    return null;
  }
  async remove(id: string): Promise<Todo> {
    return await this.todoModel.findByIdAndRemove(id);
  }
}
