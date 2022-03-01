import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypesController } from './infra/http/TypesController';
import { Type } from './infra/typeorm/entities/Type';
import { TypesRepository } from './infra/typeorm/repositories/TypesRepository';
import { FindTypesUseCase } from './useCase/FindTypesUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  providers: [
    FindTypesUseCase,
    {
      provide: 'TypesRepository',
      inject: [TypesRepository],
      useClass: TypesRepository,
    },
  ],
  controllers: [TypesController],
})
export class TypeModule {}
