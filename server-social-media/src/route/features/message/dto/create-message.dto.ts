import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';
import { EnumTypeMessage } from 'src/ts/enum';

@InputType()
export class CreateMessageDto {
  @IsNotEmpty()
  @Field()
  room: string;

  @IsNotEmpty()
  @Field()
  author: string;

  @IsNotEmpty()
  @Field()
  content: string;

  @IsOptional()
  @Field(() => String, { defaultValue: EnumTypeMessage.STRING })
  typeMessage: EnumTypeMessage;

  @IsOptional()
  @Field(() => Date, { defaultValue: new Date() })
  createdAt: Date;

  @IsOptional()
  @Field(() => Date, { defaultValue: new Date() })
  updatedAt: Date;
}
