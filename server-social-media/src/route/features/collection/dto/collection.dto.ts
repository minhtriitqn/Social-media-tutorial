import { Field, ID, ObjectType } from '@nestjs/graphql';
import { PostDto } from '../../post/dto/post.dto';

@ObjectType()
export class CollectionDto {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  saved: string;

  @Field(() => [PostDto])
  posts: string[];

  @Field(() => [String])
  markets: string[];

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
