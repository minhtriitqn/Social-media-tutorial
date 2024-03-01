import {
  Args,
  Context,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { GroupService } from './group.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/route/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/route/auth/guard/roles.guard';
import { Roles } from 'src/route/auth/decorators/roles.decorator';
import { EnumRole } from 'src/ts/enum';
import { PaginationGroupDto } from './dto/common.dto';
import { ParamsQueryDto, ResponseDto } from 'src/ts/common';
import { GroupDto } from './dto/group.dto';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
import { Group } from './enitites/group.entity';
import { UserService } from '../user/user.service';

@Resolver(() => GroupDto)
export class GroupResolver {
  constructor(
    private readonly groupService: GroupService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(EnumRole.ADMIN)
  @Query(() => PaginationGroupDto)
  getPosts(
    @Args('filter') filter: ParamsQueryDto,
    @Args('page') page: number,
    @Args('limit') limit: number,
  ) {
    return this.groupService.getGroups(filter, page, limit);
  }

  @Query(() => GroupDto)
  getGroupById(@Args('id') id: string) {
    return this.groupService.getGroupById(id);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => GroupDto)
  createGroup(@Args('body') body: CreateGroupDto, @Context() context) {
    const userId = context.req.user.userId.replace('secret-key', '');
    return this.groupService.createGroup({ ...body, author: userId });
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  updateGroup(@Args('id') id: string, @Args('body') body: UpdateGroupDto) {
    return this.groupService.updateGroup(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  deleteGroup(@Args('id') id: string) {
    return this.groupService.deleteGroup(id);
  }

  @ResolveField()
  author(@Parent() group: Group) {
    return this.userService.getUserById(group.id);
  }

  @ResolveField()
  admins(@Parent() group: Group) {
    return this.userService.getManyUsersById(group.admins);
  }

  @ResolveField()
  members(@Parent() group: Group) {
    return this.userService.getManyUsersById(group.members);
  }

  @ResolveField()
  membersReq(@Parent() group: Group) {
    return this.userService.getManyUsersById(group.membersReq);
  }
}
