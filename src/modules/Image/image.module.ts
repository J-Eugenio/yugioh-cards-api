import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ImageController } from './infra/http/ImageController';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [],
  controllers: [ImageController],
})
export class Image {}
