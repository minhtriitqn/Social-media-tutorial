import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserDto } from '../../user/dto/user.dto';
import { TopicDto } from '../../topic/dto/topic.dto';

@ObjectType()
export class IsPostToGroupDto {
  @Field(() => Boolean)
  status: boolean;

  @Field(() => Boolean)
  verified: boolean;

  @Field(() => String)
  idGroup: string;
}

@ObjectType('Post')
export class PostDto {
  @Field(() => ID)
  id: string;

  @Field(() => UserDto)
  author: string;

  @Field(() => TopicDto)
  topic: string;

  @Field()
  content: string;

  @Field(() => [String])
  images: string[];

  @Field(() => [String])
  videos: string[];

  @Field()
  isGhim: boolean;

  @Field(() => [UserDto])
  usersLiked: string[];

  @Field(() => [UserDto])
  authorsPostShared: string[];

  @Field(() => IsPostToGroupDto)
  isPostToGroup: IsPostToGroupDto;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
