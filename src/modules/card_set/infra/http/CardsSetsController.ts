import { Controller, Get } from '@nestjs/common';
import { FindCardSetsUseCase } from '../../useCase/findCardSets/FindCardSetsUseCase';
import { CardSets } from '../typeorm/entities/CardSets';

@Controller('cardsets')
export class CardsSetsController {
  constructor(private readonly findCardSetsUseCase: FindCardSetsUseCase) {}

  @Get()
  public async findAll(): Promise<CardSets[]> {
    return this.findCardSetsUseCase.execute();
  }
}
