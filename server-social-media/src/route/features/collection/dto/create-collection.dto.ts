import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateCollectionDto {
  @IsNotEmpty()
  @Field()
  saved: string;

  @IsNotEmpty()
  @Field()
  name: string;

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  posts: string[];

  @IsOptional()
  @Field(() => [String], { defaultValue: [] })
  markets: string[];

  @IsOptional()
  @Field(() => Date, { defaultValue: new Date() })
  createdAt: Date;

  @IsOptional()
  @Field(() => Date, { defaultValue: new Date() })
  updatedAt: Date;
}
