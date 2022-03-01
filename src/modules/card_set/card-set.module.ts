import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardsSetsController } from './infra/http/CardsSetsController';
import { CardSets } from './infra/typeorm/entities/CardSets';
import { CardsSetsRepository } from './infra/typeorm/repositories/CardsSetsRepository';
import { FindCardSetsUseCase } from './useCase/findCardSets/FindCardSetsUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([CardSets])],
  providers: [
    FindCardSetsUseCase,
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
