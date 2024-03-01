import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateTopicDto {
  @IsNotEmpty()
  @Field()
  image: string;

  @IsNotEmpty()
  @Field()
  name: string;

  @IsNotEmpty()
  @Field()
  color: string;

  @IsOptional()
  @Field(() => Number, { defaultValue: 0 })
  rank: number;

  @IsOptional()
  @Field(() => Date, { defaultValue: new Date() })
  createdAt: Date;

  @IsOptional()
  @Field(() => Date, { defaultValue: new Date() })
  updatedAt: Date;
}
