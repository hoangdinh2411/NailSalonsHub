import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { isArray } from 'class-validator';
import { Response } from 'express';

export class HttpExceptionFilter implements ExceptionFilter {
  public getStatus = (exception: HttpException): number => {
    const status = exception.getStatus();
    if (!status) return 500;
    return status;
  };

  public getMessage = (exception: HttpException): string => {
    const response = exception.getResponse();
    if (typeof response === 'string') return response;
    if (response['message']) {
      if (isArray(response['message'])) return response['message'][0];
      return response['message'];
    }
    return 'Internal server error';
  };

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const message = this.getMessage(exception);
    const status = this.getStatus(exception);

    response.status(status).send({
      success: false,
      message
    });
  }
}
