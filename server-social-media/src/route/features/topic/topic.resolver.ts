import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { TopicDto } from './dto/topic.dto';
import { TopicService } from './topic.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/route/auth/guard/jwt-auth.guard';
import { RolesGuard } from 'src/route/auth/guard/roles.guard';
import { Roles } from 'src/route/auth/decorators/roles.decorator';
import { EnumRole } from 'src/ts/enum';
import { ResponseDto } from 'src/ts/common';
import { UpdateTopicDto } from './dto/update-topic.dto';

@Resolver(() => TopicDto)
export class TopicResolver {
  constructor(private topicService: TopicService) {}

  @Query(() => [TopicDto], { name: 'topics' })
  async getTopics() {
    return await this.topicService.getTopics();
  }

  @Query(() => TopicDto, { name: 'topic' })
  async getTopicById(@Args('id') id: string) {
    return await this.topicService.getTopicById(id);
  }

  @Query(() => TopicDto, { name: 'topic' })
  async getTopicByName(@Args('name') name: string) {
    return await this.topicService.getTopicByName(name);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(EnumRole.ADMIN)
  @Mutation(() => TopicDto)
  async createTopic(@Args('body') body: CreateTopicDto) {
    return await this.topicService.createTopic(body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(EnumRole.ADMIN)
  @Mutation(() => ResponseDto)
  async updateTopic(
    @Args('id') id: string,
    @Args('body') body: UpdateTopicDto,
  ) {
    return await this.topicService.updateTopic(id, body);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(EnumRole.ADMIN)
  @Mutation(() => ResponseDto)
  async deleteTopic(@Args('id') id: string) {
    return await this.topicService.deleteTopic(id);
  }
}
