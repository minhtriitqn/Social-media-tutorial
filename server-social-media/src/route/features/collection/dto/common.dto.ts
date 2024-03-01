import { Field, ObjectType } from '@nestjs/graphql';
import { CollectionDto } from './collection.dto';

@ObjectType()
export class PaginationCollectionDto {
  @Field(() => [CollectionDto])
  data: CollectionDto[];

  @Field()
  total: number;

  @Field()
  page: number;
}
