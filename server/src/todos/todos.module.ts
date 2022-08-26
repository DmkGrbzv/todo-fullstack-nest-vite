import { Module } from '@nestjs/common';
import { TodosService } from 'src/todos-service/todos-service.service';
import { TodosController } from './todos.controller';

@Module({
  providers:[TodosService],
  controllers:[TodosController]
})
export class TodosModule {}
