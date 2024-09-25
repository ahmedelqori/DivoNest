import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  username: string;

  @Field(() => String)
  email: string;

  @Field({ nullable: true })
  phoneNumber?: string;

  @Field({ nullable: true })
  validEmail?: boolean;

  @Field({ nullable: true })
  validPhoneNumber?: boolean;

  @Field(() => String)
  gender: string;
}
