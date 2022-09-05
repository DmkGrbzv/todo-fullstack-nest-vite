import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosModule } from './todos/todos.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TodosModule,
    MongooseModule.forRoot(
      'mongodb+srv://DmkGrbzv:dmkgrbzv34521997@cluster0.lrzndoc.mongodb.net/todos?retryWrites=true&w=majority',
    ),
    ServeStaticModule.forRoot({
      rootPath: `.${join(__dirname, '../../', 'client/dist')}`,
      exclude: ['/'],
    }),
    ConfigModule.forRoot({
      envFilePath: `${process.env.NODE_ENV}`,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
