import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.APP_PORT || 4000, () => {
    console.log(`🚀 - listening in port ${process.env.APP_PORT || 4000}`);
  });
}
bootstrap();
