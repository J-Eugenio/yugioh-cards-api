import { Inject } from '@nestjs/common';
import { Card } from '../../infra/typeorm/entities/Card';
import { CardRepository } from '../../infra/typeorm/repositories/CardRepository';

export class FindCardByAtkUseCase {
  constructor(
    @Inject('CardRepository')
    private readonly cardRepository: CardRepository,
  ) {}

  public async execute(atk: number): Promise<Card[]> {
    return await this.cardRepository.findByAtk(atk);
  }
}
