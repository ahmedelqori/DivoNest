import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('userInfo') createUserInfo: CreateUserInput) {
    return this.userService.createUser(createUserInfo);
  }
  @Query(() => String)
  dummyQuery(): string {
    return 'This query is just a placeholder.';
  }
}
