import { InputType, PartialType } from '@nestjs/graphql';
import { CreateSavedDto } from './create-saved.dto';

@InputType()
export class UpdateSavedDto extends PartialType(CreateSavedDto) {}
