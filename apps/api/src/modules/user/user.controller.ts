import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '@repo/shared';
import { UsersService } from './user.service';

@ApiTags('Auth')
@Controller('users')
export class UserController {
  constructor(private userService: UsersService) {}
  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({ status: 201, description: 'User created successfully' })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async createUser(@Body() createUserDto: CreateUserDto) {
    const result = await this.userService.createNewUser(createUserDto);
    if (result.insertedId) {
      return { message: 'User created successfully' };
    }
    return { message: 'Failed to create user' };
  }
}
