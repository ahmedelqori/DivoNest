import { InputType, Field } from '@nestjs/graphql';
import {
  IsAlpha,
  IsEmail,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  @IsString()
  @IsAlpha()
  @Length(3, 20)
  firstName: string;

  @Field(() => String)
  @IsString()
  @IsAlpha()
  @Length(3, 20)
  lastName: string;

  @Field(() => String)
  @IsString()
  @Length(2, 20)
  username: string;

  @Field(() => String)
  @IsEmail({}, { message: 'Pleas Enter Valid Email' })
  email: string;

  @Field(() => String)
  @IsStrongPassword({}, { message: 'Please Enter Strong Password' })
  password: string;

  @Field(() => String)
  @IsStrongPassword({}, { message: 'Please Enter Strong Password' })
  confirmPassword: string;

  @Field({ nullable: true })
  @IsPhoneNumber('MA', { message: 'Invalid Number Phone For Morocco' })
  phoneNumber?: string;

  @Field({ nullable: true })
  validEmail?: boolean;

  @Field({ nullable: true })
  validPhoneNumber?: boolean;

  @Field(() => String)
  @IsString()
  @IsAlpha()
  gender: string;
}
