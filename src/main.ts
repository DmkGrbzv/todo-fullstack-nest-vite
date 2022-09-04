import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { join } from 'path';
import {
  NestFastifyApplication,
  FastifyAdapter,
} from '@nestjs/platform-fastify';

async function bootstrap() {
  const port = process.env.PORT || 3000;
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, {
    cors: true,
  });
  app.setGlobalPrefix('/*');

  await app.listen(port);
}
bootstrap();
