import { ObjectType, OmitType } from '@nestjs/graphql';
import { UserDto } from './user.dto';

@ObjectType()
export class ResponseUserDto extends OmitType(UserDto, ['password']) {}
