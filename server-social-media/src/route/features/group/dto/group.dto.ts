import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserDto } from '../../user/dto/user.dto';

@ObjectType('Group')
export class GroupDto {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  avatar: string;

  @Field()
  coverImage: string;

  @Field(() => [String])
  allFiles: string[];

  @Field()
  description: string;

  @Field(() => UserDto)
  author: string;

  @Field(() => [UserDto])
  admins: string[];

  @Field(() => [UserDto])
  members: string[];

  @Field(() => [UserDto])
  membersReq: string[];

  @Field()
  idPrivate: boolean;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
