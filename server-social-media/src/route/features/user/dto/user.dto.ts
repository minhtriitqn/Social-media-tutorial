import { Field, ID, ObjectType } from '@nestjs/graphql';
import { EnumRelationShip, EnumRole } from 'src/ts/enum';

@ObjectType('User')
export class UserDto {
  @Field(() => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  role: EnumRole;

  @Field()
  fullname: string;

  @Field()
  email: string;

  @Field()
  address: string;

  @Field()
  company: string;

  @Field()
  university: string;

  @Field()
  relationship: EnumRelationShip;

  @Field(() => [String])
  files: string[];

  @Field()
  dayOfBirth: string;

  @Field()
  gender: number;

  @Field()
  avatar: string;

  @Field()
  phone: string;

  @Field()
  description: string;

  @Field(() => [UserDto])
  friends: string[];

  @Field(() => [UserDto])
  friendsReq: string[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}

@ObjectType()
export class PaginationUserDto {
  @Field(() => [UserDto])
  data: UserDto[];

  @Field()
  total: number;

  @Field()
  page: number;
}
