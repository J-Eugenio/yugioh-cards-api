import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardController } from './infra/http/CardController';
import { Card } from './infra/typeorm/entities/Card';
import { CardRepository } from './infra/typeorm/repositories/CardRepository';
import { CreateCardUseCase } from './useCases/createCard/CreateCardUseCase';
import { FindCardUseCase } from './useCases/findAll/FindCardUseCase';
import { FindCardByIdUseCase } from './useCases/findById/FindCardByIdUseCase';
import { FindCardByParamsUseCase } from './useCases/findByParams/FindCardByParamsUseCase';
import { UpdateCardUseCase } from './useCases/updateCard/UpdateCardUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [
    FindCardUseCase,
    FindCardByIdUseCase,
    FindCardByParamsUseCase,
    CreateCardUseCase,
    UpdateCardUseCase,
    {
      provide: 'CardRepository',
      inject: [CardRepository],
      useClass: CardRepository,
    },
  ],
  controllers: [CardController],
})
export class CardModule {}
