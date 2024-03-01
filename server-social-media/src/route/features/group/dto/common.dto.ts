import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { GroupDto } from './group.dto';

@InputType()
export class ParamsQueryDto {
  @Field({ nullable: true })
  query?: string;
}

@ObjectType()
export class PaginationGroupDto {
  @Field(() => [GroupDto])
  data: GroupDto[];

  @Field()
  total: number;

  @Field()
  page: number;
}
