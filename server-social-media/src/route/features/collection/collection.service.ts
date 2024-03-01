import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Collection } from './entities/collection.entity';
import { Repository } from 'typeorm';
import { Pagination } from 'src/ts/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Injectable()
export class CollectionService {
  constructor(
    @InjectRepository(Collection)
    private collectionRepository: Repository<Collection>,
  ) {}

  async getAllCollection(): Promise<Collection[]> {
    return this.collectionRepository.find();
  }

  async getCollections(
    idSaved: string,
    page = 1,
    limit = 10,
  ): Promise<Pagination<Collection>> {
    const skip = (page - 1) * limit;

    const [result, count] = await this.collectionRepository.findAndCount({
      where: { saved: idSaved },
      take: limit,
      skip,
    });
    return new Pagination<Collection>(result, count, page);
  }

  async createCollection(body: CreateCollectionDto): Promise<Collection> {
    try {
      const collection = await this.collectionRepository.findOne({
        where: { name: body.name },
      });

      if (collection) {
        throw new BadRequestException('Name collect already exist');
      }

      return this.collectionRepository.save({
        id: uuid(),
        ...body,
      });
    } catch (error) {
      throw new BadRequestException('Create collection error');
    }
  }
  async updatePostCollection(
    id: string,
    idPost: string,
  ): Promise<{ status: number; message: string }> {
    try {
      const collection = await this.collectionRepository.findOne({
        where: { id },
      });
      if (!collection) {
        throw new NotFoundException('Collection not found');
      }
      const isExistPost = collection.posts.findIndex((p) => p === idPost) > -1;
      if (isExistPost) {
        throw new Error('Post already exist');
      }
      collection.posts.unshift(idPost);
      return {
        status: HttpStatus.OK,
        message: 'Save post successfully',
      };
    } catch (error) {
      throw new BadRequestException('Save post error');
    }
  }

  async updateMaketCollection(
    id: string,
    idMarket: string,
  ): Promise<{ status: number; message: string }> {
    try {
      const collection = await this.collectionRepository.findOne({
        where: { id },
      });
      if (!collection) {
        throw new Error('Collection not found');
      }
      const isExistMarket =
        collection.markets.findIndex((m) => m === idMarket) > -1;
      if (isExistMarket) {
        throw new Error('Market already exist');
      }
      collection.markets.unshift(idMarket);
      return {
        status: HttpStatus.OK,
        message: 'Save market successfully',
      };
    } catch (error) {
      throw new BadRequestException('Save market error');
    }
  }

  async deletePostCollection(
    id: string,
    idPost: string,
  ): Promise<{ status: number; message: string }> {
    try {
      const collection = await this.collectionRepository.findOne({
        where: { id },
      });
      if (!collection) {
        throw new NotFoundException('Collection not found');
      }
      const indexPost = collection.posts.findIndex((p) => p === idPost);
      if (indexPost > -1) {
        collection.posts.splice(indexPost, 1);
      }
      return {
        status: HttpStatus.OK,
        message: 'Unsave post successfully',
      };
    } catch (error) {
      throw new BadRequestException('Unsave post error');
    }
  }

  async deleteMarketCollection(
    id: string,
    idMarket: string,
  ): Promise<{ status: number; message: string }> {
    try {
      const collection = await this.collectionRepository.findOne({
        where: { id },
      });
      if (!collection) {
        throw new NotFoundException('Collection not found');
      }
      const indexMarket = collection.markets.findIndex((m) => m === idMarket);
      if (indexMarket > -1) {
        collection.markets.splice(indexMarket, 1);
      }
      return {
        status: HttpStatus.OK,
        message: 'Unsave market successfully',
      };
    } catch (error) {
      throw new BadRequestException('Unsave market error');
    }
  }

  async updateCollection(
    id: string,
    body: UpdateCollectionDto,
  ): Promise<{ status: number; message: string }> {
    try {
      let collection = await this.collectionRepository.findOne({
        where: { id },
      });
      if (!collection) {
        throw new NotFoundException('Collection not found');
      }
      collection = { ...collection, ...body };
      await this.collectionRepository.save(collection);
      return {
        status: HttpStatus.OK,
        message: 'Updated collection successfully',
      };
    } catch (error) {
      throw new BadRequestException('Updating collection error');
    }
  }

  async deleteCollection(
    id: string,
  ): Promise<{ status: number; message: string }> {
    try {
      const collection = await this.collectionRepository.findOne({
        where: { id },
      });
      if (!collection) {
        throw new NotFoundException('Collection not found');
      }
      await this.collectionRepository.remove(collection);
      return {
        status: HttpStatus.OK,
        message: 'Deleted post succesfully',
      };
    } catch (error) {
      throw new BadRequestException('Deleting collection error');
    }
  }
}
