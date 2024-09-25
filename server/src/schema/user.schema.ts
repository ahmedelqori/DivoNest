import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<UserModel>;

@Schema({ timestamps: true })
export class UserModel {
  @Prop({ required: true, type: String })
  firstName: string;

  @Prop({ required: true, type: String })
  lastName: string;

  @Prop({ required: true, type: String, unique: true })
  username: string;

  @Prop({ required: true, type: String, unique: true })
  email: string;

  @Prop({ required: false, type: String, unique: true })
  phoneNumber?: string;

  @Prop({ required: false, type: Boolean, default: false })
  validEmail?: boolean;

  @Prop({ required: false, type: Boolean, default: false })
  validPhoneNumber?: boolean;

  @Prop({ required: true, type: String })
  gender: string;
}

export const UserSchema = SchemaFactory.createForClass(UserModel);
