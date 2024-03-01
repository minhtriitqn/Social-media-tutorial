import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { MessageService } from './message.service';
import { MessageDto } from './dto/message.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/route/auth/guard/jwt-auth.guard';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { ResponseDto } from 'src/ts/common';
import { UserService } from '../user/user.service';
import { Message } from './entities/message.entity';

@Resolver(() => MessageDto)
export class MessageResolver {
  constructor(
    private readonly messageService: MessageService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Query(() => [MessageDto])
  getAllMessage(@Args('room') room: string) {
    return this.messageService.getAllMessage(room);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => MessageDto)
  createMessage(@Args('body') body: CreateMessageDto) {
    return this.messageService.createMessage(body);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => MessageDto)
  updateMessage(@Args('id') id: string, @Args('body') body: UpdateMessageDto) {
    return this.messageService.updateMessage(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  deleteMessage(@Args('id') id: string) {
    return this.messageService.deleteMessage(id);
  }

  @ResolveField()
  author(@Parent() message: Message) {
    return this.userService.getUserById(message.author);
  }
}
