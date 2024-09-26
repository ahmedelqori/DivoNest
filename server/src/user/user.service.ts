import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UserService {
  /**
   * UserService constructor that injects the User model.
   *
   * @param {Model<User>} userModel -  The Mongoose model for the User entity.
   */
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<User>,
  ) {}

  /**
   * Create new user in data base
   *
   * @param {CreateUserInput} user - The UserInput DTO
   * @returns {void}
   */
  async createUser(user: CreateUserInput) {
    try {
      const findUser = await this.userModel.findOne({ email: user.email });
      if (findUser)
        throw new ConflictException('User with this email already exists');

      const newUser = await this.userModel.create({
        email: user.email,
        password: user.password,
      });
      await newUser.save();
    } catch (error) {
      throw error;
    }
  }
}
