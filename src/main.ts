import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { AppModule } from './app.module';
import { from } from 'rxjs';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const port: number = 3000;
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
  logger.log('Application listning on port ' + port);
}
bootstrap();
