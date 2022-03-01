import { Controller, Get } from '@nestjs/common';
import { FindCardUseCase } from '../../useCases/findAll/FindCardUseCase';
import { Card } from '../typeorm/entities/Card';

@Controller('card')
export class CardController {
  constructor(private readonly findCardUseCase: FindCardUseCase) {}

  @Get()
  public async findAll(): Promise<Card[]> {
    return this.findCardUseCase.execute();
  }
}
