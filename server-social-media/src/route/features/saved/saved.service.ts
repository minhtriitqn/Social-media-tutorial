/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Saved } from './entities/saved.entity';
import { Repository } from 'typeorm';
import { CreateSavedDto } from './dto/create-saved.dto';
import { PostService } from '../post/post.service';

@Injectable()
export class SavedService {
  constructor(
    @InjectRepository(Saved) private savedRepository: Repository<Saved>,
    private readonly postService: PostService,
  ) {}

  async getSaved(idAuthor: string): Promise<Saved> {
    try {
      const saved = await this.savedRepository.findOne({
        where: { author: idAuthor },
      });
      if (!saved) {
        return this.createSaved({
          author: idAuthor,
          posts: [],
          markets: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
      return saved;
    } catch (err) {
      throw new BadRequestException('Get saved error');
    }
  }

  async createSaved(body: CreateSavedDto): Promise<Saved> {
    return this.savedRepository.save({
      id: uuid(),
      ...body,
    });
  }

  async updatePostSaved(
    id: string,
    post: string,
  ): Promise<{ status: number; message: string }> {
    try {
      const saved = await this.savedRepository.findOne({ where: { id } });
      if (!saved) {
        throw new NotFoundException('Saved not found');
      }
      const isExistPost = saved.posts.findIndex((p) => p === post) > -1;
      if (isExistPost) {
        throw new BadRequestException('Post already exists');
      }
      saved.posts.unshift(post);
      saved.updatedAt = new Date();
      await this.savedRepository.save(saved);
      return {
        status: HttpStatus.OK,
        message: 'Saved post successfully',
      };
    } catch (error) {
      throw new BadRequestException('Saved post error');
    }
  }

  async updateMarketSaved(
    id: string,
    market: string,
  ): Promise<{ status: number; message: string }> {
    try {
      const saved = await this.savedRepository.findOne({ where: { id } });
      if (!saved) {
        throw new NotFoundException('Saved not found');
      }
      const isExistMarket = saved.markets.findIndex((m) => m === market) > -1;
      if (isExistMarket) {
        throw new BadRequestException('Post already exists');
      }
      saved.markets.unshift(market);
      saved.updatedAt = new Date();
      await this.savedRepository.save(saved);
      return {
        status: HttpStatus.OK,
        message: 'Saved market successfully',
      };
    } catch (error) {
      throw new BadRequestException('Saved market error');
    }
  }

  async deletePostSaved(
    id: string,
    idPost: string,
  ): Promise<{ status: number; message: string }> {
    try {
      const saved = await this.savedRepository.findOne({ where: { id } });
      if (!saved) {
        throw new NotFoundException('Saved not found');
      }
      const indexPost = saved.posts.findIndex((p) => p === idPost);
      if (indexPost > -1) {
        saved.posts.splice(indexPost, 1);
      }
      return {
        status: HttpStatus.OK,
        message: 'Unsave post successfully',
      };
    } catch (error) {
      throw new BadRequestException('Unsave post error');
    }
  }

  async deleteMarketSaved(
    id: string,
    idMarket: string,
  ): Promise<{ status: number; message: string }> {
    try {
      const saved = await this.savedRepository.findOne({ where: { id } });
      if (!saved) {
        throw new NotFoundException('Saved not found');
      }
      const indexMarket = saved.markets.findIndex((m) => m === idMarket);
      if (indexMarket > -1) {
        saved.markets.splice(indexMarket, 1);
      }
      return {
        status: HttpStatus.OK,
        message: 'Unsave market successfully',
      };
    } catch (error) {
      throw new BadRequestException('Unsave market error');
    }
  }
}
