import { Injectable } from '@nestjs/common';
import { CreateUserInput } from 'src/user/dto/create-user.input';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}
  async createUser(userInfo: CreateUserInput) {
    try {
      await this.userService.createUser(userInfo);
    } catch (error) {
      throw error;
    }
  }
}
