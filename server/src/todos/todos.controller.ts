import { Body, Controller, Delete, Get, Param, Patch, Post, Req, Res } from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Request, Response } from 'express';
import { TodosService } from 'src/todos-service/todos-service.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService:TodosService){}
  @Get() 
  getAllTasksById(@Req() req: Request, @Res() res:Response):string{
    return this.todosService.getAll();
  } 
  @Post()
  createTask(@Body() CreateTaskDto: CreateTaskDto):string{
    return `${CreateTaskDto.id} ${CreateTaskDto.text} ${CreateTaskDto.completed}`
  }
  @Patch(':id')
  updateTask(@Body() updateTaskDto: UpdateTaskDto, @Param(':id') id:string):string{
    return `${updateTaskDto.text} ${updateTaskDto.id} ${updateTaskDto.completed}`
  }
  @Delete(':id')
  removeTask(@Param('id') id:string){
    return `remove ${id}`
  }
}
