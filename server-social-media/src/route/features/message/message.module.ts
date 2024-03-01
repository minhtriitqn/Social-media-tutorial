import { Module } from '@nestjs/common';
import { MessageService } from './message.service';
import { MessageResolver } from './message.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { UserModule } from '../user/user.module';
import { ChatGateway } from './chat.gateway';
import { AuthModule } from 'src/route/auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([Message]), UserModule, AuthModule],
  providers: [MessageService, MessageResolver, ChatGateway],
})
export class MessageModule {}
