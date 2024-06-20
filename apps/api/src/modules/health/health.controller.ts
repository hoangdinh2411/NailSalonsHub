import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  MongooseHealthIndicator
} from '@nestjs/terminus';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,
    private mongodb: MongooseHealthIndicator
  ) {}

  @Get()
  @HealthCheck()
  @ApiOperation({ summary: 'Health check endpoints' })
  check() {
    return this.health.check([() => this.http.pingCheck('google', 'https://google.com')]);
  }
  @Get('db')
  @HealthCheck()
  @ApiOperation({ summary: 'Database health check endpoints' })
  checkDatabase() {
    return this.health.check([() => this.mongodb.pingCheck('database')]);
  }
}
