import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../user/infra/typeorm/repositories/UserRepository';
import { SetsController } from './infra/http/SetsController';
import { Sets } from './infra/typeorm/entities/Set';
import { SetsRepository } from './infra/typeorm/repositories/SetsRepository';
import { CreateSetUseCase } from './useCase/createSet/CreateSetUseCase';
import { FindSetByIdUseCase } from './useCase/findById/FindSetByIdUseCase';
import { FindBySetNameUseCase } from './useCase/findBySetName/FindBySetNameUseCase';
import { FindSetsUseCase } from './useCase/findSets/FindSetsUseCase';
import { UpdateSetUseCase } from './useCase/updateSet/UpdateSetUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([Sets])],
  providers: [
    FindSetsUseCase,
    FindSetByIdUseCase,
    FindBySetNameUseCase,
    CreateSetUseCase,
    UpdateSetUseCase,
    {
      provide: 'SetsRepository',
      inject: [SetsRepository],
      useClass: SetsRepository,
    },
    {
      provide: 'UserRepository',
      inject: [UserRepository],
      useClass: UserRepository,
    },
  ],
  controllers: [SetsController],
})
export class SetModule {}
