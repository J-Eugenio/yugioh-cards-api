import { Inject } from '@nestjs/common';
import { Card } from '../../infra/typeorm/entities/Card';
import { CardRepository } from '../../infra/typeorm/repositories/CardRepository';

export class FindCardByNameUseCase {
  constructor(
    @Inject('CardRepository')
    private readonly cardRepository: CardRepository,
  ) {}

  public async execute(name: string): Promise<Card[]> {
    return await this.cardRepository.findByName(name);
  }
}
