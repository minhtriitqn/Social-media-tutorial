import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserDto } from '../../user/dto/user.dto';
import { PostDto } from '../../post/dto/post.dto';
import { CollectionDto } from '../../collection/dto/collection.dto';

@ObjectType('Saved')
export class SavedDto {
  @Field(() => ID)
  id: string;

  @Field(() => UserDto)
  author: string;

  @Field(() => [PostDto])
  posts: string[];

  @Field(() => [String])
  markets: string[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
