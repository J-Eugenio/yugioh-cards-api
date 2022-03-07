import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../user/infra/typeorm/repositories/UserRepository';
import { TypesController } from './infra/http/TypesController';
import { Type } from './infra/typeorm/entities/Type';
import { TypesRepository } from './infra/typeorm/repositories/TypesRepository';
import { CreateTypeUseCase } from './useCase/createType/CreateTypeUseCase';
import { FindTypeByIdUseCase } from './useCase/findById/FindTypeByIdUseCase';
import { FindTypesUseCase } from './useCase/findType/FindTypesUseCase';
import { UpdateTypeUseCase } from './useCase/updateType/UpdateTypeUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([Type])],
  providers: [
    FindTypesUseCase,
    FindTypeByIdUseCase,
    CreateTypeUseCase,
    UpdateTypeUseCase,
    {
      provide: 'TypesRepository',
      inject: [TypesRepository],
      useClass: TypesRepository,
    },
    {
      provide: 'UserRepository',
      inject: [UserRepository],
      useClass: UserRepository,
    },
  ],
  controllers: [TypesController],
})
export class TypeModule {}
