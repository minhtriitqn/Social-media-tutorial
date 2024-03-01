import { Args, Resolver, Query, Mutation } from '@nestjs/graphql';
import { CollectionDto } from './dto/collection.dto';
import { CollectionService } from './collection.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/route/auth/guard/jwt-auth.guard';
import { PaginationCollectionDto } from './dto/common.dto';
import { RolesGuard } from 'src/route/auth/guard/roles.guard';
import { Roles } from 'src/route/auth/decorators/roles.decorator';
import { EnumRole } from 'src/ts/enum';
import { ResponseDto } from 'src/ts/common';
import { CreateCollectionDto } from './dto/create-collection.dto';
import { UpdateCollectionDto } from './dto/update-collection.dto';

@Resolver(() => CollectionDto)
export class CollectionResolver {
  constructor(private readonly collectionService: CollectionService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(EnumRole.ADMIN)
  getAllCollection() {
    return this.collectionService.getAllCollection();
  }

  @UseGuards(JwtAuthGuard)
  @Query(() => PaginationCollectionDto)
  getCollections(
    @Args('idSaved') idSaved: string,
    @Args('page') page: number,
    @Args('limit') limit: number,
  ) {
    return this.collectionService.getCollections(idSaved, page, limit);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  createCollection(@Args('body') body: CreateCollectionDto) {
    return this.collectionService.createCollection(body);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  updateCollection(
    @Args('id') id: string,
    @Args('body') body: UpdateCollectionDto,
  ) {
    return this.collectionService.updateCollection(id, body);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  updatePostCollection(@Args('id') id: string, @Args('idPost') idPost: string) {
    return this.collectionService.updatePostCollection(id, idPost);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  updateMarketCollection(
    @Args('id') id: string,
    @Args('idMarket') idMarket: string,
  ) {
    return this.collectionService.updateMaketCollection(id, idMarket);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  deletePostCollection(@Args('id') id: string, @Args('idPost') idPost: string) {
    return this.collectionService.deletePostCollection(id, idPost);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ResponseDto)
  deleteMarketCollection(
    @Args('id') id: string,
    @Args('idMarket') idMarket: string,
  ) {
    return this.collectionService.deleteMarketCollection(id, idMarket);
  }

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles(EnumRole.ADMIN)
  @Mutation(() => ResponseDto)
  deleteCollection(@Args('id') id: string) {
    return this.collectionService.deleteCollection(id);
  }
}
