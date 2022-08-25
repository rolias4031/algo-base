import { NestFactory } from '@nestjs/core';
import { NestApplicationOptions, ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as compression from 'compression';

// whitelist: true - removes all props from DTO that are not specified
async function bootstrap() {
  const appOptions: NestApplicationOptions = {
    cors: true,
  };
  const app = await NestFactory.create(AppModule, appOptions);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  // apply global middleware
  app.use(helmet()); // secure headers
  app.use(compression()); // asset compression
  await app.listen(process.env.PORT || 3333);
  // app.use(helmet());
}
bootstrap();
