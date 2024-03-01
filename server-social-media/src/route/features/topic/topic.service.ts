import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Topic } from './entities/topic.entity';
import { Repository } from 'typeorm';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

@Injectable()
export class TopicService {
  constructor(
    @InjectRepository(Topic) private topicRepository: Repository<Topic>,
  ) {}

  async getTopics(): Promise<Topic[]> {
    const topics = await this.topicRepository.find();
    return topics;
  }

  async getTopicById(id: string): Promise<Topic> {
    const topic = await this.topicRepository.findOneBy({ id: id });

    if (!topic) {
      throw new NotFoundException('Topic not found');
    }

    return topic;
  }

  async getTopicByName(name: string): Promise<Topic> {
    const topic = await this.topicRepository.findOneBy({ name });

    if (!topic) {
      throw new NotFoundException('Topic not found');
    }

    return topic;
  }

  async createTopic(body: CreateTopicDto): Promise<Topic> {
    try {
      const topic = await this.topicRepository.findOne({
        where: {
          name: body.name,
        },
      });

      if (topic) {
        throw new Error('Topic with the same name already exists');
      }

      return this.topicRepository.save({ id: uuid(), ...body });
    } catch (error) {
      throw new BadRequestException(`Error creating topic`);
    }
  }

  async updateTopic(
    id: string,
    body: UpdateTopicDto,
  ): Promise<{ status: number; message: string }> {
    try {
      let topic = await this.topicRepository.findOneBy({ id: id });

      if (!topic) {
        throw new NotFoundException('Topic not found');
      }

      topic = { ...topic, ...body };
      await this.topicRepository.save(topic);

      return {
        status: HttpStatus.OK,
        message: 'Topic updated successfully',
      };
    } catch (error) {
      throw new BadRequestException(`Error updating topic`);
    }
  }

  async deleteTopic(id: string): Promise<{ status: number; message: string }> {
    try {
      const topic = await this.topicRepository.findOne({ where: { id } });

      if (!topic) {
        throw new NotFoundException('Topic not found');
      }
      await this.topicRepository.remove(topic);

      return {
        status: HttpStatus.OK,
        message: 'Topic deleted successfully',
      };
    } catch (error) {
      throw new BadRequestException(`Error deleting topic`);
    }
  }
}
