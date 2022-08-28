import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
// import { Request, Response } from 'express';
import { TodosService } from 'src/todos-service/todos-service.service';
import { Todo } from './shemas/todo.shema';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}
  @Get('getAll')
  getAllTasks(): Promise<Todo[]> {
    return this.todosService.getAll();
  }
  @Post('create')
  createTask(@Body() CreateTaskDto: CreateTaskDto) {
    return this.todosService.create(CreateTaskDto);
  }
  @Patch('update/:id')
  async updateTask(
    @Body() UpdateTaskDto: UpdateTaskDto,
    @Param('id') id: string,
  ) {
    const changedTask = await this.todosService.update(id, UpdateTaskDto);
    return changedTask;
  }
  @Delete('delete/:id')
  removeTask(@Param('id') id: string) {
    return this.todosService.remove(id);
  }
}
