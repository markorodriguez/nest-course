import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true // Just to read elements declared in DTOs
  })) // Allows to use PIPES globally
  await app.listen(4000);
}
bootstrap();

// VIDEO: https://youtu.be/GHTA143_b-s?t=3614