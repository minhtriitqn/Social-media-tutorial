import { InputType, PartialType, PickType } from '@nestjs/graphql';
import { CreateMessageDto } from './create-message.dto';

@InputType()
export class UpdateMessageDto extends PartialType(
  PickType(CreateMessageDto, ['content', 'updatedAt']),
) {}
