import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class CreateSavedDto {
  @IsNotEmpty()
  @Field()
  author: string;

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
