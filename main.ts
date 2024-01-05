import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000; // You can add a PORT variable in your .env file
  await app.listen(5000);
}
bootstrap();
