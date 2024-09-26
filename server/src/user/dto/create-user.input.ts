import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Email of the user' })
  @IsNotEmpty({ message: 'Email must be not empty' })
  @IsEmail({}, { message: 'Please Enter Valid Email' })
  email: string;

  @Field(() => String, { description: 'Password of the user' })
  @IsNotEmpty({ message: 'Password must be not empty' })
  @IsStrongPassword({}, { message: 'Please Enter Strong password [A-z,0-9,@...]' })
  password: string;
}
