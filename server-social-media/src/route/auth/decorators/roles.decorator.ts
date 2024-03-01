import { SetMetadata } from '@nestjs/common';
import { EnumRole } from 'src/ts/enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: EnumRole[]) => SetMetadata(ROLES_KEY, roles);
