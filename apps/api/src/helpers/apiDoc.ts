import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class SwaggerApiDoc {
  static getOptions() {
    const options = new DocumentBuilder()
      .addCookieAuth('token', {
        in: 'cookie',
        type: 'apiKey',
        name: 'token',
        description: 'Enter your token here'
      })
      .setTitle('Travel social media app API')
      .setDescription('API Documentation for the travel social media app')
      .setVersion('1.0')
      .addServer(`http://localhost:${process.env.API_PORT}`, 'Local server')
      .addServer(process.env.DOMAIN_STAGING, 'Staging server')
      .addServer(process.env.DOMAIN_PRODUCT, 'Production server')
      .addTag('Auth', 'Authentication related endpoints')
      .addTag('Health', 'Health check endpoints')
      .addTag('Posts', 'Posts related endpoints')
      .build();

    return options;
  }

  static settingUp(app) {
    const document = SwaggerModule.createDocument(app, SwaggerApiDoc.getOptions());
    SwaggerModule.setup('api/docs', app, document);
  }
}
