import { Test, TestingModule } from '@nestjs/testing';
import { TodosService } from './todos-service.service';

describe('TodosServiceService', () => {
  let service: TodosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TodosService],
    }).compile();

    service = module.get<TodosService>(TodosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
  // console.log()
});
