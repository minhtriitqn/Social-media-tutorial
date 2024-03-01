import { InputType, PartialType } from '@nestjs/graphql';
import { CreateGroupDto } from './create-group.dto';

@InputType()
export class UpdateGroupDto extends PartialType(CreateGroupDto) {}
