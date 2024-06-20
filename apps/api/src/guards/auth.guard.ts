// External dependencies
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
// import { decode, Jwt, JwtPayload, verify } from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    try {
      // will fix later
      return !!context;
    } catch (error) {
      return false;
    }
  }
}
