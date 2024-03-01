import { Field, InputType } from '@nestjs/graphql';
import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import { EnumRelationShip, EnumRole } from 'src/ts/enum';

@InputType()
export class CreateUserDto {
  @IsNotEmpty()
  @Field()
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  @Field()
  password: string;

  @IsOptional()
  @Field(() => String, { defaultValue: EnumRole.USER })
  role: EnumRole;

  @IsNotEmpty()
  @Field()
  fullname: string;

  @IsNotEmpty()
  @IsEmail()
  @Field()
  email: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  address: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  company: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  university: string;

  @IsOptional()
  @Field(() => Number, { defaultValue: EnumRelationShip.SINGLE })
  relationship: EnumRelationShip;

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  files: string[];

  @IsNotEmpty()
  @Field(() => Number, { defaultValue: 1 })
  gender: number;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  dayOfBirth: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  avatar: string;

  @IsNotEmpty()
  @MaxLength(11)
  @Field()
  phone: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  description: string;

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  friends: string[];

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  friendsReq: string[];

  @IsOptional()
  @Field(() => Date, { defaultValue: new Date() })
  createdAt: Date;

  @IsOptional()
  @Field(() => Date, { defaultValue: new Date() })
  updatedAt: Date;
}
