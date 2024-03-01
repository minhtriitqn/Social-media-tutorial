import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { v4 as uuid } from 'uuid';
import { Post } from './entities/post.entity';
import { Repository } from 'typeorm';
import { Pagination, ParamsQueryDto } from 'src/ts/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UserService } from '../user/user.service';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
    private readonly userService: UserService,
  ) {}

  async getPosts(
    filter: ParamsQueryDto,
    page = 1,
    limit = 10,
  ): Promise<Pagination<Post>> {
    const query = filter.query ? JSON.parse(filter.query) : {};
    const skip = (page - 1) * limit;

    const [result, count] = await this.postRepository.findAndCount({
      where: query,
      skip,
      take: limit,
    });

    return new Pagination<Post>(result, count, page);
  }

  async getPostByGroup(
    idGroup: string,
    page = 1,
    limit = 10,
  ): Promise<Pagination<Post>> {
    const skip = (page - 1) * limit;
    const filter: Record<string, any> = {};

    filter['isPostToGroup.idGroup'] = idGroup;

    const [result, count] = await this.postRepository.findAndCount({
      where: filter,
      skip,
      take: limit,
    });

    return new Pagination<Post>(result, count, page);
  }

  async getManyPostsById(postIds: string[]): Promise<Post[]> {
    return this.postRepository.find({
      where: {
        id: {
          $in: postIds,
        } as any,
      },
    });
  }

  async getPostById(id: string): Promise<Post> {
    return this.postRepository.findOne({
      where: {
        id,
      },
    });
  }

  async createPost(idUser: string, body: CreatePostDto): Promise<Post> {
    const { idGroup, statusPostToGroup, verified, ...rest } = body;
    try {
      await this.userService.updateAllFileForUser(idUser, body.images);
      return this.postRepository.save({
        id: uuid(),
        isPostToGroup: {
          idGroup,
          status: statusPostToGroup,
          verified: verified,
        },
        author: idUser,
        ...rest,
      });
    } catch (error) {
      throw new BadRequestException(`Error creating post`);
    }
  }

  async updatePost(
    id: string,
    body: UpdatePostDto,
  ): Promise<{ status: number; message: string }> {
    try {
      let post = await this.postRepository.findOne({ where: { id } });

      if (!post) {
        throw new NotFoundException('Post not found');
      }
      post = { ...post, ...body };
      await this.postRepository.save(post);

      return {
        status: HttpStatus.OK,
        message: 'Post updated successfully',
      };
    } catch (error) {
      throw new BadRequestException('Error updating post');
    }
  }

  async ghimPost(idPost: string): Promise<{ status: number; message: string }> {
    try {
      let post = await this.postRepository.findOne({ where: { id: idPost } });
      let postGhimed = await this.postRepository.findOne({
        where: { isGhim: true },
      });

      if (!post) {
        throw new NotFoundException('Post not found');
      }

      if (postGhimed && postGhimed.id !== idPost) {
        postGhimed = { ...postGhimed, isGhim: false, updatedAt: new Date() };
        post = { ...post, isGhim: true, updatedAt: new Date() };
        await this.postRepository.save(post);
        await this.postRepository.save(postGhimed);

        return {
          status: HttpStatus.OK,
          message: 'Post ghimed successfully',
        };
      }

      post = { ...post, isGhim: !post.isGhim, updatedAt: new Date() };
      await this.postRepository.save(post);

      return {
        status: HttpStatus.OK,
        message: 'Post ghimed successfully',
      };
    } catch (error) {
      throw new BadRequestException('Error saved post');
    }
  }

  async sharePost(
    idPost: string,
    idUser: string,
  ): Promise<{ status: number; message: string }> {
    try {
      let post = await this.postRepository.findOne({ where: { id: idPost } });

      if (!post) {
        throw new NotFoundException('Post not found');
      }
      const index = post.authorsPostShared.findIndex(
        (i: string) => i === idUser,
      );
      if (index > -1) {
        return {
          status: HttpStatus.OK,
          message: 'Post saved successfully',
        };
      } else {
        await this.postRepository.save({
          id: uuid(),
          ...post,
          author: idUser,
          authorsPostShared: [],
          createdAt: new Date(),
          updatedAt: new Date(),
        });
        post = {
          ...post,
          authorsPostShared: [...post.authorsPostShared, idUser],
          updatedAt: new Date(),
        };
        await this.postRepository.save(post);
        return {
          status: HttpStatus.OK,
          message: 'Post saved successfully',
        };
      }
    } catch (error) {
      throw new BadRequestException('Error saved post');
    }
  }

  async likePost(
    idPost: string,
    idUser: string,
  ): Promise<{ status: number; message: string }> {
    try {
      let post = await this.postRepository.findOne({ where: { id: idPost } });

      if (!post) {
        throw new NotFoundException('Post not found');
      }
      const index = post.usersLiked.findIndex((i: string) => i === idUser);
      if (index > -1) {
        post.usersLiked.splice(index, 1);
        post = {
          ...post,
          updatedAt: new Date(),
        };
        await this.postRepository.save(post);
        return {
          status: HttpStatus.OK,
          message: 'Post unlike successfully',
        };
      } else {
        post = {
          ...post,
          usersLiked: [...post.usersLiked, idUser],
        };
        await this.postRepository.save(post);
        return {
          status: HttpStatus.OK,
          message: 'Post liked successfully',
        };
      }
    } catch (error) {
      throw new BadRequestException('Error liked post');
    }
  }

  async deletePost(id: string): Promise<{ status: number; message: string }> {
    try {
      const post = await this.postRepository.findOne({ where: { id } });

      if (!post) {
        throw new NotFoundException('Post not found');
      }
      await this.postRepository.remove(post);

      return {
        status: HttpStatus.OK,
        message: 'Post deleted successfully',
      };
    } catch (error) {
      throw new BadRequestException(`Error deleting post`);
    }
  }
}
