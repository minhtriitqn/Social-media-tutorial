import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Injectable()
export class MessageService {
  constructor(
    @InjectRepository(Message) private messageRepository: Repository<Message>,
  ) {}

  async getAllMessage(idRoom: string): Promise<Message[]> {
    try {
      return this.messageRepository.find({ where: { room: idRoom } });
    } catch (error) {
      throw new BadRequestException('Get messages error');
    }
  }

  async createMessage(body: CreateMessageDto): Promise<Message> {
    try {
      return this.messageRepository.save({
        id: uuid(),
        ...body,
      });
    } catch (error) {
      throw new BadRequestException('Creating message error');
    }
  }

  async updateMessage(id: string, body: UpdateMessageDto): Promise<Message> {
    try {
      let message = await this.messageRepository.findOne({ where: { id } });
      if (!message) {
        throw new NotFoundException('Message not found');
      }
      message = { ...message, ...body };
      return this.messageRepository.save(message);
    } catch (error) {
      throw new BadRequestException('Updating message error');
    }
  }

  async deleteMessage(
    id: string,
  ): Promise<{ status: number; message: string }> {
    try {
      const message = await this.messageRepository.findOne({ where: { id } });
      if (!message) {
        throw new NotFoundException('Message not found');
      }
      await this.messageRepository.remove(message);
      return {
        status: HttpStatus.OK,
        message: 'Delete message successfully',
      };
    } catch (error) {
      throw new BadRequestException('Deleting message error');
    }
  }
}
