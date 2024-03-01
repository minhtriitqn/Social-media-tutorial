import { JwtService } from '@nestjs/jwt';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { UserService } from '../features/user/user.service';
import { LoginUserDto, SignUpUserDto } from './dto/auth-mutation.dto';
import { LoginResponseDto } from './dto/login-response';
import { User } from 'src/route/features/user/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.getUserByName(username);
    const valid = await bcrypt.compare(password, user?.password);
    if (user && valid) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password, ...result } = user;

      return result;
    }
    return null;
  }

  async handleVerifyToken(token: string) {
    try {
      const payload = this.jwtService.verify(token); // this.configService.get('SECRETKEY')
      return payload['userId'];
    } catch (e) {
      throw new HttpException(
        {
          key: '',
          data: {},
          statusCode: HttpStatus.UNAUTHORIZED,
        },
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async login(body: LoginUserDto): Promise<LoginResponseDto> {
    const user = await this.userService.getUserByName(body.username);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password, ...result } = user;

    return {
      access_token: this.jwtService.sign({
        username: user.username,
        sub: user.id,
        role: user.role,
      }),
      user: result,
      expiresIn: process.env.EXPIRESIN,
    };
  }

  async signup(body: SignUpUserDto): Promise<User> {
    const password = await bcrypt.hash(body.password, 10);
    return this.userService.createUser({ ...body, password });
  }
}
