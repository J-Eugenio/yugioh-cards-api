import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from '../user/infra/typeorm/repositories/UserRepository';
import { CardController } from './infra/http/CardController';
import { Card } from './infra/typeorm/entities/Card';
import { CardRepository } from './infra/typeorm/repositories/CardRepository';
import { CreateCardUseCase } from './useCases/createCard/CreateCardUseCase';
import { FindCardUseCase } from './useCases/findAll/FindCardUseCase';
import { FindCardByAtkUseCase } from './useCases/findByAtk/FindCardByAtkUseCase';
import { FindCardByAttributeUseCase } from './useCases/findByAttribute/FindCardByAttributeUseCase';
import { FindCardByDefUseCase } from './useCases/findByDef/FindCardByDefUseCase';
import { FindCardByIdUseCase } from './useCases/findById/FindCardByIdUseCase';
import { FindCardByLevelUseCase } from './useCases/findByLevel/FindCardByLevelUseCase';
import { FindCardByNameUseCase } from './useCases/findByName/FindCardByNameUseCase';
import { FindCardByNamePTUseCase } from './useCases/findByNamePt/FindCardByNamePTUseCase';
import { UpdateCardUseCase } from './useCases/updateCard/UpdateCardUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [
    FindCardUseCase,
    FindCardByIdUseCase,
    FindCardByNameUseCase,
    CreateCardUseCase,
    UpdateCardUseCase,
    FindCardByNamePTUseCase,
    FindCardByLevelUseCase,
    FindCardByDefUseCase,
    FindCardByAttributeUseCase,
    FindCardByAtkUseCase,
    {
      provide: 'CardRepository',
      inject: [CardRepository],
      useClass: CardRepository,
    },
    {
      provide: 'UserRepository',
      inject: [UserRepository],
      useClass: UserRepository,
    },
  ],
  controllers: [CardController],
})
export class CardModule {}
