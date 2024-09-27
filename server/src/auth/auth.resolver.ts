import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { CreateUserInput } from 'src/user/dto/create-user.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => Boolean)
  async createUser(@Args('userInfo') userInfo: CreateUserInput) {
    await this.authService.createUser(userInfo);
    return 1;
  }

  @Query(() => String)
  dummy() {
    return '';
  }
}
