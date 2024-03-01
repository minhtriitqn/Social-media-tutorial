import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { PaginationUserDto, UserDto } from './dto/user.dto';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guard/jwt-auth.guard';
import { UpdateUserDto } from './dto/update-user.dto';
import { RolesGuard } from 'src/route/auth/guard/roles.guard';
import { Roles } from 'src/route/auth/decorators/roles.decorator';
import { EnumRole } from 'src/ts/enum';
import { User } from './entities/user.entity';
import { QueryPagination, ResponseDto } from 'src/ts/common';
import { ResponseUserDto } from './dto/response-user.dto';
import { getUserIdFromJwt } from 'src/helper/getIdUserFromJwt';

@Resolver(() => UserDto)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => PaginationUserDto, { name: 'users' })
  getAllUsers(@Args('query') query: QueryPagination) {
    return this.userService.getUsers(query.page, query.limit);
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => ResponseUserDto)
  getInfoUser(@Context() context) {
    const userId = getUserIdFromJwt(context);
    return this.userService.getUserById(userId);
  }

  @Query(() => ResponseDto, { name: 'user' })
  getUserByName(@Args('username') username: string) {
    return this.userService.getUserByName(username);
  }

  @Mutation(() => ResponseUserDto)
  create(@Args('body') body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  updatFileForUser(
    @Context() context,
    @Args({ name: 'files', type: () => [String] }) files: string[],
  ) {
    const id = getUserIdFromJwt(context);
    return this.userService.updateAllFileForUser(id, files);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  update(@Args('id') id: string, @Args('body') body: UpdateUserDto) {
    return this.userService.updateUser(id, body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(EnumRole.ADMIN)
  @Mutation(() => ResponseDto)
  delete(@Args('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @ResolveField()
  async friends(@Parent() user: User) {
    return this.userService.getManyUsersById(user.friends);
  }

  @ResolveField()
  async friendsReq(@Parent() user: User) {
    return this.userService.getManyUsersById(user.friends);
  }
}
