import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './middlewares/httpExceptionFilter.middleware';
import { SwaggerApiDoc } from 'helpers/apiDoc';

async function bootstrap() {
  const CORS_OPTIONS = {
    origin: [process.env.ADMIN_HOST, process.env.CLIENT_HOST || 'http://localhost:5730/'],
    allowedHeaders: [
      'Access-Control-Allow-Origin',
      'Origin',
      'X-Requested-With',
      'Accept',
      'Content-Type',
      'Authorization'
    ],
    methods: ['GET', 'PUT', 'OPTIONS', 'POST', 'PATCH', 'DELETE']
  };
  const app = await NestFactory.create(AppModule);
  app.enableCors(CORS_OPTIONS);
  app.useGlobalFilters(new HttpExceptionFilter());
  SwaggerApiDoc.settingUp(app);
  await app.listen(Number(process.env.API_PORT));
}
bootstrap();
