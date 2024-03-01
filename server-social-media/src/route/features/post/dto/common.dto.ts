import { Field, ObjectType } from '@nestjs/graphql';
import { PostDto } from './post.dto';

@ObjectType()
export class PaginationPostDto {
  @Field(() => [PostDto])
  data: PostDto[];

  @Field()
  total: number;

  @Field()
  page: number;
}
