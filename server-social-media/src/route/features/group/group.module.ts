import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { GroupResolver } from './group.resolver';
import { GroupService } from './group.service';
import { Group } from './enitites/group.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Group]), UserModule],
  providers: [GroupResolver, GroupService],
})
export class GroupModule {}
