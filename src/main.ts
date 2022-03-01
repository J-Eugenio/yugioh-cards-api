import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.APP_PORT || 4000, () => {
    console.log(`🚀 - listening in port ${process.env.APP_PORT || 4000}`);
  });
}
bootstrap();
