import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response';
import { SignUpUserDto, LoginUserDto } from './dto/auth-mutation.dto';
import { UserDto } from '../features/user/dto/user.dto';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginResponseDto)
  login(@Args('body') body: LoginUserDto) {
    return this.authService.login(body);
  }

  @Mutation(() => UserDto)
  signup(@Args('body') body: SignUpUserDto) {
    return this.authService.signup(body);
  }
}
