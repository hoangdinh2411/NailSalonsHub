import { ConflictException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '@repo/shared';
import { Db, InsertOneResult } from 'mongodb';

@Injectable()
export class UsersService {
  constructor(@Inject('DATABASE_CONNECTION') private db: Db) {}

  async isExistingUser(email: string): Promise<boolean> {
    const user = await this.db.collection('users').findOne({
      email
    });

    return user !== null;
  }
  async createNewUser(users: CreateUserDto): Promise<InsertOneResult> {
    const isExisting = await this.isExistingUser(users.email);
    if (isExisting) {
      throw new ConflictException('User already exists');
    }
    return this.db.collection('users').insertOne(users);
  }
}
