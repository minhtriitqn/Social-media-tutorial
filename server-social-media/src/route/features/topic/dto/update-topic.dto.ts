import { InputType, PartialType } from '@nestjs/graphql';
import { CreateTopicDto } from './create-topic.dto';

@InputType()
export class UpdateTopicDto extends PartialType(CreateTopicDto) {}
