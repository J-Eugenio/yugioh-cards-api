import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetsController } from './infra/http/SetsController';
import { Set } from './infra/typeorm/entities/Set';
import { SetsRepository } from './infra/typeorm/repositories/SetsRepository';
import { FindSetsUseCase } from './useCase/findSets/FindSetsUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([Set])],
  providers: [
    FindSetsUseCase,
    {
      provide: 'SetsRepository',
      inject: [SetsRepository],
      useClass: SetsRepository,
    },
  ],
  controllers: [
    SetsController
  ],
})
export class SetModule {}
