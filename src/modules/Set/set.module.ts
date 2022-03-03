import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SetsController } from './infra/http/SetsController';
import { Sets } from './infra/typeorm/entities/Set';
import { SetsRepository } from './infra/typeorm/repositories/SetsRepository';
import { CreateSetUseCase } from './useCase/createSet/CreateSetUseCase';
import { FindSetByIdUseCase } from './useCase/findBySetCode/FindSetByIdUseCase';
import { FindSetsUseCase } from './useCase/findSets/FindSetsUseCase';
import { UpdateSetUseCase } from './useCase/updateSet/UpdateSetUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([Sets])],
  providers: [
    FindSetsUseCase,
    FindSetByIdUseCase,
    CreateSetUseCase,
    UpdateSetUseCase,
    {
      provide: 'SetsRepository',
      inject: [SetsRepository],
      useClass: SetsRepository,
    },
  ],
  controllers: [SetsController],
})
export class SetModule {}
