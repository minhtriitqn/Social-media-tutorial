import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { User } from './entities/user.entity';
import { MongoRepository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { EnumRole } from 'src/ts/enum';
import { UpdateUserDto } from './dto/update-user.dto';
import { Pagination } from 'src/ts/common';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: MongoRepository<User>,
  ) {}

  async getUsers(page: number, limit: number): Promise<Pagination<User>> {
    const [result, count] = await this.userRepository.findAndCount({
      take: limit,
      skip: (page - 1) * limit,
    });
    return new Pagination<User>(result, count, page);
  }

  async getUserById(id: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        id,
      },
    });
  }

  async getUserByName(username: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        username,
      },
    });
  }

  async getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({
      where: { email },
    });
  }

  async getUserByPhone(phone: string): Promise<User> {
    return this.userRepository.findOne({
      where: {
        phone,
      },
    });
  }

  async getUsersByRole(role: EnumRole): Promise<User[]> {
    return this.userRepository.find({
      where: { role },
    });
  }

  async getManyUsersById(userIds: string[]): Promise<User[]> {
    return this.userRepository.find({
      where: {
        id: {
          $in: userIds,
        } as any,
      },
    });
  }

  async createUser(body: CreateUserDto): Promise<User> {
    try {
      const conditions = [
        { username: body.username },
        { email: body.email },
        { phone: body.phone },
      ];

      conditions.forEach(async (c) => {
        const user = await this.userRepository.findOne({ where: c });
        if (user) {
          throw new Error(
            'User with the same username, email or phone number already exists',
          );
        }
      });

      return this.userRepository.save({
        id: uuid(),
        ...body,
      });
    } catch (error) {
      throw new BadRequestException(`Error creating user`);
    }
  }

  async updateAllFileForUser(
    id: string,
    files: string[],
  ): Promise<{ status: number; message: string }> {
    try {
      let user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException('User not found');
      }

      user = { ...user, files: [...files, ...user.files] };
      await this.userRepository.save(user);
      return {
        status: HttpStatus.OK,
        message: 'Updated successfully',
      };
    } catch (error) {
      throw new BadRequestException('Updating files for user error');
    }
  }

  async updateUser(
    id: string,
    body: UpdateUserDto,
  ): Promise<{ status: number; message: string }> {
    try {
      let user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException('User not found');
      }
      user = { ...user, ...body };
      await this.userRepository.save(user);

      return {
        status: HttpStatus.OK,
        message: 'User updated successfully',
      };
    } catch (error) {
      throw new BadRequestException(`Error updating user`);
    }
  }

  async deleteUser(id: string): Promise<{ status: number; message: string }> {
    try {
      const user = await this.userRepository.findOne({ where: { id } });

      if (!user) {
        throw new NotFoundException('User not found');
      }
      await this.userRepository.remove(user);

      return {
        status: HttpStatus.OK,
        message: 'User deleted successfully',
      };
    } catch (error) {
      throw new BadRequestException(`Error deleting user`);
    }
  }
}
