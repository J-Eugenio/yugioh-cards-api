import { Inject } from '@nestjs/common';
import { Card } from '../../infra/typeorm/entities/Card';
import { CardRepository } from '../../infra/typeorm/repositories/CardRepository';

export class FindCardByAttributeUseCase {
  constructor(
    @Inject('CardRepository')
    private readonly cardRepository: CardRepository,
  ) {}

  public async execute(attribute: string): Promise<Card[]> {
    return await this.cardRepository.findByAttribute(attribute);
  }
}
