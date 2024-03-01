import { Field, InputType } from '@nestjs/graphql';
import { CreateUserDto } from '../../features/user/dto/create-user.dto';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class SignUpUserDto extends CreateUserDto {}

@InputType()
export class LoginUserDto {
  @IsNotEmpty()
  @Field()
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  @Field()
  password: string;
}
