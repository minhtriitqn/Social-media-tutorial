import { Module } from '@nestjs/common';
import { CollectionService } from './collection.service';
import { CollectionResolver } from './collection.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Collection } from './entities/collection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Collection])],
  providers: [CollectionService, CollectionResolver],
  exports: [CollectionService],
})
export class CollectionModule {}
