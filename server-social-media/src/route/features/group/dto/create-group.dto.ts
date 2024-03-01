import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateGroupDto {
  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  avatar: string;

  @IsNotEmpty()
  @Field()
  coverImage: string;

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  allFiles: string[];

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  description: string;

  @IsOptional()
  @Field(() => String, { defaultValue: '' })
  author: string;

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  admins: string[];

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  members: string[];

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  membersReq: string[];

  @IsOptional()
  @Field(() => Boolean, { defaultValue: false })
  isPrivate: boolean;

  @IsOptional()
  @Field(() => Date, { defaultValue: new Date() })
  createdAt: Date;

  @IsOptional()
  @Field(() => Date, { defaultValue: new Date() })
  updatedAt: Date;
}
