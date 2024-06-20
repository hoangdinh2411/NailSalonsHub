import { ConfigModule } from '@nestjs/config';
import modules from './modules';
import { DatabaseModule } from 'modules/database.module';
import { Module, ValidationPipe } from '@nestjs/common';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    DatabaseModule,
    ...modules
  ],
  providers: [
    {
      provide: 'APP_PIPE',
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
        stopAtFirstError: true
      })
    }
  ]
})
export class AppModule {}
