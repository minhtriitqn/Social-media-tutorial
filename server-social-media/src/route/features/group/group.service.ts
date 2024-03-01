import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';
import { InjectRepository } from '@nestjs/typeorm';
import { Group } from './enitites/group.entity';
import { Repository } from 'typeorm';
import { Pagination, ParamsQueryDto } from 'src/ts/common';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(Group) private groupRepository: Repository<Group>,
  ) {}

  async getGroups(
    filter: ParamsQueryDto,
    page = 1,
    limit = 10,
  ): Promise<Pagination<Group>> {
    const query = filter.query ? JSON.parse(filter.query) : {};
    const skip = (page - 1) * limit;

    const [result, count] = await this.groupRepository.findAndCount({
      where: query,
      skip,
      take: limit,
    });

    return new Pagination<Group>(result, count, page);
  }

  async getGroupById(id: string): Promise<Group> {
    try {
      const group = await this.groupRepository.findOne({ where: { id } });
      if (!group) {
        throw new NotFoundException('Group not found');
      }
      return group;
    } catch (error) {
      throw new BadRequestException('Error get group');
    }
  }

  async createGroup(body: CreateGroupDto): Promise<Group> {
    try {
      return this.groupRepository.save({
        id: uuid(),
        ...body,
      });
    } catch (error) {
      throw new BadRequestException('Error creating group');
    }
  }

  async updateGroup(
    id: string,
    body: UpdateGroupDto,
  ): Promise<{ status: number; message: string }> {
    try {
      let group = await this.groupRepository.findOne({ where: { id } });

      if (!group) {
        throw new NotFoundException('Group not found');
      }
      group = { ...group, ...body, updatedAt: new Date() };
      await this.groupRepository.save(group);

      return {
        status: HttpStatus.OK,
        message: 'Group updated successfully',
      };
    } catch (error) {
      throw new BadRequestException('Error updating group');
    }
  }

  async deleteGroup(id: string): Promise<{ status: number; message: string }> {
    try {
      const group = await this.groupRepository.findOne({ where: { id } });

      if (!group) {
        throw new NotFoundException('Group not found');
      }
      await this.groupRepository.remove(group);

      return {
        status: HttpStatus.OK,
        message: 'Group deleted successfully',
      };
    } catch (error) {
      throw new BadRequestException(`Error deleting group`);
    }
  }
}
