import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TodosService } from '../todos-service/todos-service.service';
import { Todo, TodoSchema } from './shemas/todo.shema';
import { TodosController } from './todos.controller';

@Module({
  providers: [TodosService],
  controllers: [TodosController],
  imports: [
    MongooseModule.forFeature([
      {
        name: Todo.name,
        schema: TodoSchema,
      },
    ]),
  ],
})
export class TodosModule {}
