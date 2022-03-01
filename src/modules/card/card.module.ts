import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CardController } from './infra/http/CardController';
import { Card } from './infra/typeorm/entities/Card';
import { CardRepository } from './infra/typeorm/repositories/CardRepository';
import { FindCardUseCase } from './useCases/findAll/FindCardUseCase';

@Module({
  imports: [TypeOrmModule.forFeature([Card])],
  providers: [
    FindCardUseCase,
    {
      provide: 'CardRepository',
      inject: [CardRepository],
      useClass: CardRepository,
    },
  ],
  controllers: [CardController],
})
export class CardModule {}
