import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsSetsController } from './infra/http/CardsSetsController';
import { CardSets } from './infra/typeorm/entities/CardSets';
import { CardsSetsRepository } from './infra/typeorm/repositories/CardsSetsRepository';
import { CreateCardSetUseCase } from './useCase/createCardSet/CreateCardSetUseCase';
import { FindBySetCodeUseCase } from './useCase/findBySetCode/FindBySetCodeUseCase';
import { FindCardSetsUseCase } from './useCase/findCardSets/FindCardSetsUseCase';
import { UpdateCardSetUseCase } from './useCase/updateCardSet/UpdateCardSetUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([CardSets])],
  providers: [
    FindCardSetsUseCase,
    CreateCardSetUseCase,
    UpdateCardSetUseCase,
    FindBySetCodeUseCase,
    {
      provide: 'CardsSetsRepository',
      inject: [CardsSetsRepository],
      useClass: CardsSetsRepository,
    },
  ],
  controllers: [
    CardsSetsController
  ],
})
export class CardSet {}
