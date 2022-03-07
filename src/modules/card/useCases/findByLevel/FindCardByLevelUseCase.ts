import { Inject } from '@nestjs/common';
import { Card } from '../../infra/typeorm/entities/Card';
import { CardRepository } from '../../infra/typeorm/repositories/CardRepository';

export class FindCardByLevelUseCase {
  constructor(
    @Inject('CardRepository')
    private readonly cardRepository: CardRepository,
  ) {}

  public async execute(level: number): Promise<Card[]> {
    return await this.cardRepository.findByLevel(level);
  }
}
