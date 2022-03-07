import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../user/infra/typeorm/repositories/UserRepository';
import { ImageController } from './infra/http/ImageController';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [
    {
      provide: 'UserRepository',
      inject: [UserRepository],
      useClass: UserRepository,
    },
  ],
  controllers: [ImageController],
})
export class Image {}
