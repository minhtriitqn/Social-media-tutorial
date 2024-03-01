import { Field, ID, ObjectType } from '@nestjs/graphql';
import { UserDto } from '../../user/dto/user.dto';
import { EnumTypeMessage } from 'src/ts/enum';

@ObjectType('Message')
export class MessageDto {
  @Field(() => ID)
  id: string;

  @Field()
  room: string;

  @Field(() => UserDto)
  author: string;

  @Field()
  content: string;

  @Field()
  typeMessage: EnumTypeMessage;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
