import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType('Topic')
export class TopicDto {
  @Field(() => ID)
  id: string;

  @Field()
  image: string;

  @Field()
  name: string;

  @Field()
  color: string;

  @Field()
  rank: number;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
