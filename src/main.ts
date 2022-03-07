import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Yu-Gi-OH! - DB API')
    .setDescription('Description')
    .setVersion('1.0')
    .addTag('Yu-Gi-OH!')
    .addApiKey(
      {
        type: 'apiKey', // this should be apiKey
        name: 'api_token',
        in: 'header',
      },
      'access-key',
    )
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document, {
    swaggerOptions: {
      supportedSubmitMethods: ['get'],
    },
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.APP_PORT || 4000, () => {
    console.log(`🚀 - listening in port ${process.env.APP_PORT || 4000}`);
  });
}
bootstrap();
